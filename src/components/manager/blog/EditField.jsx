import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import { AuthContext } from "../../../context/AuthContext";
const EditField = ({ sign, item }) => {
  const [titleInput, setTitleInput] = useState(null);
  const [sescriptionInput, setDescriptionInput] = useState(null);
  const [contentInput, setContentInput] = useState(null);
  const { isManager, isModerator, selfUser } = useContext(AuthContext);

  const isAuthorOfPost = selfUser?._id === item?.authorUserId;
  if (!isManager && !isModerator && !isAuthorOfPost) return;
  if (sign === `title`) {
    return (
      <Form className="d-flex gap-1">
        <input
          type="text"
          required
          className="form-control"
          placeholder="Enter new title"
          onChange={(e) => setTitleInput(e.target.value)}
        />
        <button type="submit" className="btn5 w-100">
          Submit
        </button>
      </Form>
    );
  } else if (sign === `desc`) {
    return (
      <Form className="d-flex gap-1">
        <textarea
          type="text"
          required
          style={{ height: `30%` }}
          className="form-control"
          placeholder="Enter new description"
          onChange={(e) => setDescriptionInput(e.target.value)}
        />
        <button type="submit" className="btn5 w-100">
          Submit
        </button>
      </Form>
    );
  } else if (sign === `content`) {
    return (
      <Form className="d-flex flex-column card p-2 gap-1 mb-2">
        <ReactQuill
          required
          value={contentInput}
          onChange={setContentInput}
          placeholder="Enter HTML content"
          modules={{
            toolbar: [
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              ["bold", "italic", "underline", "strike"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link", "image", "video"],
              ["clean"],
            ],
          }}
          formats={[
            "header",
            "bold",
            "italic",
            "underline",
            "strike",
            "list",
            "bullet",
            "link",
            "image",
            "video",
          ]}
        />
        <button type="submit" className="btn5 w-100">
          Submit
        </button>
      </Form>
    );
  }
};

export default EditField;
