import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import General from "./DevicesGeneral";
import Timeline from "./DevicesTimiline";
import Incident from "./DevicesIncidents";

import { IoMdInformationCircle } from "react-icons/io";
import { AiOutlineApartment } from "react-icons/ai";
import { SiSpringsecurity } from "react-icons/si";
import { GoKey } from "react-icons/go";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";
import { NavLinkCSS } from "../dashboard/DashboardList";

function DeviceDetails() {
  const handleModuleClick = (module) => {
    setCurrentModule(module);
  };

  const [currentModule, setCurrentModule] = useState("");

  return (
    <>
      <div className="flex items-center">
        <div> Devices</div>
        <div className="text-xl">
          <IoIosArrowForward />
        </div>
        <div className="text-blue-700">{currentModule}</div>
      </div>

      <div className="flex gap-4 mt-3 font-bold">
        <NavLink to="general" style={NavLinkCSS}>
          <button
            onClick={() => {
              handleModuleClick("General Details");
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
      <Routes>
        <Route path="incident" element={<Incident />}></Route>
      </Routes>
    </>
  );
}
export default DeviceDetails;
