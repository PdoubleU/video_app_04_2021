// creates url request and adding credentials and options
// if you need to use this function for another api's please use boilerplateFetchRequest
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
