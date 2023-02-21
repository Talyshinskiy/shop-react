import React from "react";
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
  return (
    <div className="card">
      {/* <img src={product.image} className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{product.fromCountry} </li>
        <li className="list-group-item">{product.typeSort}</li>
        <li className="list-group-item">{product.category}</li>
        <li className="list-group-item">{product.tasteSmell}</li>
        <li className="list-group-item">{product.price}</li>
        <li className="list-group-item">{product.completedOrders}</li>
        <li className="list-group-item">{product.rate}</li>
        <li className="list-group-item">{product.bookmark}</li>
      </ul>
      <div className="card-body">
      <Link to={`/products/${product.id}`}>replace for product</Link>

        {/* <a href="/" className="card-link">
          Ссылка карточки
        </a>
        <a href="/" className="card-link">
          Другая ссылка
        </a> */}
      </div>
    </div>
  );
};

export default ProductCard;
