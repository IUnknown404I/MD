import React from 'react';

const MainPage = () => {
    const getCard = (cardNum, title, desc) => {
        const className = `card card-${cardNum}`;
        return (
            <div className={className}>
                <div className='card-title'>
                    {title}
                </div>
                <div className='card-content'>
                    {desc}
                    <button className='card-button'>Перейти</button>
                </div>
                <div className='card-mark'>0{cardNum}</div>
            </div>
        );
    }

    return (
        <section className='content'>

            {getCard(
                1,
                'Знакомство с After Effects',
                '7 видео + бонус'
            )}
            {getCard(
                2,
                'Анимирование фото, текста, сторис. Основы работы с цветом, типографикой и композицией',
                '10 видео + 2 бонуса'
            )}
            {getCard(
                3,
                'Анимирование лого, создание простого макета. Продающие тезисы',
                '7 видео + бонус'
            )}
            {getCard(
                4,
                'Этапы ведения проекта. Бриф',
                '7 видео + бонус'
            )}
            {getCard(
                5,
                'Поиск клиентов. Конфликтные ситуации. Портфолио и прайс',
                '4 видео'
            )}

        </section>
    );
};

export default MainPage;