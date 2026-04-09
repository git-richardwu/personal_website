import Header from "../Header";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useTransition } from '../context/TransitionContext';
import Cookie from '../../assets/cookieIMG.png'
import { useMysteryContent } from "../context/MysteryContext";
import Sprite from "../Sprite";

const spriteData = {
    cookie: {
        name: "Misprint Fortune Cookie",
        src: Cookie,
        id: "cookie",
        description: `"odiacs, culpri not   lyin"`,
        list: []
    }
}

interface SkillProps { data: string[]; }

const Skills = ({ data }: SkillProps) => {
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
            transition={{ duration: 0.5 }}
            className="app skills-bgc">
            <Header whiteText={true} />
            <div className="page-layout">
                <div className="side"></div>
                <div className="page-content">
                    <IoMdArrowRoundBack onClick={handleClick} className="icon-style" size={24} />
                    <h2 className="title">Skills</h2>
                    <div className="information list-shift">
                        <ul className="bullets">
                            {data.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="side"><div className="side"><AnimatePresence>
                    {showMysteryToggle ? <Sprite src={spriteData.cookie.src} name={spriteData.cookie.name} id={spriteData.cookie.id} description={spriteData.cookie.description} list={spriteData.cookie.list} speed={0} /> : null}

                </AnimatePresence></div></div>
            </div>

        </motion.div>
    )
}

export default Skills;