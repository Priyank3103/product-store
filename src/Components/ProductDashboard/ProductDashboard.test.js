import React from 'react';
import {render, screen, cleanup, fireEvent} from '@testing-library/react'; 
import ProductDashboard from './ProductDashboard';
import {Button} from "@mui/material"; 

test('Should render Product Dashboard', () => {
    render(<ProductDashboard />)
});

test('Add to cart button should click when enable', () => {
    const addToCart = jest.fn();
    render(<Button disabled={false} onClick={addToCart}>Add to cart</Button>)
    const buttonElement = screen.getByText('Add to cart');
    fireEvent.click(buttonElement);
    expect(addToCart).toHaveBeenCalledTimes(1);
})

test('Add to cart button should not click when disable', () => {
    const addToCart = jest.fn();
    render(<Button disabled={true} onClick={addToCart}>Add to cart</Button>)
    const buttonElement = screen.getByText('Add to cart');
    fireEvent.click(buttonElement);
    expect(addToCart).toHaveBeenCalledTimes(0);
})

test('Remove from cart button should not click when disable', () => {
    const removeFromCart = jest.fn();
    render(<Button onClick={removeFromCart}>Remove from cart</Button>)
    const buttonElement = screen.getByText('Remove from cart');
    fireEvent.click(buttonElement);
    expect(removeFromCart).toHaveBeenCalledTimes(1);
})