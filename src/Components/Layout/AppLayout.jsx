import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.jsx";
import AddProduct from "../AddProduct/AddProduct";
import ProductList from "../ProductList/ProductList.jsx";

const AppLayout = () => {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div>

                <Outlet />
                <div style={{ width: "300px", paddingLeft: "20px" }}>
                    <AddProduct />
                </div>
            </div>
            <div style={{paddingLeft: "30px"}}>
                <ProductList />
            </div>
        </div>
    )
}

export default AppLayout;