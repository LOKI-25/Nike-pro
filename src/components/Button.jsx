import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth
}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat bg-coral-red text-lg leading-none rounded-full 
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`:" bg-coral-red text-white border-coral-red"} ${fullWidth && "w-full"}`}>
      {label}
      {iconURL && (
        <img src={iconURL} alt="" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
