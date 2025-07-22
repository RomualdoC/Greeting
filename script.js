// Texto de la carta de amor
const loveText = `

Estaba practicando código ayer y me acordé de ti. Creé este proyecto almacenado en una web pública (por eso el link está raro). Te comparto el resultado. Y no es un virus jajaja.

La parte interesante son las animaciones; están sencillas pero me gustaron y espero ir mejorándolas. Estoy aprendiendo programación en mi tiempo libre.

Que tengas una bonita noche y llena de buena vibra. ✨✨✨

PD: Los corazones son decoración obligatoria en códigos HTML, jaja. 💻❤️.`;

// Variables globales
let typewriterIndex = 0;
let isTyping = false;
let musicPlaying = false;

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    startTypewriter();
    createFloatingHearts();
    createSparkles();
    createFallingHearts();
    setupMusicControls();
});

// Efecto typewriter
function startTypewriter() {
    const textElement = document.getElementById('typewriter-text');
    const cursor = document.querySelector('.cursor');
    
    if (!textElement) return;
    
    isTyping = true;
    typewriterIndex = 0;
    textElement.textContent = '';
    
    function typeNext() {
        if (typewriterIndex < loveText.length) {
            textElement.textContent += loveText.charAt(typewriterIndex);
            typewriterIndex++;
            
            // Velocidad variable para simular escritura natural
            const delay = Math.random() * 100 + 50;
            setTimeout(typeNext, delay);
        } else {
            isTyping = false;
            cursor.style.display = 'none';
            setTimeout(() => {
                cursor.style.display = 'inline-block';
            }, 500);
        }
    }
    
    typeNext();
}

// Corazones flotantes
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    if (!container) return;
    
    const hearts = ['💕', '💖', '💗', '💝', '💘'];
    
    function addHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 7000);
    }
    
    // Crear corazones cada 2-4 segundos
    setInterval(addHeart, Math.random() * 2000 + 2000);
    
    // Crear algunos corazones iniciales
    for (let i = 0; i < 3; i++) {
        setTimeout(addHeart, i * 1000);
    }
}

// Efectos de destellos
function createSparkles() {
    const container = document.querySelector('.sparkle-effect');
    if (!container) return;
    
    function addSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 2000);
    }
    
    // Crear destellos cada 1-3 segundos
    setInterval(addSparkle, Math.random() * 2000 + 1000);
    
    // Crear algunos destellos iniciales
    for (let i = 0; i < 5; i++) {
        setTimeout(addSparkle, i * 400);
    }
}

// Corazones cayendo
function createFallingHearts() {
    const container = document.querySelector('.falling-hearts');
    if (!container) return;
    
    const hearts = ['♥', '💕', '💖'];
    
    function addFallingHeart() {
        const heart = document.createElement('div');
        heart.className = 'falling-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
        heart.style.fontSize = (Math.random() * 10 + 10) + 'px';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 5000);
    }
    
    // Crear corazones cayendo cada 1-2 segundos
    setInterval(addFallingHeart, Math.random() * 1000 + 1000);
}

// Controles de música
function setupMusicControls() {
    const musicButton = document.getElementById('music-toggle');
    const musicElement = document.getElementById('romantic-music');
    
    if (!musicButton || !musicElement) return;
    
    musicButton.addEventListener('click', function() {
        if (musicPlaying) {
            musicElement.pause();
            musicButton.innerHTML = '<span class="music-icon">🎵</span><span class="music-text">Reproducir música</span>';
            musicPlaying = false;
        } else {
            // Nota: La reproducción automática puede estar bloqueada por el navegador
            musicElement.play().then(() => {
                musicButton.innerHTML = '<span class="music-icon">🔇</span><span class="music-text">Pausar música</span>';
                musicPlaying = true;
            }).catch((error) => {
                console.log('No se pudo reproducir la música automáticamente:', error);
                musicButton.innerHTML = '<span class="music-icon">❌</span><span class="music-text">Música no disponible</span>';
            });
        }
    });
}

// Efectos adicionales al hacer clic en el corazón principal
document.addEventListener('DOMContentLoaded', function() {
    const mainHeart = document.querySelector('.heart');
    if (mainHeart) {
        mainHeart.addEventListener('click', function() {
            // Crear explosión de corazones
            createHeartExplosion();
        });
    }
});

function createHeartExplosion() {
    const container = document.querySelector('.love-letter-container');
    if (!container) return;
    
    const hearts = ['💕', '💖', '💗', '💝', '💘', '❤️', '💜', '🧡'];
    
    for (let i = 0; i < 12; i++) {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.fontSize = '20px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.transform = 'translate(-50%, -50%)';
        
        container.appendChild(heart);
        
        // Animación de explosión
        const angle = (i / 12) * 2 * Math.PI;
        const distance = 100 + Math.random() * 100;
        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;
        
        heart.animate([
            { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
            { transform: `translate(calc(-50% + ${endX}px), calc(-50% + ${endY}px)) scale(1)`, opacity: 1, offset: 0.7 },
            { transform: `translate(calc(-50% + ${endX}px), calc(-50% + ${endY}px)) scale(0)`, opacity: 0 }
        ], {
            duration: 1500,
            easing: 'ease-out'
        }).onfinish = () => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        };
    }
}

// Efectos de parallax suave al mover el mouse
document.addEventListener('mousemove', function(e) {
    const hearts = document.querySelectorAll('.floating-heart, .falling-heart');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    hearts.forEach((heart, index) => {
        const speed = (index % 3 + 1) * 0.5;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        heart.style.transform += ` translate(${x}px, ${y}px)`;
    });
});
