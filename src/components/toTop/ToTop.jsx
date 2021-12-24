import React, {useEffect, useState} from 'react';
import classes from './toTop.module.css';

const ToTop = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const scrollHandler = () => {
        setScrollTop(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }
    }, []);

    return (
        <div className={scrollTop > window.document.documentElement.clientHeight/2
            ? classes.toTop+' '+classes.show
            : classes.toTop+' '+classes.hide }
             onClick={() => { window.scrollTo(0,0); }}
        >
            <img src='/images/svg/arrow-up.svg'/>
        </div>
    );
};

export default ToTop;