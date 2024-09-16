import React from 'react';

interface CustomButtonProps {
  className?: string;
  onClick?: () => void;
  buttonText: string;
  innerClassName?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  className = '',
  onClick,
  buttonText,
  innerClassName = '',
  
}) => {
  return (
    <button
      className={`relative text-sm text-white font-quicksand font-regular ${className}`}
      onClick={onClick}
    >
      <div className="absolute inset-x-0 h-full -bottom-1 bg-[#331B5E] rounded-2xl"></div>

      <div
        className={`relative bg-[#6C48BC] border border-[#6C48BC] rounded-2xl py-2 px-20 transition transform duration-200 active:translate-y-1 ${innerClassName}`}
      >
        {buttonText}
      </div>
    </button>
  );
};

export default CustomButton;
