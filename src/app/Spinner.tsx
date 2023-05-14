import React from "react";
import { CgSpinner } from "react-icons/cg";
function Spinner() {
  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <CgSpinner className="text-4xl text-blue-600 animate-spin" />
    </div>
  );
}
export default Spinner;
