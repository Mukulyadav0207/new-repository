import React,  { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { Routes, NavLink } from "react-router-dom";
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
import { useLocation } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { NavLinkCSS } from "../dashboard/DashboardList";

function EmployeesDetails() {
 const [showOverlay, setShowOverlay] = useState(false);
 const location = useLocation();

 useEffect(() => {
   setShowOverlay(location.pathname === "/employees/details/1/general"); 
 }, [location]);





const currentPath = location.pathname;
const [currentModule, setCurrentModule] = useState("Performance");

   useEffect(() => {
     setCurrentModule(getModuleNameFromPath(currentPath));
   }, [currentPath]);

   const getModuleNameFromPath = (path) => {
     switch (path) {
       case "general":
       
         return "General Detail";



       case "/notes":
       
         return "Notes";
       case "/performance":
       
         return "Performance";
       case "/financials":
       case "/employees/financials":
         return "Financials";
       case "/salary":
       case "/employees/salary":
         return "Salary";
       case "/calendar":
       case "/employees/calendar":
         return "Calendar";
       case "/timeline":
       case "/employees/timeline":
         return "Timeline";
       case "/document":
       case "/employees/document":
         return "Documents";
       case "/feedback":
       case "/employees/feedback":
         return "Feedbacks";
       default:
         return "";
     }
   };





  

  return (
    <>
      <div className="flex items-center mt-4 text-sm">
        <div>Employees </div>
        <div className="text-xl">
          <IoIosArrowForward />
        </div>
        <div className="font-semibold"> Employees ID</div>
        <div className="text-xl">
          <IoIosArrowForward />
        </div>
        <div className="text-blue-700 font-semibold">
          {getModuleNameFromPath(currentModule)}
        </div>
      </div>

      <div className="flex gap-3 mt- font-bold">
        <NavLink to="general" style={NavLinkCSS}>
          <div className="flex flex-row items-center justify-center gap-1 p-2 ">
            <div>
              <IoMdInformationCircle />
            </div>
            <div>General</div>
          </div>
        </NavLink>
        <NavLink to="notes" style={NavLinkCSS}>
          <div className="flex flex-row items-center justify-center gap-1 p-2 ">
            <div>
              <FaStickyNote />
            </div>
            <div>Notes</div>
          </div>
        </NavLink>
        <NavLink to="performance" style={NavLinkCSS}>
          <div className="flex flex-row items-center justify-center gap-1 p-2 ">
            <div>
              <BiTrendingUp />
            </div>
            <div>Performance</div>
          </div>
        </NavLink>
        <NavLink to="financials" style={NavLinkCSS}>
          <div className="flex flex-row items-center justify-center gap-1 p-2 ">
            <div>
              <FaDollarSign />
            </div>

            <div>Financials</div>
          </div>
        </NavLink>
        <NavLink to="salary" style={NavLinkCSS}>
          <div className="flex flex-row items-center justify-center gap-1 p-2 ">
            <div>
              <FaMoneyBillWave />
            </div>

            <div>Salary</div>
          </div>
        </NavLink>

        <NavLink to="calendar" style={NavLinkCSS}>
          <div className="flex flex-row items-center justify-center gap-1 p-2 ">
            <div>
              <FaCalendarAlt />
            </div>

            <div>Calendar</div>
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

        <NavLink to="document" style={NavLinkCSS}>
          <div className="flex flex-row items-center justify-center gap-1 p-2 ">
            <div>
              <FaFolderOpen />
            </div>

            <div>Documents</div>
          </div>
        </NavLink>

        <NavLink to="feedback" style={NavLinkCSS}>
          <div className="flex flex-row items-center justify-center gap-1 p-2 ">
            <div>
              <IoMdChatbubbles />
            </div>

            <div>Feedbacks</div>
          </div>
        </NavLink>
        {showOverlay && (
          <div className="fixed top-[56px] left-[160px] w-[1100px] h-[26px] bg-[#FE0012] font-normal  z-10 text-white pl-5 flex justify-between pr-6 text-sm items-center">
            <p>Salary increment due in 2 weeks.</p> <p>x</p>
          </div>
        )}
      </div>
      <div className="items-start ">
        <hr className="h-px border-0 bg-zinc-400 " />
      </div>
      <Outlet />
    </>
  );
}
export default EmployeesDetails;
