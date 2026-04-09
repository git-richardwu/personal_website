import './LandingPage.css'
import Tile from '../Tile';
import Header from '../Header';
import { motion, AnimatePresence } from "framer-motion";
import { useMysteryContent } from "../context/MysteryContext";
import { MdGroups2 } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useTransition } from '../context/TransitionContext';

const LandingPage = () => {
    const { showMysteryToggle } = useMysteryContent();
    const { setIsAnimating, setClickX, setClickY, setTransitionColor } = useTransition();
    let navigate = useNavigate();

    const tiles = [
        { id: 1, title: 'About', color: '#6F8F72', path: '/about' },
        { id: 2, title: 'Experience', color: '#5C7A8D', path: '/experience' },
        { id: 3, title: 'Skills', color: '#C2A14D', path: '/skills' },
        { id: 4, title: 'Projects', color: '#C94F4F', path: '/projects' }
    ]
    const handleClick = (e: any) => {
        const { clientX, clientY } = e;
        setClickX(clientX);
        setClickY(clientY);
        setIsAnimating(true);
        setTransitionColor("#444444");
        setTimeout(() => {
            navigate('/denouement');
            setIsAnimating(false);
        }, 800);
    };

    return (
        <div className="app landing-bgc">
            <Header whiteText={false} />
            <div className="page-layout">
                <div className="side">
                    <AnimatePresence>
                        {showMysteryToggle ? <motion.div initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            transition={{ duration: 0.3 }} className="objective">
                            <h2>Hello, I have been murdered.</h2>
                            <p>Throughout this website, you can find clues about the circumstances of my death. However, due to filing mismanagement,
                                ONE of the clues actually belongs to another case and is not relevant to this one —
                                so watch for any contradictions between the clues. Good luck!</p>
                                <i>*all illustrations by <a href="https://www.irasutoya.com/" target="_blank" rel="noreferrer">irasutoya</a>*</i>
                                
                        </motion.div> : null}
                    </AnimatePresence>
                </div>
                <div className='main-content'>
                    <div className='navigation-layout'>
                        {tiles.map((tile, index) => (
                            <Tile key={tile.id} color={tile.color} title={tile.title} to={tile.path} index={index} />
                        ))}
                    </div>
                </div>
                <div className="side">
                    <AnimatePresence>
                        {showMysteryToggle ? <motion.div initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            transition={{ duration: 0.3 }} className="objective">
                            <p>When you have gathered all the evidence, click on the icon below to check the list of suspects and make your deduction! </p>
                            <MdGroups2 onClick={handleClick} color={'#444444'} size={42}/>
                        </motion.div> : null}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;