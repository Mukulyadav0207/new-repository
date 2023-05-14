import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Routes,NavLink } from "react-router-dom";
import { IoMdInformationCircle } from "react-icons/io";
import { FaReceipt } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";
import { BiTrendingUp } from "react-icons/bi";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { AiOutlineApartment } from "react-icons/ai";

import { FaDollarSign } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { NavLinkCSS } from "../Dashboard/DashboardList";





function EmployeesDetails() {
  const handleModuleClick = (module) => {
    setCurrentModule(module);
  };

  const [currentModule, setCurrentModule] = useState("Account Setting");

  

  return (
    <>
      <div className="flex items-center">
        <div>Employees </div>
        <div className="text-xl">
          <IoIosArrowForward />
        </div>
        <div> Employees ID</div>
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
        <NavLink to="notes" style={NavLinkCSS}>
          <button
            onClick={() => {
              handleModuleClick("Notes");
            }}
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <FaStickyNote />
              </div>
              <div>Notes</div>
            </div>
          </button>
        </NavLink>
        <NavLink to="performance" style={NavLinkCSS}>
          <button
            onClick={() => {
              handleModuleClick("Performance");
            }}
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <BiTrendingUp />
              </div>
              <div>Performance</div>
            </div>
          </button>
        </NavLink>
        <NavLink to="financials" style={NavLinkCSS}>
          <button
            onClick={() => {
              handleModuleClick("Financials");
            }}
         
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <FaDollarSign />
              </div>

              <div>Financials</div>
            </div>
          </button>
        </NavLink>
        <NavLink to="salary" style={NavLinkCSS}>
          <button
            onClick={() => {
              handleModuleClick("Salary");
            }}
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <FaMoneyBillWave />
              </div>

              <div>Salary</div>
            </div>
          </button>
        </NavLink>

        <NavLink to="calendar" style={NavLinkCSS}>
          <button
            onClick={() => {
              handleModuleClick("Calendar");
            }}
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <FaCalendarAlt />
              </div>

              <div>Calendar</div>
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

        <NavLink to="document" style={NavLinkCSS}>
          <button
            onClick={() => {
              handleModuleClick("Documents");
            }}
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <FaFolderOpen />
              </div>

              <div>Documents</div>
            </div>
          </button>
        </NavLink>

        <NavLink to="feedback" style={NavLinkCSS}>
          <button
            onClick={() => {
              handleModuleClick("Feedbacks");
            }}
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <IoMdChatbubbles />
              </div>

              <div>Feedbacks</div>
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
export default EmployeesDetails;
