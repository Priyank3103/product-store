import React from 'react';
import {render, screen, cleanup, fireEvent} from '@testing-library/react'; 
import ProductList from './ProductList';
import {Button} from "@mui/material"; 

test('Should render Product Dashboard', () => {
    render(<ProductList />)
});

test('Edit button should click', () => {
    const editHandler = jest.fn();
    render(<Button onClick={editHandler}>Edit</Button>)
    const buttonElement = screen.getByText('Edit');
    fireEvent.click(buttonElement);
    expect(editHandler).toHaveBeenCalledTimes(1);
})

test('Delete button should click', () => {
    const deleteHandler = jest.fn();
    render(<Button onClick={deleteHandler}>Delete</Button>)
    const buttonElement = screen.getByText('Delete');
    fireEvent.click(buttonElement);
    expect(deleteHandler).toHaveBeenCalledTimes(1);
})