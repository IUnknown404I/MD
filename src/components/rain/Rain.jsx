import React, {useContext, useMemo} from 'react';
import {AppContext} from "../context/Context";

const Rain = () => {
    const {isAnimationEnabled} = useContext(AppContext);
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

    return isAnimationEnabled
        ?
        <div className='num-rain'>
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
        :
        <div className='num-rain'>
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
        </div>;
};

export default Rain;