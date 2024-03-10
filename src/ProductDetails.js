import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./App.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const options = {
        method: "GET",
    }
    const getOne =async () =>{
        const response= await fetch(`https://fakestoreapi.com/products/${id}`, options);
        const data = await response.json();
        setProduct(data);
    }
    getOne();
   
  }, [id]);

  if (!product) return <div class="product">Loading...</div>;

  return (
    <div class="product">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetails;