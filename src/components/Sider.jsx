import React, {useContext, useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import toggleColorMode from "../utils/toggleColorMode";
import Rain from "./rain/Rain";
import {AppContext} from "./context/Context";

const Sider = () => {
    const getLocalSnowing = () => {
        return localStorage.getItem('isSnowing') === 'true';
    }
    const getLocalTheme = () => {
        return localStorage.getItem('isDarkTheme') === 'true';
    }

    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isDarkTheme, setIsDarkTheme] = useState(getLocalTheme());
    const [isSnowing, setIsSnowing] = useState(getLocalSnowing());
    const {
        isAnimationEnabled,
        setIsAnimationEnabled,
    } = useContext(AppContext);

    const setActiveClass = ({isActive}) => isActive ? 'active-side-link' : '';
    const snowHandler = () => {
        const snowContainer = document.querySelector('.sparticles');

        if(isSnowing) {
            localStorage.setItem('isSnowing', 'true');
            snowContainer.style.display = 'initial';
        } else {
            localStorage.setItem('isSnowing', 'false');
            snowContainer.style.display = 'none';
        }
    }

    useEffect(() => {
        const sider = document.querySelector('.sider');

        if (!isCollapsed && sider.classList.contains('collapsed')) {
            sider.classList.toggle('collapsed');
        } else {
            sider.classList.toggle('collapsed');
        }
    }, [isCollapsed]);

    useEffect(() => {
        if(document.querySelector('.init-snow-load-check')) {
            snowHandler();
        }
    }, [isSnowing]);

    useEffect(() => {
        toggleColorMode(isDarkTheme);
    }, [isDarkTheme]);

    useEffect(() => {
        document.addEventListener('readystatechange', () => {
            if(document.readyState === 'complete') {
                setTimeout(snowHandler, 50);

                const checkSpan = document.createElement('span');
                checkSpan.style.opacity = '0';
                checkSpan.className = 'init-snow-load-check';
                document.querySelector('.App').append(checkSpan);
            }
        });
    }, []);

    return (
        <div className='sider'>
            <Rain/>

            <div className='sider-content'>
                {!isCollapsed
                    ? <img title="Скрыть" src='/images/svg/code-out.svg' className='sider-icon collapse-icon'
                           onClick={() => setIsCollapsed(!isCollapsed)}
                    />
                    : <img title="Раскрыть" src='/images/svg/code-in.svg' className='sider-icon collapse-icon'
                           onClick={() => setIsCollapsed(!isCollapsed)}
                    />
                }

                <div className='sider-scroll'>
                    <div className='sider-icons'>
                        {isSnowing
                            ? <img src='/images/svg/umbrella.svg' className='sider-icon' onClick={() => { setIsSnowing(!isSnowing); }}/>
                            : <img src='/images/svg/snow.svg' className='sider-icon' onClick={() => { setIsSnowing(!isSnowing); }}/>
                        }

                        {isAnimationEnabled
                            ? <img src='/images/svg/flash.svg' className='sider-icon'
                                   onClick={() => {
                                       localStorage.setItem('isAnimationEnabled', `${isAnimationEnabled}`);
                                       setIsAnimationEnabled(!isAnimationEnabled);
                                   }}
                            />
                            : <img src='/images/svg/flash-off.svg' className='sider-icon'
                                   onClick={() => {
                                       localStorage.setItem('isAnimationEnabled', `${isAnimationEnabled}`);
                                       setIsAnimationEnabled(!isAnimationEnabled);
                                   }}
                            />
                        }

                        {isDarkTheme
                            ? <img src='/images/svg/sunny.svg' className='sider-icon'
                                   onClick={() => setIsDarkTheme(!isDarkTheme)}
                            />
                            : <img src='/images/svg/moon.svg' className='sider-icon'
                                   onClick={() => setIsDarkTheme(!isDarkTheme)}
                            />
                        }
                    </div>

                    <div className='sider-themes'>
                        <NavLink to='/main' className={setActiveClass}>
                            <img src='/images/svg/diamond.svg' className='sider-icon'/>
                        </NavLink>
                        <NavLink to='/chapter-1' className={setActiveClass}>01</NavLink>
                        <NavLink to='/chapter-2' className={setActiveClass}>02</NavLink>
                        <NavLink to='/chapter-3' className={setActiveClass}>03</NavLink>
                        <NavLink to='/chapter-4' className={setActiveClass}>04</NavLink>
                        <NavLink to='/chapter-5' className={setActiveClass}>05</NavLink>

                        <Link to='md.rar' target="_blank" download>
                            <img src='/images/svg/download.svg' className='sider-icon'/>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Sider;