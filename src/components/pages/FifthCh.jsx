import React, {useContext, useEffect} from 'react';
import Header from "../Header";
import toggleGlitch from "../../utils/toggleGlitch";
import {AppContext} from "../context/Context";
import Player from "../player/Player";

const FifthCh = () => {
    const {isAnimationEnabled} = useContext(AppContext);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);

    useEffect(() => {
        toggleGlitch(isAnimationEnabled);
    }, [isAnimationEnabled]);

    return (
        <>
            <Header pageId='chap5'/>


            <div className='chapter-container'>
                <Player chapter='5' numeric='1' isMobile={isMobile}
                        title='Где искать заказы и новых клиентов'
                />
                <Player chapter='5' numeric='2' isMobile={isMobile}
                        title='Формирование прайса. Прием оплаты'
                />
                <Player chapter='5' numeric='3' isMobile={isMobile}
                        title='Как создать продающее портфолио'
                />
                <Player chapter='5' numeric='4' isMobile={isMobile}
                        title='Типы клиентов, разбор моих конфликтных ситуаций'
                />
            </div>
        </>
    );
};

export default FifthCh;