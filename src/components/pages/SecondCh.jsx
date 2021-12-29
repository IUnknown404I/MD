import React, {useContext, useEffect} from 'react';
import Header from "../Header";
import toggleGlitch from "../../utils/toggleGlitch";
import {AppContext} from "../context/Context";
import Player from "../player/Player";

const SecondCh = () => {
    const {isAnimationEnabled} = useContext(AppContext);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);

    useEffect(() => {
        toggleGlitch(isAnimationEnabled);
    }, [isAnimationEnabled]);

    return (
        <>
            <Header pageId='chap2'/>

            <div className='chapter-container'>
                <Player chapter='2' numeric='1' isMobile={isMobile}
                        title='Эффектное анимирование текста'
                />
                <Player chapter='2' numeric='1-1' isMobile={isMobile}
                        title='Анимация текста - BLUR'
                />
                <Player chapter='2' numeric='2' isMobile={isMobile}
                        title='Анимация линией. Прописной текст через маску'
                />
                <Player chapter='2' numeric='3' isMobile={isMobile}
                        title='Возможности маски'
                />
                <Player chapter='2' numeric='4' isMobile={isMobile}
                        title='Использование футажей'
                />
                <Player chapter='2' numeric='5' isMobile={isMobile}
                        title='Музыка'
                />
                <Player chapter='2' numeric='5-1' isMobile={isMobile}
                        title='Цветокоррекция'
                />
                <Player chapter='2' numeric='6' isMobile={isMobile}
                        title='Подготовка макета в фотошопе'
                />
                <Player chapter='2' numeric='6-1' isMobile={isMobile}
                        title='Оживление фото. Марионеточная анимация'
                />
                <Player chapter='2' numeric='7' isMobile={isMobile}
                        title='Основы работы с цветом'
                />
                <Player chapter='2' numeric='8' isMobile={isMobile}
                        title='Типографика. Актуальные шрифты'
                />
                <Player chapter='2' numeric='9' isMobile={isMobile}
                        title='Liquid эффект'
                />
                <Player chapter='2' numeric='10' isMobile={isMobile}
                        title='Создание переходов между кадрами'
                />
                <Player chapter='2' numeric='БОНУС' isMobile={isMobile}
                        title='Секреты идеальной композиции'
                />
                <Player chapter='2' numeric='БОНУС-2' isMobile={isMobile}
                        title='Плагин для крутых переходов'
                />
            </div>
        </>
    );
};

export default SecondCh;