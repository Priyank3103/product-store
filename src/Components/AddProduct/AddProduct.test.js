import React from 'react';
import {render, screen, within, fireEvent} from '@testing-library/react'; 
import AddProduct from "./AddProduct.js";

test('productName input should be render', () => {
    render(<AddProduct />)
    const inputElement = screen.getByPlaceholderText(/productName/i);
    const testValue = "test";
    fireEvent.change(inputElement, {target : {value: testValue}});
    expect(inputElement.value).toBe(testValue);
});

test('category input should be render', () => {
    render(<AddProduct />)
    const category = screen.getByTestId('category');
    fireEvent.mouseDown(category);
    const listbox = within(getByRole('listbox'));
    console.log(listbox);
    //fireEvent.click(listbox.getByText(/Electronic/i));
    // const electronic = screen.getByText('Electronic')
    // const grossery = screen.getByText('Grossery')
    // expect(electronic.selected).toBeFalsy();
    // expect(grossery.selected).toBeTruthy();
})

test('price input should be render', () => {
    render(<AddProduct />)
    const inputElement = screen.getByPlaceholderText(/price/i);
    const testValue = "test";
    fireEvent.change(inputElement, {target : {value: testValue}});
    expect(inputElement.value).toBe(testValue);
})

test('qty input should be render', () => {
    render(<AddProduct />)
    const inputElement = screen.getByPlaceholderText(/qty/i);
    const testValue = "test";
    fireEvent.change(inputElement, {target : {value: testValue}});
    expect(inputElement.value).toBe(testValue);
})

test('discount input should be render', () => {
    render(<AddProduct />)
    const inputElement = screen.getByPlaceholderText(/discount/i);
    const testValue = "test";
    fireEvent.change(inputElement, {target : {value: testValue}});
    expect(inputElement.value).toBe(testValue);
})

test('gst input should be render', () => {
    render(<AddProduct />)
    const inputElement = screen.getByPlaceholderText(/gst/i);
    const testValue = "test";
    fireEvent.change(inputElement, {target : {value: testValue}});
    expect(inputElement.value).toBe(testValue);
})

test('button should click', () => {
    const addData = jest.fn();
    render(<AddProduct addData={addData} />)
    const buttonElement = screen.getByTestId('button');
    fireEvent.click(buttonElement);
    expect(addData).toHaveBeenCalledTimes(1);
})