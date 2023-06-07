import React, { useState } from "react";
import { SiAdobexd } from "react-icons/si";
import { Link, useLocation, NavLink } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";

import { BsGraphUp } from "react-icons/bs";
import { CiViewTable } from "react-icons/ci";
import { VscTypeHierarchySub } from "react-icons/vsc";
import { GrRestroomMen } from "react-icons/gr";
import { BsLaptop } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";

import { GiUmbrella } from "react-icons/gi";
import { FaFileSignature } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";

function Sidebar() {
  const NavLinkCSS = ({ isActive }) => {
    return {
      border: isActive ? "solid" : "",

      borderColor: isActive ? "#1A13CB" : "",
      width: isActive ? "140px" : "",
      color: isActive ? "white" : "",
      backgroundColor: isActive ? "#1A13CB" : "",
      paddingTop: isActive ? "1px" : "",
      paddingLeft: isActive ? "10px" : "10px",
      paddingRight: isActive ? "3px" : "",
      borderRadius: isActive ? "0px 5px 5px 0px" : "",
    };
  };

  return (
    <>
      <div className="flex flex-col w-40 text-sm font-semibold tracking-tight ">
        <div className="flex flex-col items-start pt-4 pb-8 ">
          <SiAdobexd className="pl-2 ml-4 text-8xl text-amber-700" />
        </div>

        <div className="flex flex-col items-start gap-4 ">
          <NavLink style={NavLinkCSS} to="/app/dashboard">
            <div className="flex items-center gap-1 ">
              <div>
                <BsGraphUp />
              </div>
              <div>Dashboard</div>
            </div>
          </NavLink>
          <NavLink style={NavLinkCSS} to="/app/employees">
            <div className="flex items-center gap-1">
              <div>
                <BsFillPeopleFill />
              </div>
              <div>Employees</div>
            </div>
          </NavLink>
          <NavLink style={NavLinkCSS} to="/app/projects">
            <div className="flex items-center gap-1">
              <div>
                <CiViewTable />
              </div>
              <div>Projects</div>
            </div>
          </NavLink>
          <NavLink style={NavLinkCSS} to="/app/departments">
            <div className="flex items-center gap-1">
              <div>
                <VscTypeHierarchySub />
              </div>
              <div>Departments</div>
            </div>
          </NavLink>
          <NavLink style={NavLinkCSS} to="/app/clients">
            <div className="flex items-center gap-1">
              <div>
                <GrRestroomMen />
              </div>
              <div>Clients</div>
            </div>
          </NavLink>
          <NavLink style={NavLinkCSS} to="/app/devices">
            <div className="flex items-center gap-1">
              <div>
                <BsLaptop />
              </div>
              <div>Devices</div>
            </div>
          </NavLink>
          <NavLink style={NavLinkCSS} to="/app/calendar">
            <div className="flex items-center gap-1">
              <div>
                <FaCalendarAlt />
              </div>
              <div>Calendar</div>
            </div>
          </NavLink>
          <NavLink style={NavLinkCSS} to="/app/leaves">
            <div className="flex items-center gap-1">
              <div>
                <GiUmbrella />
              </div>
              <div>Leaves</div>
            </div>
          </NavLink>

          <NavLink style={NavLinkCSS} to="/app/invoices">
            <div className="flex items-center gap-1">
              <div>
                <FaFileInvoiceDollar />
              </div>
              <div>Invoices</div>
            </div>
          </NavLink>

          <NavLink
            // className={`w-32 py-1 pl-3 rounded-sm ${
            //   location.pathname === "/reports" || activeLink === "/reports"
            //     ? "bg-blue-700 text-white"
            //     : ""
            // }`}
            style={NavLinkCSS}
            to="/app/reports"
            // onClick={() => handleClick("/reports")}
          >
            <div className="flex items-center gap-1">
              <div>
                <FaFileSignature />
              </div>
              <div>Repots</div>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
