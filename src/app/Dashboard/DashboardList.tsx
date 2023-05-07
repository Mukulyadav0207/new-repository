import React, { useState } from "react";
import { Link } from "react-router-dom";
import General from "./DashboardGeneral";
import Financials from "./DashboardFinancials";
import HR from "./DashboardHr";
import Invoice from "./DashboardInvoices";
import Payroll from "./DashboardPayroll";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { IoMdInformationCircle } from "react-icons/io";
import { FaReceipt } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";

function Dashbord() {
  const handleModuleClick = (module) => {
    setCurrentModule(module);
  };

  const [currentModule, setCurrentModule] = useState("Account Setting");

  let settingsContent;
  switch (currentModule) {
    case "Password Setting":
      settingsContent = <Financials />;
      break;
    case "Security Setting":
      settingsContent = <HR />;
      break;
    case "Notifications ":
      settingsContent = <Invoice />;
      break;
    case "Admin Notifications ":
      settingsContent = <Payroll />;
      break;
    default:
      settingsContent = <General />;
      break;
  }

  return (
    <>
      <div className="flex items-center font-bold ">
        <div> Dashbord</div>
      </div>

      <div className="flex gap-4 mt-3 font-bold">
        <Link to="./">
          <button
            onClick={() => {
              handleModuleClick("Account Setting");
            }}
            className={
              currentModule === "Account Setting"
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
        <Link to="/financials">
          <button
            onClick={() => {
              handleModuleClick("Password Setting");
            }}
            className={
              currentModule === "Password Setting"
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-24  font-bold"
                : "text-gray-400"
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
        <Link to="/hr">
          <button
            onClick={() => {
              handleModuleClick("Security Setting");
            }}
            className={
              currentModule === "Security Setting"
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-14  font-bold"
                : "text-gray-400 "
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <MdGroups />
              </div>
              <div>HR</div>
            </div>
          </button>
        </Link>
        <Link to="/invoice">
          <button
            onClick={() => {
              handleModuleClick("Notifications ");
            }}
            className={
              currentModule === "Notifications "
                ? " border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-20  font-bold "
                : "text-gray-400 "
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <FaFileInvoiceDollar />
              </div>

              <div>Invoices</div>
            </div>
          </button>
        </Link>
        <Link to="/payroll">
          <button
            onClick={() => {
              handleModuleClick("Admin Notifications ");
            }}
            className={
              currentModule === "Admin Notifications "
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-20 font-bold"
                : "text-gray-400 "
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <FaReceipt />
              </div>

              <div>Payroll</div>
            </div>
          </button>
        </Link>
      </div>
      <div className="items-start ">
        <hr className="h-px border-0 bg-zinc-400 " />
      </div>

      <Routes>
        <Route path="/" element={<General />}></Route>
        <Route path="/financials" element={<Financials />}></Route>
        <Route path="/hr" element={<HR />}></Route>
        <Route path="/invoice" element={<Invoice />}></Route>
        <Route path="/payroll" element={<Payroll />}></Route>
      </Routes>
    </>
  );
}
export default Dashbord;
