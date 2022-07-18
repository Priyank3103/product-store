import React from "react";
import "../Sidebar/Sidebar.scss";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

// const sidebarNavItems = [
//     {
//         display: "Dashboard",
//         icon: <i className="bx bx-home"></i>,
//         to: '/',
//         section: ''
//     },
//     {
//         display: "Categories",
//         icon: <i className="bx bx-home"></i>,
//         to: '/',
//         section: ''
//     },
//     {
//         display: "Product",
//         icon: <i className="bx bx-home"></i>,
//         to: '/',
//         section: ''
//     },
//     {
//         display: "Overview",
//         icon: <i className="bx bx-home"></i>,
//         to: '/',
//         section: ''
//     }
// ]

const Sidebar = () => {
  return (
    <div className="sidebar" style={{ width: "400px" }}>
      <Navigation
        onSelect={({ itemId }) => {
          // maybe push to the route
        }}
        items={[
          {
            title: "Dashboard",
            itemId: "/dashboard",
            // you can use your own custom Icon component as well
            // icon is optional
          },
          {
            title: "Categories",
            itemId: "/management",
          },
          {
            title: "Product",
            itemId: "/another",
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
