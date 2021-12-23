import React from 'react';

const Header = ({pageId}) => {
    const [text, className] = function(){
        switch (pageId) {
            case 'main': {
                return ['ϺØtion ÐesÍgƝ', 'header-main']
            }
            case 'chap1': {
                return ['1 Раздел', 'header-1c']
            }
            case 'chap2': {
                return ['2 Раздел', 'header-2c']
            }
            case 'chap3': {
                return ['3 Раздел', 'header-3c']
            }
            case 'chap4': {
                return ['4 Раздел', 'header-4c']
            }
            case 'chap5': {
                return ['5 Раздел', 'header-5c']
            }
        }
    }();

    return (
        <header className={'header ' + className}>
            {/*<img src='/images/gif/header-gif.gif' className='header-gif'/>*/}
            <div className='glitched-text'>
                {text}
                {/*{pageId === 'main'*/}
                {/*    ? 'ϺØtion ÐesÍgƝ'*/}
                {/*    : pageId === '1chap'*/}
                {/*        ? '1 Раздел'*/}
                {/*        : pageId === '2chap'*/}
                {/*            ? '2 Раздел'*/}
                {/*            : pageId === '3chap'*/}
                {/*                ? '3 Раздел'*/}
                {/*                : pageId === '4chap'*/}
                {/*                    ? '4 Раздел'*/}
                {/*                    : '5 Раздел'*/}
                {/*}*/}
                {/*ϺØtion ÐesÍgƝ*/}
            </div>
        </header>
    );
};

export default Header;