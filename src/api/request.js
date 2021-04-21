function getMovie(e, id) {
  //e ? e.preventDefault() : null;
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`
  )
    .then((response) => {
      response.json().then((data) => {
        console.log('data fetched');
        return data;
      });
    })
    .catch((err) => {
      console.log(`fetch error:`, err);
    });
}

export default getMovie;
