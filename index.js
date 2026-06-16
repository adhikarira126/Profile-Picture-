// ═══════════════════════════════════════════════════════════════
//  SMOOTH SCROLL NAVIGATION
// ═══════════════════════════════════════════════════════════════
document.getElementById('work').addEventListener('click', () => {
    document.getElementById('WorkExperience').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('about').addEventListener('click', () => {
    document.getElementById('aboutme').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('contact').addEventListener('click', () => {
    document.getElementById('Email').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('hireme').addEventListener('click', () => {
    document.getElementById('Email').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('seemywork').addEventListener('click', () => {
    document.getElementById('Projects').scrollIntoView({
        behavior: 'smooth'
    });
});

// ═══════════════════════════════════════════════════════════════
//  SCROLL PROGRESS BAR
// ═══════════════════════════════════════════════════════════════
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scroll-progress').style.width = scrolled + '%';
});

// ═══════════════════════════════════════════════════════════════
//  TYPING ANIMATION
// ═══════════════════════════════════════════════════════════════
const typeEL = document.getElementById('textentre');
const text = "Hi, I AM Rachin Adhikari";
let i = 0;

function type() {
    if (i < text.length) {
        typeEL.textContent += text[i];
        i++;
        setTimeout(type, 80);
    }
}
setTimeout(type, 600);

const typeAL = document.getElementById('anothertext');
const text1 = "CS Student & AI Engineer";
let j = 0;

function type1() {
    if (j < text1.length) {
        typeAL.textContent += text1[j];
        j++;
        setTimeout(type1, 80);
    }
}
setTimeout(type1, 2500);

// ═══════════════════════════════════════════════════════════════
//  LOGO SCRAMBLE EFFECT
// ═══════════════════════════════════════════════════════════════
const logo = document.getElementById('nametext');
const logoOriginal = logo.textContent;
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let scrambleInterval = null;

logo.addEventListener('mouseenter', () => {
    let iteration = 0;
    clearInterval(scrambleInterval);
    scrambleInterval = setInterval(() => {
        logo.textContent = logoOriginal.split('').map((char, idx) => {
            if (char === ' ') return ' ';
            if (idx < iteration) return logoOriginal[idx];
            return chars[Math.floor(Math.random() * chars.length)];
        }).join('');
        if (iteration >= logoOriginal.length) clearInterval(scrambleInterval);
        iteration += 0.5;
    }, 40);
});

logo.addEventListener('mouseleave', () => {
    clearInterval(scrambleInterval);
    logo.textContent = logoOriginal;
});

// ═══════════════════════════════════════════════════════════════
//  MAGNETIC BUTTONS
// ═══════════════════════════════════════════════════════════════
const magnetBtns = ['hireme', 'cv', 'seemywork'];

magnetBtns.forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;

    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * 0.3;
        const dy = (e.clientY - cy) * 0.3;
        btn.style.transform = `translate(${dx}px, ${dy}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
        btn.style.transition = 'transform 0.4s ease';
    });

    btn.addEventListener('mouseenter', () => {
        btn.style.transition = 'transform 0.1s ease';
    });
});

// ═══════════════════════════════════════════════════════════════
//  STAGGERED FADE-IN (scroll)
// ═══════════════════════════════════════════════════════════════
const staggerItems = document.querySelectorAll(
    '#Jobtitle, #JobTitle2, #JobTitle3, .project-card, .expertise-card'
);

staggerItems.forEach((el, idx) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${idx * 0.15}s, transform 0.6s ease ${idx * 0.15}s`;
});

const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            staggerObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

staggerItems.forEach(el => staggerObserver.observe(el));

// ═══════════════════════════════════════════════════════════════
//  SCROLL FADE-IN (sections)
// ═══════════════════════════════════════════════════════════════
const fadeSections = document.querySelectorAll('.fade-section');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeSections.forEach(section => fadeObserver.observe(section));

// ═══════════════════════════════════════════════════════════════
//  CUSTOM CURSOR
// ═══════════════════════════════════════════════════════════════
const cursor = document.createElement('div');
cursor.id = 'custom-cursor';
document.body.appendChild(cursor);

const cursorDot = document.createElement('div');
cursorDot.id = 'cursor-dot';
document.body.appendChild(cursorDot);

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.12;
    cursorY += (mouseY - cursorY) * 0.12;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('button, a, h3, #nametext, .project-card, .expertise-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
});

// ═══════════════════════════════════════════════════════════════
//  MOUSE-REACTIVE PARTICLES IN HERO
// ═══════════════════════════════════════════════════════════════
const intro = document.getElementById('intro');
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = intro.offsetWidth;
    canvas.height = intro.offsetHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let mx = -9999, my = -9999;

intro.addEventListener('mousemove', (e) => {
    const rect = intro.getBoundingClientRect();
    mx = e.clientX - rect.left;
    my = e.clientY - rect.top;
});

intro.addEventListener('mouseleave', () => {
    mx = -9999;
    my = -9999;
});

const PARTICLE_COUNT = 100;
const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * 500,
    r: Math.random() * 2 + 0.5,
    baseX: 0,
    baseY: 0,
    dx: (Math.random() - 0.5) * 0.4,
    dy: (Math.random() - 0.5) * 0.4,
    alpha: Math.random() * 0.5 + 0.2,
}));

particles.forEach(p => { p.baseX = p.x; p.baseY = p.y; });

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        // Mouse repulsion
        const distX = p.x - mx;
        const distY = p.y - my;
        const dist = Math.sqrt(distX * distX + distY * distY);
        const repelRadius = 120;

        if (dist < repelRadius) {
            const force = (repelRadius - dist) / repelRadius;
            p.x += (distX / dist) * force * 4;
            p.y += (distY / dist) * force * 4;
        } else {
            // Drift back toward base position
            p.x += (p.baseX - p.x) * 0.03 + p.dx;
            p.y += (p.baseY - p.y) * 0.03 + p.dy;
        }

        // Wrap
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        p.baseX += p.dx * 0.3;
        p.baseY += p.dy * 0.3;
        if (p.baseX < 0) p.baseX = canvas.width;
        if (p.baseX > canvas.width) p.baseX = 0;
        if (p.baseY < 0) p.baseY = canvas.height;
        if (p.baseY > canvas.height) p.baseY = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
    });

    // Connection lines
    for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
            const dx = particles[a].x - particles[b].x;
            const dy = particles[a].y - particles[b].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 * (1 - dist / 120)})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
    }

    requestAnimationFrame(drawParticles);
}
drawParticles();

// ═══════════════════════════════════════════════════════════════
//  NEURAL NETWORK BACKGROUND ANIMATION
// ═══════════════════════════════════════════════════════════════
const neuralCanvas = document.getElementById('neural-bg');
const neuralCtx = neuralCanvas.getContext('2d');

neuralCanvas.width = window.innerWidth;
neuralCanvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    neuralCanvas.width = window.innerWidth;
    neuralCanvas.height = window.innerHeight;
});

class NeuralNode {
    constructor() {
        this.x = Math.random() * neuralCanvas.width;
        this.y = Math.random() * neuralCanvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.alpha = Math.random() * 0.5 + 0.3;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > neuralCanvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > neuralCanvas.height) this.vy *= -1;
    }

    draw() {
        neuralCtx.beginPath();
        neuralCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        neuralCtx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        neuralCtx.fill();
    }
}

const neuralNodes = Array.from({ length: 80 }, () => new NeuralNode());

function animateNeuralNetwork() {
    neuralCtx.clearRect(0, 0, neuralCanvas.width, neuralCanvas.height);

    // Update and draw nodes
    neuralNodes.forEach(node => {
        node.update();
        node.draw();
    });

    // Draw connections
    for (let i = 0; i < neuralNodes.length; i++) {
        for (let j = i + 1; j < neuralNodes.length; j++) {
            const dx = neuralNodes[i].x - neuralNodes[j].x;
            const dy = neuralNodes[i].y - neuralNodes[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 200) {
                neuralCtx.beginPath();
                neuralCtx.moveTo(neuralNodes[i].x, neuralNodes[i].y);
                neuralCtx.lineTo(neuralNodes[j].x, neuralNodes[j].y);
                const opacity = (1 - distance / 200) * 0.2;
                neuralCtx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                neuralCtx.lineWidth = 1;
                neuralCtx.stroke();
            }
        }
    }

    requestAnimationFrame(animateNeuralNetwork);
}
animateNeuralNetwork();

// ═══════════════════════════════════════════════════════════════
//  AI STATS COUNTER ANIMATION
// ═══════════════════════════════════════════════════════════════
const statNumbers = document.querySelectorAll('.stat-number');

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    entry.target.textContent = target;
                    clearInterval(timer);
                } else {
                    entry.target.textContent = Math.floor(current);
                }
            }, 30);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => statsObserver.observe(stat));

// ═══════════════════════════════════════════════════════════════
//  PROJECT CARDS TILT EFFECT
// ═══════════════════════════════════════════════════════════════
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ═══════════════════════════════════════════════════════════════
//  EXPERTISE CARDS HOVER EFFECT
// ═══════════════════════════════════════════════════════════════
const expertiseCards = document.querySelectorAll('.expertise-card');

expertiseCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.icon-wrapper');
        icon.style.transform = 'scale(1.1) rotate(5deg)';
        icon.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.icon-wrapper');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// ═══════════════════════════════════════════════════════════════
//  PARALLAX SCROLL EFFECT
// ═══════════════════════════════════════════════════════════════
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const geoElements = document.querySelectorAll('.geometric-art > *');
    
    geoElements.forEach((el, index) => {
        const speed = 0.5 + (index * 0.2);
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ═══════════════════════════════════════════════════════════════
//  SKILL TAGS ANIMATION
// ═══════════════════════════════════════════════════════════════
const skillButtons = document.querySelectorAll('#skills button');

skillButtons.forEach((btn, index) => {
    btn.style.opacity = '0';
    btn.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        btn.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        btn.style.opacity = '1';
        btn.style.transform = 'translateY(0)';
    }, 100 + (index * 50));
});

// ═══════════════════════════════════════════════════════════════
//  CONSOLE EASTER EGG
// ═══════════════════════════════════════════════════════════════
console.log('%c🚀 Welcome to Rachin\'s Portfolio!', 'color: #ffffff; font-size: 20px; font-weight: bold; background: #000000; padding: 10px;');
console.log('%c💡 Built with passion for AI & innovation', 'color: #888; font-size: 14px;');
console.log('%c🔗 Let\'s connect: adhikarirachin555@gmail.com', 'color: #ffffff; font-size: 14px;');

// ═══════════════════════════════════════════════════════════════
//  PERFORMANCE OPTIMIZATION
// ═══════════════════════════════════════════════════════════════
// Reduce animations when user prefers reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}
