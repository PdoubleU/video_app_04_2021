import PropTypes from 'prop-types';
import { REG_EXP } from './constans';
import URL from './api/api';

export const inputFilter = (input) => {
  const youtubeProvider = REG_EXP.youtube_input.test(input);
  const vimeoProvider = REG_EXP.vimeo_input.test(input);
  // check if the input is incorrect in both cases and then return with empty strings:
  if (!vimeoProvider && !youtubeProvider) return ['', ''];

  const youtubeId = youtubeProvider ? input.match(REG_EXP.youtube_id) : null;
  const vimeoId = vimeoProvider ? input.match(REG_EXP.vimeo_id) : null;
  const url = youtubeProvider ? URL.YOU_TUBE_URL : URL.VIMEO_URL;
  const id = youtubeProvider ? youtubeId[0] : vimeoId[0];

  return [url, id];
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
  item.addDate = day + ' ' + months[parseInt(month) + 1] + ' ' + year;
  item.isLiked = false;
  return item;
};

inputFilter.propTypes = {
  input: PropTypes.string.isRequired,
};
personalizeDataObject.propTypes = {
  item: PropTypes.object.isRequired,
};
