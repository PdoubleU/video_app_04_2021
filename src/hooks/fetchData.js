import { useState, useEffect } from 'react';

function useFetchData() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [key, setKey] = useState(null);

  useEffect(() => {
    setKey(process.env.REACT_APP_YOUTUBE_API_KEY);
  }, []);

  const fetchData = (id, api) => {
    setIsLoading(true);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${key}`
    )
      .then((response) => {
        response.json().then((data) => {
          setData(data.items[0]);
          setIsLoading(false);
        });
      })
      .catch((err) => {
        console.log(`fetch error:`, err);
        setIsError(true);
        setIsLoading(false);
      });
  };

  return [{ data, isLoading, isError, fetchData }];
}

export default useFetchData;
