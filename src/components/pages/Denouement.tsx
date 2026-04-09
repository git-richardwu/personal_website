import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTransition } from '../context/TransitionContext';
import Alice from '../../assets/suspects/alice.png';
import Patches from '../../assets/suspects/patches.png';
import Burnie from '../../assets/suspects/burnie.png';
import Mike from '../../assets/suspects/mike.png'
import Aloe from '../../assets/weapons/aloe.png'
import Mallet from '../../assets/weapons/hammer.png'
import Piano from '../../assets/weapons/piano.png'
import Shovel from '../../assets/weapons/shovel.png'
import confetti from "canvas-confetti"

import { IoMdArrowRoundBack } from "react-icons/io";
import Card from "../Card";

const lineUp = {
    alice: {
        type: "suspect",
        name: "Alice Marmalady",
        src: Alice,
        id: "alice",
        description: "",
        info: [{
            category: "Star Sign",
            details: "Leo"
        }, {
            category: "Allergies",
            details: "Coffee"
        }, {
            category: "Potential Motive",
            details: "Broken tea set"
        },]
    }, patches: {
        type: "suspect",
        name: "Patches",
        src: Patches,
        id: "patches",
        description: "",
        info: [{
            category: "Star Sign",
            details: "Libra"
        }, {
            category: "Allergies",
            details: "Pisces"
        }, {
            category: "Potential Motive",
            details: "mrruh"
        }]
    }, burnie: {
        type: "suspect",
        name: "Burnie",
        src: Burnie,
        id: "burnie",
        description: "",
        info: [{
            category: "Star Sign",
            details: "Pisces"
        }, {
            category: "Allergies",
            details: "Peanuts"
        }, {
            category: "Potential Motive",
            details: "Life Insurance"
        }]
    }, mike: {
        type: "suspect",
        name: "Mike Kitsuragi",
        src: Mike,
        id: "mike",
        description: "",
        info: [{
            category: "Star Sign",
            details: "Gemini"
        }, {
            category: "Allergies",
            details: "Clay"
        }, {
            category: "Potential Motive",
            details: "Forgot to Zelle"
        }]
    },
}

const weapons = {
    plant: {
        type: "item",
        name: "Potted Plant",
        src: Aloe,
        id: "plant",
        description: "",
        info: [{
            category: "Found In",
            details: "Projects"
        }, {
            category: "Material",
            details: "Clay"
        }, {
            category: "Potential Motive(?)",
            details: "Hasn't been watered for weeks"
        },]
    }, shovel: {
        type: "item",
        name: "Shovel",
        src: Shovel,
        id: "patches",
        description: "",
        info: [{
            category: "Found In",
            details: "About"
        }, {
            category: "Material",
            details: "Metal/Wood"
        }, {
            category: "Potential Motive(?)",
            details: "Dug into the past"
        }]
    }, hammer: {
        type: "item",
        name: "Mallet",
        src: Mallet,
        id: "mallet",
        description: "",
        info: [{
            category: "Found In",
            details: "Experience"
        }, {
            category: "Material",
            details: "Wood"
        }, {
            category: "Potential Motive(?)",
            details: "It's a mallet"
        }]
    }, piano: {
        type: "item",
        name: "Grand Piano",
        src: Piano,
        id: "piano",
        description: "",
        info: [{
            category: "Found In",
            details: "Skills"
        }, {
            category: "Material",
            details: "Heavy Wood"
        }, {
            category: "Potential Motive(?)",
            details: "♫"
        }]
    },
}

const Denouement = () => {
    const { setIsAnimating, setClickX, setClickY, setTransitionColor } = useTransition();
    let navigate = useNavigate();
    const controls = useAnimationControls();

    const [answers, setAnswers] = useState({
        culprit: "",
        weapon: ""
    })
    const [solved, setSolved] = useState(false)

    const handleChange = (key: string, value: string) => {
        setAnswers(prev => ({ ...prev, [key]: value }))
    }

    const wrongShake = () => {
        controls.start({
            x: [0, -10, 10, -10, 10, 0],
            color: ["#F4EBE8", "#C94F4F", "#F4EBE8"],
            transition: { duration: 0.8 },
        });
    }

    const handleAccuse = () => {
        // Hey, no cheating!!!!
        if (answers.culprit === "Patches" && answers.weapon === "Potted Plant") {
            setSolved(true);
            confetti({
                particleCount: 100,
                spread: 90,
                origin: { y: 0.6 }
            });
        } else {
            wrongShake();
        }
        return;
    }

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
            transition={{ duration: 0.5 }} className="app denou-bgc">
            <div className="page-layout collapse">
                <div className="grid">
                    <Card type={lineUp.alice.type} src={lineUp.alice.src} name={lineUp.alice.name} id={lineUp.alice.id} info={lineUp.alice.info} />
                    <Card type={lineUp.patches.type} src={lineUp.patches.src} name={lineUp.patches.name} id={lineUp.patches.id} info={lineUp.patches.info} />
                    <Card type={lineUp.burnie.type} src={lineUp.burnie.src} name={lineUp.burnie.name} id={lineUp.burnie.id} info={lineUp.burnie.info} />
                    <Card type={lineUp.mike.type} src={lineUp.mike.src} name={lineUp.mike.name} id={lineUp.mike.id} info={lineUp.mike.info} />
                </div>
                <div className="page-content denou-gap">
                    <IoMdArrowRoundBack onClick={handleClick} className="icon-style" size={24} />
                    <h2 className="title">Make Your Accusation!</h2>
                    <p className="information">use the dropdown menus to make your statement</p>
                    <motion.div animate={controls} className="accusation">
                        The culprit is {" "}
                        <select value={answers.culprit} onChange={(e) => handleChange("culprit", e.target.value)}
                            className="dropdown">
                            <option value="">Select</option>
                            <option value="Alice Marmalady">Alice Marmalady</option>
                            <option value="Patches">Patches</option>
                            <option value="Burnie">Burnie</option>
                            <option value="Mike Kitsuragi">Mike Kitsuragi</option>
                        </select>
                        {", "}and the murder weapon used was the{" "}
                        <select value={answers.weapon} onChange={(e) => handleChange("weapon", e.target.value)}
                            className="dropdown">
                            <option value="">Select</option>
                            <option value="Mallet">Mallet</option>
                            <option value="Grand Piano">Grand Piano</option>
                            <option value="Potted Plant">Potted Plant</option>
                            <option value="Shovel">Shovel</option>
                        </select>
                        {"!"}
                    </motion.div>
                    <button onClick={handleAccuse} className="accuseBtn">Accuse!</button>
                    {solved ? <motion.div initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}>
                        <h2 className="title">You Solved It! 🎉</h2>
                    </motion.div> : null}
                </div>
                <div className="grid">
                    <Card type={weapons.hammer.type} src={weapons.hammer.src} name={weapons.hammer.name} id={weapons.hammer.id} info={weapons.hammer.info} />
                    <Card type={weapons.piano.type} src={weapons.piano.src} name={weapons.piano.name} id={weapons.piano.id} info={weapons.piano.info} description={weapons.piano.description} />
                    <Card type={weapons.plant.type} src={weapons.plant.src} name={weapons.plant.name} id={weapons.plant.id} info={weapons.plant.info} />
                    <Card type={weapons.shovel.type} src={weapons.shovel.src} name={weapons.shovel.name} id={weapons.shovel.id} info={weapons.shovel.info} />
                </div>
            </div>
        </motion.div>
    )
}
export default Denouement;