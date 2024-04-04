import gsap from "gsap";

class Presentacion {
    constructor(word, box, size) {
        this.word = word;
        this.size = size
        this.box = box;
        this.loopNum = 0;
        this.txt = '';
    }  

    fade() {

        this.txt = this.word.split("").map(letra => `<span class="uppercase font-bold text-white ${this.size}">${letra}</span>`).join("");
        this.box.innerHTML = this.txt

        gsap.fromTo(`#${this.box.id} span`, 
            { opacity: 0 }, 
            { 
                opacity: 1, 
                duration: 0.5, 
                stagger: 0.1 
            }
        );
    }

    animar() {

        const i = this.loopNum;
        const fullTxt = this.word;

        this.txt = fullTxt.substring(0, this.txt.length + 1);
        this.box.innerHTML = `<span class="text-white uppercase font-bold ${this.size}">${this.txt}<span class="cursorText">|</span></span>`;

        const randomDelay = Math.random() * (150 - 50) + 50;
        this.loopNum++;
        const that = this;
  
        if (this.txt.length === fullTxt.length) {
            return
        } else {
            setTimeout(() => {

                that.animar();
        
            }, randomDelay);
        }
    }

}
const heroTitle = document.querySelector("#hero-title")
const fraseUno = "Jonatan Palavecino"
const fraseDos = "Desarrollador Full Stack";
const heroSubTitle = document.querySelector("#hero-subtitle"); // ID del segundo elemento

export const titulo = new Presentacion(fraseUno, heroTitle, "text-6xl");
export const subtitulo = new Presentacion(fraseDos, heroSubTitle, "text-4xl");

// console.log("%cStop!", "color:red; font-size: 4rem; font-weight: bold"); 