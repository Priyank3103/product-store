import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  TextField,
  Select,
  MenuItem
} from "@mui/material";

const ProductDashboard = (props) => {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [check, setCheck] = useState(false);
  const [products, setProducts] = useState([]);

  let items = JSON.parse(localStorage.getItem("productList"));

  useEffect(() => {
    setProducts(items);
    if ((filter === "electronic" || filter === "grossery") && search === "") {
      if (check === true) {
        setProducts(products =>  products.filter(
          (row) =>
            row.category.toLowerCase().indexOf(filter) > -1 && row.qty > 0
        ));
      } else {
        setProducts(products => products.filter(
          (row) => row.category.toLowerCase().indexOf(filter) > -1
        ));
      }
    } else if (filter === "" && search === "" && check === true) {
      setProducts(products => products.filter((row) => row.qty > 0));
    } 
    else if (
      (filter === "electronic" || filter === "grossery") &&
      search !== "" &&
      check === true
    ) {
      setProducts(products => products.filter(
        (row) =>
          row.productName.toLowerCase().indexOf(search) > -1 &&
          row.category.toLowerCase().indexOf(filter) > -1 &&
          row.qty > 0
      ));
    } else if (
      (filter === "electronic" || filter === "grossery") &&
      search !== ""
    ) {
      setProducts(products => products.filter(
        (row) =>
          row.productName.toLowerCase().indexOf(search) > -1 &&
          row.category.toLowerCase().indexOf(filter) > -1
      ));
    } else {
      if (check === true) {
        setProducts(products => products.filter(
          (row) =>
            row.productName.toLowerCase().indexOf(search) > -1 && row.qty > 0
        ));
      } else {
        setProducts(products => products.filter(
          (row) => row.productName.toLowerCase().indexOf(search) > -1
        ));
      }
    }
  }, [search, filter, check])

  return (
    <div>
      <h1>Product Dashboard</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Categories</TableCell>
            <TableCell>In-Stock</TableCell>
            <TableCell>Search</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Select
                value={filter}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                onChange={(ev) => setFilter(ev.target.value)}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="electronic">Electronic</MenuItem>
                <MenuItem value="grossery">Grossery</MenuItem>
              </Select>
            </TableCell>
            <TableCell>
              <TextField
                type="checkbox"
                onChange={(e) => setCheck(e.target.checked)}
              />
            </TableCell>
            <TableCell>
              <TextField
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
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
          {products &&
            products.map((list, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{list.productName}</TableCell>
                  <TableCell>{list.category}</TableCell>
                  <TableCell>{list.price}</TableCell>
                  <TableCell>{list.qty}</TableCell>
                  <TableCell>{list.discount}</TableCell>
                  <TableCell>{list.gst}</TableCell>
                  <TableCell>
                    <Button>Add to cart</Button>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductDashboard;
