// NEXUS Technology - Interactivity

document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Apply reveal to elements
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // 2. Navbar effect on scroll
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 3. Interactive Glass Card Tilt
    const card = document.querySelector('.glass-card');
    if (card) {
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
    }

    // 4. Counter Animation for Metrics
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = (count + inc).toFixed(target % 1 !== 0 ? 1 : 0);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Use IntersectionObserver to trigger counters only when visible
    const metricsSection = document.querySelector('.metrics-section');
    if (metricsSection) {
        const metricObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateCounters();
                metricObserver.disconnect(); // Only animate once
            }
        }, { threshold: 0.5 });
        metricObserver.observe(metricsSection);
    }

    // 5. Button click effects
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.style.transform = "scale(0.95)";
            setTimeout(() => {
                btn.style.transform = "scale(1)";
            }, 100);
        });
    });

    console.log('NEXUS Engine Initialized.');

    // 6. Interactive Particle Background
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particlesArray = [];
        const numParticles = 80;

        let mouse = {
            x: null,
            y: null,
            radius: 150
        };

        window.addEventListener('mousemove', function(event) {
            mouse.x = event.x;
            mouse.y = event.y;
        });

        window.addEventListener('mouseout', function() {
            mouse.x = undefined;
            mouse.y = undefined;
        });

        window.addEventListener('resize', function() {
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            initParticles();
        });

        class Particle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }

                // Check collision with mouse
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx*dx + dy*dy);

                if (distance < mouse.radius + this.size) {
                    if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                        this.x += 3;
                    }
                    if (mouse.x > this.x && this.x > this.size * 10) {
                        this.x -= 3;
                    }
                    if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                        this.y += 3;
                    }
                    if (mouse.y > this.y && this.y > this.size * 10) {
                        this.y -= 3;
                    }
                }
                
                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }

        function initParticles() {
            particlesArray = [];
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            for (let i = 0; i < numParticles; i++) {
                let size = (Math.random() * 2) + 1;
                let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * 1) - 0.5;
                let directionY = (Math.random() * 1) - 0.5;
                let color = '#3EB4AC';
                particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }

        function animateParticles() {
            requestAnimationFrame(animateParticles);
            ctx.clearRect(0, 0, innerWidth, innerHeight);

            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
            connectParticles();
        }

        function connectParticles() {
            let opacityValue = 1;
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + 
                                   ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                    
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 15000);
                        ctx.strokeStyle = `rgba(62, 180, 172, ${opacityValue})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        initParticles();
        animateParticles();
    }

    // 7. Typewriter Effect for Code Block
    const codeBlock = document.getElementById('typewriter-code');
    if (codeBlock) {
        const htmlContent = codeBlock.innerHTML;
        codeBlock.innerHTML = '';
        
        let i = 0;
        let isTag = false;
        let text = '';
        
        // Add a cursor element
        const cursor = document.createElement('span');
        cursor.className = 'typewriter-cursor';
        codeBlock.parentNode.appendChild(cursor);

        // Delay start for dramatic effect
        setTimeout(() => {
            function typeWriter() {
                if (i < htmlContent.length) {
                    let char = htmlContent.charAt(i);
                    if (char === '<') isTag = true;
                    if (char === '>') {
                        isTag = false;
                        text += char;
                        i++;
                        codeBlock.innerHTML = text;
                        setTimeout(typeWriter, 10);
                        return;
                    }
                    
                    text += char;
                    if (!isTag) {
                        codeBlock.innerHTML = text;
                        setTimeout(typeWriter, Math.random() * 30 + 10); // Random typing speed
                    } else {
                        setTimeout(typeWriter, 0); // Fast forward through tags
                    }
                    i++;
                } else {
                    // Remove cursor after finished or keep it blinking
                    // cursor.remove();
                }
            }
            typeWriter();
        }, 1000);
    }

    // 8. Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusDiv = document.getElementById('form-status');
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            
            // Simulating network request
            submitBtn.disabled = true;
            submitBtn.innerText = 'Transmitiendo...';
            statusDiv.className = 'form-status';
            statusDiv.innerText = '';

            setTimeout(() => {
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerText = 'Transmitir Mensaje';
                statusDiv.className = 'form-status success';
                statusDiv.innerText = '[✓] Paquete de datos recibido con éxito. Conexión establecida.';
                
                // Clear success message after 5 seconds
                setTimeout(() => {
                    statusDiv.innerText = '';
                }, 5000);
            }, 2000);
        });
    }
});
