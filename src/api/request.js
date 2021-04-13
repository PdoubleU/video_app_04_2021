function getMovie(e, id) {
  e.preventDefault();
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`
  )
    .then((response) => {
      console.log(response);
      console.log('response');
    })
    .catch((err) => {
      console.log(err);
    });
}

export default getMovie;
