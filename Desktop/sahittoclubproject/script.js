/**
 * উইলসহিত্য ক্লাব - Ink Particles Fix
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // ১. Ambient Light (লণ্ঠনের আলো)
    const ambientLight = document.getElementById('ambient-light');
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let lightX = mouseX, lightY = mouseY;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateLight() {
        lightX += (mouseX - lightX) * 0.1;
        lightY += (mouseY - lightY) * 0.1;
        if(ambientLight) {
            ambientLight.style.left = `${lightX}px`;
            ambientLight.style.top = `${lightY}px`;
        }
        requestAnimationFrame(animateLight);
    }
    animateLight();

    // ২. Ink Particles (এখন একদম স্পষ্ট দেখা যাবে)
    const particleContainer = document.getElementById('ink-particles');
    const particles = [];
    const particleCount = 50; // কণা বাড়িয়ে দেওয়া হলো

    class InkParticle {
        constructor() {
            this.element = document.createElement('div');
            this.element.className = 'particle';
            this.reset();
            particleContainer.appendChild(this.element);
        }

        reset() {
            this.size = Math.random() * 5 + 2; // কণার আকার সামান্য বাড়ানো হলো
            this.x = Math.random() * window.innerWidth;
            this.y = window.innerHeight + 20;
            this.vx = (Math.random() - 0.5) * 0.8;
            this.vy = -(Math.random() * 1.2 + 0.5); // একটু দ্রুত উপরে উঠবে
            this.opacity = Math.random() * 0.6 + 0.4;
            
            // স্টাইল সেটআপ - লাল কালি (Ink Red) রঙ ব্যবহার করা হয়েছে যাতে সাদা কাগজে ফুটে ওঠে
            this.element.style.width = `${this.size}px`;
            this.element.style.height = `${this.size}px`;
            this.element.style.backgroundColor = '#8B1E0B'; 
            this.element.style.position = 'absolute';
            this.element.style.borderRadius = '50%';
            this.element.style.pointerEvents = 'none';
            this.element.style.zIndex = '9999'; // সবার উপরে রাখার জন্য সর্বোচ্চ প্রায়োরিটি
            this.element.style.boxShadow = '0 0 5px rgba(139, 30, 11, 0.3)';
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.opacity -= 0.001;

            if (this.y < -20 || this.opacity <= 0) {
                this.reset();
            }

            this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
            this.element.style.opacity = this.opacity;
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new InkParticle());
    }

    function animateParticles() {
        particles.forEach(p => p.update());
        requestAnimationFrame(animateParticles);
    }
    animateParticles();

    // ৩. Very Subtle Tilt (একদম হালকা)
    const manuscript = document.querySelector('.manuscript-container');
    document.addEventListener('mousemove', (e) => {
        if(window.innerWidth > 768) {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 300;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 300;
            manuscript.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
    });

    document.addEventListener('mouseleave', () => {
        manuscript.style.transition = "transform 1.2s ease";
        manuscript.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
});