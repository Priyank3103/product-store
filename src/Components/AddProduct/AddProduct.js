import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { v4 as uuid } from "uuid";
import * as Yup from "yup";

const initialValues = {
  id: uuid(),
  productName: "",
  category: "",
  price: "",
  qty: "",
  discount: "",
  gst: "",
};

const validationSchema = Yup.object({
  productName: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  price: Yup.string().required("Required"),
  qty: Yup.string().required("Required"),
  discount: Yup.string().required("Required"),
  gst: Yup.string().required("Required"),
});

const AddProduct = (props) => {
  const [formValues, setFormValues] = useState(null);

  const { product, updateData, addData } = props;

  const onSubmit = (values) => {
    //product ? updateData(values, values.id) : addData(values); 
    if(product){
      updateData(values)
    }
    else{
      addData(values)
    }
  };

  useEffect(() => {
    if (product) {
      setFormValues(product);
    }
  }, [product]);

  const buttonName = product ? "Update" : "Add";

  return (
    <Box>
      <h1 style={{ textAlign: "center" }}>Product Form</h1>
      <Formik
        initialValues={formValues || initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        <Form style={{ display: "grid" }}>
          <Typography>Product Name:</Typography>
          <Field name="productName">
            {(props) => {
              const { field, form, meta } = props;
              return (
                <div>
                  <TextField
                    placeholder="productName"
                    type="text"
                    required
                    size="small"
                    {...field}
                  />
                  {meta.touched && meta.error ? (
                    <div style={{ color: "red" }}>{meta.error}</div>
                  ) : null}
                </div>
              );
            }}
          </Field>

          <Typography>Select Category</Typography>
          <Field name="category">
            {(props) => {
              const { field, form, meta } = props;
              return (
                <div>
                  <Select
                    displayEmpty
                    size="small"
                    name="category"
                    {...field}
                  >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="electronic">Electronic</MenuItem>
                    <MenuItem value="grossery">Grossery</MenuItem>
                  </Select>
                  {meta.touched && meta.error ? (
                    <div style={{ color: "red" }}>{meta.error}</div>
                  ) : null}
                </div>
              );
            }}
          </Field>

          <Typography>Price:</Typography>
          <Field
            placeholder="price"
            type="text"
            required
            size="small"
            name="price"
          >
            {(props) => {
              const { field, form, meta } = props;
              return (
                <div>
                  <TextField
                    placeholder="price"
                    type="text"
                    required
                    size="small"
                    {...field}
                  />
                  {meta.touched && meta.error ? (
                    <div style={{ color: "red" }}>{meta.error}</div>
                  ) : null}
                </div>
              );
            }}
          </Field>

          <Typography>Qty:</Typography>
          <Field placeholder="qty" type="text" required size="small" name="qty">
            {(props) => {
              const { field, form, meta } = props;
              return (
                <div>
                  <TextField
                    placeholder="qty"
                    type="text"
                    required
                    size="small"
                    {...field}
                  />
                  {meta.touched && meta.error ? (
                    <div style={{ color: "red" }}>{meta.error}</div>
                  ) : null}
                </div>
              );
            }}
          </Field>

          <Typography>Discount(%):</Typography>
          <Field
            placeholder="discount"
            type="text"
            required
            size="small"
            name="discount"
          >
            {(props) => {
              const { field, form, meta } = props;
              return (
                <div>
                  <TextField
                    placeholder="document"
                    type="text"
                    required
                    size="small"
                    {...field}
                  />
                  {meta.touched && meta.error ? (
                    <div style={{ color: "red" }}>{meta.error}</div>
                  ) : null}
                </div>
              );
            }}
          </Field>

          <Typography>GST(%):</Typography>
          <Field placeholder="gst" type="text" required size="small" name="gst">
            {(props) => {
              const { field, form, meta } = props;
              return (
                <div>
                  <TextField
                    placeholder="gst"
                    type="text"
                    required
                    size="small"
                    {...field}
                  />
                  {meta.touched && meta.error ? (
                    <div style={{ color: "red" }}>{meta.error}</div>
                  ) : null}
                </div>
              );
            }}
          </Field>

          <Button type="submit">{buttonName}</Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default AddProduct;
