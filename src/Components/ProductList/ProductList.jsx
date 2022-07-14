import React from "react";
import {Table, TableHead, TableCell, TableRow} from "@mui/material";

const ProductList = () => {
    return(
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
            </Table>
            </div>
        </div>
    )
}

export default ProductList;