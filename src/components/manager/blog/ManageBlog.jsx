import { useState } from "react";
import AddPost from "./AddPost";
const ManageBlog = () => {
  const [showManageBlog, setShowManageBlog] = useState(false);
  const [showAddPost, setShowAddPost] = useState(false);
  return (
    <div className="mt-1">
      <button onClick={() => setShowManageBlog((s) => !s)} className="btn4">
        Manage blog
      </button>
      {showManageBlog && (
        <div className="d-flex flex-column m-2">
          <button onClick={() => setShowAddPost((s) => !s)} className="btn3">
            Add post
          </button>
          {showAddPost && <AddPost />}
        </div>
      )}
    </div>
  );
};

export default ManageBlog;
