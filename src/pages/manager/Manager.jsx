import React, { useEffect, useState } from "react";
import CreateSiteContent from "../../components/manager/CreateSiteContent";
import { useContext } from "react";
import { SiteContentContext } from "./../../context/SiteContentContext";
import ManageCustomerList from "../../components/manager/customer/ManageCustomerList";
import ManageSiteContent from "../../components/manager/site-content/ManageSiteContent";
import Product from './../../components/manager/product/Product';

const Manager = () => {
  const { siteContent } = useContext(SiteContentContext);
  return (
    <div className="d-grid grid p-2">
      <ManageSiteContent />
      <ManageCustomerList siteContent={siteContent[0]} />
      <Product />
    </div>
  );
};

export default Manager;
