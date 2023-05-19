import React, { useState } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import InvoiceGeneral from "./InvoicesGeneral";
import InvoiceTimeline from "./InvoiceTimeline";
import InvoiceLineItems from "./InvoicesLineItems";
import { IoMdInformationCircle } from "react-icons/io";
import { AiOutlineApartment } from "react-icons/ai";
import { SiSpringsecurity } from "react-icons/si";
import { FaReceipt } from "react-icons/fa";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NavLinkCSS } from "../dashboard/DashboardList";
import { IoIosArrowForward } from "react-icons/io";

function InvoiceDetails() {
  const handleModuleClick = (module) => {
    setCurrentModule(module);
  };

  const [currentModule, setCurrentModule] = useState("General Detail");

  return (
    <>
      <div className="flex items-center">
        <div> Invoices</div>
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
        <NavLink to="lineItems" style={NavLinkCSS}>
          <button
            onClick={() => {
              handleModuleClick("LineItems");
            }}
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <FaReceipt />
              </div>
              <div>Line Items</div>
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
      <Routes></Routes>
    </>
  );
}
export default InvoiceDetails;

//  <Route path="/" element={<General />}></Route>
//         <Route path="action/timeline" element={<Timeline />}></Route>
//         <Route path="timeline/incident" element={<Incident />}></Route>
