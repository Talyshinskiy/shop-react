import React from "react";
import { useParams } from "react-router-dom";
import ProductPage from "./productPage";
import ProductList from "./productsList";
import EditProductPage from "./editProductPage";

const Products = () => {
  const params = useParams();
    const { productId } = params;
    const { edit } = params;
    // console.log("edit", edit);

    return (
        <>
            {productId ? (
                edit ? (
                    <EditProductPage />
                ) : (
                    <ProductPage productId={productId} />
                )
            ) : (
                <ProductList />
            )}
        </>
    );
};
export default Products;
