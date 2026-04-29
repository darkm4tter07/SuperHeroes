import { useState, useEffect } from "react";
import axios from "axios";

function useCharacter(url, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();
    setLoading(true);
    setError(null);

    axios
      .get(url, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results || res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(err);
        setLoading(false);
      });

    return () => controller.abort();
  }, [url, ...deps]);

  return { data, loading, error };
}

export default useCharacter;


// const [query, setQuery] = useState("");

// const debouncedQuery = useDebounce(query, 300);

// const { data, loading, error } = useCharacter(
//   `https://api.superheroapi.com/search/${debouncedQuery}`,
//   [debouncedQuery]
// );
