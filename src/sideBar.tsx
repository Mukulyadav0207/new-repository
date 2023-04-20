import React from "react";
import { SiAdobexd } from "react-icons/si";
import {Link} from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";

import { BsGraphUp } from "react-icons/bs";
import {CiViewTable  } from "react-icons/ci";
import {VscTypeHierarchySub  } from "react-icons/vsc";
import {GrRestroomMen  } from "react-icons/gr";
import {BsLaptop  } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";

import {GiUmbrella  } from "react-icons/gi";
import { FaFileSignature } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";






interface SidebarProps {
  // Define any props that the sidebar needs
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
    <>
      <div className="flex flex-col w-40">
        <div className="flex flex-col items-start pt-4 pb-8 gap-">
          <SiAdobexd className="pl-2 text-8xl text-amber-700" />
        </div>
        <div className="flex flex-col items-start justify-start gap-2 ">
          <Link
            to="/"
            className="w-32 py-1 pl-3 rounded-sm focus:bg-blue-700 focus:text-white"
          >
            <div className="flex items-center gap-1 ">
              <div>
                <BsGraphUp />
              </div>
              <div>Dashboard</div>
            </div>
          </Link>
          <Link
            className="w-32 py-1 pl-3 rounded-sm focus:bg-blue-700 focus:text-white"
            to="/employees"
          >
            <div className="flex items-center gap-1">
              <div>
                <BsFillPeopleFill />
              </div>
              <div>Employees</div>
            </div>
          </Link>
          <Link
            className="w-32 py-1 pl-3 rounded-sm focus:bg-blue-700 focus:text-white"
            to="/projects"
          >
            <div className="flex items-center gap-1">
              <div>
                <CiViewTable />
              </div>
              <div>Projects</div>
            </div>
          </Link>
          <Link
            className="w-32 py-1 pl-3 rounded-sm focus:bg-blue-700 focus:text-white"
            to={"/Departments"}
          >
            <div className="flex items-center gap-1">
              <div>
                <VscTypeHierarchySub />
              </div>
              <div>Departments</div>
            </div>
          </Link>
          <Link
            className="w-32 py-1 pl-3 rounded-sm focus:bg-blue-700 focus:text-white"
            to={"/clients"}
          >
            <div className="flex items-center gap-1">
              <div>
                <GrRestroomMen />
              </div>
              <div>Clients</div>
            </div>
          </Link>
          <Link
            className="w-32 py-1 pl-3 rounded-sm focus:bg-blue-700 focus:text-white"
            to={"/Devices"}
          >
            <div className="flex items-center gap-1">
              <div>
                <BsLaptop />
              </div>
              <div>Devices</div>
            </div>
          </Link>
          <Link
            className="w-32 py-1 pl-3 rounded-sm focus:bg-blue-700 focus:text-white"
            to={"/Calendar"}
          >
            <div className="flex items-center gap-1">
              <div>
                <FaCalendarAlt />
              </div>
              <div>Calendar</div>
            </div>
          </Link>
          <Link
            className="w-32 py-1 pl-3 rounded-sm focus:bg-blue-700 focus:text-white"
            to={"/Leaves"}
          >
            <div className="flex items-center gap-1">
              <div>
                <GiUmbrella />
              </div>
              <div>Leaves</div>
            </div>
          </Link>

          <Link
            className="w-32 py-1 pl-3 rounded-sm focus:bg-blue-700 focus:text-white"
            to={"/Invoices"}
          >
            <div className="flex items-center gap-1">
              <div>
                <FaFileInvoiceDollar />
              </div>
              <div>Invoices</div>
            </div>
          </Link>

          <Link
            className="w-32 py-1 pl-3 rounded-sm focus:bg-blue-700 focus:text-white"
            to={"/Reports"}
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
};

export default Sidebar;
