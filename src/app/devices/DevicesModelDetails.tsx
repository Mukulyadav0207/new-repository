import { FaFileAlt } from "react-icons/fa";
import { Routes,Route } from "react-router-dom";

function ModelDetails() {
  return (
    <>
      <div className="w-[720px] h-[318px] bg-[#FFFFFF]  flex p-6 m-6 rounded-lg">
        <div className="flex-col  font-semibold">
          <FaFileAlt className=" text-[#D5D5D5] w-[150px] h-[210px] mb-4" />
          <h3>Model Name</h3>
          <p>XXXX XXXX XXXX XX</p>
        </div>
        <div className="flex-col ml-7">
          <h3 className=" font-semibold text-[#4B5563]">Notes</h3>
          <p className="p-3 bg-[#E9F8F8] mt-3 w-[477px] h-[235px] rounded-md">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum.
          </p>
        </div>
      </div>
      <Routes>
      
    
      </Routes>
    </>
  );
}

export default ModelDetails;
