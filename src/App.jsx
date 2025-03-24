import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setData(data));
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <h1>{data && data[0].description}</h1>;
}

export default App;
