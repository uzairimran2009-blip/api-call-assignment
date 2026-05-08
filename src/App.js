import { useEffect, useState } from 'react';
import axios from "axios";
import "./App.css"
import Card from './components/card';

function App() {

  const [products, setProducts] = useState([]);

  const getData = async() => {
    try {
      const apiData = await axios.get("https://dummyjson.com/products");
      setProducts(apiData.data.products)
    } catch (err) {
      console.log("Error", err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
          <Card products={products} />
  );
}

export default App;