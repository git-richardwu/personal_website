import { motion } from "framer-motion";
import '../App.css'

type InfoProps = {
    category: string,
    details: string
}

type CardProps = {
    type: string;
    src: string;
    name: string;
    id: string;
    info: InfoProps[];
    description?: string
};

const Card = ({ type, src, name, id, info, description }: CardProps) => {
    return (
        <motion.div
            id={id}
            className="card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
        >
            <img src={src} alt={name} />
            <div className="card-text">
                <span className="card-label">{name}</span>
                {
                    type ? <ul>{info.map((item, index) => (
                        <div className="card-list" key={index}>
                            <strong style={{ textDecoration: "underline" }}>{item.category}:</strong>
                            <li>{item.details}</li>
                        </div>
                    ))}</ul> : <p className="card-description">{description}</p>
                }
            </div>
        </motion.div>
    );
};

export default Card;