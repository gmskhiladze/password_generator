let containerEl;

// Events
window.onload = (event) => {
    containerEl = document.getElementById('MainContainer');
    resizeContainer();
};

window.addEventListener('resize', resizeContainer);

// resize function
function resizeContainer() {
    // h: 720 w: 480
    let scale = Math.min(window.innerWidth / 520, window.innerHeight / 750);

    scale > 1 ? scale = 1 : "";

    containerEl.style.transform = `translate(-50%, -50%) scale(${scale})`;
}
