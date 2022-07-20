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
  
  const { product, updateData, addData, formErrors, isSubmit } = props;

  useEffect(() => {
    if (product) {
      setProductName(product.productName);
      setCategory(product.category);
      setPrice(product.price);
      setQty(product.qty);
      setDiscount(product.discount);
      setGst(product.gst);
    }
    if(isSubmit){
      clearFields();
    }

  }, [product, isSubmit]);

  const clearFields = () => {
    setProductName("");
    setCategory("");
    setPrice("");
    setQty("");
    setDiscount("");
    setGst("");
  };

  const buttonName = product ? "Update" : "Add";

  const data = {
    id: uuid(),
    productName: productName,
    category: category,
    price: price,
    qty: qty,
    discount: discount,
    gst: gst,
  };

  const productNameError = !isSubmit ? formErrors.productName : "";
  const categoryError = !isSubmit ? formErrors.category : "";
  const priceError = !isSubmit ? formErrors.price : "";
  const qtyError = !isSubmit ? formErrors.productName : "";
  const discountError = !isSubmit ? formErrors.discount : "";
  const gstError = !isSubmit ? formErrors.gst : "";

  return (
    <Box>
      <h1 style={{textAlign: "center"}}>Product Form</h1>
      <form style={{ display: "grid" }}>
        <Typography>Product Name:</Typography>
        <TextField
          type="text"
          required
          value={productName}
          onChange={(ev) => setProductName(ev.target.value)}
          size="small"
        />
        <p style={{color: "red"}}>{productNameError}</p>

        <Typography>Select Category</Typography>
        <Select
          value={category}
          displayEmpty
          onChange={(ev) => setCategory(ev.target.value)}
          size="small"
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="electronic">Electronic</MenuItem>
          <MenuItem value="grossery">Grossery</MenuItem>
        </Select>
        <p style={{color: "red"}}>{categoryError}</p>
        
        <Typography>Price:</Typography>
        <TextField
          type="text"
          required
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
          size="small"
        />
        <p style={{color: "red"}}>{priceError}</p>

        <Typography>Qty:</Typography>
        <TextField
          type="text"
          required
          value={qty}
          onChange={(ev) => setQty(ev.target.value)}
          size="small"
        />
        <p style={{color: "red"}}>{qtyError}</p>

        <Typography>Discount(%):</Typography>
        <TextField
          type="text"
          required
          value={discount}
          onChange={(ev) => setDiscount(ev.target.value)}
          size="small"
        />
        <p style={{color: "red"}}>{discountError}</p>

        <Typography>GST(%):</Typography>
        <TextField
          type="text"
          required
          value={gst}
          onChange={(ev) => setGst(ev.target.value)}
          size="small"
        />
        <p style={{color: "red"}}>{gstError}</p>

        <Button
          onClick={() => {
            product ? updateData(data, product.id) : addData(data);
          }}
        >
          {buttonName}
        </Button>
      </form>
    </Box>
  );
};

export default AddProduct;
