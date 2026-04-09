import { motion, useScroll, useTransform } from "framer-motion";
import '../App.css'

type ListProps = {
  category: string,
  details: string
}

type SpriteProps = {
  src: string;
  name: string;
  id: string;
  description: string;
  list: ListProps[];
  speed: number;
};

const Sprite = ({ src, name, id, description, list, speed = 30 }: SpriteProps) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, speed]);

  return (
    <motion.div
      id={id}
      className="sprite"
      style={{ y }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <img src={src} alt={name} />
      <div className="sprite-text">
        <span className="sprite-label">{name}</span>
        {
          list.length > 0 ? <ul>{list.map((item, index) => (
            <div className="sprite-list" key={index}>
              <strong style={{ textDecoration: "underline" }}>{item.category}:</strong>
              <li>{item.details}</li>
            </div>
          ))}</ul> : <p className="sprite-description">{description}</p>
        }
      </div>
    </motion.div>
  );
};

export default Sprite;