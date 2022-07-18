import React, { useState, useEffect } from "react";
import Select from "react-select";
import { TextField, Button, Typography, Box } from "@mui/material";
import { v4 as uuid } from "uuid";

const AddProduct = (props) => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [discount, setDiscount] = useState("");
  const [gst, setGst] = useState("");
  const { product } = props;

  useEffect(() => {
    if (props.product) {
      setProductName(product.productName);
      setCategory(product.category);
      setPrice(product.price);
      setQty(product.qty);
      setDiscount(product.discount);
      setGst(product.gst);
    }
  }, [product]);

  const changeHandler = () => {
    setProductName("");
    setCategory("");
    setPrice("");
    setQty("");
    setDiscount("");
    setGst("");
  };

  const options = [
    { value: "electronic", label: "Electronic" },
    { value: "grossery", label: "Grossery" },
  ];

  let button = "Add";

  if (props.product) {
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
        <Select options={options} onChange={(ev) => setCategory(ev.value)} />
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
            product ? props.updateData(data, product.id) : props.getData(data);
            changeHandler();
          }}
        >
          {button}
        </Button>
      </form>
    </Box>
  );
};

export default AddProduct;
