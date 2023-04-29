import React, { useContext, useState } from "react";
import Social from "./Social";
import Footer from "./Footer";
import { Form } from "react-bootstrap";
import Comments from "./Comments";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import AdminConfirm from "./AdminConfirm";
import EditField from "../manager/blog/EditField";

const BlogItem = ({ item, details, sign }) => {
  const [showEditTitle, setShowEditTitle] = useState(false);
  const [showEditDescription, setShowEditDescription] = useState(false);
  const [showEditContent, setShowEditContent] = useState(false);
  const [showItem, setShowItem] = useState(
    sign === `pendingList` || `publish` ? true : false
  );
  const [showContent, setShowContent] = useState(
    details || sign === `pendingList` ? true : false
  );

  const { isManager, isModerator } = useContext(AuthContext);
  const htmlString = item.content;
  const nav = useNavigate();
  return (
    <>
      {(sign === `pendingList` || `publish`) && (
        <button onClick={() => setShowItem((s) => !s)} className="btn4 w-100">
          {item.title}
        </button>
      )}
      <div>
        <div className={showItem ? "hide_class" : "background3 p-1"}>
          <div className="background4 d-flex flex-column gap-1 p-2 mb-1 justify-content-center text-center">
            {(isModerator || isManager) && sign === `pendingList` && (
              <AdminConfirm item={item} />
            )}
            {(isManager || isModerator) && (
              <p className="p2">Click on some field to edit</p>
            )}
            <div onClick={() => setShowEditTitle((s) => !s)}>
              <label htmlFor="Title" className=" w-100 label4">
                Title
              </label>
              <p className="heading1 ">{item.title}</p>
            </div>
            {showEditTitle && <EditField sign={`title`} item={item} />}
            {!details ||
              (sign !== `pendingList` && (
                <button
                  onClick={() => nav(`/blog/${item?._id}`)}
                  className="btn5 w-100 p-1 "
                >
                  Details
                </button>
              ))}
            <div onClick={() => setShowEditDescription((s) => !s)}>
              <label htmlFor="Description" className=" w-100 label4">
                Description
              </label>
              <p className="p4 fs2 p-3">{item.desc}</p>
            </div>
            {showEditDescription && <EditField sign={`desc`} item={item} />}

            <button onClick={() => setShowContent((s) => !s)} className="btn8">
              {showContent ? "Show less" : " Read more"}
            </button>
          </div>
          {showContent && (
            <>
              <div className="col p-3">
                <div onClick={() => setShowEditContent((s) => !s)}>
                  <label htmlFor="Content" className="text-center w-100 label4">
                    Content
                  </label>

                  <p
                    dangerouslySetInnerHTML={{ __html: item.content }}
                    className="p4 p-3"
                  ></p>
                </div>
                {showEditContent && <EditField sign={`content`} item={item} />}

                <Comments item={item} />

                <Social item={item} />
              </div>
              <div className="p-2">
                <Footer item={item} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogItem;
