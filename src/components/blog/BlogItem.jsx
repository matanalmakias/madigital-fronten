import React, { useContext, useState } from "react";
import Social from "./Social";
import Footer from "./Footer";
import { Form } from "react-bootstrap";
import Comments from "./Comments";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import AdminConfirm from "./AdminConfirm";

const BlogItem = ({ item, details, sign }) => {
  const [showItem, setShowItem] = useState(
    sign === `pendingList` ? true : false
  );
  const [showContent, setShowContent] = useState(
    details || sign === `pendingList` ? true : false
  );

  const { isManager, isModerator } = useContext(AuthContext);
  const htmlString = item.content;
  const nav = useNavigate();
  return (
    <>
      {sign === `pendingList` && (
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
            <p className="heading1 ">{item.title}</p>
            {!details ||
              (sign !== `pendingList` && (
                <button
                  onClick={() => nav(`/blog/${item?._id}`)}
                  className="btn5 w-100 p-1 "
                >
                  Details
                </button>
              ))}
            <p className="p4 fs2 p-3">{item.desc}</p>

            <button onClick={() => setShowContent((s) => !s)} className="btn8">
              {showContent ? "Show less" : " Read more"}
            </button>
          </div>
          {showContent && (
            <>
              <div className="col">
                <p
                  dangerouslySetInnerHTML={{ __html: item.content }}
                  className="p4 p-3"
                ></p>
                <Comments item={item} />

                <Social item={item} />
              </div>

              <Footer item={item} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogItem;
