import React from 'react';
import { Route, Routes } from 'react-router';
import Cart from '../../pages/Cart/Cart';
import Home from '../../pages/Home/Home';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    );
};

export default AppRoutes;