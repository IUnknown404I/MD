import React, {useContext, useEffect} from 'react';
import Header from "../Header";
import toggleGlitch from "../../utils/toggleGlitch";
import {AppContext} from "../context/Context";
import Player from "../player/Player";

const ThirdCh = () => {
    const {isAnimationEnabled} = useContext(AppContext);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);

    useEffect(() => {
        toggleGlitch(isAnimationEnabled);
    }, [isAnimationEnabled]);

    return (
        <>
            <Header pageId='chap3'/>

            <div className='chapter-container'>
                <Player chapter='3' numeric='1' isMobile={isMobile}
                        title='Подготовка логотипа к анимации'
                />
                <Player chapter='3' numeric='1-1' isMobile={isMobile}
                        title='Анимация логотипа'
                />
                <Player chapter='3' numeric='1-1-1' isMobile={isMobile}
                        title='Разбор моих анимаций'
                />
                <Player chapter='3' numeric='2' isMobile={isMobile}
                        title='Подготовка макета в Фотошопе'
                />
                <Player chapter='3' numeric='3' isMobile={isMobile}
                        title='Разбор верстки реальной анимации'
                />
                <Player chapter='3' numeric='4' isMobile={isMobile}
                        title='Анимирование простой анимации'
                />
                <Player chapter='3' numeric='5' isMobile={isMobile}
                        title='Создание градиента в Illustrator и After Effects'
                />
                <Player chapter='3' numeric='6' isMobile={isMobile}
                        title='Правила продающих тезисов'
                />
                <Player chapter='3' numeric='7' isMobile={isMobile}
                        title='Работа с 3D'
                />
                <Player chapter='3' numeric='7-1' isMobile={isMobile}
                        title='Parallax эффект'
                />
                <Player chapter='3' numeric='БОНУС' isMobile={isMobile}
                        title='Полезный скрипт для работы'
                />
                <Player chapter='3' numeric='БОНУС-2' isMobile={isMobile}
                        title='Установка скрипта'
                />
            </div>
        </>
    );
};

export default ThirdCh;