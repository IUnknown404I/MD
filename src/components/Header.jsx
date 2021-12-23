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
            <div className='glitched-text'>
                {text}
            </div>
        </header>
    );
};

export default Header;