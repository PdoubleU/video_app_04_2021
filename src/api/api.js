export const vimeoFetchReq = (id) => {
  let url = `https://api.vimeo.com/videos/${id}`;
  let options = {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      Authorization: `bearer c6ca95052e66b9ed4a87119e72d793dc`,
    },
  };
  return [url, options];
};

export const youtubeFetchReq = (id) => {
  let key = process.env.REACT_APP_YOUTUBE_API_KEY,
    apiAddress =
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics';
  let url = new URL(apiAddress),
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
