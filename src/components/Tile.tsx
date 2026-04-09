import './pages/LandingPage.css'
import { useNavigate } from "react-router-dom";
import { useTransition } from './context/TransitionContext';

interface TileProps {
    color: string,
    title: string,
    to: string,
    index: number
}

const Tiles = ({ color, title, to, index }: TileProps) => {
    const { setIsAnimating, setClickX, setClickY, setTransitionColor } = useTransition();
    let navigate = useNavigate();

    const handleClick = (e: any) => {
        const { clientX, clientY } = e;
        setClickX(clientX);
        setClickY(clientY);
        setIsAnimating(true);
        setTransitionColor(color);
        setTimeout(() => {
            navigate(to);
            setIsAnimating(false);
        }, 800);
    };
    return (
        <div onClick={handleClick} className="tile" style={{ backgroundColor: color, color: '#F7F6F2' }} key={index}>
            <div className="tile-text" style={{ transform: 'rotate(-45deg)' }} >
                <h5>{title}</h5>
            </div>
        </div>
    )
}

export default Tiles;