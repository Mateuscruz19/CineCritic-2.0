// create test from login and register page

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Login from '../pages/Login';
import Register from '../pages/Register';

describe('Login Page', () => {
    it('should render login page', () => {
        const { getByText } = render(
            <Provider store={store}>
                <Router>
                    <Login />
                </Router>
            </Provider>
        );
        expect(getByText(/Login/i)).toBeInTheDocument();
    }
    )
    it('should render register page', () => {
        const { getByText } = render(
            <Provider store={store}>
                <Router>
                    <Register />
                </Router>
            </Provider>
        );
        expect(getByText(/Register/i)).toBeInTheDocument();
    }
    )
})