import Sparticles from "sparticles";

let colors = {
    color1: "rgba(255,255,255,1)",
    color2: "rgba(222,184,142,1)",
    color3: "rgba(232,248,255,1)",
    color4: "rgba(135,143,145,1)"
};
// TODO: download the svg-s for particles
let options = {
    alphaSpeed: 10,
    alphaVariance: 1,
    color: [colors.color1, colors.color2, colors.color3, colors.color4],
    composition: "source-over",
    count: 350,
    direction: 161,
    float: 0.75,
    glow: 0,
    imageUrl: [
        "snow-1.svg",
        "snow-2.svg",
        "snow-3.svg",
        "snow-4.svg",
        "snow-5.svg",
        "snow-6.svg"
    ],
    maxAlpha: 2,
    maxSize: 22,
    minAlpha: -0.2,
    minSize: 4,
    parallax: 1.75,
    rotation: 0.5,
    shape: "image",
    speed: 3,
    style: "fill",
    twinkle: false,
    xVariance: 5,
    yVariance: 0,
};

window.initSparticles = function() {
    // let $main = document.querySelector('.falling');
    window.mySparticles = new Sparticles();
};
window.onload = function() {
    window.initSparticles();
}