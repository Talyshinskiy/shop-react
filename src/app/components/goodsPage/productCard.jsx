import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card mb-4 shadow-sm">
      {/* <img
        src={product.image}
        alt={product.name}
        className="card-img-top"
        style={{ height: "225px", objectFit: "cover" }}
      /> */}
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">From: {product.fromCountry}</p>
        <p className="card-text">Type: {product.typeSort}</p>
        <p className="card-text">Category: {product.category}</p>
        <p className="card-text">THC: {product.THC}%</p>
        <p className="card-text">Taste/Smell: {product.tasteSmell}</p>
        <p className="card-text">Price: ${product.price}</p>
        <p className="card-text">Completed Orders: {product.completedOrders}</p>
        <p className="card-text">Rating: {product.rate}/5</p>
        <p className="card-text">Bookmarked: {product.bookmark ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};

export default ProductCard;
