import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import blogService from "../../services/blog/blog.service";
const Social = ({ item }) => {
  const addLike = () => {
    blogService.addLike(item._id);
  };
  return (
    <div className="row gap-1 background5 m-1 p-4 justify-content-center text-center">
      <p className="col ">Likes:</p>
      <p onClick={() => addLike()} className="col p1">
        <AiOutlineHeart /> {item?.likes}
      </p>
      <p className="col"> Shares:</p>
      <p className="col p1">
        <RiShareForwardLine /> {item?.shares}
      </p>
    </div>
  );
};
export default Social;
