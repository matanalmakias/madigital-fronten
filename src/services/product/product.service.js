import { serverUrl, headers } from "./../../utils/utils";
import axios from "axios";
const getAllProducts = async () => {
  return await axios.get(`${serverUrl}/api/product`);
};
const interestInProduct = async (productId) => {
  return await axios.post(
    `${serverUrl}/api/product/interestInProduct/${productId}`,
    {},
    headers
  );
};
const createProduct = async (body) => {
  return await axios.post(
    `${serverUrl}/api/product/createProduct`,
    body,
    headers
  );
};
const deleteProduct = async (productId) => {
  return await axios.delete(
    `${serverUrl}/api/product/deleteProduct/${productId}`,
    headers
  );
};
const editField = async (body, productId, sign) => {
  return axios.put(
    `${serverUrl}/api/product/editField/${productId}/${sign}`,
    body,
    headers
  );
};
const removeFromPending = async (productId) => {
  return axios.delete(
    `${serverUrl}/api/product/removeFromPending/${productId}`,
    headers
  );
};
const productService = {
  createProduct,
  interestInProduct,
  getAllProducts,
  deleteProduct,
  editField,
  removeFromPending,
};
export default productService;
