import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const getData =async () => {
        const products =await fetch("https://fakestoreapi.com/products");
        const data =await products.json();
        setProducts(data)
    }
    getData();
  
  },[]);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`} style={{color: "grey", }}>{product.title}</Link>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;