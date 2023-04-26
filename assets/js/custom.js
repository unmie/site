// loader
const screen_loader = document.getElementsByClassName('screen_loader');
if (screen_loader?.length) {
    setTimeout(() => {
        document.body.removeChild(screen_loader[0]);
    }, 200);
}

// Mobile menu js
const toggleMenu = () => {
    const menus = document.querySelector('.menus');
    const overlay = document.querySelector('.overlay');
    menus.classList.toggle('open-menus');
    overlay.classList.toggle('hidden');
};

// AOS Animation
if (window['AOS']) {
    window['AOS'].init({
        once: true,
    });
}

// Scroll to top
const scrollToTop = () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

window.onscroll = function () {
    setOnScroll();
};

const setOnScroll = () => {
    let scrollpos = window.scrollY;
    if (scrollpos > 0) {
        document.getElementById('scrollToTopBtn')?.classList.remove('hidden');
        document.getElementById('top-header')?.classList.add('sticky-header');
    } else {
        document.getElementById('scrollToTopBtn')?.classList.add('hidden');
        document.getElementById('top-header')?.classList.remove('sticky-header');
    }
};
setOnScroll();

// Light - Dark Mode
const toggleTheme = (isFirstTime = false) => {
    let theme = window.localStorage.getItem('theme') || 'light';

    if (!isFirstTime) {
        theme = theme === 'light' ? 'dark' : 'light';
    }
    window.localStorage.setItem('theme', theme);

    if (theme === 'dark') {
        document.querySelector('body').classList.add('dark');
    } else {
        document.querySelector('body').classList.remove('dark');
    }
};

toggleTheme(true);
