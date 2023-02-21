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
        <Link className="nav-link " aria-current="page" to="/products">
          Catalog (products)
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
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/contacts">
          Contacts
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/about">
          About
        </Link>
      </li>
      
    </ul>
  );
};

export default NavBar;
