import React, {useContext, useEffect} from 'react';
import Header from "../Header";
import toggleGlitch from "../../utils/toggleGlitch";
import {AppContext} from "../context/Context";
import Player from "../player/Player";

const FourthCh = () => {
    const {isAnimationEnabled} = useContext(AppContext);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);

    useEffect(() => {
        toggleGlitch(isAnimationEnabled);
    }, [isAnimationEnabled]);

    return (
        <>
            <Header pageId='chap4'/>

            <div className='chapter-container'>
                <Player chapter='4' numeric='1' isMobile={isMobile}
                        title='Этапы ведения проекта'
                />
                <Player chapter='4' numeric='2' isMobile={isMobile}
                        title='Эффект растягивания текста. Морфинг'
                />
                <Player chapter='4' numeric='3' isMobile={isMobile}
                        title='Движение объектов под музыку'
                />
                <Player chapter='4' numeric='4' isMobile={isMobile}
                        title='Полезные Expressions'
                />
                <Player chapter='4' numeric='5' isMobile={isMobile}
                        title='Как сделать GIF анимацию'
                />
                <Player chapter='4' numeric='6' isMobile={isMobile}
                        title='3D текст'
                />
                <Player chapter='4' numeric='БОНУС' isMobile={isMobile}
                        title='Как грамотно использовать шаблоны'
                />
            </div>
        </>
    );
};

export default FourthCh;