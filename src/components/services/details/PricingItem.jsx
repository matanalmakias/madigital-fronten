import React from "react";
import { useState } from "react";
import EditField from "./EditField";

const PricingItem = ({
  sign,

  item,
  product,

  setIsLoading,
}) => {
  const [showEditName, setShowEditName] = useState(false);
  const [showEditPrice, setShowEditPrice] = useState(false);
  const [showEditDescription, setShowEditDescription] = useState(false);

  return (
    <div className="col">
      <p onClick={() => setShowEditName((s) => !s)} className="p4">
        {item?.name}
      </p>
      {showEditName && (
        <EditField
          setIsLoading={setIsLoading}
          productId={product?._id}
          sign={`${sign}-name`}
        />
      )}
      <p onClick={() => setShowEditPrice((s) => !s)} className="p2">
        ${item.price}
      </p>
      {showEditPrice && (
        <EditField
          setIsLoading={setIsLoading}
          productId={product?._id}
          sign={`${sign}-price`}
        />
      )}
      <p onClick={() => setShowEditDescription((s) => !s)} className="p2">
        {item.description}
      </p>
      {showEditDescription && (
        <EditField
          setIsLoading={setIsLoading}
          productId={product?._id}
          sign={`${sign}-desc`}
        />
      )}
    </div>
  );
};
export default PricingItem;
