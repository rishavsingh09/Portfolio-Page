// ========header-section======>

const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const themeicon = themeToggle;

function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark');
        themeToggle.textContent = '☀️';
    } else {
        body.classList.remove('dark');
        themeToggle.textContent = '🌓';
    }
    localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
});

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ========Hero-sections========>

const roles = [
    "Full Stack Developer",
    "web Developer",
    "JavaScript Enthusiast",
    "Tech Problem Solver",
];

const typingElement = document.getElementById("typing");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;
let deletingSpeed = 75;
let pauseBetweenRoles = 1500;

function type() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(type, pauseBetweenRoles);
            return;
        }
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }
    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}
document.addEventListener("DOMContentLoaded", () => {
    if (typingElement) {
        type();
    }
});