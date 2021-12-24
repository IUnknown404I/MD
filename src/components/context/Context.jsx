import React, {useState} from 'react';

const AppContext = React.createContext();

const ContextProvider = ({children}) => {
    const getLocalAnimation = () => {
        return localStorage.getItem('isAnimationEnabled') === 'true';
    }
    const [isAnimationEnabled, setIsAnimationEnabled] = useState(getLocalAnimation());

    return (
        <AppContext.Provider
            value={{
                isAnimationEnabled, setIsAnimationEnabled
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
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