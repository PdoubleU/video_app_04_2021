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
