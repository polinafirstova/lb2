const button_morphing = document.getElementsByClassName("button_morphing")[0];
const button_animation = document.getElementsByClassName("button_animation")[0];
const button_mask = document.getElementsByClassName("button_mask")[0];
const container_morphing = document.getElementsByClassName("morphing")[0];
const container_animation = document.getElementsByClassName("trajectory_movement")[0];
const container_mask = document.getElementsByClassName("using_mask")[0];

button_morphing.onclick = () => {
    container_morphing.style.display = "flex";
    container_animation.style.display = "none";
    container_mask.style.display = "none";
}

button_animation.onclick = () => {
    container_morphing.style.display = "none";
    container_animation.style.display = "flex";
    container_mask.style.display = "none";
}

button_mask.onclick = () => {
    container_morphing.style.display = "none";
    container_animation.style.display = "none";
    container_mask.style.display = "flex";
}

var tl = new TimelineMax({ repeat: -1, repeatDelay: 2, yoyo: true });
tl.to("#cat", 5, { morphSVG: "#dog" });

const light = document.getElementsByClassName("light")[0];
const mask = document.getElementsByClassName("mask")[0];
const light_size = 'transparent 140px, rgba(0, 0, 0, 0.7) 200px';
const size = document.getElementsByClassName("constant")[0].getBoundingClientRect().width;

window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('mousemove', e => update(e));
    function update(e) {
        light.style.background = `radial-gradient(circle at ${e.pageX - size - 150}px ${e.pageY - 50}px, ${light_size}`;
    }
});

