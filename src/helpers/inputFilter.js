import PropTypes from 'prop-types';
import { REG_EXP } from '../constans';
import { vimeoFetchReq } from '../api/vimeoFetchRequest';
import { youtubeFetchReq } from '../api/youtubeFetchRequest';

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

inputFilter.propTypes = {
  input: PropTypes.string.isRequired,
};
