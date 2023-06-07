import React from "react";

const Button = ({
  label,
  onClick,
  backgroundColor,
  textColor,
  borderColor,
  icon,
  width,
  padding,
  border,
 
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        padding: padding,
        border: border,
        borderRadius: "4px",
        cursor: "pointer",
        borderColor: borderColor,
        width: width,
       
      }}
    >
      <div className="flex gap-1 items-center">
        {icon}
        {label}
      </div>
    </button>
  );
};

export default Button;
