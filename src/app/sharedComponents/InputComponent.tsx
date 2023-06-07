import React from "react";

const Input = ({
  type,
  value,
  onChange,
  placeholder,
  backgroundColor,
  textColor,
  borderColor,
  width,
  padding,
  border,
  height,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        padding: padding,
        border: border,
        borderRadius: "6px",

        borderColor: borderColor,
        width: width,
        height: height,
      }}
    />
  );
};

export default Input;
