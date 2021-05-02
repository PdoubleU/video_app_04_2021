export const vimeoFetchReq = (id) => {
  let key = process.env.REACT_APP_VIMEO_API_KEY,
    url = `https://api.vimeo.com/videos/${id}`;
  let options = {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      Authorization: `bearer ${key}`,
    },
  };
  return [url, options];
};

export const youtubeFetchReq = (id) => {
  let key = process.env.REACT_APP_YOUTUBE_API_KEY,
    apiAddress =
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics',
    url = new URL(apiAddress),
    params = {
      id,
      key,
    };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  let options = {};
  return [url, options];
};
