import React from 'react';
import Player from "../player/Player";
import Header from "../Header";

const FirstCh = () => {
    return (
        <>
            <Header pageId='chap1'/>

            <div className='chapter-container'>
                <Player chapter='1' numeric='1'
                        title='Знакомство с интерфейсом After Effects и рендер анимации'
                />
            </div>
        </>
    );
};

export default FirstCh;