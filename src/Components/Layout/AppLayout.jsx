import React, { useState, useEffect, useCallback } from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";
import AddProduct from "../AddProduct/AddProduct";
import ProductList from "../ProductList/ProductList.jsx";

const AppLayout = (props) => {
  const [product, setProduct] = useState();
  const [productList, setProductList] = useState([]);

  useEffect(() => {}, [productList]);

  const addProduct = (data) => {
      const getItem = JSON.parse(localStorage.getItem("productList"));
      let items = (getItem === null) ? items = [data] : items = [...getItem, data];
      setProductList(items);
      localStorage.setItem("productList", JSON.stringify(items));
  };

  const deleteData = (id) => {
    const items = JSON.parse(localStorage.getItem("productList"));
    const data = items.filter((product) => product.id !== id);
    setProductList(data);
    localStorage.setItem("productList", JSON.stringify(data));
  };

  // const editData = (data) => {
  //   setProduct(data);
  //   setIsSubmit(false);
  // };

  const editData = useCallback((data) => {
    setProduct(data);
  }, [product])

  const updateProduct = (data) => {
    const items = JSON.parse(localStorage.getItem("productList"));
    const item = items.map((product) =>
      product.id === data.id
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
