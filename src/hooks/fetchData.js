import { useState } from 'react';

function useFetchData() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [apiProvider, setApiProvider] = useState('');

  const fetchData = async (url, options, provider) => {
    setIsLoading(true);
    setApiProvider(provider);
    let response = await fetch(url, { ...options });
    let result = await response.json();
    setData(result);
    setIsLoading(false);
  };

  return [{ data, apiProvider, isLoading, isError, fetchData }];
}

export default useFetchData;
