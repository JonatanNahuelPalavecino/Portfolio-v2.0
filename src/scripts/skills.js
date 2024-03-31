import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export const getSkillsBox = () => document.querySelector("#skills");

const skillsInDetails = [
    {
        id: 1,
        skill: "Javascript",
        details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4",]
    },
    {
        id: 2,
        skill: "ReactJS",
        details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4",]
    },
    {
        id: 3,
        skill: "NodeJS",
        details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4",]
    },
    {
        id: 4,
        skill: "ExpressJS",
        details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4",]
    },
    {
        id: 5,
        skill: "Python",
        details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4",]
    },
    {
        id: 6,
        skill: "MySQL",
        details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4",]
    },
    {
        id: 7,
        skill: "SQL",
        details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4",]
    },
    {
        id: 8,
        skill: "HTML5",
        details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4",]
    },
    {
        id: 9,
        skill: "CSS3",
        details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4",]
    },
    {
        id: 10,
        skill: "SASS",
        details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4",]
    },
    {
        id: 11,
        skill: "Frameworks y Librerias",
        details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4",]
    },
]

const Modal = ({ setSelectedSkill, selectedSkill }) => {

    if (!selectedSkill) {
        return null; // Si no hay ninguna habilidad seleccionada, no se renderiza el modal
    }

    return (
        <motion.div className="fixed top-0 left-0 flex justify-center items-center w-full h-full z-50">
            <motion.div
                className="bg-gray-200 rounded-lg p-4 m-4 w-3/4"
                layoutId={selectedSkill.id}
            >
                <motion.p className="h-4 w-3/4 mb-2">{selectedSkill.skill}</motion.p>
                {selectedSkill.details.map((detail, index) => ( // Accede a details y haz el mapeo correctamente
                    <motion.p key={index}>{detail}</motion.p>
                ))}
                <motion.button className="rounded-full" onClick={() => setSelectedSkill(null)}>Cerrar</motion.button>
            </motion.div>
        </motion.div>
    );
};

export const SkillsItems = () => {
    const [selectedSkill, setSelectedSkill] = useState()

    return (
        <>
            <em className="uppercase font-bold text-white not-italic text-4xl my-8">habilidades técnicas</em>
            <div  className="relative w-[85%] flex flex-wrap justify-evenly items-center">
            
                {
                    skillsInDetails.map((skill, index) => (
                        <motion.div
                            key={index} 
                            className="bg-gray-200 rounded-lg p-4 m-4 w-96"
                            layoutId={skill.id} 
                            initial={{ opacity: 0 }} // Opacidad inicial
                            animate={{ opacity: selectedSkill ? 0.5 : 1 }} // Opacidad cuando selectedPost está presente
                            transition={{ duration: 0.5 }} // Duración de la transición
                            onClick={() => setSelectedSkill(skill)}
                        >
                            <motion.p>{skill.skill}</motion.p>
                        </motion.div>
                    ))
                }
                
            </div>

            <AnimatePresence>
                {selectedSkill && (
                    <Modal selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill}/>
                )}
            </AnimatePresence>
        </>
    )
}