gsap.registerPlugin(ScrollTrigger);

/* Loader */
window.addEventListener("load", () => {
  gsap.to("#loader", {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      document.getElementById("loader").style.display = "none";
    }
  });
});

/* Typing Effect */
let text = "Inside Your Computer";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
typing();

/* Scroll Animations */
gsap.utils.toArray(".panel").forEach(panel => {
  gsap.from(panel, {
    opacity: 0,
    y: 150,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: panel,
      start: "top 85%",
    }
  });
});

/* Fade text animation */
gsap.from(".fade-text", {
  opacity: 0,
  y: 20,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".fade-text",
    start: "top 90%"
  }
});

/* Parallax */
gsap.to(".hero h1", {
  y: -100,
  scrollTrigger: {
    trigger: ".hero",
    scrub: true
  }
});

/* Camera Effect */
gsap.to(".panel", {
  scale: 0.92,
  scrollTrigger: {
    trigger: ".panel",
    scrub: true
  }
});

/* Progress Bar */
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (scrollTop / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
});

/* Data Flow Dot */
gsap.to(".dot", {
  x: window.innerWidth,
  duration: 3,
  scrollTrigger: {
    trigger: ".cpu",
    start: "top center",
    scrub: true
  }
});

/* Interactions */
function showInfo() {
  document.getElementById("info").style.display = "block";
}

function toggleMode() {
  document.body.classList.toggle("light");
}

/* Cursor */
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

/* Background particles */
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speed: Math.random()
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.y += p.speed;
    if (p.y > canvas.height) p.y = 0;

    ctx.fillStyle = "#00f7ff";
    ctx.fillRect(p.x, p.y, 2, 2);
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();