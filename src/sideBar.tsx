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
    <div className="sidebar  bg-gray-100  w-36 h-924px flex flex-col gap-4 items-start  pl-4 pt-4 pb-10 ">
      <SiAdobexd className="text-6xl text-amber-700" />

      <Link to="/" className=" hover:text-red-200  ">
    
        <div className="flex flex items-center justify-center  gap-1">
          <div>
            <BsGraphUp />
          </div>
          <div>Dashboard</div>
        </div>
      </Link>
      <Link className=" hover:text-red-200" to="/employees">
        <div className="flex flex justify-center items-center gap-1">
          <div>
            <BsFillPeopleFill />
          </div>
          <div>Employees</div>
        </div>
      </Link>
      <Link className=" hover:text-red-200" to="/projects">
        <div className="flex flex justify-center items-center gap-1">
          <div>
            <CiViewTable />
          </div>
          <div>Projects</div>
        </div>
      </Link>
      <Link className=" hover:text-red-200" to={"/Departments"}>
        <div className="flex flex justify-center items-center gap-1">
          <div>
            <VscTypeHierarchySub />
          </div>
          <div>Departments</div>
        </div>
      </Link>
      <Link className=" hover:text-red-200" to={"/Clients"}>
        <div className="flex flex justify-center items-center gap-1">
          <div>
            <GrRestroomMen />
          </div>
          <div>Clients</div>
        </div>
      </Link>
      <Link className=" hover:text-red-200" to={"/Devices"}>
        <div className="flex flex justify-center items-center gap-1">
          <div>
            <BsLaptop />
          </div>
          <div>Devices</div>
        </div>
      </Link>
      <Link className=" hover:text-red-200" to={"/Calendar"}>
        <div className="flex flex justify-center items-center gap-1">
          <div>
            <FaCalendarAlt />
          </div>
          <div>Calendar</div>
        </div>
      </Link>
      <Link className=" hover:text-red-200" to={"/Leaves"}>
        <div className="flex flex justify-center items-center gap-1">
          <div>
            <GiUmbrella />
          </div>
          <div>Leaves</div>
        </div>
      </Link>

      <Link className=" hover:bgt-red-200" to={"/Invoices"}>
        <div className="flex flex justify-center items-center gap-1">
          <div>
            <FaFileInvoiceDollar />
          </div>
          <div>Invoices</div>
        </div>
      </Link>

      <Link className=" hover:text-red-200" to={"/Reports"}>
        <div className="flex flex justify-center items-center gap-1">
          <div>
            <FaFileSignature />
          </div>
          <div>Reports</div>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
