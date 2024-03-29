import { gsap } from 'gsap';

let nav = document.getElementById("nav");
let burger = document.getElementById("burger");
let burgerItems = document.querySelectorAll(".burger-items");
let lastScrollTop = 0;
export const aside = document.getElementById('aside');
const navAside = document.getElementById('navAside');
let isOpen = false;
let delay = 0.3;

export const handleScroll = () => {

    if (isOpen) {
        return;
    }

    const scrollTop = window.scrollY;
    const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
    
    if (scrollDirection === 'down') {
        nav.classList.remove("show");
        nav.classList.add("hidde");
    } else {
        nav.classList.add("show");
        nav.classList.remove("hidde");
    }

    lastScrollTop = scrollTop;
}

export const handleAside = () => {

    burgerItems.forEach((el) => {
        el.classList.toggle("active");
    })

    if (!isOpen) {
        
        gsap.to(burger, {
            top: "1.25rem",
            right: "0.75rem",
        });
        
        gsap.to(aside, {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            borderRadius: '0px',
            width: '200px',
            height: '100vh',
            top: 0,
            right: 0,
            duration: 0.5,
        });
        
        gsap.to(navAside, {
            display: "flex",
        });
        
        for (const item of navAside.children) {
                    
            gsap.to(item, {
                delay: delay,
                opacity: 1,
                y: 0,
            });

            delay += 0.1;

        }

        isOpen = true;
        delay = 0.2;

    } else {
        
        gsap.to(aside, {
            backgroundColor: "white",
            width: '50px',
            height: '50px',
            top: "1.25rem",
            right: "0.75rem",
            borderRadius: '50px',
            duration: 0.5,
            ease: 'power2.out',
        });

        gsap.to(burger, {
            top: 0,
            right: 0,
        });
                
        gsap.to(navAside, {
            display: "none",
        });

                
        for (const item of navAside.children) {
    
            gsap.to(item, {
                opacity: 0,
            });

        }

        isOpen = false;
    }
}