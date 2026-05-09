// NEXUS Technology - Interactivity

// 0. Sound Management
const SoundManager = {
    // Usando Mixkit (URLs muy estables y de alta calidad)
    hover: new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'),
    click: new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'),
    notif: new Audio('https://assets.mixkit.co/active_storage/sfx/2578/2578-preview.mp3'),
    typing: new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'), // Click digital para typing
    muted: true,
    
    init() {
        [this.hover, this.click, this.notif, this.typing].forEach(a => {
            a.volume = 0.1;
            a.load();
        });
        
        // Desbloqueo proactivo por política de navegador
        const unlockAudio = () => {
            this.muted = false;
            // Reproducir y pausar inmediatamente para "desbloquear" el contexto de audio
            const silentPlay = this.hover.play();
            if (silentPlay !== undefined) {
                silentPlay.then(() => {
                    this.hover.pause();
                    this.hover.currentTime = 0;
                }).catch(() => {});
            }
            
            const btn = document.getElementById('sound-toggle');
            if (btn) btn.classList.add('active');
            
            // Remover listeners una vez desbloqueado
            ['click', 'touchstart', 'scroll', 'keydown'].forEach(evt => 
                window.removeEventListener(evt, unlockAudio)
            );
        };

        ['click', 'touchstart', 'scroll', 'keydown'].forEach(evt => 
            window.addEventListener(evt, unlockAudio)
        );

        // Manual toggle
        const toggleBtn = document.getElementById('sound-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.muted = !this.muted;
                toggleBtn.classList.toggle('active', !this.muted);
                if (!this.muted) this.play('click');
            });
        }
    },
    
    play(type) {
        if (this.muted) return;
        const sound = this[type];
        if (sound) {
            const playPromise = sound.cloneNode(true).play(); // cloneNode permite superposición de sonidos rápidos
            if (playPromise !== undefined) {
                playPromise.catch(() => {});
            }
        }
    }
};

SoundManager.init();

// 0.1 Preloader Logic
setTimeout(() => {
    const preloader = document.getElementById('preloader');
    const progressBar = document.querySelector('.progress-bar');
    const typingSpan = document.querySelector('.preloader-text .typing');
    
    if (preloader) {
        // Simular progreso de carga automático
        setTimeout(() => {
            if (progressBar) progressBar.style.width = '100%';
            if (typingSpan) typingSpan.innerText = 'SISTEMA INICIALIZADO';
            
            setTimeout(() => {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                    // Iniciar la animación de escritura automáticamente
                    if (window.startHeroTypewriter) window.startHeroTypewriter();
                }, 800);
            }, 500);
        }, 1800);
    }
});

// Cookie Consent Logic
(function() {
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;

    // Show banner if consent not yet given
    if (!localStorage.getItem('nexus_cookie_consent')) {
        setTimeout(() => banner.classList.remove('hidden'), 2000);
    } else {
        banner.style.display = 'none';
    }

    const dismiss = (accepted) => {
        localStorage.setItem('nexus_cookie_consent', accepted ? 'accepted' : 'rejected');
        banner.classList.add('hidden');
        setTimeout(() => banner.style.display = 'none', 500);
    };

    document.getElementById('cookie-accept')?.addEventListener('click', () => dismiss(true));
    document.getElementById('cookie-reject')?.addEventListener('click', () => dismiss(false));
    document.getElementById('cookie-settings-btn')?.addEventListener('click', (e) => {
        e.preventDefault();
        banner.style.display = '';
        setTimeout(() => banner.classList.remove('hidden'), 10);
    });
})();

setTimeout(() => {
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

    // 3. UI Sounds
    const attachSounds = () => {
        const soundElements = document.querySelectorAll('.cyber-btn, .nav-links a, .footer-links-group a, .whatsapp-float, .chat-toggle, .btn-main, .btn-ghost');
        soundElements.forEach(el => {
            el.addEventListener('mouseenter', () => SoundManager.play('hover'));
            el.addEventListener('click', () => SoundManager.play('click'));
        });
    };
    attachSounds();

    // Re-attach sounds for dynamically loaded elements if needed (e.g. Chatbot)
    window.attachSounds = attachSounds;

    // 2. Smart Navbar: Hide on scroll down, show on scroll up + mouse hover near top
    const navbar = document.getElementById('navbar');
    if (navbar) {
        let lastScrollY = window.scrollY;
        let isNavbarHidden = false;

        const hideNavbar = () => {
            navbar.classList.add('nav-hidden');
            isNavbarHidden = true;
        };

        const showNavbar = () => {
            navbar.classList.remove('nav-hidden');
            isNavbarHidden = false;
        };

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 80) {
                // Always show near the top of the page
                showNavbar();
                navbar.classList.remove('scrolled');
            } else if (currentScrollY > lastScrollY + 5) {
                // Scrolling DOWN — hide navbar
                hideNavbar();
                navbar.classList.add('scrolled');
            } else if (currentScrollY < lastScrollY - 5) {
                // Scrolling UP — show navbar
                showNavbar();
                navbar.classList.add('scrolled');
            }

            lastScrollY = currentScrollY;
        });

        // Show navbar when mouse moves close to the top of the screen
        document.addEventListener('mousemove', (e) => {
            if (e.clientY < 80 && isNavbarHidden) {
                showNavbar();
            }
        });
    }

    // 2.5 Mobile Hamburger Menu Logic
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.getElementById('nav-overlay');

    if (hamburger && navLinks && navOverlay) {
        const toggleMenu = () => {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('open');
            navOverlay.classList.toggle('open');
            // Prevent scrolling when menu is open
            document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
        };

        hamburger.addEventListener('click', toggleMenu);
        navOverlay.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('open')) {
                    toggleMenu();
                }
            });
        });
    }

    // 2.6 Video Demo Modal Logic
    const btnOpenDemo = document.getElementById('btn-open-demo');
    const btnCloseDemo = document.getElementById('btn-close-demo');
    const videoModal = document.getElementById('video-modal');
    const demoIframe = document.getElementById('demo-iframe');
    
    // Using a tech-related placeholder video (e.g. abstract tech background or similar)
    const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"; // Placeholder, the user can change this later

    if (btnOpenDemo && videoModal && btnCloseDemo && demoIframe) {
        btnOpenDemo.addEventListener('click', (e) => {
            e.preventDefault();
            videoModal.classList.add('active');
            demoIframe.src = videoUrl;
            document.body.style.overflow = 'hidden';
        });

        const closeVideoModal = () => {
            videoModal.classList.remove('active');
            setTimeout(() => {
                demoIframe.src = ""; // Stop video from playing in background
            }, 400);
            document.body.style.overflow = '';
        };

        btnCloseDemo.addEventListener('click', closeVideoModal);
        
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                closeVideoModal();
            }
        });
    }

    // 2.7 FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
            });

            // If it wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 40 + "px"; // 40px for padding
            }
        });
    });

    // 3. Interactive Tilt Effects
    const tiltElements = document.querySelectorAll('.glass-card, .metric-card');
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
    });

    // 3.5 Magnetic Buttons
    const magneticBtns = document.querySelectorAll('.cyber-btn, .btn-contact');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const moveX = (x - centerX) / 3;
            const moveY = (y - centerY) / 3;
            
            btn.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0) scale(1)';
        });
    });

    // 4. Counter Animation for Metrics
    const counters = document.querySelectorAll('.counter');
    
    const animateCounters = () => {
        counters.forEach(counter => {
            const target = parseFloat(counter.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const startTime = performance.now();
            const startValue = 0;

            const update = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function: easeOutQuart
                const easeProgress = 1 - Math.pow(1 - progress, 4);
                const currentValue = startValue + (target - startValue) * easeProgress;
                
                if (target % 1 !== 0) {
                    counter.innerText = currentValue.toFixed(1);
                } else {
                    counter.innerText = Math.floor(currentValue);
                }

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    counter.innerText = target;
                }
            };
            
            requestAnimationFrame(update);
        });
    };

    // Use IntersectionObserver to trigger counters only when visible
    const metricsSection = document.querySelector('.metrics-section');
    if (metricsSection) {
        const metricObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setTimeout(animateCounters, 300); // Slight delay for impact
                metricObserver.disconnect();
            }
        }, { threshold: 0.2 });
        metricObserver.observe(metricsSection);
    }

    // 5. Button click effects
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.style.transform = "scale(0.92)";
        });
        btn.addEventListener('mouseup', () => {
            btn.style.transform = "scale(1)";
        });
    });

    // 6. Tech Stack Tabs Logic
    const techTabs = document.querySelectorAll('.tech-tab');
    const techCategories = document.querySelectorAll('.tech-category');

    techTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-category');

            // Update active tab
            techTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update active category with glitchy feel
            techCategories.forEach(cat => {
                cat.classList.remove('active');
                if (cat.id === target) {
                    cat.classList.add('active');
                }
            });
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

        window.addEventListener('mousemove', function (event) {
            mouse.x = event.x;
            mouse.y = event.y;
        });

        window.addEventListener('mouseout', function () {
            mouse.x = undefined;
            mouse.y = undefined;
        });

        window.addEventListener('resize', function () {
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
                let distance = Math.sqrt(dx * dx + dy * dy);

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
                    // Play typing sound for non-space characters
                    if (char !== ' ' && char !== '\n') {
                        SoundManager.play('typing');
                    }
                    setTimeout(typeWriter, Math.random() * 30 + 10); // Random typing speed
                } else {
                    setTimeout(typeWriter, 0); // Fast forward through tags
                }
                i++;
            }
        }

        // Export function to be called from Preloader
        window.startHeroTypewriter = () => {
            setTimeout(typeWriter, 500);
        };
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
                statusDiv.innerText = '[✓] Paquete de datos recibido con éxito. Muy pronto uno de nuestros ejecutivos te contactará.';

                // Clear success message after 5 seconds
                setTimeout(() => {
                    statusDiv.innerText = '';
                }, 5000);
            }, 2000);
        });
    }

    // 9. NEX-IA Chatbot Logic
    const chatToggle = document.getElementById('chat-toggle');
    const chatPanel = document.getElementById('chat-panel');
    const closeChat = document.getElementById('close-chat');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendChat = document.getElementById('send-chat');

    let isFirstOpen = true;

    // Build Knowledge Base from JSON file
    let nexusData = null;

    async function loadNexusKnowledge() {
        try {
            const response = await fetch('knowledge.json');
            nexusData = await response.json();
            console.log('NEX-IA Knowledge Sincronizado:', nexusData);
        } catch (error) {
            console.error('Error cargando base de conocimientos:', error);
            // Fallback to basic info if JSON fails
            nexusData = {
                company: { name: "NEXUS Technology" },
                products: [{ name: "NEXUS ERP" }]
            };
        }
    }

    // Initialize knowledge loading
    loadNexusKnowledge();

    function toggleChat() {
        chatPanel.classList.toggle('active');
        if (chatPanel.classList.contains('active') && isFirstOpen) {
            setTimeout(() => {
                appendMessage('bot', 'Hola, soy NEX-IA. Mi núcleo de datos ha sido actualizado con el archivo knowledge.json. ¿Qué información técnica o comercial necesitas de NEXUS?');
            }, 500);
            isFirstOpen = false;
        }
    }

    if (chatToggle) chatToggle.addEventListener('click', toggleChat);
    if (closeChat) closeChat.addEventListener('click', () => chatPanel.classList.remove('active'));

    function appendMessage(sender, text) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', sender === 'user' ? 'msg-user' : 'msg-bot');
        msgDiv.innerHTML = text; // Permite HTML para enlaces y botones
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Play notification sound for bot response
        if (sender === 'bot') {
            SoundManager.play('notif');
        }
    }

    function handleSend() {
        const text = chatInput.value.trim();
        if (!text || !nexusData) return;

        appendMessage('user', text);
        chatInput.value = '';

        const typingDiv = document.createElement('div');
        typingDiv.classList.add('message', 'msg-bot');
        typingDiv.innerHTML = 'Conectando con canales oficiales<span class="typing-indicator">...</span>';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        let dots = 0;
        const typingInterval = setInterval(() => {
            dots = (dots + 1) % 4;
            typingDiv.querySelector('.typing-indicator').innerText = '.'.repeat(dots);
        }, 300);

        setTimeout(() => {
            clearInterval(typingInterval);
            typingDiv.remove();

            const lowerText = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            let response = "";
            const erp = nexusData.products[0];
            const waLink = "https://wa.me/584121234567?text=Hola%20equipo%20de%20NEXUS%20Technology%2C%20deseo%20hablar%20con%20un%20asesor";

            // 1. GREETINGS & IDENTITY
            if (lowerText.match(/(hola|buenos|buenas|saludos|hey|que tal)/)) {
                response = `¡Hola! Soy NEX-IA, el sistema experto de ${nexusData.company.name}. He analizado el White Paper de NEXUS ERP al 100%. ¿Qué área técnica, operativa o estratégica deseas explorar?`;
            } 
            // 1.5 CONTACT & SALES (PRIORITY)
            else if (lowerText.match(/(hablar|comercial|ventas|soporte|asesor|comunicarme|ayuda humana|whatsapp|telefono|contacto|comprar|vendedor)/)) {
                response = `¡Entendido! Para una atención personalizada, puedes comunicarte directamente con nuestro equipo de Ventas y Soporte vía WhatsApp:<br><br><a href="${waLink}" target="_blank" class="btn-main cyber-btn" style="text-decoration:none; display:inline-block; padding: 10px 20px; font-size: 0.9rem;">Chatear en WhatsApp</a>`;
            }
            // 2. ETYMOLOGY & PHILOSOPHY
            else if (lowerText.match(/(que significa|que es nexus|significado|nombre|etimologia|raiz)/)) {
                response = `El nombre NEXUS proviene del latín: "${erp.etymology}". ${nexusData.company.description} Nuestra meta es ser el puente hacia el futuro.`;
            }
            // 3. ERP GENERAL & CONCEPT
            else if (lowerText.match(/(que es nexus erp|para que sirve|explicame el erp|con que se come)/)) {
                response = `NEXUS ERP es ${erp.concept}. Se basa en una ${erp.architecture.style} y está diseñado para unificar visiones con resultados.`;
            }
            // 4. ARCHITECTURE & MODULARITY
            else if (lowerText.match(/(arquitectura|microservicios|modular|escalable|api|crecimiento|isotipo|cubo)/)) {
                response = `Nuestra arquitectura está inspirada en nuestro isotipo cúbico fragmentado. ${erp.architecture.scalability} Además, el "espacio abierto" en nuestro centro simboliza la transparencia de nuestro ${erp.architecture.api}.`;
            }
            // 5. MULTI-COMPANY
            else if (lowerText.match(/(multiempresa|varias empresas|multi-empresa|razones sociales|holding|sucursales)/)) {
                response = `NEXUS ERP es el único sistema en Venezuela con una arquitectura ${erp.architecture.multi_company}. Controlas todo tu holding en tiempo real con un solo clic.`;
            }
            // 6. UI/UX & DESIGN
            else if (lowerText.match(/(colores|diseño|ui|ux|interfaz|azul|turquesa|tipografia|fuente)/)) {
                response = `Nuestra UI utiliza ${erp.design_philosophy.colors.Blue_Deep} y ${erp.design_philosophy.colors.Turquoise_Aqua}. Usamos tipografía Sans Serif de peso variable para garantizar precisión visual.`;
            }
            // 7. PILLARS & VALUES
            else if (lowerText.match(/(pilares|valores|innovacion|precision|excelencia)/)) {
                response = `Nos basamos en tres pilares: ${erp.pillars.join(', ')}. Cada línea de código está optimizada para ofrecer ángulos exactos en tus reportes.`;
            }
            // 8. DATABASE & SOVEREIGNTY
            else if (lowerText.match(/(base de datos|database|postgresql|donde se guardan|mis datos|dueno de los datos)/)) {
                response = `Utilizamos ${erp.tech_stack.database}. Garantizamos la Soberanía Total: la base de datos pertenece exclusivamente a tu empresa. El puente hacia el futuro no tiene peajes.`;
            }
            // 9. SECURITY & BLINDAJE
            else if (lowerText.match(/(seguridad|blindaje|cifrado|encriptacion|aes|tls|multifactor|mfa|acceso|auditoria|blockchain)/)) {
                response = `Protocolos de blindaje: ${erp.security.protocols.join('. ')}. Además, contamos con ${erp.security.disaster_recovery}.`;
            }
            // 10. AI (NEX-IA)
            else if (lowerText.match(/(nex-ia|inteligencia artificial|ia|predictivo|cerebro|automatizado)/)) {
                response = `${erp.ai.name} es el cerebro del sistema. ${erp.ai.role} Sus funciones incluyen: ${erp.ai.features.join(', ')}.`;
            }
            // 11. E-COMMERCE
            else if (lowerText.match(/(e-commerce|tienda|ventas online|soberania digital|comisiones|cuotas|marketplace)/)) {
                response = `Nuestro E-commerce Nativo ofrece ${erp.ecommerce.philosophy}. Beneficios: ${erp.ecommerce.benefits.join('. ')}.`;
            }
            // 12. OPERATIONAL SCOPE (HR, SUPPLY, INVENTORY)
            else if (lowerText.match(/(capital humano|talento|personal|nomina|trabajadores|empleados)/)) {
                response = `Gestionamos el ciclo de vida del colaborador: ${erp.operational_scope[0]}. Aseguramos integridad en beneficios y desempeño.`;
            } else if (lowerText.match(/(inventario|almacen|existencias|reabastecimiento|proveedores)/)) {
                response = `Control de existencias en tiempo real con ${erp.operational_scope[3]}. Alertas automáticas para una gestión sin quiebres.`;
            } else if (lowerText.match(/(compras|pedidos|ordenes de compra)/)) {
                response = `${erp.operational_scope[4]}. Optimizamos costos mediante inteligencia de datos.`;
            } else if (lowerText.match(/(logistica|ventas|crm|comercial|entrega)/)) {
                response = `Ciclo Comercial: ${erp.operational_scope[5]}. Incluye gestión de embudos de venta y CRM integrado.`;
            }
            // 13. TECH STACK (NODE, CI/CD, POSTGRES)
            else if (lowerText.match(/(tecnologia|stack|node|ci\/cd|minimalista|responsivo)/)) {
                response = `Stack NEXUS: Backend en ${erp.tech_stack.backend}, DB en ${erp.tech_stack.database}, ${erp.tech_stack.security} y ${erp.tech_stack.updates}.`;
            }
            // 14. COMPARISON
            else if (lowerText.match(/(comparativa|tradicional|diferencia|vs|convencional|generacional)/)) {
                const comp = nexusData.comparison.vs_traditional;
                response = `Diferencias clave: 1. ${comp[0].topic} (${comp[0].nexus}). 2. ${comp[1].topic} (${comp[1].nexus}). 3. ${comp[2].topic} (${comp[2].nexus}). NEXUS es un salto generacional.`;
            }
            // 15. REQUIREMENTS & HARDWARE
            else if (lowerText.match(/(requisitos|servidor|hardware|i5|ram|ssd|internet|fibra|impresora|fiscal|equipo|caja)/)) {
                response = `Requerimientos Mínimos: Servidor (${erp.requirements.server}), Equipos de Caja (i3, 8GB RAM, Win10 Pro), Internet (${erp.requirements.internet}) e impresoras fiscales como: ${erp.requirements.fiscal_printers.slice(0, 5).join(', ')}...`;
            }
            // 15.5 IMPLEMENTATION TIME
            else if (lowerText.match(/(tiempo|tarda|dias|implementacion|instalacion|demora)/)) {
                response = `Nuestra arquitectura de unificación permite una **Implementación Relámpago**: tu sistema estará operativo en un **máximo de 3 días hábiles**, incluyendo configuración y capacitación inicial.`;
            }
            // 16. MISSION / VISION
            else if (lowerText.match(/(mision|vision|objetivo|referente|caos)/)) {
                response = `Misión: ${nexusData.company.mission}. Visión: ${nexusData.company.vision}`;
            }
            // 17. PROS / CONS / TRAINING
            else if (lowerText.match(/(ventajas|beneficios|desventajas|contras|capacitacion|aprender)/)) {
                response = `Ventajas: ${erp.pros.join(', ')}. Nota: Requiere ${erp.cons[0]} para dominar herramientas como NEX-IA.`;
            } else {
                response = `${nexusData.conclusion} ¿Hay alguna sección específica del White Paper (Seguridad, IA, E-commerce, Hardware) que quieras profundizar?`;
            }

            appendMessage('bot', response);
        }, 1200);
    }

    if (sendChat) sendChat.addEventListener('click', handleSend);
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSend();
        });
    }
});
