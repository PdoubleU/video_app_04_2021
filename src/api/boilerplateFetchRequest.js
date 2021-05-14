export const boilerplateFetchReq = (movieID) => {
  /*api key proccessed from env variables */
  let key = process.env.REACT_APP_VIMEO_API_KEY,
    /*url to api with proper query */
    url = `https://api.vimeo.com/videos/${movieID}`;
  /* set additional options (only if needed) */
  let options = {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      Authorization: `bearer ${key}`,
    },
  };
  return [url, options];
};
