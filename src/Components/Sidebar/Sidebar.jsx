import React from "react";
import {useNavigate, useLocation} from "react-router-dom"
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

const Sidebar = () => {

  const navigateTo = useNavigate();
  const location = useLocation();

  return (
    <div className="sidebar" style={{ width: "400px" }}>
      <Navigation
        activeItemId={location.pathname}
        onSelect={({ itemId }) => {
          navigateTo(itemId);
        }}
        items={[
          {
            title: "Dashboard",
            itemId: "/dashboard",
          },
          {
            title: "Categories",
            itemId: "/categories",
          },
          {
            title: "Product",
            itemId: "/",
          },
          {
            title: "Overview",
            itemId: "/overview",
          },
        ]}
      />
    </div>
  );
};

export default Sidebar;
