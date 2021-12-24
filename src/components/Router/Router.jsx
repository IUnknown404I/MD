import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import MainPage from "../pages/MainPage";
import FirstCh from "../pages/FirstCh";
import SecondCh from "../pages/SecondCh";
import ThirdCh from "../pages/ThirdCh";
import FourthCh from "../pages/FourthCh";
import FifthCh from "../pages/FifthCh";

const Router = () => {
    return (
        <Routes>
            <Route
                path='/main'
                element={<MainPage/>}
            />
            <Route
                path='/chapter-1'
                element={<FirstCh/>}
            />
            <Route
                path='/chapter-2'
                element={<SecondCh/>}
            />
            <Route
                path='/chapter-3'
                element={<ThirdCh/>}
            />
            <Route
                path='/chapter-4'
                element={<FourthCh/>}
            />
            <Route
                path='/chapter-5'
                element={<FifthCh/>}
            />

            <Route
                path='*'
                element={<Navigate to='/main'/>}
            />
        </Routes>
    );
};

export default Router;