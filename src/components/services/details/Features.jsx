import React from "react";
import EditField from "./EditField";
import { useState } from "react";

const Features = ({ product, showEditFeatures, setIsLoading }) => {
  return (
    <div className="text-center">
      <label htmlFor="desc" className="label1 mb-1">
        Features
      </label>
      <ul className=" p-1">
        {product?.features?.map((item, index) => (
          <FeaturesItem
            index={index}
            item={item}
            product={product}
            showEditFeatures={showEditFeatures}
            setIsLoading={setIsLoading}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};
const FeaturesItem = ({
  index,
  showEditFeatures,
  setIsLoading,
  product,
  item,
}) => {
  const [showItem, setShowItem] = useState(false);
  return (
    <div key={index}>
      <li className="col">
        <p onClick={() => setShowItem((s) => !s)} className="p5 col p-2 mb-1">
          {item}
        </p>
      </li>
      {showItem && (
        <EditField
          setIsLoading={setIsLoading}
          productId={product?._id}
          sign={`features`}
        />
      )}
    </div>
  );
};
export default Features;
