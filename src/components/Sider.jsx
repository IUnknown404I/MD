import React from 'react';

const Sider = () => {
    let timer = 0;

    function randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
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

    const getI = () => {
        const currentId = 'num-'+timer;
        timer++;
        setInterval(() => {
            const rand = Math.random();
            document.querySelector(`.${currentId}`).innerHTML = getRandomInner(rand);
        }, randomInteger(1500, 3500));

        return <i className={currentId}>
            {getRandomInner(Math.random())}
        </i>
    }

    const getRain = () => {
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
        </div>
    }

    return (
        <div className='sider'>
            {getRain()}

            <div className='sider-content'>

            </div>
        </div>
    );
};

export default Sider;