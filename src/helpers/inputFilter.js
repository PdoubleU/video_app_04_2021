import PropTypes from 'prop-types';
import { REG_EXP } from '../constans';
import { vimeoFetchReq } from '../api/vimeoFetchRequest';
import { youtubeFetchReq } from '../api/youtubeFetchRequest';

// method checks input (main feature is to add new movie via url/id on the main page)
// decide which kind of request should be prepared and execute one of two helpers accordingly (vimeoFetchReq and youtubeFetchReq)
// returns ready to use url, options, id and provider for further use in other parts of app
// this method is closely connected with MoviesProvider's method getMovieData as well as two functions from api folder:
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
