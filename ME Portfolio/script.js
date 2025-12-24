// Season Detection
function getSeason() {
    const month = new Date().getMonth() + 1; // 1-12
    if (month >= 3 && month <= 5) return 'spring';
    if (month >= 6 && month <= 8) return 'summer';
    if (month >= 9 && month <= 11) return 'fall';
    return 'winter';
}

const season = getSeason();
const seasonNames = {
    spring: 'Spring',
    summer: 'Summer',
    fall: 'Fall',
    winter: 'Winter'
};

// Apply season class to body and background
document.body.classList.add(season);
document.getElementById('seasonIndicator').textContent = `Currently in ${seasonNames[season]}`;
const backgroundImage = document.getElementById('backgroundImage');
if (backgroundImage) {
    backgroundImage.classList.add(season);
}

// Rotating Text Animation
const rotatingText = document.getElementById('rotatingText');
const words = ['Researcher', 'AI Engineer', 'Frontend Dev', 'Gamer'];
let currentIndex = 0;

function updateRotatingText() {
    // Fade out
    rotatingText.style.opacity = '0';
    rotatingText.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
        // Change text
        currentIndex = (currentIndex + 1) % words.length;
        rotatingText.textContent = words[currentIndex];
        
        // Fade in
        setTimeout(() => {
            rotatingText.style.opacity = '1';
            rotatingText.style.transform = 'translateY(0)';
        }, 50);
    }, 500); // Wait for fade out to complete
}

// Initialize with first word
rotatingText.textContent = words[0];
rotatingText.style.opacity = '1';

// Start the rotation after initial display
setTimeout(() => {
    setInterval(updateRotatingText, 3000); // Change every 3 seconds
}, 2000); // Start after 2 seconds

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});


// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const navbar = document.querySelector('.navbar');
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Contact Form Handler
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // In a real application, you would send this to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    document.getElementById('contactForm').reset();
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

