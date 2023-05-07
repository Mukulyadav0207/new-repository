import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
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
import General from "./EmployeesGeneral" ;
import Note from "./EmployeesNotes" ;
import Performance from "./EmployeesPerformance" ;
import Financials from "./EmployeesFinancials" ;
import Salary from "./EmployeesSalary" ;
import Calendar from "./EmployeesCalendar" ;
import Timeline from "./EmployeesTimeline" ;
import Document from "./EmployeesDocuments" ;
import Feedbacks from "./EmployeesFeedback" ;





function EmployeeAction() {
  const handleModuleClick = (module) => {
    setCurrentModule(module);
  };

  const [currentModule, setCurrentModule] = useState("Account Setting");

  let settingsContent;
  switch (currentModule) {
    case "Notes":
      settingsContent = <Note />;
      break;
    case "Performance":
      settingsContent = <Performance />;
      break;
    case "Financials":
      settingsContent = <Financials />;
      break;
    case "Salary":
      settingsContent = <Salary />;
      break;
    case "Calendar":
      settingsContent = <Calendar />;
      break;
    case "Timeline":
      settingsContent = <Timeline />;
      break;
    case "Documents":
      settingsContent = <Document />;
      break;
    case "Feedbacks":
      settingsContent = <Feedbacks />;
      break;
    default:
      settingsContent = <General />;
      break;
  }

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
        <Link to="./">
          <button
            onClick={() => {
              handleModuleClick("General Detail");
            }}
            className={
              currentModule === "General Detail"
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-20  font-bold"
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
        <Link to="employeeAction/notes">
          <button
            onClick={() => {
              handleModuleClick("Notes");
            }}
            className={
              currentModule === "Notes"
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-20  font-bold"
                : "text-gray-400"
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <FaStickyNote />
              </div>
              <div>Notes</div>
            </div>
          </button>
        </Link>
        <Link to="employeeAction/performance">
          <button
            onClick={() => {
              handleModuleClick("Performance");
            }}
            className={
              currentModule === "Performance"
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-32  font-bold"
                : "text-gray-400 "
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <BiTrendingUp />
              </div>
              <div>Performance</div>
            </div>
          </button>
        </Link>
        <Link to="employeeAction/financials">
          <button
            onClick={() => {
              handleModuleClick("Financials");
            }}
            className={
              currentModule === "Financials"
                ? " border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-20  font-bold "
                : "text-gray-400 "
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <FaDollarSign />
              </div>

              <div>Financials</div>
            </div>
          </button>
        </Link>
        <Link to="employeeAction/salary">
          <button
            onClick={() => {
              handleModuleClick("Salary");
            }}
            className={
              currentModule === "Salary"
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-20 font-bold"
                : "text-gray-400 "
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <FaMoneyBillWave />
              </div>

              <div>Salary</div>
            </div>
          </button>
        </Link>

        <Link to="employeeAction/calendar">
          <button
            onClick={() => {
              handleModuleClick("Calendar");
            }}
            className={
              currentModule === "Calendar"
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-20 font-bold"
                : "text-gray-400 "
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <FaCalendarAlt />
              </div>

              <div>Calendar</div>
            </div>
          </button>
        </Link>

        <Link to="employeeAction/timline">
          <button
            onClick={() => {
              handleModuleClick("Timeline");
            }}
            className={
              currentModule === "Timeline"
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-20 font-bold"
                : "text-gray-400 "
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

        <Link to="employeeAction/document">
          <button
            onClick={() => {
              handleModuleClick("Documents");
            }}
            className={
              currentModule === "Documents"
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-24 font-bold"
                : "text-gray-400 "
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <FaFolderOpen />
              </div>

              <div>Documents</div>
            </div>
          </button>
        </Link>

        <Link to="employeeAction/feedback">
          <button
            onClick={() => {
              handleModuleClick("Feedbacks");
            }}
            className={
              currentModule === "Feedbacks"
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-20 font-bold"
                : "text-gray-400 "
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <IoMdChatbubbles />
              </div>

              <div>Feedbacks</div>
            </div>
          </button>
        </Link>
      </div>
      <div className="items-start ">
        <hr className="h-px border-0 bg-zinc-400 " />
      </div>

      <Routes>
        <Route path="/" element={<General />}></Route>
        <Route path="employeeAction/notes" element={<Note />}></Route>
        <Route
          path="employeeAction/performance"
          element={<Performance />}
        ></Route>
        <Route
          path="employeeAction/financials"
          element={<Financials />}
        ></Route>
        <Route path="employeeAction/document" element={<Document />}></Route>
        <Route path="employeeAction/salary" element={<Salary />}></Route>
        <Route path="employeeAction/calendar" element={<Calendar />}></Route>
        <Route path="employeeAction/timeline" element={<Timeline />}></Route>
        <Route path="employeeAction/feedback" element={<Feedbacks />}></Route>
      </Routes>
    </>
  );
}
export default EmployeeAction;
