import React,{useState} from "react";
import { Link } from "react-router-dom";
import { IoMdInformationCircle } from "react-icons/io";
import General from "./ProjectDetail"
import { IoIosArrowForward } from "react-icons/io";
import { Routes, Route, BrowserRouter } from "react-router-dom";






const ClientAction = () => {
     const handleModuleClick = (module) => {
      setCurrentModule(module);
      };

 const [currentModule, setCurrentModule] = useState("Project Detail");
let settingsContent = <General />;
 
 return (
   <>
     <div className="flex items-center">
       <div> Client</div>
       <div className="text-xl">
         <IoIosArrowForward />
       </div>
       <div> Client Name</div>
       <div className="text-xl">
         <IoIosArrowForward />
       </div>
       <div className="text-blue-700">{currentModule}</div>
     </div>

     <div className="flex gap-4 mt-3 font-bold">
       <Link to="actions/*">
         <button
           onClick={() => {
             handleModuleClick("Project Detail");
           }}
           className={
             currentModule === "Project Detail"
               ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-32  font-bold"
               : "text-gray-400 "
           }
         >
           <div className="flex flex-row items-center justify-center gap-1 p-2 ">
             <div>
               <IoMdInformationCircle />
             </div>
             <div>General</div>
           </div>
         </button>
       </Link>
     </div>
     <div className="items-start ">
       <hr className="h-px border-0 bg-zinc-400 " />
     </div>

     <Routes>
                <Route path="actions/*" element={<General/>}></Route></Routes>
   </>
 );
};
export default ClientAction;
