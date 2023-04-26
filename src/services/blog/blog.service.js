import axios from "axios";
import { headers, serverUrl } from "../../utils/utils";

const addPost = async (body) => {
  return await axios.post(`${serverUrl}/api/blog/addPost`, body, headers);
};
const addLike = async (postId) => {
  return await axios.put(
    `${serverUrl}/api/blog/addLike/${postId}`,
    {},
    headers
  );
};
const blogService = {
  addPost,
  addLike,
};
export default blogService;
