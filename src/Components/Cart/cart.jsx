import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from "@mui/material";

const Cart = (props) => {
  const [cart, setCart] = useState([]);
  const { cartList, totalPrice } = props;

  const data = JSON.parse(localStorage.getItem("cartList"));
  const sumOfPrices = JSON.parse(localStorage.getItem("totalPrice")); 

  useEffect(() => {
    setCart(cartList);
  }, [cart, totalPrice]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Cart</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>GST(%)</TableCell>
            <TableCell>Discount(%)</TableCell>
            <TableCell>Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((list, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{list.productName}</TableCell>
                  <TableCell>{list.qty}</TableCell>
                  <TableCell>{list.price}</TableCell>
                  <TableCell>{list.gst}</TableCell>
                  <TableCell>{list.discount}</TableCell>

                  <TableCell>{list.total}</TableCell>
                </TableRow>
              );
            })}
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>

            <TableCell>Total :- {sumOfPrices}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Cart;
