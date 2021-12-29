import React, {useContext, useEffect} from 'react';
import Player from "../player/Player";
import Header from "../Header";
import toggleGlitch from "../../utils/toggleGlitch";
import {AppContext} from "../context/Context";
import WaypointWrapper from "../waypointWrapper/WaypointWrapper";

const FirstCh = () => {
    const {isAnimationEnabled} = useContext(AppContext);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
    // const isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
    //     navigator.userAgent &&
    //     navigator.userAgent.indexOf('CriOS') === -1 &&
    //     navigator.userAgent.indexOf('FxiOS') === -1;

    useEffect(() => {
        toggleGlitch(isAnimationEnabled);
    }, [isAnimationEnabled]);

    return (
        <>
            <Header pageId='chap1'/>

            <div className='chapter-container'>
                {/*<WaypointWrapper className='11'>*/}
                    <Player chapter='1' numeric='1' isMobile={isMobile} className='arara'
                            title='Знакомство с интерфейсом After Effects и рендер анимации'
                    />
                {/*</WaypointWrapper>*/}
                <Player chapter='1' numeric='1-1' isMobile={isMobile}
                        title='Рендер анимации'
                />
                <Player chapter='1' numeric='2' isMobile={isMobile}
                        title='Первый шаг к поиску своего стиля'
                />
                <Player chapter='1' numeric='3' isMobile={isMobile}
                        title='Важные установки для After Effects'
                />
                <Player chapter='1' numeric='3-1' isMobile={isMobile}
                        title='Дополнение к предыдущему'
                />
                <Player chapter='1' numeric='4' isMobile={isMobile}
                        title='Создание анимированного фона'
                />
                <Player chapter='1' numeric='5' isMobile={isMobile}
                        title='Важные моменты при работе. График скорости'
                />
                <Player chapter='1' numeric='5' isMobile={isMobile}
                        title='Важные моменты при работе. График скорости'
                />
                <Player chapter='1' numeric='6' isMobile={isMobile}
                        title='Работа с шейпами'
                />
                <Player chapter='1' numeric='6-1' isMobile={isMobile}
                        title='Если нет "COPIES" в OFFSET PATHS'
                />
                <Player chapter='1' numeric='7' isMobile={isMobile}
                        title='Анимация текста по кругу'
                />
                <Player chapter='1' numeric='8' isMobile={isMobile}
                        title='Развитие насмотренности и поиск идей'
                />
                <Player chapter='1' numeric='8-1' isMobile={isMobile}
                        title='Полезные ресурсы'
                />
            </div>
        </>
    );
};

export default FirstCh;