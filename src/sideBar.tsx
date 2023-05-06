import React, { useState } from "react";
import { SiAdobexd } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
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
  const [activeLink, setActiveLink] = useState("");

  const location = useLocation();

  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <>
      <div className="flex flex-col w-40">
        <div className="flex flex-col items-start pt-4 pb-8 gap-">
          <SiAdobexd className="pl-2 text-8xl text-amber-700" />
        </div>
        <div className="flex flex-col items-start justify-start gap-2 ">
          <Link
            to="/"
            className={`w-32 py-1 pl-3 rounded-sm ${
              location.pathname === "/" || activeLink === "/"
                ? "bg-blue-700 text-white"
                : ""
            }`}
            onClick={() => handleClick("/")}
          >
            <div className="flex items-center gap-1 ">
              <div>
                <BsGraphUp />
              </div>
              <div>Dashboard</div>
            </div>
          </Link>
          <Link
            className={`w-32 py-1 pl-3 rounded-sm ${
              location.pathname === "/employees" || activeLink === "/employees"
                ? "bg-blue-700 text-white"
                : ""
            }`}
            to="/employees"
            onClick={() => handleClick("/employees")}
          >
            <div className="flex items-center gap-1">
              <div>
                <BsFillPeopleFill />
              </div>
              <div>Employees</div>
            </div>
          </Link>
          <Link
            className={`w-32 py-1 pl-3 rounded-sm ${
              location.pathname === "/projects" || activeLink === "/projects"
                ? "bg-blue-700 text-white"
                : ""
            }`}
            to="/projects"
            onClick={() => handleClick("/projects")}
          >
            <div className="flex items-center gap-1">
              <div>
                <CiViewTable />
              </div>
              <div>Projects</div>
            </div>
          </Link>
          <Link
            className={`w-32 py-1 pl-3 rounded-sm ${
              location.pathname === "/Departments" ||
              activeLink === "/Departments"
                ? "bg-blue-700 text-white"
                : ""
            }`}
            to="/Departments"
            onClick={() => handleClick("/Departments")}
          >
            <div className="flex items-center gap-1">
              <div>
                <VscTypeHierarchySub />
              </div>
              <div>Departments</div>
            </div>
          </Link>
          <Link
            className={`w-32 py-1 pl-3 rounded-sm ${
              location.pathname === "/clients" || activeLink === "/clients"
                ? "bg-blue-700 text-white"
                : ""
            }`}
            to="/clients"
            onClick={() => handleClick("/clients")}
          >
            <div className="flex items-center gap-1">
              <div>
                <GrRestroomMen />
              </div>
              <div>Clients</div>
            </div>
          </Link>
          <Link
            className={`w-32 py-1 pl-3 rounded-sm ${
              location.pathname === "/Devices" || activeLink === "/Devices"
                ? "bg-blue-700 text-white"
                : ""
            }`}
            to="/Devices"
            onClick={() => handleClick("/Devices")}
          >
            <div className="flex items-center gap-1">
              <div>
                <BsLaptop />
              </div>
              <div>Devices</div>
            </div>
          </Link>
          <Link
            className={`w-32 py-1 pl-3 rounded-sm ${
              location.pathname === "/Calendar" || activeLink === "/Calendar"
                ? "bg-blue-700 text-white"
                : ""
            }`}
            to="/Calendar"
            onClick={() => handleClick("/Calendar")}
          >
            <div className="flex items-center gap-1">
              <div>
                <FaCalendarAlt />
              </div>
              <div>Calendar</div>
            </div>
          </Link>
          <Link
            className={`w-32 py-1 pl-3 rounded-sm ${
              location.pathname === "/Leaves" || activeLink === "/Leaves"
                ? "bg-blue-700 text-white"
                : ""
            }`}
            to="/Leaves"
            onClick={() => handleClick("/Leaves")}
          >
            <div className="flex items-center gap-1">
              <div>
                <GiUmbrella />
              </div>
              <div>Leaves</div>
            </div>
          </Link>

          <Link
            className={`w-32 py-1 pl-3 rounded-sm ${
              location.pathname === "/Invoices" || activeLink === "/Invoices"
                ? "bg-blue-700 text-white"
                : ""
            }`}
            to="/Invoices"
            onClick={() => handleClick("/Invoices")}
          >
            <div className="flex items-center gap-1">
              <div>
                <FaFileInvoiceDollar />
              </div>
              <div>Invoices</div>
            </div>
          </Link>

          <Link
            className={`w-32 py-1 pl-3 rounded-sm ${
              location.pathname === "/Reports" || activeLink === "/Reports"
                ? "bg-blue-700 text-white"
                : ""
            }`}
            to="/Reports"
            onClick={() => handleClick("/Reports")}
          >
            <div className="flex items-center gap-1">
              <div>
                <FaFileSignature />
              </div>
              <div>Reports</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
