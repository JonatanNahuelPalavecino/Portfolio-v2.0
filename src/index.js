import { aside, handleAside, handleScroll } from "./scripts/nav.js";
import {titulo1, titulo2} from "./scripts/hero.js"
import { animate, handleScrollSphere, handleVibrationSphere, onMouseMove } from "./scripts/esfera.js";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { SkillsItems, getSkillsBox } from "./scripts/skills.js";


// NAV

window.addEventListener("scroll", handleScroll);

aside.addEventListener('click', handleAside);

// HERO

titulo1.animar();
titulo2.animar();

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
