import { useMysteryContent } from "./context/MysteryContext";
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa'
import { IoDocumentAttach } from 'react-icons/io5'
import { MdOutgoingMail } from "react-icons/md";
import './Header.css';
import resume from '../assets/Resume.pdf'

interface HeaderProps {
    whiteText: boolean
}

const Header = ({ whiteText }: HeaderProps) => {
    const { showMysteryToggle, toggleMystery } = useMysteryContent();

    return (
        <div className="header">
            <div>
                <div className="name">
                    <h1 className="name-style" style={whiteText ? { color: "#FFFFFF" } : { color: "#011627" }}>Richard Wu</h1>
                </div>
                <div className="sub-titles" style={whiteText ? { color: "#F4EBE8" } : { color: "#211A1E" }}>
                    <h3>software engineer</h3>
                    <h3>game developer</h3>
                    <h3>robotics instructor</h3>
                    <div className="mystery-toggle">
                        <h3>whodunnit enthusiast</h3>
                        <label className='toggle-switch'>
                            <input type='checkbox' checked={showMysteryToggle} onChange={toggleMystery} />
                            <span className='slider'></span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="icons">
                <a href={resume} rel="noopener noreferrer" target="_blank" className="icon-style" style={whiteText ? { color: "#FFFFFF" } : { color: "#011627" }}><IoDocumentAttach size={28}/></a>
                <a href="https://github.com/git-richardwu" rel="noopener noreferrer" target="_blank" className="icon-style" style={whiteText ? { color: "#FFFFFF" } : { color: "#011627" }}><FaGithubAlt size={28} /></a>
                <a href="https://www.linkedin.com/in/richard-wu-049b18114/" rel="noopener noreferrer" target="_blank" className="icon-style" style={whiteText ? { color: "#FFFFFF" } : { color: "#011627" }}><FaLinkedin size={28} /> </a>
                <a href="mailto:richardwu442@gmail.com" rel="noopener noreferrer" target="_blank" className="icon-style" style={whiteText ? { color: "#FFFFFF" } : { color: "#011627" }}><MdOutgoingMail  size={28} /> </a>

            </div>
        </div>
    )
}

export default Header;