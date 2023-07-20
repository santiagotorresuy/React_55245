import { useState, useEffect } from 'react';

const useFetch = (url, categoryId, retry) => {
  const [list, setList] = useState([]);
  const [pagination, setPagination] = useState({ next: null, previous: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let urlFilter;

    if (categoryId) {
      urlFilter = `https://pokeapi.co/api/v2/item-category/${categoryId}/`;
    } else {
      urlFilter = url;
    }

    setLoading(true);
    setError(null);

    fetch(urlFilter)
      .then((response) => response.json())
      .then((data) => {
        setList(data.items || data.results);
        setPagination({
          next: data.next,
          previous: data.previous,
        });
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, categoryId, retry]);

  return { list, pagination, loading, error };
};

export default useFetch;