import { gsap } from 'gsap';

export const aside = document.getElementById('aside');
const navAside = document.getElementById('navAside');
let navBox = document.getElementById("nav");
let burger = document.getElementById("burger");
let burgerItems = document.querySelectorAll(".burger-items");
let sections = document.querySelectorAll("section")
export let navLinks = document.querySelectorAll("nav a")
let lastScrollTop = 0;
let isOpen = false;
let delay = 0.3;

const resetLinks = () => navLinks.forEach(link => link.classList.remove("active"))

export const handleSectionViewPort = () => {

    const {scrollY} = window

    sections.forEach((section) => {

        const {id, offsetTop, clientHeight} = section
        const offset = offsetTop -1

        if(scrollY >= offset && scrollY < offset + clientHeight / 2) {

            resetLinks()

            navLinks.forEach((link) => {

                if (link.dataset.scroll === id) {

                    link.classList.add("active")

                }

            })
        }
    })

}

export const handleScroll = () => {

    if (isOpen) {
        return;
    }

    const scrollTop = window.scrollY;
    const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
    
    if (scrollDirection === 'down') {
        navBox.classList.remove("show");
        navBox.classList.add("hidde");
    } else {
        navBox.classList.add("show");
        navBox.classList.remove("hidde");
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