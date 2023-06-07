import React, { useState } from "react";
import { Link, Outlet, NavLink,useNavigate } from "react-router-dom";
import { IoMdInformationCircle } from "react-icons/io";
import ClientGeneral from "./ClientsGeneral";
import { IoIosArrowForward } from "react-icons/io";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NavLinkCSS } from "../dashboard/DashboardList";

const ClientDetails = () => {
   const navigate = useNavigate();
  const [currentModule, setCurrentModule] = useState("Project Detail");
  

  return (
    <>
      <div className="flex items-center">
        <button onClick={() => navigate("/app/clients")}>Client </button>
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
          <div className="flex flex-row items-center justify-center gap-1 p-2 ">
            <div>
              <IoMdInformationCircle />
            </div>
            <div>General</div>
          </div>
        </NavLink>
      </div>
      <div className="items-start ">
        <hr className="h-px border-0 bg-zinc-400 " />
      </div>
      <Outlet />
    </>
  );
};
export default ClientDetails;
