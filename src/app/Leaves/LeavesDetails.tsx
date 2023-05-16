import React, { useState } from "react";
import { Link,Outlet } from "react-router-dom";
import LeaveGeneral from "./LeavesGeneral";
import LeaveTimeline from "./LeavesTimeline";
// import Incident from "./Incidents";

import { IoMdInformationCircle } from "react-icons/io";
import { AiOutlineApartment } from "react-icons/ai";

import { Routes, Route, NavLink } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";
import { NavLinkCSS } from "../Dashboard/DashboardList";




function LeaveDetails() {
 

  
  const handleModuleClick = (module) => {
    setCurrentModule(module);
  };

  const [currentModule, setCurrentModule] = useState("General Detail");

  

  return (
    <>
      <div className="flex items-center">
        <div> Leaves</div>
        <div className="text-xl">
          <IoIosArrowForward />
        </div>
        <div className="text-blue-700">{currentModule}</div>
      </div>

      <div className="flex gap-4 mt-3 font-bold">
        <NavLink to="general" style={NavLinkCSS}>
          <button
            onClick={() => {
              handleModuleClick("General Detail");
            }}
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <IoMdInformationCircle />
              </div>
              <div>General</div>
            </div>
          </button>
        </NavLink>
        <NavLink to="timeline" style={NavLinkCSS}>
          <button
            onClick={() => {
              handleModuleClick("Timeline");
            }}
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <AiOutlineApartment />
              </div>
              <div>Timeline</div>
            </div>
          </button>
        </NavLink>
      </div>
      <div className="items-start ">
        <hr className="h-px border-0 bg-zinc-400 " />
      </div>
      <Outlet />
      <Routes></Routes>
    </>
  );
}
export default LeaveDetails;

//  
//         <Route path="timeline/incident" element={<Incident />}></Route>
