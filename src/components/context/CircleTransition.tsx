import { motion, AnimatePresence } from "framer-motion";
import { useTransition } from "./TransitionContext";

export default function CircleTransition() {
 const { isAnimating, clickX, clickY, transitionColor } = useTransition();

 return (
   <AnimatePresence>
     {isAnimating && (
       <motion.div
         initial={{ scale: 0, borderRadius: "50%" }}
         animate={{ scale: 50 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.9, ease: "easeInOut" }}
         style={{
           position: "fixed",
           top: clickY,
           left: clickX,
           width: 100,
           height: 100,
           background: transitionColor,
           transform: "translate(-50%, -50%)",
           zIndex: 999,
         }}
       />
     )}
   </AnimatePresence>
 );
}
