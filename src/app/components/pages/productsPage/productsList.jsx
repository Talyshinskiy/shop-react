import React, { useState, useEffect } from "react";
import api from "../../../api";
import Preloader from "../../preloader/preloader";
import ProductCard from "./productCard";
import "./productPage.css";

const ProductsList = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    api.fetchAll().then((data) => setProducts(data));
  }, []);
  console.log(products)

  if (products) {
    return (
      <div className="row">
        <h1>product</h1>
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
      <h1>ProductsList</h1>
      <Preloader />
    </div>
  );
};

export default ProductsList;
