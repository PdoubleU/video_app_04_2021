import { useState } from 'react';

function useFetchData() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [apiProvider, setApiProvider] = useState('');

  const resetErrorAlert = () => {
    setIsError(false);
  };

  const fetchData = async (url, options, provider) => {
    setIsLoading(true);
    setApiProvider(provider);
    let response, result;
    try {
      response = await fetch(url, { ...options });
      result = await response.json();
    } catch (err) {
      setIsError(true);
      console.log(err);
    }
    setData(result);
    setIsLoading(false);
  };

  return [
    { data, apiProvider, isLoading, isError, resetErrorAlert, fetchData },
  ];
}

export default useFetchData;
