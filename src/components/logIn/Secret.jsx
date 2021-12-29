import React, {useContext, useState} from 'react';
import {checkAuth} from "./checkAuth";
import {AppContext} from "../context/Context";
import classes from './secret.module.css';
import Header from "../Header";

const Secret = () => {
    const [key, setKey] = useState('');
    const [type, setType] = useState('password');
    const {setIsAuth} = useContext(AppContext);
    const [inputClass, setInputClass] = useState(classes.secretIn);

    const formSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if(key === process.env.REACT_APP_SEC_KEY) {
            localStorage.setItem('key', key);
            localStorage.setItem('auth', '1')
            localStorage.setItem('authTime', Date.now().toString());
            checkAuth({setIsAuth});
        } else {
            localStorage.setItem('auth', '0')
            localStorage.removeItem('authTime');
            const wrongClass = `${inputClass} ${classes.wrongSecret}`;
            console.log(wrongClass)
            setInputClass(wrongClass);

            setTimeout(() => {
                setInputClass(inputClass.split(' ')[0]);
            }, 7000);
        }
    }

    return (
        <>
            <Header pageId='main'/>

            <div className={classes.opacity}>
                <div className={classes.secretContainer}>
                    <div>
                        <form onSubmit={event => formSubmit(event)}>
                            <h1>Для продолжения введите кодовую фразу:</h1>

                            <div className={inputClass}>
                                <input
                                    value={key}
                                    onChange={(e) => setKey(e.target.value)}
                                    placeholder='Введите ключ-фразу'
                                    type={type}
                                />
                                {type==='password'
                                    ? <ion-icon name="eye-outline" onClick={() => {
                                        setType('text');
                                    }} className='sec-ico'/>
                                    : <ion-icon name="eye-off-outline" onClick={() => {
                                        setType('password');
                                    }} className='sec-ico'/>
                                }
                            </div>

                            <button>Подтвердить</button>
                        </form>
                    </div>

                    <div className={classes.secretBorderAnim}/>
                </div>
            </div>
        </>
    );
};

export default Secret;