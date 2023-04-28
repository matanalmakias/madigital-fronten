import axios from "axios";
import { headers, serverUrl } from "../../utils/utils";

const userAddPost = async (body) => {
  return await axios.post(`${serverUrl}/api/blog/userAddPost`, body, headers);
};
const addPost = async (body) => {
  return await axios.post(`${serverUrl}/api/blog/addPost`, body, headers);
};
const adminConfirm = async (postId, sign) => {
  return await axios.put(
    `${serverUrl}/api/blog/adminConfirm/${postId}/${sign}`,
    {},
    headers
  );
};

const getAllBlogs = async () => {
  return await axios.get(`${serverUrl}/api/blog/`);
};
const addLike = async (postId) => {
  return await axios.put(
    `${serverUrl}/api/blog/addLike/${postId}`,
    {},
    headers
  );
};
const removeLike = async (postId) => {
  return await axios.delete(
    `${serverUrl}/api/blog/removeLike/${postId}`,

    headers
  );
};

const getPendingPosts = async () => {
  return axios.get(`${serverUrl}/api/blog/getPendingPosts`, headers);
};
const blogService = {
  getAllBlogs,
  addPost,
  addLike,
  userAddPost,
  removeLike,
  adminConfirm,
  getPendingPosts,
};
export default blogService;
