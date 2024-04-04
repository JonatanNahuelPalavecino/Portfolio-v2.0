import { aside, handleAside, handleScroll, handleSectionViewPort, navLinks} from "./scripts/nav.js";
import {subtitulo, titulo} from "./scripts/hero.js"
import { animate, handleScrollSphere, handleVibrationSphere, onMouseMove } from "./scripts/esfera.js";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { SkillsItems, getSkillsBox } from "./scripts/skills.js";


// NAV

window.addEventListener("scroll", handleScroll);

aside.addEventListener('click', handleAside);

document.addEventListener("scroll", handleSectionViewPort)

navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    
      navLinks.forEach((otherLink) => {
          if (otherLink !== link) {
              otherLink.classList.remove("active");
          }
      });
      link.classList.add("active");
  });

  link.addEventListener("mouseleave", () => {
    
      navLinks.forEach((otherLink) => {
          otherLink.classList.remove("active");
      });
  });
});

// HERO

titulo.fade()
subtitulo.animar();

// ESFERA

document.addEventListener("mousemove", onMouseMove, false)
document.removeEventListener("mouseout", onMouseMove)

window.addEventListener("scroll", handleScrollSphere)
window.addEventListener("dblclick", handleVibrationSphere)

animate()

//SKILLS

document.addEventListener('DOMContentLoaded', () => {
    const skillsBox = getSkillsBox();
    if (skillsBox) {
      ReactDOM.createRoot(skillsBox).render(<SkillsItems />);
    } else {
      console.error('El contenedor de habilidades no se encontró');
    }
  });
