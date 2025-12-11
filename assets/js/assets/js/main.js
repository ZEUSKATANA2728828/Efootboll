// Som no botão
const clickSound = document.getElementById("click-sound");
document.getElementById("mainButton").onclick = () => {
    if (soundEnabled) clickSound.play();
};

// Configurações
let soundEnabled = true;

function openConfig() {
    document.getElementById("configModal").style.display = "block";
}

function closeConfig() {
    document.getElementById("configModal").style.display = "none";
}

document.getElementById("soundToggle").addEventListener("change", function() {
    soundEnabled = this.checked;
});

// Tema claro/escuro
document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeToggle.textContent = "🌞";
    } else {
        themeToggle.textContent = "🌙";
    }
};

// Partículas de fundo
const c = document.getElementById("particles");
const ctx = c.getContext("2d");
c.width = innerWidth;
c.height = innerHeight;

let particles = [];

for (let i = 0; i < 70; i++) {
    particles.push({
        x: Math.random() * c.width,
        y: Math.random() * c.height,
        r: Math.random() * 3 + 1,
        s: Math.random() * 1 + 0.5
    });
}

function animateParticles() {
    ctx.clearRect(0,0,c.width,c.height);

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "#00f2ff";
        ctx.fill();
        p.y += p.s;
        if (p.y > c.height) p.y = 0;
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();
