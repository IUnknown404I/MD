import React, {useContext, useEffect} from 'react';
import Player from "../player/Player";
import Header from "../Header";
import toggleGlitch from "../../utils/toggleGlitch";
import {AppContext} from "../context/Context";

const FirstCh = () => {
    const {isAnimationEnabled} = useContext(AppContext);

    useEffect(() => {
        toggleGlitch(isAnimationEnabled);
    }, [isAnimationEnabled]);

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