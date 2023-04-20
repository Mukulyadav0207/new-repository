import React, { useState } from "react";
import { Link, } from "react-router-dom";
import General from "./General";
import Timeline from "./Timiline";

import SetSecurity from "./Security";
import Notification from "./Notification";
import AdminNotification from "./AdminNotification";
import { IoMdInformationCircle } from "react-icons/io";
import { AiOutlineApartment } from "react-icons/ai";
import { SiSpringsecurity } from "react-icons/si";
import { GoKey } from "react-icons/go";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";



function DeviceAction() {
  const handleModuleClick = (module) => {
    setCurrentModule(module);
  };

  const [currentModule, setCurrentModule] = useState("General Detail");

  let settingsContent;
  switch (currentModule) {
    case "Timeline":
      settingsContent = <Timeline />;
      break;
   
    default:
      settingsContent = <General />;
      break;
  }

  return (
    <>
      <div className="flex items-center">
        <div> Settings</div>
        <div className="text-xl">
          <IoIosArrowForward />
        </div>
        <div className="text-blue-700">{currentModule}</div>
      </div>

      <div className="flex gap-4 mt-3 font-bold">
        <Link to="action/*">
          <button
            onClick={() => {
              handleModuleClick("General Detail");
            }}
            className={
              currentModule === "General Detail"
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
        <Link to="action/timeline">
          <button
            onClick={() => {
              handleModuleClick("Password Setting");
            }}
            className={
              currentModule === "Password Setting"
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-32  font-bold"
                : "text-gray-400"
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <AiOutlineApartment />
              </div>
              <div>Timeline</div>
            </div>
          </button>
        </Link>
      </div>
      <div className="items-start ">
        <hr className="h-px border-0 bg-zinc-400 " />
      </div>

      <Routes>
        <Route path="action/*" element={<General />}></Route>
        <Route path="action/timeline" element={<Timeline/>}></Route>
      </Routes>
    </>
  );
}
export default DeviceAction;
