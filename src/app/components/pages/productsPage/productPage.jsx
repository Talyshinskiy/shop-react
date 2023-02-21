import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import { useHistory } from "react-router-dom";
import ProductCard from "./productCard";
import Preloader from "../../preloader/preloader";
import { Link } from "react-router-dom";

const ProductPage = ({ productId }) => {
  const history = useHistory();
  const [product, setProduct] = useState();
  console.log(productId)

  useEffect(() => {
    api.getById(parseInt(productId) ).then((data) => setProduct(data));
  }, [productId]);
  const handleClick = () => {
    history.push(history.location.pathname + `/edit`);
  };

  if (product) {
    return (
      <div>
        <h1>Product Page</h1>
        <Link to={`/product/${product.id}`}>Ссылка</Link>
        <ProductCard product={product} />

        <button onClick={handleClick}> Изменить</button>
      </div>
    );
  } else {
    return (
      <>
        <h1>ProductPage</h1>
        <Preloader />
      </>
    );
  }
};
ProductPage.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default ProductPage;
