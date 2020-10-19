import React, {useState, useEffect} from 'react';
import {apiResponse} from '../common/types'

export default function useFetchAll(endpoint: string) {
  const [data, setData] = useState<object[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetcher(endpoint);
  }, [endpoint]);

  let results: object[] = [];
  const fetcher = (url: string) => {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (json: apiResponse) {
        results.push(...json.results);
        setData(results);
        if (json.next) {
          fetcher(json.next);
        }
        if (!json.next) {
          setData(results);
          setLoading(false);
        }
      })
      .catch(function (err) {
        setError(true);
      });
  };
  return [loading, error, data] as const;
}
