import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    // <div className="card mb-3" style={"max-width: 540px;"}>
    //   <div className="row g-0">
    //     <div className="col-md-4">
    //       {/* <img src="..." className="img-fluid rounded-start" alt="..."> */}
    //     </div>
    //     <div className="col-md-8">
    //       <div className="card-body">
    //         <h5 className="card-title">{product.name}</h5>
    //         <p className="card-text">{product.description}</p>
    //         <p className="card-text">{product.fromCountry}</p>
    //         <p className="card-text">{product.typeSort}</p>
    //         <p className="card-text">{product.category}</p>
    //         <p className="card-text">{product.tasteSmell}</p>
    //         <p className="card-text">{product.price}</p>
    //         <p className="card-text">{product.bookmark}</p>

    //         {product.rate}
    //         <p className="card-text">{product.completedOrders}</p>

    //         <p className="card-text">
    //           <small className="text-muted">{product.rate}</small>
    //         </p>
    //         <Link to={`/products/${product.id}`}>replace for product</Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
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
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
