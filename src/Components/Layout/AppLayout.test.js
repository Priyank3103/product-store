import React from 'react';
import {render, screen, cleanup} from '@testing-library/react'; 
import AppLayout from "./AppLayout.jsx";
import {BrowserRouter as Router} from 'react-router-dom'; 

test('should render App Layout component', () => {
    render(
        <Router>
          <AppLayout />
        </Router>,
      );
    //const getElement = screen.getByTestId('addProduct');
    //expect(getElement).toBeTruthy();
})