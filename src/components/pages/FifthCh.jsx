import React, {useContext, useEffect} from 'react';
import Header from "../Header";
import toggleGlitch from "../../utils/toggleGlitch";
import {AppContext} from "../context/Context";

const FifthCh = () => {
    const {isAnimationEnabled} = useContext(AppContext);

    useEffect(() => {
        toggleGlitch(isAnimationEnabled);
    }, [isAnimationEnabled]);

    return (
        <>
            <Header pageId='chap5'/>
        </>
    );
};

export default FifthCh;