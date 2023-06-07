import React from "react";
import Chip from "@mui/material/Chip";


const DumbChip = ({
  label,
  backgroundColor,
  textColor,
  width,
  size,
  fontSize,
 
}) => {
  return (
    <Chip
      label={label}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,

        fontSize: fontSize,
        height:
          size === "small"
            ? "16px"
            : size === "medium"
            ? "32px"
            : size === "large"
            ? "40px"
            : "24px",
        width: width,
      }}
    />
  );
};

export default DumbChip;