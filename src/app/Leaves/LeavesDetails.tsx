import React, { useState, useEffect } from "react";
import { Link, Outlet, useRouteMatch } from "react-router-dom";

// import Incident from "./Incidents";

import { IoMdInformationCircle } from "react-icons/io";
import { AiOutlineApartment } from "react-icons/ai";

import { Routes, Route, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { NavLinkCSS } from "../dashboard/DashboardList";




function LeaveDetails() {
 
 const location = useLocation();
 const [currentModule, setCurrentModule] = useState("");

 useEffect(() => {
   const currentPath = location.pathname;
   setCurrentModule(getModuleTextFromPath(currentPath));
 }, [location]);

 const getModuleTextFromPath = (path) => {
   switch (path) {
     case "/general":
       return "General Details";
     case "/timeline":
       return "Timeline";
     default:
       return "";
   }
 };




  return (
    <>
      <div className="flex items-center">
        <div> Leaves</div>
        <div className="text-xl">
          <IoIosArrowForward />
        </div>
        <div className="text-blue-700">
        
          {currentModule === "General Details" && "General Details"}
          {currentModule === "Timeline" && "Timeline"}
        </div>
      </div>

      <div className="flex gap-4 mt-3 font-bold">
        <NavLink to="general" style={NavLinkCSS}>
          <div className="flex flex-row items-center justify-center gap-1 p-2 ">
            <div>
              <IoMdInformationCircle />
            </div>
            <div>General</div>
          </div>
        </NavLink>
        <NavLink to="timeline" style={NavLinkCSS}>
          <div className="flex flex-row items-center justify-center gap-1 p-2 ">
            <div>
              <AiOutlineApartment />
            </div>
            <div>Timeline</div>
          </div>
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
