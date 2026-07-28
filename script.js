// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

// Check for saved dark mode preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    html.classList.add('dark');
}

darkModeToggle?.addEventListener('click', () => {
    html.classList.toggle('dark');
    const theme = html.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// Smooth scroll to top on logo click
const homeLinks = document.querySelectorAll('a[href="index.html"]');
homeLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        if (window.location.pathname.endsWith('index.html') ||
            window.location.pathname.endsWith('/')) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

// Add fade-in animation on scroll for artifact cards
if ('IntersectionObserver' in window) {
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

    // Observe all artifact cards on library page
    document.querySelectorAll('.artifact-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });
}

// Add reading progress indicator for artifact pages
if (window.location.pathname.includes('artifact.html')) {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(to right, #BFA76A, #3A4D41);
        width: 0%;
        z-index: 100;
        transition: width 0.1s ease-out;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;
        progressBar.style.width = progress + '%';
    });
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Press 'D' for dark mode toggle
    if (e.key === 'd' || e.key === 'D') {
        if (!e.target.matches('input, textarea')) {
            darkModeToggle?.click();
        }
    }

    // Press 'H' to go home
    if (e.key === 'h' || e.key === 'H') {
        if (!e.target.matches('input, textarea')) {
            window.location.href = 'index.html';
        }
    }

    // Press 'L' to go to library
    if (e.key === 'l' || e.key === 'L') {
        if (!e.target.matches('input, textarea')) {
            window.location.href = 'library.html';
        }
    }

    // Press 'R' for random artifact (serendipity)
    if (e.key === 'r' || e.key === 'R') {
        if (!e.target.matches('input, textarea')) {
            window.location.href = 'library.html?random=true';
        }
    }
});

// Add hover effect for external links
document.addEventListener('DOMContentLoaded', () => {
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
});

// Console easter egg
console.log(`
╔════════════════════════════════════════════╗
║   Uday's Cabinet of Curiosities            ║
║                                            ║
║   "Wisdom is not what you know.            ║
║    It is how you hold what you know."      ║
║                                            ║
║   Built with patience, care, and time.     ║
╚════════════════════════════════════════════╝

Keyboard shortcuts:
  D - Toggle dark mode
  H - Go home
  L - Go to library
  R - Random artifact (serendipity)
`);