import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Cart from "../Cart/cart";
import ProductDashboard from "../ProductDashboard/ProductDashboard";

const Dashboard = () => {

  return (
    <div>
      <div style={{ display: "flex"}}>
        <Sidebar />
          <div style={{ width: "300px" }}>
            <Cart />
          </div>
        <div style={{ paddingLeft: "200px" }}>
          <ProductDashboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
