
import type { ReactNode } from 'react';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  color: string;
  isActive: boolean;
}

const Button = ({ onClick, children, color, isActive = false }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`text-white h-12 w-[110px] md:w-auto md:h-auto text-sm md:text-2xl font-semibold py-1 md:py-3 px-1 md:px-6 rounded-tr-xl rounded-bl-xl transition duration-50 ease-out hover:shadow-lg hover:scale-[103%] active:scale-95 ${isActive ? 'ring-4 ring-indigo-300 ring-offset-4' : ''}`}
      style={{ background: color }}
    >
      {children}
    </button>
  );
};

export default Button;
 
    