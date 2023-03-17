const useFetch = (method, url, body) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const resp = await axios({
          method: method,
          url: url,
          data: body
        });
        const data = await resp?.data;

        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method, body]);

  return { isLoading, apiData, serverError };
};

const { isLoading, serverError, apiData } = useFetch(
    "GET",
    "https://jsonplaceholder.typicode.com/posts/1",
    {}
  );
