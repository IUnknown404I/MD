import React, {useContext} from 'react';
import {AppContext} from "./context/Context";
import {logOut} from "./logIn/checkAuth";

const Footer = () => {
    const {isAuth, setIsAuth} = useContext(AppContext);

    return (
        <footer className='footer'>
            <div>
                {isAuth &&
                    <span
                        className='footer-out-span'
                        onClick={() => {
                            logOut({setIsAuth});
                        }}
                    >ВЫЙТИ</span>
                }

                © SR-PIC, 2022
            </div>
        </footer>
    );
};

export default Footer;