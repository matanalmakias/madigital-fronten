import React, { useState } from "react";
import { productList } from "./../../utils/content";
import { Container } from "react-bootstrap";
import ReactLoading from "react-loading";
import { useEffect } from "react";
import ProductItem from "./ProductItem";
import { useContext } from "react";
import { ProductContext } from "./../../context/ProductContext";
const ProductList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { allProducts } = useContext(ProductContext);
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      
    >
      {isLoading ? (
        <ReactLoading
          type={"spin"}
          color={"#ffffff"}
          height={"10%"}
          width={"10%"}
        />
      ) : (
        <div className="row w-100 gap-2 background3 align-items-center justify-content-center">
          {allProducts?.map((item) => (
            <ProductItem
              key={item._id}
              item={item} isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
