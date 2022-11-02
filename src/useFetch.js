import { useEffect, useState } from "react";

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
     const abortConst = new AbortController()
    setTimeout(() => {
      fetch(url, {signal:  abortConst.signal})
        .then((res) => {
          if (!res.ok) {
            throw Error("End point cannot be accessed!");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setPending(false);
        });
    }, 500);
    return () => abortConst.abort()
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
