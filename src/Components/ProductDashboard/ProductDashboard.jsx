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
  MenuItem,
  Checkbox
} from "@mui/material";

const ProductDashboard = (props) => {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [check, setCheck] = useState(false);
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState([]); 
  const {addToCart, removeFromCart, productList} = props; 

  const items = JSON.parse(localStorage.getItem("productList"));

  useEffect(() => {
    setProducts(items);
    setProductData(productList);
    if(filter !== ""){
      setProducts(products =>  products.filter(
              (row) =>
                row.category.toLowerCase().indexOf(filter) > -1
            ))
    }
    if(search !== ""){
      setProducts(products =>  products.filter(
        (row) =>
          row.productName.toLowerCase().indexOf(search) > -1
      ))
    }
    if(check === true){
      setProducts(products =>  products.filter(
        (row) =>
        row.qty > 0
      ))
    }
  }, [search, filter, check, productList])

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Product Dashboard</h1>
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
                size="small"
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="electronic">Electronic</MenuItem>
                <MenuItem value="grossery">Grossery</MenuItem>
              </Select>
            </TableCell>
            <TableCell>
              <Checkbox
                onChange={(e) => setCheck(e.target.checked)}
                size="small"
              />
            </TableCell>
            <TableCell>
              <TextField
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                size="small"
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
                  <TableCell>
                    <Button data-testid='addToCartBtn' disabled={list.qty === 0} onClick={() => addToCart(list)}>+</Button>
                    <Button onClick={() => removeFromCart(list)}>-</Button>
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
