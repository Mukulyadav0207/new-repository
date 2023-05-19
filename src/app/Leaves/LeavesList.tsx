import React, { useState } from "react";
import { Link } from "react-router-dom";

import { IoMdInformationCircle } from "react-icons/io";
import { FaUmbrella } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { BsCalculatorFill } from "react-icons/bs";
import { Routes, NavLink, Navigate, Outlet } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { NavLinkCSS } from "../dashboard/DashboardList";

function Leaves() {
  const handleModuleClick = (module) => {
    setCurrentModule(module);
  };

  const [currentModule, setCurrentModule] = useState("Account Setting");

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
        <NavLink to="allleaves" style={NavLinkCSS}>
          <button
            onClick={() => {
              handleModuleClick("Account Setting");
            }}
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <IoMdInformationCircle />
              </div>
              <div>All leaves</div>
            </div>
          </button>
        </NavLink>
        <NavLink to="holidays" style={NavLinkCSS}>
          <button
            onClick={() => {
              handleModuleClick("Password Setting");
            }}
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <FaUmbrella />
              </div>
              <div>Holidays</div>
            </div>
          </button>
        </NavLink>
        <NavLink to="settings" style={NavLinkCSS}>
          <button
            onClick={() => {
              handleModuleClick("Security Setting");
            }}
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <IoMdSettings />
              </div>
              <div>Settings</div>
            </div>
          </button>
        </NavLink>
        <NavLink to="deductions" style={NavLinkCSS}>
          <button
            onClick={() => {
              handleModuleClick("Notifications ");
            }}
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <BsCalculatorFill />
              </div>

              <div>Deductions and Encashment</div>
            </div>
          </button>
        </NavLink>
        <NavLink to="overtime" style={NavLinkCSS}>
          <button
            onClick={() => {
              handleModuleClick("Admin Notifications ");
            }}
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <FaBusinessTime />
              </div>

              <div>Overtime</div>
            </div>
          </button>
        </NavLink>
      </div>

      <div className="items-start ">
        <hr className="h-px border-0 bg-zinc-400 " />
      </div>
      <Outlet />
      <div>
        <Routes>{/* <Route index element={<AllLeaves />}></Route> */}</Routes>
      </div>
    </>
  );
}
export default Leaves;
