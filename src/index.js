import { aside, handleAside, handleScroll } from "./scripts/nav.js";
import {titulo1, titulo2} from "./scripts/hero.js"
import { animate, handleScrollSphere, handleVibrationSphere, onMouseMove } from "./scripts/esfera.js";

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