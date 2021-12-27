import {Navigate, Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import FirstCh from "../pages/FirstCh";
import SecondCh from "../pages/SecondCh";
import ThirdCh from "../pages/ThirdCh";
import FourthCh from "../pages/FourthCh";
import FifthCh from "../pages/FifthCh";
import React from "react";
import Secret from "../logIn/Secret";

const authRoutes =
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
    </Routes>;

const unAuthRoutes =
    <Routes>
        <Route
            path='/auth'
            element={<Secret/>}
        />

        <Route
            path='*'
            element={<Navigate to='/auth'/>}
        />
    </Routes>;

export {authRoutes, unAuthRoutes};