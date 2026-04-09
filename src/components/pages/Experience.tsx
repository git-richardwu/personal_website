import Header from "../Header";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useTransition } from '../context/TransitionContext';
import Letter from '../../assets/letterIMG.png'
import { useMysteryContent } from "../context/MysteryContext";
import Sprite from "../Sprite";


interface ExpProps { data: { title: string; company: string; period: string; bullets: string[]; }[]; }

const spriteData = {
    report: {
        name: "Letter from Forensics Dept.",
        src: Letter,
        id: "letter",
        description: `"Traces of hair not belonging to the victim were found at the crime scene, and after days of rigorous testing, we've discovered the hair is, in fact, orange."`,
        list: []
    }
}

const Experience = ({ data }: ExpProps) => {
    const { setIsAnimating, setClickX, setClickY, setTransitionColor } = useTransition();
    let navigate = useNavigate();
    const { showMysteryToggle } = useMysteryContent();


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
            transition={{ duration: 0.5 }} className="app exp-bgc">
            <Header whiteText={true} />
            <div className="page-layout">
                <div className="side"><AnimatePresence>
                    {showMysteryToggle ? <Sprite src={spriteData.report.src} name={spriteData.report.name} id={spriteData.report.id} description={spriteData.report.description} list={spriteData.report.list} speed={0} /> : null}

                </AnimatePresence></div>
                <div className="page-content">
                    <IoMdArrowRoundBack onClick={handleClick} className="icon-style" size={24} />
                    <h2 className="title">Experience</h2>
                    <div className="information">
                        {data.map((job, index) => (
                            <div key={index}>
                                <strong>
                                    {job.title} | <span className="date">{job.period}</span>
                                </strong>
                                <ul className="bullets">
                                    {job.bullets.map((bullet, index) => (
                                        <li key={index}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="side"></div>
            </div>
        </motion.div>
    )
}

export default Experience;