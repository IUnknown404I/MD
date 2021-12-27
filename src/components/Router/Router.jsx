import React, {useContext, useEffect} from 'react';
import {authRoutes, unAuthRoutes} from "./routes";
import {AppContext} from "../context/Context";
import {checkAuth} from "../logIn/checkAuth";

const Router = () => {
    const {isAuth, setIsAuth} = useContext(AppContext);
    useEffect(() => {
        checkAuth({setIsAuth});
    }, []);

    return (
        <>
            {isAuth
                ? authRoutes
                : unAuthRoutes
            }
        </>
    );
};

export default Router;