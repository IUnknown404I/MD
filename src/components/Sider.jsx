import React, {useEffect, useMemo, useState} from 'react';

const Sider = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [animate, setAnimate] = useState(true);
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const [isSnowing, setIsSnowing] = useState(true);
    const [getTimer, incTimer] = useMemo(() => {
        let clock = 0;
        const get = () => {
            return clock;
        }
        const increment = () => {
            if(clock===49) {
                clock=0;
                return;
            }
            clock++;
        }

        return [get, increment];
    }, []);

    function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
    function getRandomInner(rand) {
        return rand > 0.2
            ? rand > 0.4
            ?  rand > 0.6
                ? rand > 0.8
                    ? '♻'
                    : '⚝'
                : '⨷'
            :'⚠'
            :'♾';
    }
    const getI = (isAnimated) => {
        const currentId = isAnimated
            ? 'num-'+getTimer()
            : 'num-off';
        incTimer();

        if(isAnimated) {
            setInterval(() => {
                const rand = Math.random();
                const element = document.querySelector(`.${currentId}`);
                if (element)
                    element.innerHTML = getRandomInner(rand);
            }, randomInteger(1500, 3500))
        }

        return <i className={currentId}>
            {getRandomInner(Math.random())}
        </i>
    }

    const snowHandler = () => {
        if(isSnowing) {
            document.querySelector('.sparticles').style.display = 'none';
        } else {
            document.querySelector('.sparticles').style.display = 'initial';
        }
        setIsSnowing(!isSnowing);
    }
    const getRain = useMemo(() => {
        return <div className='num-rain'>
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
            {getI(true)}
        </div>
    },[])
    const getRainOff = useMemo(() => {
        return <div className='num-rain'>
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
            {getI()}
        </div>
    },[])

    useEffect(() => {
        const sider = document.querySelector('.sider');
        if (!isCollapsed && sider.classList.contains('collapsed')) {
            sider.classList.toggle('collapsed');
        } else {
            sider.classList.toggle('collapsed');
        }
    }, [isCollapsed]);

    useEffect(() => {
        const glitch = document.querySelector('.glitched-text');

        if(animate) {
            glitch.style.animation = 'glitch 500ms infinite';
            document.querySelectorAll('.num-rain i').forEach((el) => {
                el.style.animation = 'rain-move 10s linear infinite';
            })
        } else {
            glitch.style.animation = 'none';
            document.querySelectorAll('.num-rain i').forEach((el) => {
                el.style.animation = 'none';
            })
        }
    }, [animate]);

    useEffect(() => {
        const body = document.querySelector('body');
        const app = document.querySelector('.App');
        const content = document.querySelector('.content');
        const sider = document.querySelector('.sider');
        const glitch = document.querySelector('.glitched-text');

        if(isDarkTheme) {
            app.style.background = 'unset';
            body.style.background = 'rgb(0,0,0)';
            body.style.color = '#ffffff';
            sider.style.background = 'rgba(10,245,202, .06)';
            glitch.style.color = '#ffffff';

            setTimeout(() => {
                if(content.classList.contains('day'))
                    content.classList.toggle('day');
                content.classList.toggle('night');
            }, 1250);
            setTimeout(() => {
                app.style.background = 'linear-gradient(rgb(8, 24, 3),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0))';
            }, 1350);
        } else {
            body.style.background = '#ffffff';
            body.style.color = 'rgb(0,0,0)';
            app.style.background = 'unset';
            sider.style.background = 'rgba(40,185,141, .4)';
            glitch.style.color = '#ffffff';

            setTimeout(() => {
                if(content.classList.contains('night'))
                    content.classList.toggle('night');
                content.classList.toggle('day');

                app.style.background = 'linear-gradient(rgb(10,245,202),rgb(255,255,255),rgb(255,255,255),rgb(255,255,255),rgb(255,255,255),rgb(255,255,255),rgb(255,255,255))';
            }, 1350);
        }
    }, [isDarkTheme]);

    return (
        <div className='sider'>
            {animate
                ? getRain
                : getRainOff
            }

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
                            ? <img src='/images/svg/umbrella.svg' className='sider-icon' onClick={snowHandler}/>
                            : <img src='/images/svg/snow.svg' className='sider-icon' onClick={snowHandler}/>
                        }

                        {animate
                            ? <img src='/images/svg/flash.svg' className='sider-icon'
                                   onClick={() => setAnimate(!animate)}
                            />
                            : <img src='/images/svg/flash-off.svg' className='sider-icon'
                                   onClick={() => setAnimate(!animate)}
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
                        <img src='/images/svg/diamond.svg' className='sider-icon'/>
                        <span>01</span>
                        <span>02</span>
                        <span>03</span>
                        <span>04</span>
                        <span>05</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Sider;