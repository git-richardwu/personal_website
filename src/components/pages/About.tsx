import Header from "../Header";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useTransition } from '../context/TransitionContext';
import Report from '../../assets/reportIMG.png'
import { useMysteryContent } from "../context/MysteryContext";
import Sprite from "../Sprite";

const spriteData = {
    report: {
        name: "Autopsy Report",
        src: Report,
        id: "report",
        description: "",
        list: [{ category: "Cause of Death", details: "Blunt force trauma to the head." },
        { category: "General Physique", details: "Unremarkable." },
        { category: "External Examination", details: "Fragments of terracotta-colored clay and small soil particles discovered on hair and scalp. Hands are clean." },
        { category: "Internal Examination", details: "Carpal tunnel (chronic condition)." }]
    }
}

interface AboutProps {
    data: string
}

const About = ({ data }: AboutProps) => {
    const { setIsAnimating, setClickX, setClickY, setTransitionColor } = useTransition();
    const { showMysteryToggle } = useMysteryContent();
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
            transition={{ duration: 0.5 }} className="app about-bgc">
            <Header whiteText={true} />
            <div className="page-layout">
                <div className="side">
                    <AnimatePresence>
                        {showMysteryToggle ? <Sprite src={spriteData.report.src} name={spriteData.report.name} id={spriteData.report.id} description={spriteData.report.description} list={spriteData.report.list} speed={0} /> : null}

                    </AnimatePresence>
                </div>
                <div className="page-content">
                    <IoMdArrowRoundBack onClick={handleClick} className="icon-style" size={24} />
                    <h2 className="title">About</h2>
                    <p className="information">{data}</p>
                </div>
                <div className="side">
                    {/* {showMysteryToggle ? <Sprite src={Report} id={""} description={""} name="report" speed={0} list={[]} /> : null} */}
                </div>
            </div>
        </motion.div>
    )
}
export default About;