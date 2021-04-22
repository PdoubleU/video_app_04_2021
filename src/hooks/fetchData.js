import { useState, useEffect } from 'react';

function useFetchData() {
  const [data, setData] = useState({ movie: [] });
  const [url, setUrl] = useState();
  const [id, setId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [key, setKey] = useState(null);

  useEffect(() => {
    console.log('set id');
    setKey(process.env.REACT_APP_YOUTUBE_API_KEY);
  }, [id]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${key}`
    )
      .then((response) => {
        response.json().then((data) => {
          console.log(`fetch success`);
          setData(data);
        });
      })
      .catch((err) => {
        console.log(`fetch error:`, err);
        setIsError(true);
      });
    setIsLoading(false);
  }, [id]);

  return [{ data, isLoading, isError }, setId];
}

export default useFetchData;
