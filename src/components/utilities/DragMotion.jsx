import { motion } from "framer-motion";

export const DragMotion = ({ children }) => {
  return (
    <motion.div
      style={{ touchAction: 'none' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      whileDrag={{ scale: 0.9, rotate: 15 }}
      drag
      dragSnapToOrigin
      dragElastic={0.8}
      dragTransition={{ 
        bounceStiffness: 300,
        bounceDamping: 10,
        timeConstant: 200
      }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 100,
        mass: 0.5
      }}
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      className="cursor-grab active:cursor-grabbing"
    >
      {children}
    </motion.div>
  );
};

export default DragMotion;