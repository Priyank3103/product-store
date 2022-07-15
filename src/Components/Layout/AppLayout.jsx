import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";
import AddProduct from "../AddProduct/AddProduct";
import ProductList from "../ProductList/ProductList.jsx";
import { Table, TableHead, TableCell, TableRow, TableBody } from "@mui/material";

const AppLayout = (props) => {

    const [product, setProduct] = useState([]);
    const item = [{ productname: '', category: '', price: '', qty: '', discount: '', gst: '' }];
    const [productList, setproductList] = useState([]);
    const [isEdit, setisEdit] = useState(false);

    useEffect(() => {
        console.log(productList);
        //localStorage.setItem("productList", JSON.stringify(productList));
    }, [productList]);

    function setData(data) {
        setproductList([...productList, data]);
        //localStorage.setItem("productList", JSON.stringify(productList));
    }

    function deleteData(name) {
        const data = productList.filter((product) => product.productname !== name);
        setproductList(data);
    }
    
    function editData(name) {
        const data = productList.filter((product) => product.productname === name);
        setProduct(data);
        setisEdit(true);
        console.log(data);
    }

    function updateProduct(data){
        const product = productList.map((list) => list.productname === data.productname ? setProduct([...product, data]): list);
        console.log(product);
    }

    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div>
                <div style={{ width: "300px", paddingLeft: "20px" }}>
                    <AddProduct product={product} isEdit={isEdit} getData={setData} updateData={updateProduct}/>
                </div>
            </div>
            <div style={{ paddingLeft: "30px" }}>
                <ProductList productList={productList} deleteHandler={deleteData} editHandler={editData}/>
            </div>
        </div>
    )
}

export default AppLayout;