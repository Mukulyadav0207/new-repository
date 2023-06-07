import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoMdInformationCircle } from "react-icons/io";
import { MdNotifications } from "react-icons/md";
import { SiSpringsecurity } from "react-icons/si";
import { GoKey } from "react-icons/go";

import { IoIosArrowForward } from "react-icons/io";
import { NavLinkCSS } from "../dashboard/DashboardList";
import { useLocation } from "react-router-dom";



function NavigationBar() {
 const location = useLocation();
 const currentPath = location.pathname;
const [currentModule, setCurrentModule] = useState("Account Setting");


useEffect(() => {
  setCurrentModule(getModuleNameFromPath(currentPath));
}, [currentPath]);


const getModuleNameFromPath = (currentPath) => {
  switch (currentPath) {
    case "/app/settings/general":
      return "Account Setting";
    case "/app/settings/password":
      return "Password Setting";
    case "/app/settings/security":
      return "Security Setting";
    case "/app/settings/notification":
      return "Notifications";
    case "/app/settings/adminNotification":
      return "Admin Notifications";

    default:
      return "";
  }
};





  return (
    <>
      <div className="flex items-center">
        <div> Settings</div>
        <div className="text-xl">
          <IoIosArrowForward />
        </div>
        <div className="text-blue-700 font-semibold">{currentModule}</div>
      </div>

      <div className="flex gap-6 mt-3 font-bold">
        <NavLink to="general" style={NavLinkCSS}>
         
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <IoMdInformationCircle />
              </div>
              <div>General</div>
            </div>
         
        </NavLink>
        <NavLink to="password" style={NavLinkCSS}>
         
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <GoKey />
              </div>
              <div>Password</div>
            </div>
         
        </NavLink>
        <NavLink to="security" style={NavLinkCSS}>
          
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <SiSpringsecurity />
              </div>
              <div>Security</div>
            </div>
         
        </NavLink>
        <NavLink to="notification" style={NavLinkCSS}>
         
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <MdNotifications />
              </div>

              <div>Notification</div>
            </div>
         
        </NavLink>
        <NavLink to="adminNotification" style={NavLinkCSS}>
         
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <MdNotifications />
              </div>

              <div>Admin Notification</div>
            </div>
        
        </NavLink>
      </div>
      <div className="items-start ">
        <hr className="h-px border-0 bg-zinc-400 " />
      </div>
    </>
  );
}
export default NavigationBar;
