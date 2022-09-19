import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  TablePagination,
} from "@mui/material";

const ProductList = (props) => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { productList, editHandler, deleteHandler } = props;

  const data = JSON.parse(localStorage.getItem("productList"));

  useEffect(() => {
    setProduct(productList);
  }, [product]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = data ?
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage) : null;

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Product List</h1>
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
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((list, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{list.productName}</TableCell>
                      <TableCell>{list.category}</TableCell>
                      <TableCell>{list.price}</TableCell>
                      <TableCell>{list.qty}</TableCell>
                      <TableCell>{list.discount}</TableCell>
                      <TableCell>{list.gst}</TableCell>
                      <TableCell>
                        <Button onClick={() => editHandler(list)}>
                          Edit
                        </Button>
                        <Button onClick={() => deleteHandler(list.id)}>
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data ? data.length: 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default ProductList;
