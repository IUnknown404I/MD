import React, {useContext, useEffect} from 'react';
import Header from "../Header";
import toggleGlitch from "../../utils/toggleGlitch";
import {AppContext} from "../context/Context";

const ThirdCh = () => {
    const {isAnimationEnabled} = useContext(AppContext);

    useEffect(() => {
        toggleGlitch(isAnimationEnabled);
    }, [isAnimationEnabled]);

    return (
        <>
            <Header pageId='chap3'/>
        </>
    );
};

export default ThirdCh;