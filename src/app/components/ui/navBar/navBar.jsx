import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/">
          Main
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/productPage">
          Product
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/login">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/shoppingCart">
          Shopping Cart
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/catalogPage">
          Catalog
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/addProductPage">
          Add product
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/editProductPage">
          Edit product
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
