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

//App.js



import ReactDOM from "react-dom";
import useFetch from "./useFetch";

const App = () => {
    const { isLoading, serverError, apiData } = useFetch(
        "GET",
        "https://jsonplaceholder.typicode.com/posts/1",
        {}
    );
    return (
        <div>
            <h2>API data</h2>
            {isLoading && <span>Loading.....</span>}
            {!isLoading && serverError ? (
                <span>Error in fetching data ...</span>
            ) : (
                <span>{JSON.stringify(apiData)}</span>
            )}
        </div>
    );
};

const rootElement = document.getElementById("root");

ReactDOM.render(
    <App />,
    rootElement
);