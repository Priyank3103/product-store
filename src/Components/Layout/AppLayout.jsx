import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";
import AddProduct from "../AddProduct/AddProduct";
import ProductList from "../ProductList/ProductList.jsx";

const AppLayout = (props) => {
  const [product, setProduct] = useState();
  const [productList, setProductList] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {}, [productList]);

  const errors = {};

  const addProduct = (data) => {
    setFormErrors(validate(data));
    if (Object.keys(errors).length === 0) {
      const getItem = JSON.parse(localStorage.getItem("productList"));
      let items = (getItem === null) ? items = [data] : items = [...getItem, data];
      setProductList(items);
      localStorage.setItem("productList", JSON.stringify(items));
      setIsSubmit(true);
    }
    else{
      setIsSubmit(false);
    }
  };

  const validate = (values) => {
    if (!values.productName) {
      errors.productName = "ProductName is required";
    }
    if (!values.category) {
      errors.category = "category is required";
    }
    if (!values.price) {
      errors.price = "Price is required";
    }
    if (!values.qty) {
      errors.qty = "Qty is required";
    }
    if (!values.discount) {
      errors.discount = "Discount is required";
    }
    if (!values.gst) {
      errors.gst = "Gst is required";
    }
    return errors;
  };

  const deleteData = (id) => {
    const items = JSON.parse(localStorage.getItem("productList"));
    const data = items.filter((product) => product.id !== id);
    setProductList(data);
    localStorage.setItem("productList", JSON.stringify(data));
  };

  const editData = (id) => {
    const items = JSON.parse(localStorage.getItem("productList"));
    const data = items.filter((product) => product.id === id)[0];
    setProduct(data);
  };

  const updateProduct = (data, id) => {
    const items = JSON.parse(localStorage.getItem("productList"));
    const item = items.map((product) =>
      product.id === id
        ? {
            ...product,
            productName: data.productName,
            category: data.category,
            price: data.price,
            qty: data.qty,
            discount: data.discount,
            gst: data.gst,
          }
        : product
    );
    setProductList(item);
    setProduct();
    localStorage.setItem("productList", JSON.stringify(item));
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div>
        <div style={{ width: "300px", paddingLeft: "20px" }}>
          <AddProduct
            product={product}
            formErrors={formErrors}
            isSubmit = {isSubmit}
            addData={addProduct}
            updateData={updateProduct}
          />
        </div>
      </div>
      <div style={{ paddingLeft: "30px" }}>
        <ProductList
          productList={productList}
          deleteHandler={deleteData}
          editHandler={editData}
        />
      </div>
    </div>
  );
};

export default AppLayout;
