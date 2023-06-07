import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Incident from "./DevicesIncidents";
import ModelDetails from "./DevicesModelDetails";
import { IoMdInformationCircle } from "react-icons/io";
import { AiOutlineApartment } from "react-icons/ai";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { NavLinkCSS } from "../dashboard/DashboardList";

function DeviceDetails() {
 const navigate = useNavigate();

  
const currentPath = location.pathname;
const [currentModule, setCurrentModule] = useState("");

useEffect(() => {
  setCurrentModule(getModuleNameFromPath(currentPath));
}, [currentPath]);

const getModuleNameFromPath = (currentpath) => {
  switch (currentpath) {
    case "/app/devices/details/1/general":
      return "General Detail";

    case "/app/devices/details/1/timeline":
      return "Timeline";

    default:
      return "";
  }
};


  return (
    <>
      <div className="flex items-center">
        <button onClick={() => navigate("/app/devices")}>Devices </button>
        <div className="text-xl">
          <IoIosArrowForward />
        </div>
        <div className="text-blue-700">{currentModule}</div>
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
      <Routes>
        <Route path="incident" element={<Incident />}></Route>
        <Route path="modelDetails" element={<ModelDetails />}></Route>
      </Routes>
    </>
  );
}
export default DeviceDetails;
