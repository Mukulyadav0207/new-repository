import React, { useState } from "react";
import { Link } from "react-router-dom";
import AllLeaves from "./LeavesAllLeave";
import Holidays from "./LeavesHoliday";

import Settings from "./LeavesSetting";
import Deductions from "./LeavesDeductionsAndEncashment";
import Overtime from "./LeavesOvertime";
import { IoMdInformationCircle } from "react-icons/io";
import { FaUmbrella } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { BsCalculatorFill } from "react-icons/bs";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



function Leaves() {
  const handleModuleClick = (module) => {
    setCurrentModule(module);
  };

  const [currentModule, setCurrentModule] = useState("Account Setting");

  let settingsContent;
  switch (currentModule) {
    case "Password Setting":
      settingsContent = <Holidays />;
      break;
    case "Security Setting":
      settingsContent = <Settings />;
      break;
    case "Notifications ":
      settingsContent = <Deductions />;
      break;
    case "Admin Notifications ":
      settingsContent = <Overtime />;
      break;
    default:
      settingsContent = <AllLeaves />;
      break;
  }

  return (
    <>
      <div className="flex items-center">
        <div> Leaves</div>
        <div className="text-xl">
          <IoIosArrowForward />
        </div>
        <div className="text-blue-700">{currentModule}</div>
      </div>

      <div className="flex gap-4 font-bold">
        <Link to="./">
          <button
            onClick={() => {
              handleModuleClick("Account Setting");
            }}
            className={
              currentModule === "Account Setting"
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-32  font-bold"
                : "text-gray-400 "
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <IoMdInformationCircle />
              </div>
              <div>All leaves</div>
            </div>
          </button>
        </Link>
        <Link to="leaves/holidays">
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
                <FaUmbrella />
              </div>
              <div>Holidays</div>
            </div>
          </button>
        </Link>
        <Link to="leaves/settings">
          <button
            onClick={() => {
              handleModuleClick("Security Setting");
            }}
            className={
              currentModule === "Security Setting"
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-32  font-bold"
                : "text-gray-400 "
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <IoMdSettings />
              </div>
              <div>Settings</div>
            </div>
          </button>
        </Link>
        <Link to="leaves/deductions">
          <button
            onClick={() => {
              handleModuleClick("Notifications ");
            }}
            className={
              currentModule === "Notifications "
                ? " border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w- font-bold "
                : "text-gray-400 "
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <BsCalculatorFill />
              </div>

              <div>Deductions and Encashment</div>
            </div>
          </button>
        </Link>
        <Link to="leaves/overtime">
          <button
            onClick={() => {
              handleModuleClick("Admin Notifications ");
            }}
            className={
              currentModule === "Admin Notifications "
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700   font-bold"
                : "text-gray-400 "
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <FaBusinessTime />
              </div>

              <div>Overtime</div>
            </div>
          </button>
        </Link>
      </div>
      <div className="items-start ">
        <hr className="h-px border-0 bg-zinc-400 " />
      </div>

      <div>
        <Routes>
          <Route path="/" element={<AllLeaves />}></Route>
          <Route path="leaves/holidays" element={<Holidays />}></Route>
          <Route path="leaves/settings" element={<Settings />}></Route>
          <Route path="leaves/deductions" element={<Deductions />}></Route>
          <Route path="leaves/overtime" element={<Overtime />}></Route>
        </Routes>
      </div>
    </>
  );
}
export default Leaves;
