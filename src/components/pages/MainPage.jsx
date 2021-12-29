import React, {useContext, useEffect} from 'react';
import Header from "../Header";
import {useNavigate} from 'react-router-dom';
import toggleGlitch from "../../utils/toggleGlitch";
import {AppContext} from "../context/Context";
import {Waypoint} from "react-waypoint";
import WaypointWrapper from "../waypointWrapper/WaypointWrapper";

const MainPage = () => {
    const navigate = useNavigate();
    const {isAnimationEnabled} = useContext(AppContext);

    const toggleActive = (num) => {
        document.querySelector(`.card-${num}`).classList.toggle('inactive-block');
    }

    const getCard = (cardNum, title, desc, inactiveClass) => {
        const className = `card card-${cardNum} ${inactiveClass}`;
        return (
            <div className={className}>
                <div className='card-title'>
                    {title}
                </div>
                <div className='card-content'>
                    {desc}
                    <button
                        className='card-button'
                        onClick={() => {
                            navigate(`/chapter-${cardNum}`);
                        }}
                    >Перейти
                    </button>
                </div>
                <div className='card-mark'>0{cardNum}</div>
            </div>
        );
    }

    useEffect(() => {
        toggleGlitch(isAnimationEnabled);
    }, [isAnimationEnabled]);

    return (
        <>
            <Header pageId='main'/>

            <section className='content night'>
                <WaypointWrapper className='card-1'>
                    {getCard(
                        1,
                        'Знакомство с After Effects',
                        '12 видео',
                        'inactive-block',
                    )}
                </WaypointWrapper>

                <WaypointWrapper className='card-2'>
                    {getCard(
                        2,
                        'Анимирование фото, текста, сторис. Основы работы с цветом, типографикой и композицией',
                        '13 видео + 2 бонуса',
                        'inactive-block',
                    )}
                </WaypointWrapper>

                <WaypointWrapper className='card-3'>
                    {getCard(
                        3,
                        'Анимирование лого, создание простого макета. Продающие тезисы',
                        '10 видео + 2 бонуса',
                        'inactive-block',
                    )}
                </WaypointWrapper>

                <WaypointWrapper className='card-4'>
                    {getCard(
                        4,
                        'Этапы ведения проекта. Бриф',
                        '6 видео + бонус',
                        'inactive-block',
                    )}
                </WaypointWrapper>

                <WaypointWrapper className='card-5'>
                    {getCard(
                        5,
                        'Поиск клиентов. Конфликтные ситуации. Портфолио и прайс',
                        '4 видео',
                        'inactive-block',
                    )}
                </WaypointWrapper>
            </section>
        </>
    );
};

export default MainPage;