import React, { useState } from "react";
import Social from "./Social";
import Footer from "./Footer";

const BlogItem = ({ item }) => {
  const [showContent, setShowContent] = useState(false);
  const htmlString = item.content;

  return (
    <div className="background3 p-1">
      <div className="background4  p-2 mb-1 justify-content-center text-center">
        <div className="col">
          <p className="heading1 ">{item.title}</p>
        </div>
        <div className="col">
          <p className="p4 fs2 p-3">{item.description}</p>
        </div>
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

            <Social item={item} />
          </div>

          <Footer item={item} />
        </>
      )}
    </div>
  );
};

export default BlogItem;
