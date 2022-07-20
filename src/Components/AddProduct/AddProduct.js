import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import { v4 as uuid } from "uuid";

const AddProduct = (props) => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [discount, setDiscount] = useState("");
  const [gst, setGst] = useState("");
  const { product, updateData, addData } = props;

  useEffect(() => {
    if (product) {
      setProductName(product.productName);
      setCategory(product.category);
      setPrice(product.price);
      setQty(product.qty);
      setDiscount(product.discount);
      setGst(product.gst);
    }
  }, [product]);

  const clearFields = () => {
    setProductName("");
    setCategory("");
    setPrice("");
    setQty("");
    setDiscount("");
    setGst("");
  };
  
  let button = "Add";

  if (product) {
    button = "Update";
  }

  const data = {
    id: uuid(),
    productName: productName,
    category: category,
    price: price,
    qty: qty,
    discount: discount,
    gst: gst,
  };

  return (
    <Box>
      <h1>Product Form</h1>
      <form style={{ display: "grid" }}>
        <Typography>Product Name:</Typography>
        <br />
        <TextField
          type="text"
          required
          value={productName}
          onChange={(ev) => setProductName(ev.target.value)}
        />
        <br />

        <Typography>Select Category</Typography>
        <br />
        <Select value={category} displayEmpty
          inputProps={{ 'aria-label': 'Without label' }} onChange={(ev) => setCategory(ev.target.value)}>
          <MenuItem value="">None</MenuItem>
          <MenuItem value="electronic">Electronic</MenuItem>
          <MenuItem value="grossery">Grossery</MenuItem>
        </Select>
        <br />
        <Typography>Price:</Typography>
        <br />
        <TextField
          type="text"
          required
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
        />
        <br />
        <Typography>Qty:</Typography>
        <br />
        <TextField
          type="text"
          required
          value={qty}
          onChange={(ev) => setQty(ev.target.value)}
        />
        <br />
        <Typography>Discount(%):</Typography>
        <br />
        <TextField
          type="text"
          required
          value={discount}
          onChange={(ev) => setDiscount(ev.target.value)}
        />
        <br />
        <Typography>GST(%):</Typography>
        <br />
        <TextField
          type="text"
          required
          value={gst}
          onChange={(ev) => setGst(ev.target.value)}
        />
        <br />
        <Button
          onClick={() => {
            product ? updateData(data, product.id) : addData(data);
            clearFields();
          }}
        >
          {button}
        </Button>
      </form>
    </Box>
  );
};

export default AddProduct;
