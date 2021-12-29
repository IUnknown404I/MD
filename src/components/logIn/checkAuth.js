const checkAuth = ({setIsAuth}) => {
    const auth = localStorage.getItem('auth');
    const authTime = localStorage.getItem('authTime');
    const isKeyValid = localStorage.getItem('key') === process.env.REACT_APP_SEC_KEY;

    if(auth && authTime && isKeyValid && ((Date.now() - parseInt(authTime)) <= 1000*60*60*24 * 7)) {
        localStorage.setItem('authTime', Date.now().toString());
        setIsAuth(true);
    } else {
        localStorage.setItem('auth', '0');
        localStorage.removeItem('authTime');
        setIsAuth(false);
    }
}

const logOut = ({setIsAuth}) => {
    localStorage.setItem('auth', '0');
    localStorage.removeItem('authTime');
    setIsAuth(false);
}

export {checkAuth, logOut};