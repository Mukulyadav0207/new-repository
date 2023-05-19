import React from "react";
import { ImSpinner8 } from "react-icons/im";
function Spinner() {
  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <ImSpinner8 className="text-3xl text-blue-600 animate-spin" />
    </div>
  );
}
export default Spinner;
