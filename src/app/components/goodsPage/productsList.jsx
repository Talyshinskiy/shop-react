import React, { useState, useEffect } from "react";
import api from "../../api/products.api/products";
import Preloader from "../preloader/preloader";
import ProductCard from "./productCard";

const ProductsList = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("useEffect11")
    setTimeout(() => {
      setLoading(true);
      setProducts(api);
      setLoading(false);
    }, 2000);
    console.log("useEffect22")

  }, []);
  // console.log("goods", goods);

  if (loading) return <Preloader />;

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
