import PropTypes from 'prop-types';
import { REG_EXP } from './constans';
import { vimeoFetchReq, youtubeFetchReq } from './api/api';

export const inputFilter = (input) => {
  let youtubeProvider = false,
    vimeoProvider = false,
    id = '',
    provider = '',
    [url, options] = ['', {}];

  youtubeProvider = REG_EXP.youtube_input.test(input);
  vimeoProvider = REG_EXP.vimeo_input.test(input);
  // check if the input is incorrect in both cases and then return with empty strings:
  if (!vimeoProvider && !youtubeProvider) return [null, null, null];
  if (youtubeProvider) {
    id = input.match(REG_EXP.youtube_id);
    provider = 'youtube';
    [url, options] = youtubeFetchReq(id);
  }
  if (vimeoProvider) {
    id = input.match(REG_EXP.vimeo_id);
    provider = 'vimeo';
    [url, options] = vimeoFetchReq(id);
  }
  return [url, options, id, provider];
};

export const personalizeDataObject = (item) => {
  if (!item) return;
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let [month, day, year] = new Date().toLocaleDateString('en-US').split('/');
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  day = getRandomInt(1, 30);
  month = getRandomInt(0, 11);
  item.addDate = day + ' ' + months[parseInt(month) + 1] + ' ' + year;
  item.isLiked = false;
  return item;
};

export const unifyData = (data, provider) => {
  if (!data) return;
  let obj = {
    id: '',
    snippet: { title: '', thumbnails: { high: { url: '' } } },
    statistics: { viewCount: '0', likeCount: '0' },
  };
  if (provider === 'vimeo') {
    obj.id = data.uri.match(REG_EXP.vimeo_id)[0];
    obj.snippet.title = data.name;
    obj.statistics.viewCount = data.metadata.connections.likes.total;
    obj.statistics.likeCount = data.metadata.connections.likes.total;
    obj.snippet.thumbnails.high.url = data.pictures.sizes[1].link;
    return personalizeDataObject(obj);
  }
  obj.id = data.items[0].id;
  obj.snippet.title = data.items[0].snippet.title;
  obj.statistics.viewCount = data.items[0].statistics.viewCount;
  obj.statistics.likeCount = data.items[0].statistics.likeCount;
  obj.snippet.thumbnails = data.items[0].snippet.thumbnails;
  return personalizeDataObject(obj);
};

inputFilter.propTypes = {
  input: PropTypes.string.isRequired,
};
personalizeDataObject.propTypes = {
  item: PropTypes.object.isRequired,
};
