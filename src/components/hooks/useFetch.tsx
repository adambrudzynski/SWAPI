import {useState, useEffect} from 'react';

export function useFetch(url: string | string[]) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url || url.length === 0) {
      setLoading(false)
      return;
    }
    if (typeof url === 'string') {
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(true);
          setLoading(false);
        });
    }

    if (typeof url === 'object') {
      const requests = url.map((url) => {
        return fetch(url)
          .then((data) => data.json())
          .then((data) => data);
      });

      Promise.all(requests)
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(true);
          setLoading(false);
        });
    }
  }, [url]);

  return [loading, error, data];
}
