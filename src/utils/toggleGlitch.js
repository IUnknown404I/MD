export default (animate) => {
    const glitch = document.querySelector('.glitched-text');
    if(!glitch){
        return;
    }

    if(animate) {
        glitch.style.animation = 'glitch 500ms infinite';
        document.querySelectorAll('.num-rain i').forEach((el) => {
            el.style.animation = 'rain-move 10s linear infinite';
        });
    } else {
        glitch.style.animation = 'none';
        document.querySelectorAll('.num-rain i').forEach((el) => {
            el.style.animation = 'none';
        });
    }
}