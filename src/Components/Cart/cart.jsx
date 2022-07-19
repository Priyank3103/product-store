import React from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody
} from "@mui/material";

const Cart = () => {
  return (
    <div>
      <h1>Cart</h1>
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
        <TableBody></TableBody>
      </Table>
    </div>
  );
};

export default Cart;
