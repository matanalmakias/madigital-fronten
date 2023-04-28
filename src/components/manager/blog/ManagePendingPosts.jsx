import React, { useContext } from "react";
import { BlogContext } from "../../../context/BlogContext";
import BlogItem from "../../blog/BlogItem";

const ManagePendingPosts = () => {
  const { pendingPosts } = useContext(BlogContext);

  return (
    <div>
      <PendingList pendingPosts={pendingPosts} />
    </div>
  );
};
const PendingList = ({ pendingPosts }) => {
  return (
    <>
      {pendingPosts?.map((item) => (
        <BlogItem sign={`pendingList`} item={item} />
      ))}
    </>
  );
};

export default ManagePendingPosts;
