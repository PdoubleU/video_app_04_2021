import { useState } from 'react';

function useFetchData() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [apiProvider, setApiProvider] = useState('');

  const fetchData = (url, options, provider) => {
    setIsLoading(true);
    setApiProvider(provider);
    fetch(url, { ...options })
      .then((response) => {
        response.json().then((data) => {
          setData(data);
          setIsLoading(false);
        });
      })
      .catch((err) => {
        console.log(`fetch error:`, err);
        setIsError(true);
        setIsLoading(false);
      });
  };

  return [{ data, apiProvider, isLoading, isError, fetchData }];
}

export default useFetchData;
