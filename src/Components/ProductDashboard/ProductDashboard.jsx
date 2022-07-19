import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  TextField,
} from "@mui/material";
import Select from "react-select";

const ProductDashboard = (props) => {
  const options = [
    { value: "electronic", label: "Electronic" },
    { value: "grossery", label: "Grossery" },
  ];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [check, setCheck] = useState(false);

  let items = JSON.parse(localStorage.getItem("productList"));

  const filterData = (rows) => {
    if ((filter === "electronic" || filter === "grossery") && search === "") {
      if (check === true) {
        items = rows.filter(
          (row) =>
            row.category.toLowerCase().indexOf(filter) > -1 && row.qty > 0
        );
      } else {
        items = rows.filter(
          (row) => row.category.toLowerCase().indexOf(filter) > -1
        );
      }
      return items;
    } else if (filter === "" && search === "" && check === true) {
      items = rows.filter((row) => row.qty > 0);
      return items;
    } else if (
      (filter === "electronic" || filter === "grossery") &&
      search !== "" &&
      check === true
    ) {
      items = rows.filter(
        (row) =>
          row.productName.toLowerCase().indexOf(search) > -1 &&
          row.category.toLowerCase().indexOf(filter) > -1 &&
          row.qty > 0
      );
      return items;
    } else if (
      (filter === "electronic" || filter === "grossery") &&
      search !== ""
    ) {
      items = rows.filter(
        (row) =>
          row.productName.toLowerCase().indexOf(search) > -1 &&
          row.category.toLowerCase().indexOf(filter) > -1
      );
      return items;
    } else {
      if (check === true) {
        items = rows.filter(
          (row) =>
            row.productName.toLowerCase().indexOf(search) > -1 && row.qty > 0
        );
      } else {
        items = rows.filter(
          (row) => row.productName.toLowerCase().indexOf(search) > -1
        );
      }
      return items;
    }
  };

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
                options={options}
                onChange={(ev) => setFilter(ev.value)}
              />
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
          {filterData &&
            filterData(items).map((list, index) => {
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
