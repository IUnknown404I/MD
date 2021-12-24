export default (isDarkTheme) => {
    const body = document.querySelector('body');
    const app = document.querySelector('.App');
    const content = document.querySelector('.content');
    const sider = document.querySelector('.sider');
    const glitch = document.querySelector('.glitched-text');

    if(isDarkTheme) {
        localStorage.setItem('isDarkTheme', 'true');
        app.style.background = 'unset';
        body.style.background = 'rgb(0,0,0)';
        body.style.color = '#ffffff';
        sider.style.background = 'rgba(10,245,202, .06)';
        if(glitch){
            glitch.style.color = '#ffffff';
        }

        if(content) {
            setTimeout(() => {
                if(content.classList.contains('day'))
                    content.classList.toggle('day');
                if(!content.classList.contains('night'))
                    content.classList.toggle('night');
            }, 1250);
        }
        setTimeout(() => {
            app.style.background = 'linear-gradient(rgb(8, 24, 3),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0))';
        }, 1350);
    } else {
        localStorage.setItem('isDarkTheme', 'false');
        body.style.background = '#ffffff';
        body.style.color = 'rgb(0,0,0)';
        app.style.background = 'unset';
        sider.style.background = 'rgba(40,185,141, .4)';
        if(glitch){
            glitch.style.color = '#ffffff';
        }

        setTimeout(() => {
            if(content && content.classList.contains('night'))
                content.classList.toggle('night');
            if(content)
                content.classList.toggle('day');

            app.style.background = 'linear-gradient(rgb(10,245,202),rgb(255,255,255),rgb(255,255,255),rgb(255,255,255),rgb(255,255,255),rgb(255,255,255),rgb(255,255,255))';
        }, 1350);
    }
}