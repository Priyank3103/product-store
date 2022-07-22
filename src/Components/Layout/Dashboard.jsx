import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Cart from "../Cart/cart";
import ProductDashboard from "../ProductDashboard/ProductDashboard";

const Dashboard = () => {
  const [cartList, setCartList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCartProduct = (data) => {
    const items = JSON.parse(localStorage.getItem("productList"));
    const productData = items.map((product) =>
      product.id === data.id
        ? {
            ...product,
            qty: product.qty - 1,
          }
        : product
    );
    const getCartItem = JSON.parse(localStorage.getItem("cartList"));
    let cartItem;
    
    if(getCartItem === null){
        data.qty = 1;
        const total = data.qty * data.price;
        data.total = Math.floor((total*data.gst)/100) + total - Math.floor((total*data.discount)/100);
        cartItem = [data];
    }
    else{
      const getCartList = getCartItem.filter((cart) => cart.id === data.id);
      if (getCartList.length === 0) {
        data.qty = 1;
        const total = data.qty * data.price;
        data.total = Math.floor((total*data.gst)/100) + total - Math.floor((total*data.discount)/100);
        cartItem = [...getCartItem, data];
      } else {
        cartItem = getCartItem.map((cart) =>
          cart.id === data.id && cart.qty > 0
            ? {
                ...cart,
                qty: cart.qty + 1,
                total: ((cart.qty + 1) * cart.price) + (((cart.qty + 1) * cart.price)*cart.gst)/100 - (((cart.qty + 1) * cart.price)*cart.discount)/100,
              }
            : cart
        );
      }
    }
    let sumOfPrices = 0;
    cartItem.map((cart) => {
      sumOfPrices = sumOfPrices + cart.total;
      setTotalPrice(totalPrice + cart.total)
  })
    
    setCartList(cartItem);
    setProductList(productData);
    localStorage.setItem("cartList", JSON.stringify(cartItem));
    localStorage.setItem("totalPrice", JSON.stringify(sumOfPrices));
    localStorage.setItem("productList", JSON.stringify(productData));
  };

  const deleteFromCart = (data) => {
    const items = JSON.parse(localStorage.getItem("productList"));
    
    const getCartItem = JSON.parse(localStorage.getItem("cartList")); 
    let quantity = 0;
    getCartItem.map((cart) =>
      cart.id === data.id ? (quantity = cart.qty) : quantity
    );
    const cartData = getCartItem.filter((cart) => cart.id !== data.id);
    const productData = items.map((product) =>
      product.id === data.id
        ? {
            ...product,
            qty: product.qty + quantity,
          }
        : product
    );
    let sumOfPrices = 0;
    cartData.map((cart) => {
      sumOfPrices = sumOfPrices + cart.total;
      setTotalPrice(totalPrice + cart.total)
  })
    setCartList(cartData);
    setProductList(productData);
    localStorage.setItem("cartList", JSON.stringify(cartData));
    localStorage.setItem("totalPrice", JSON.stringify(sumOfPrices));
    localStorage.setItem("productList", JSON.stringify(productData));
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ width: "300px" }}>
          <Cart cartList={cartList} totalPrice={totalPrice} />
        </div>
        <div style={{ paddingLeft: "200px" }}>
          <ProductDashboard
            addToCart={addToCartProduct}
            removeFromCart={deleteFromCart}
            productList={productList}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
