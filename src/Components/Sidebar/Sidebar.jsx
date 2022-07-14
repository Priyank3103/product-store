import React from "react";
import "../Sidebar/Sidebar.scss";
import { Link } from "react-router-dom";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

const sidebarNavItems = [
    {
        display: "Dashboard",
        icon: <i className="bx bx-home"></i>,
        to: '/',
        section: ''
    },
    {
        display: "Categories",
        icon: <i className="bx bx-home"></i>,
        to: '/',
        section: ''
    },
    {
        display: "Product",
        icon: <i className="bx bx-home"></i>,
        to: '/',
        section: ''
    },
    {
        display: "Overview",
        icon: <i className="bx bx-home"></i>,
        to: '/',
        section: ''
    }
]

const Sidebar = () => {
    return (
        <div className="sidebar" style={{width: "400px"}}>
            <Navigation
            onSelect={({itemId}) => {
              // maybe push to the route
            }}
            items={[
              {
                title: 'Dashboard',
                itemId: '/dashboard',
                // you can use your own custom Icon component as well
                // icon is optional
                
              },
              {
                title: 'Categories',
                itemId: '/management',
                
              },
              {
                title: 'Product',
                itemId: '/another',
                
              },
              {
                title: 'Overview',
                itemId: '/overview',
                
              }
            ]}
          />
            {/* <div className="sidebar_logo">
                Animate
            </div>
            <div className="sidebar_menu">
                <div className="sidebar_indicator">
                    {
                        sidebarNavItems.map((item, index) => {
                            <Link to={item.to} key={index}>
                                <div className="sidebat_menu_item">
                                    <div className="sidebar_menu_item_icon">
                                        {item.icon}
                                    </div>
                                    <div className="sidebar_menu_item_text">
                                        {item.display}
                                    </div>
                                </div>
                            </Link>
                        })
                    }
                </div>
            </div> */}
        </div>
    )
}

export default Sidebar;