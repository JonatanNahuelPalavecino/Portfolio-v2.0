import * as THREE from 'three';
import { gsap } from 'gsap';


let scene = new THREE.Scene()

let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )

let mouseX
let mouseY

let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
renderer.setSize( window.innerWidth, window.innerHeight )
renderer.setClearColor(0x000000, 0);

let sphere = document.getElementById("sphere")

sphere.appendChild(renderer.domElement)

window.addEventListener("resize", function() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize( window.innerWidth, window.innerHeight )
})

let distance = Math.min(200, window.innerWidth / 4)
let geometry = new THREE.BufferGeometry()

let vertices = []

for (let i = 0; i < 3200; i++) {
    
    let vertex = new THREE.Vector3()
    
    let theta = Math.random() * Math.PI * 2;
    let phi = Math.random() * Math.PI * 2;
    
    vertex.x = distance * Math.sin(theta) * Math.cos(phi)
    vertex.y = distance * Math.sin(theta) * Math.sin(phi)
    vertex.z = distance * Math.cos(theta)
    
    vertices.push(vertex.x, vertex.y, vertex.z);
}

geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));

let particles = new THREE.Points(geometry, new THREE.PointsMaterial({
    color: 0xff0000, 
    size: 2,
    transparent: 0,
    opacity: 0.2
}))

let renderingParent = new THREE.Group()
renderingParent.add(particles)

let resizeContainer = new THREE.Group()
resizeContainer.add(renderingParent)
scene.add(resizeContainer)

camera.position.z = 400

export const animate = () => {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

let myTween

export const onMouseMove = (event) => {
    if (myTween) {
        myTween.kill();
    }

    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

    myTween = gsap.to(particles.rotation, {
        duration: 0.1,
        x: mouseY * -1,
        y: mouseX
    });

}

let animProps = {
    scale: 1, 
    xRot: 0, 
    yRot: 0,
}

gsap.to(animProps, {
    duration: 10, 
    scale: 1.3, 
    repeat: -1, 
    yoyo: true, 
    ease: "sine", 
    onUpdate: function () {
        renderingParent.scale.set(animProps.scale, animProps.scale, animProps.scale)
    }
})

gsap.to(animProps, {
    duration: 120, 
    xRot: Math.PI * 2, 
    yRot: Math.PI * 4, 
    repeat: -1, 
    yoyo: true, 
    ease: "none", 
    onUpdate: function () {
        renderingParent.rotation.set(animProps.xRot, animProps.yRot, 0)
    }
})

gsap.to(particles.material, {
    duration: 1,
    opacity: 1,
    css: { boxShadow: "10px 5px 5px black" },
    ease: "power2.out",
    yoyo: true,
    repeat: -1 
});

export const handleScrollSphere = () => {

    let newZ = 200;

    const scrollTop = window.scrollY

    if (scrollTop > 400) {
        gsap.to(renderingParent.position, {
            duration: 2, 
            z: newZ,
            ease: "power2.out"
        });
        nav.classList.add("show");
    } else {
        gsap.to(renderingParent.position, {
            duration: 2, 
            z: 0,
            ease: "power2.out"
        });
    }
}

export const handleVibrationSphere = () => {
    const positionsArray = particles.geometry.attributes.position.array;

    for (let i = 0; i < positionsArray.length; i += 3) {
        gsap.to(positionsArray, {
            duration: 0.2,
            delay: Math.random() * 0.5,
            [i]: positionsArray[i] + Math.random() * 10 - 5, // x
            [i + 1]: positionsArray[i + 1] + Math.random() * 10 - 5, // y
            [i + 2]: positionsArray[i + 2] + Math.random() * 10 - 5, // z
            onUpdate: function () {
                particles.geometry.attributes.position.needsUpdate = true;
            },
            repeat: -1, // Repetir infinitamente
            yoyo: true, // Retroceder la animación
        });
    }
}


