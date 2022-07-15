import React, { useState, useEffect } from "react";
import { Table, TableHead, TableCell, TableRow, TableBody, Button } from "@mui/material";

const ProductList = (props) => {

    //const data = JSON.parse(JSON.stringify(localStorage.getItem("data")));
    const [state, setState] = useState([]);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        setProduct(props.productList);
        const data = JSON.parse(JSON.stringify(localStorage.getItem("data")));
        console.log(data);
    }, []);

    

    function deleteHandler(name){
        const newArray = props.productList.filter((product) => product.productname !== name);
        //setState(newArray);

        props.productList = newArray;
        console.log(props.productList);
        //return props.productList;
    }

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
                        {props.productList.map((list, index) => {
                            return <TableRow key={index}>
                                <TableCell>{list.productname}</TableCell>
                                <TableCell>{list.category}</TableCell>
                                <TableCell>{list.price}</TableCell>
                                <TableCell>{list.qty}</TableCell>
                                <TableCell>{list.discount}</TableCell>
                                <TableCell>{list.gst}</TableCell>
                                <TableCell><Button onClick={() => props.editHandler(list.productname)}>Edit</Button><Button onClick={() => props.deleteHandler(list.productname)}>Delete</Button></TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default ProductList;