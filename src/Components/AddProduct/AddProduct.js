import React, { useState, useEffect } from "react";
import Select from "react-select";
import { TextField, Button, Typography, Box} from "@mui/material";
import { v4 as uuid } from 'uuid';

//const data = [{productname: '', category: '', price: '', qty: '', discount: '', gst: ''}];

const AddProduct = (props) => {

    const [state, setState] = useState({id: '', productname: '', category: '', price: '', qty: '', discount: '', gst: ''}, []);
    const [id, setId] = useState("");
    const [productname, setProductname] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("");
    const [discount, setDiscount] = useState("");
    const [gst, setGst] = useState("");
    
    const changeHandler = (data) =>{
        console.log(data);
        localStorage.setItem("data", JSON.stringify(data));
        //localStorage.setItem("productList", JSON.stringify(props.product));
    }

    const options = [
        {value: "electronic", label: "Electronic"},
        {value: "grossery", label: "Grossery"}
    ]

    console.log(props.product.map((val) => {return val.productname}));

    let button = "Add";

    if(props.isEdit){
        button = "Update";
    }

    // useEffect(() => {
    //     setState(state => ({ ...state, productname: props.product.map((val) => {return val.productname}) }));
    //   }, []);
    const data = {
        id: uuid(),
        productname: productname,
        category: category,
        price: price,
        qty: qty,
        discount: discount,
        gst: gst
    }
    console.log(data);
    return (
        <Box>
            <h1>Product Form</h1>
            <form style={{display: "grid"}}>
                <Typography>
                    Product Name:
                </Typography><br />
                <TextField type="text" required value={props.isEdit ? props.product.map((val) => {return val.productname}) : productname} onChange={(ev) => setProductname(ev.target.value)}/><br />
                
                <Typography>
                    Select Category
                </Typography><br />
                <Select options={options} onChange={(ev) => setCategory(ev.value)} />
                <br />
                <Typography>
                    Price:
                </Typography><br />
                <TextField type="text" required value={props.isEdit ? props.product.map((val) => {return val.price}) :price} onChange={(ev) => setPrice(ev.target.value)}/><br />
                <Typography>
                    Qty:
                </Typography><br />
                <TextField type="text" required value={props.isEdit ? props.product.map((val) => {return val.qty}) : qty} onChange={(ev) => setQty(ev.target.value)}/><br />
                <Typography>
                    Discount(%):
                </Typography><br />
                <TextField type="text" required value={props.isEdit ? props.product.map((val) => {return val.discount}) : discount} onChange={(ev) => setDiscount(ev.target.value)}/><br />
                <Typography>
                    GST(%):
                </Typography><br />
                <TextField type="text" required value={props.isEdit ? props.product.map((val) => {return val.gst}) : gst} onChange={(ev) => setGst(ev.target.value)}/><br />
                <Button onClick={() => {changeHandler(data)}}>
                    {button}
                </Button>
            </form>
        </Box>
    )
}

export default AddProduct;