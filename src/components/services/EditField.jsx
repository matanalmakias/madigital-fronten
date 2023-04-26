import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import productService from "../../services/product/product.service";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

const EditField = ({ sign, productId, setIsLoading }) => {
  const [nameInput, setNameInput] = useState(null);
  const [descInput, setDescInput] = useState(null);
  const [priceInput, setPriceInput] = useState(null);
  const { isManager } = useContext(AuthContext);
  const formSubmit = (e, sign, body) => {
    e.preventDefault();
    productService
      .editField({ body }, productId, sign)
      .then((res) => toast(res.data.message))
      .finally(() => setIsLoading(false));
  };

  if (!isManager) return;
  if (sign === `name`) {
    return (
      <Form onSubmit={(e) => formSubmit(e, `name`, nameInput)}>
        <input
          onChange={(e) => setNameInput(e.target.value)}
          type="text"
          required
          className="form-control"
          placeholder="Enter a new name"
        />
        <button type="submit" className="btn7">
          Submit
        </button>
      </Form>
    );
  } else if (sign === `desc`) {
    return (
      <Form onSubmit={(e) => formSubmit(e, `desc`, descInput)}>
        <textarea
          onChange={(e) => setDescInput(e.target.value)}
          type="text"
          required
          className="form-control"
          placeholder="Enter a new description"
        />
        <button type="submit" className="btn7">
          Submit
        </button>
      </Form>
    );
  } else if (sign === `price`) {
    return (
      <Form onSubmit={(e) => formSubmit(e, `price`, priceInput)}>
        <input
          onChange={(e) => setPriceInput(e.target.value)}
          type="number"
          required
          className="form-control"
          placeholder="Enter a new starting price"
        />
        <button type="submit" className="btn7">
          Submit
        </button>
      </Form>
    );
  }
};
export default EditField;