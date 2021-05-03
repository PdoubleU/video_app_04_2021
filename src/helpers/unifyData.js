import PropTypes from 'prop-types';
import { REG_EXP } from '../constans';
import { personalizeDataObject } from './personalizeDataObject';

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
    obj.iframe = `https://player.vimeo.com/video/${obj.id}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=213205`;
    return personalizeDataObject(obj);
  }
  obj.id = data.items[0].id;
  obj.snippet.title = data.items[0].snippet.title;
  obj.statistics.viewCount = data.items[0].statistics.viewCount;
  obj.statistics.likeCount = data.items[0].statistics.likeCount;
  obj.snippet.thumbnails = data.items[0].snippet.thumbnails;
  obj.iframe = `https://www.youtube.com/embed/${obj.id}`;
  return personalizeDataObject(obj);
};

unifyData.propTypes = {
  data: PropTypes.object.isRequired,
  provider: PropTypes.string.isRequired,
};
