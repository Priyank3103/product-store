import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
} from "@mui/material";

const ProductList = (props) => {
  const [product, setProduct] = useState([]);
  const { productList } = props;

  const data = JSON.parse(localStorage.getItem("productList"));

  useEffect(() => {
    setProduct(productList);
  }, [product]);

  return (
    <div>
      <h1>Product List</h1>
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Category Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Qty</TableCell>
              <TableCell>Discount(%)</TableCell>
              <TableCell>GST(%)</TableCell>
              <TableCell>Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((list, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{list.productName}</TableCell>
                    <TableCell>{list.category}</TableCell>
                    <TableCell>{list.price}</TableCell>
                    <TableCell>{list.qty}</TableCell>
                    <TableCell>{list.discount}</TableCell>
                    <TableCell>{list.gst}</TableCell>
                    <TableCell>
                      <Button onClick={() => props.editHandler(list.id)}>
                        Edit
                      </Button>
                      <Button onClick={() => props.deleteHandler(list.id)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProductList;
