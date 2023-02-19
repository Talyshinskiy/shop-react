import React from "react";

const GoodCard = ({ good }) => {
  return (
    <div className="card mb-4 shadow-sm">
      {/* <img
        // src={goods.image}
        alt={goods.name}
        className="card-img-top"
        style={{ height: "225px", objectFit: "cover" }}
      /> */}
      <div className="card-body">
        <h5 className="card-title">{good.name}</h5>
        <p className="card-text">{good.description}</p>
        <p className="card-text">From: {good.fromCountry}</p>
        <p className="card-text">Type: {good.typeSort}</p>
        <p className="card-text">Category: {good.category}</p>
        <p className="card-text">THC: {good.THC}%</p>
        <p className="card-text">Taste/Smell: {good.tasteSmell}</p>
        <p className="card-text">Price: ${good.price}</p>
        <p className="card-text">Completed Orders: {good.completedOrders}</p>
        <p className="card-text">Rating: {good.rate}/5</p>
        <p className="card-text">Bookmarked: {good.bookmark ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};

export default GoodCard;
