import { gsap } from 'gsap';

class Presentacion {
    constructor(titulo, elementoId, size) {
        this.size = size
        this.titulo = titulo; //GUARDO EL TITULO EN UNA VARIABLE
        this.elemento = document.querySelector(`#${elementoId}`); //GUARDO EL ELEMENTO EN UNA VARIABLE
        this.letras = this.titulo.split("").map((letra) => `<span class="uppercase font-bold text-white ${this.size}">${letra}</span>`).join(""); //GUARDO EL TITULO EN UNA VARIABLE, LUEGO SEPARO CADA LETRA Y LAS GUARDO EN UN ARRAY, ITERO ESE ARRAY CON EL MAP Y GUARDO CADA LETRA EN UNA ETIQUETA SPAN, QUE LUEGO LA JUNTO EN ESTA VARIBLE "LETRAS"
        this.elemento.innerHTML = this.letras; //GUARDO EL RESULTADO DE "LETRAS" EN EL ELEMENTO PREVIAMENTE SELECCIONADO
    }

    animar() {

        //LUEGO CON "THIS.ELEMENTO.ID" ACCEDO AL CONTENIDO DE CADA ELEMENTO Y CON TEMPLATE STRING, CONCATENANDO CADA SPAN, LO ANIMO

        gsap.fromTo(`#${this.elemento.id} span`, 
            { opacity: 0 }, 
            { 
                opacity: 1, 
                duration: 0.5, 
                stagger: 0.1 
            }
        );
    }

}

const frase1 = "Jonatan Palavecino";
const frase2 = "Desarrollador Full Stack";
const heroTitle1 = "heroTitle1"; // ID del primer elemento
const heroTitle2 = "heroTitle2"; // ID del segundo elemento

export const titulo1 = new Presentacion(frase1, heroTitle1, "text-6xl font-black");
export const titulo2 = new Presentacion(frase2, heroTitle2, "text-4xl");

// console.log("%cStop!", "color:red; font-size: 4rem; font-weight: bold"); 