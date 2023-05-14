import React, { useState } from "react";
import { Link, Outlet, NavLink, useLocation } from "react-router-dom";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { IoMdInformationCircle } from "react-icons/io";
import { FaReceipt } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";

export const NavLinkCSS = ({ isActive }) => {
   return {
     fontWeight: isActive ? "bold" : "",
     border: isActive ? "solid" : "",
     borderWidth: isActive ? "0px 0px 2px 0px" : "",
     borderColor: isActive ? "#1A13CB" : "",
     padding: isActive ? "0px -2px -2px -2px" : "",
     width: isActive ? "fit" : "",
     color: isActive ? "black" : " #00000029",
     margin: isActive ? "-1px" : "",
   };
 };


function Dashboard() {


  const [currentModule, setCurrentModule] = useState("Account Setting");

  

  return (
    <>
      <div className="flex items-center font-bold">
        <div> Dashbord</div>
      </div>

      <div className="flex gap-4 mt-3 font-semibold tracking-tight">
        <NavLink style={NavLinkCSS} to="general">
          <button>
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <IoMdInformationCircle />
              </div>
              <div>General</div>
            </div>
          </button>
        </NavLink>
        <NavLink to="financials" style={NavLinkCSS}>
          <button>
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <FaDollarSign />
              </div>
              <div>Financials</div>
            </div>
          </button>
        </NavLink>
        <NavLink to="hr" style={NavLinkCSS}>
          <button>
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <MdGroups />
              </div>
              <div>HR</div>
            </div>
          </button>
        </NavLink>
        <NavLink to="invoice" style={NavLinkCSS}>
          <button>
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <FaFileInvoiceDollar />
              </div>

              <div>Invoices</div>
            </div>
          </button>
        </NavLink>
        <NavLink to="payroll" style={NavLinkCSS}>
          <button>
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <FaReceipt />
              </div>

              <div>Payroll</div>
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
export default Dashboard;
