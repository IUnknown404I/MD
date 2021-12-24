import React, {useContext, useEffect} from 'react';
import Header from "../Header";
import toggleGlitch from "../../utils/toggleGlitch";
import {AppContext} from "../context/Context";

const SecondCh = () => {
    const {isAnimationEnabled} = useContext(AppContext);

    useEffect(() => {
        toggleGlitch(isAnimationEnabled);
    }, [isAnimationEnabled]);

    return (
        <>
            <Header pageId='chap2'/>
        </>
    );
};

export default SecondCh;