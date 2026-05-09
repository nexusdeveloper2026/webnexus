// NEXUS Technology - Interactivity

document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, observerOptions);

    // Apply reveal to elements
    document.querySelectorAll('.hero-content > *, .glass-card').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1)";
        observer.observe(el);
    });

    // Simple custom reveal class
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.reveal').forEach(el => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        });
    });

    // Interactive Glass Card Tilt
    const card = document.querySelector('.glass-card');
    if (card) {
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
    }

    // Button click effects
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.style.transform = "scale(0.95)";
            setTimeout(() => {
                btn.style.transform = "scale(1)";
            }, 100);
        });
    });

    console.log('NEXUS Engine Initialized.');
});
