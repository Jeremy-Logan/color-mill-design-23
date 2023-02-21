import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  color: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, color }) => {
  return (
    <motion.button
      onClick={onClick}
      className={` hover:bg-blue-700 text-white text-2xl font-bold py-3 px-6 rounded-tr-xl rounded-bl-xl `}
      style={{ background: color }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
 
    