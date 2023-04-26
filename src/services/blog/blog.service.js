import { headers, serverUrl } from "../../utils/utils";

const addPost = async (body) => {
  return await axios.post(`${serverUrl}/api/blog/addPost`, body, headers);
};
const blogService = {
  addPost,
};
export default blogService;
