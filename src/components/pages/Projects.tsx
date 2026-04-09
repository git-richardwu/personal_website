import Header from "../Header";
import { FaGithub, FaLink } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useTransition } from '../context/TransitionContext';
import { useMysteryContent } from "../context/MysteryContext";
import Sprite from "../Sprite";
import Magnifier from '../../assets/magnifierIMG.png'
import ProteinBar from '../../assets/proteinIMG.png'

interface ProjectsProps {
    data: {
        name: string;
        description: string;
        period: string;
        bullets: string[];
        stack: string[];
        links: { github: string; demo: string; };
    }[]
};

const spriteData = {
    glass: {
        name: "Magnifying Glass",
        src: Magnifier,
        id: "magnifier",
        description: "Strands of unidentified black hair near the crime scene.",
        list: []
    },
    bar: {
        name: "Peanut Butter Protein Bar",
        src: ProteinBar,
        id: "protein",
        description: "Found on crime scene. Profilers believe this is the culprit's favorite snack.",
        list: []
    }
}

const Projects = ({ data }: ProjectsProps) => {
    const { showMysteryToggle } = useMysteryContent();
    const { setIsAnimating, setClickX, setClickY, setTransitionColor } = useTransition();
    let navigate = useNavigate();

    const handleClick = (e: any) => {
        const { clientX, clientY } = e;
        setClickX(clientX);
        setClickY(clientY);
        setIsAnimating(true);
        setTransitionColor("#F4EBE8");
        setTimeout(() => {
            navigate('/');
            setIsAnimating(false);
        }, 800);
    };

    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }} className="app projects-bgc">
            <Header whiteText={true} />
            <div className="page-layout">
                <div className="side">
                    {showMysteryToggle ? <Sprite src={spriteData.bar.src} name={spriteData.bar.name} id={spriteData.bar.id} description={spriteData.bar.description} list={spriteData.bar.list} speed={20} /> : null}
                </div>
                <div className="page-content">
                    <IoMdArrowRoundBack onClick={handleClick} className="icon-style" size={24} />
                    <h2 className="title">Projects</h2>
                    <div className="information">
                        {data.map((project, index) => (
                            <div className="project" key={index}>
                                <strong>
                                    {project.name} | <span className="date">{project.period}</span>
                                </strong>
                                <ul className="bullets">
                                    {project.bullets.map((bullet, index) => (
                                        <li key={index}>{bullet}</li>
                                    ))}
                                </ul>
                                <div className="links">
                                    <a href={project.links.github} rel="noopener noreferrer" target="_blank" className="icon-style"><FaGithub size={24} /></a>
                                    <a href={project.links.demo} rel="noopener noreferrer" target="_blank" className="icon-style"><FaLink size={24} /></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="side">
                    <div className="side"><AnimatePresence>
                        {showMysteryToggle ? <Sprite src={spriteData.glass.src} name={spriteData.glass.name} id={spriteData.glass.id} description={spriteData.glass.description} list={spriteData.glass.list} speed={40} /> : null}
                    </AnimatePresence></div></div>
            </div>
        </motion.div >
    )
}

export default Projects;