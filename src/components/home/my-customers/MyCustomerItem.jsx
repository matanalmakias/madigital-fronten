import React, { useEffect, useState } from "react";
import "./style.scss";
const MyCustomerItem = ({ item, isOdd }) => {
  const [logoUrl, setLogoUrl] = useState(null);
  const nav = (url) => {
    window.location.href = url;
  };
  useEffect(() => {
    import(`../../../assets/miri/logo.png`).then((module) => {
      setLogoUrl(module.default);
    });
  }, []);
  return (
    <div className="my_col1">
      <div className={`col text-center rounded p-1 ${isOdd ? "odd" : "even"}`}>
        {logoUrl && (
          <div className="d-flex justify-content-center mb-2">
            <img className="image_of_customers" src={logoUrl} alt="" />
          </div>
        )}
        <div className="center1">
          <h4 className="name_of_customers mb-1 h4">{item.name}</h4>
          <p
            className="link_of_customers"
            onClick={() => nav(`${item.website}`)}
          >
            {item.website}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyCustomerItem;
