import io from "socket.io-client";

import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import siteContentService from "../services/site-content/site-content";
import { serverUrl } from "../utils/utils";
import productService from "../services/product/product.service";
const socket = io(`${serverUrl}`);

const SocketContext = createContext(socket);
export const ProductContext = createContext({ allProducts: [] });

export const ProductProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);

  const socket = useContext(SocketContext);
  useEffect(() => {
    productService.getAllProducts().then((res) => setAllProducts(res.data));
    socket.on("update", () => {
      productService.getAllProducts().then((res) => setAllProducts(res.data));
    });
    return () => {
      socket.off("update");
    };
  }, []);

  const contextValues = {
    allProducts,
  };
  return (
    <ProductContext.Provider value={contextValues}>
      {children}
    </ProductContext.Provider>
  );
};
