import React, {useEffect, useState} from 'react';

const AppContext = React.createContext();

const ContextProvider = ({children}) => {
    const getLocalAnimation = () => {
        if(localStorage.getItem('isAnimationEnabled') === null) return 'true';
        return localStorage.getItem('isAnimationEnabled') === 'true';
    }

    const [isAnimationEnabled, setIsAnimationEnabled] = useState(getLocalAnimation());
    const [isAuth, setIsAuth] = useState(true);

    useEffect(() => {
        localStorage.setItem('isAnimationEnabled', `${isAnimationEnabled}`);
    }, [isAnimationEnabled]);

    return (
        <AppContext.Provider
            value={{
                isAnimationEnabled, setIsAnimationEnabled,
                isAuth, setIsAuth
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

//demo
const ContextConsumer = ({children}) => {
    const [isAnimationEnabled, setIsAnimationEnabled] = useState('true');
    const AppContext = React.createContext({isAnimationEnabled, setIsAnimationEnabled});

    return (
        <AppContext.Consumer
            value={
                {isAnimationEnabled, setIsAnimationEnabled}
            }
        >
            {children}
        </AppContext.Consumer>
    );
};

export {ContextProvider, ContextConsumer, AppContext};