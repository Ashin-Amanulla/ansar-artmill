document.addEventListener('DOMContentLoaded', () => {

    // 1. Hero Animation Trigger
    const hero = document.querySelector('.hero');
    if (hero) {
        setTimeout(() => {
            hero.classList.add('loaded');
        }, 100);
    }

    // 2. Sticky Header on Scroll
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Mobile Navigation Toggle
    const menuIcon = document.getElementById('menu-icon');
    const mobileNav = document.getElementById('mobile-nav');
    
    menuIcon.addEventListener('click', () => {
        const isActive = mobileNav.classList.toggle('active');
        if (isActive) {
            menuIcon.setAttribute('name', 'close-outline');
        } else {
            menuIcon.setAttribute('name', 'menu-outline');
        }
    });

    // Close mobile nav when clicking a link
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            menuIcon.setAttribute('name', 'menu-outline');
        });
    });

    // 4. Scroll Reveal Animations (Intersection Observer)
    const fadeSections = document.querySelectorAll('.fade-in-section');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeSections.forEach(section => {
        appearOnScroll.observe(section);
    });

    // 5. Parallax effect for specific images (Optional subtle effect)
    const parallaxImg = document.querySelector('.parallax-img');
    if (parallaxImg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const rate = scrolled * 0.05;
            parallaxImg.style.transform = `translateY(${rate}px)`;
        });
    }

});
