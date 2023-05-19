import React, { useState } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import { IoMdInformationCircle } from "react-icons/io";
import ClientGeneral from "./ClientsGeneral";
import { IoIosArrowForward } from "react-icons/io";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NavLinkCSS } from "../dashboard/DashboardList";

const ClientDetails = () => {
  const [currentModule, setCurrentModule] = useState("Project Detail");
  let settingsContent = <ClientGeneral />;

  return (
    <>
      <div className="flex items-center">
        <div> Client</div>
        <div className="text-xl">
          <IoIosArrowForward />
        </div>
        <div> Client Name</div>
        <div className="text-xl">
          <IoIosArrowForward />
        </div>
        <div className="text-blue-700">{currentModule}</div>
      </div>

      <div className="flex gap-4 mt-3 font-bold">
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
      </div>
      <div className="items-start ">
        <hr className="h-px border-0 bg-zinc-400 " />
      </div>
      <Outlet />
      <Routes></Routes>
    </>
  );
};
export default ClientDetails;
