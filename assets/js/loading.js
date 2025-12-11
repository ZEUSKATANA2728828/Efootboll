document.getElementById("loading-sound").play();

setTimeout(() => {
    document.body.style.opacity = "0";
    setTimeout(() => {
        window.location.href = "index.html";
    }, 800);
}, 3500);
