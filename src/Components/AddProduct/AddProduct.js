import React, { useState } from "react";
import { TextField, Button, Typography, Box, Select } from "@mui/material";

const AddProduct = () => {
    function changeHandler(){
        localStorage.setItem("state", state);
        console.log(state);
    }

    const options = [
        {value: "electronic", label: "Electronic"},
        {value: "grossery", label: "Grossery"}
    ]

    const [state, setState] = useState({productname: '', category: '', price: '', qty: '', discount: '', gst: ''}, []);
    return (
        <Box>
            <h1>Product Form</h1>
            <form style={{display: "grid"}}>
                <Typography>
                    Product Name:
                </Typography><br />
                <TextField type="text" required value={state.productname} onChange={(ev) => setState({...state, productname: ev.target.value})}/><br />
                
                <Typography>
                    Select Category
                </Typography><br />
                <Select options={options} onChange={(ev) => setState({...state, category: ev.target.value})} />
                <br />
                <Typography>
                    Price:
                </Typography><br />
                <TextField type="text" required value={state.price} onChange={(ev) => setState({...state, price: ev.target.value})}/><br />
                <Typography>
                    Qty:
                </Typography><br />
                <TextField type="text" required value={state.qty} onChange={(ev) => setState({...state, qty: ev.target.value})}/><br />
                <Typography>
                    Discount(%):
                </Typography><br />
                <TextField type="text" required value={state.discount} onChange={(ev) => setState({...state, discount: ev.target.value})}/><br />
                <Typography>
                    GST(%):
                </Typography><br />
                <TextField type="text" required value={state.gst} onChange={(ev) => setState({...state, gst: ev.target.value})}/><br />
                <Button onClick={changeHandler}>Add</Button>
            </form>
        </Box>
    )
}

export default AddProduct;