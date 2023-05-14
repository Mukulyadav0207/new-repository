import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import General from "./SettingsGeneral";
import Password from "./SettingsPassword";

import SetSecurity from "./SettingsSecurity";
import Notification from "./SettingsNotification";
import AdminNotification from "./SettingsAdminNotification";
import { IoMdInformationCircle } from "react-icons/io";
import { MdNotifications } from "react-icons/md";
import { SiSpringsecurity } from "react-icons/si";
import { GoKey } from "react-icons/go";

import { IoIosArrowForward } from "react-icons/io";
import { NavLinkCSS } from "../Dashboard/DashboardList";




function NavigationBar() {
  function handleModuleClick(module) {
    setCurrentModule(module);
  }

  const [currentModule, setCurrentModule] = useState("Account Setting");

 

  return (
    <>
      <div className="flex items-center">
        <div> Settings</div>
        <div className="text-xl">
          <IoIosArrowForward />
        </div>
        <div className="text-blue-700">{currentModule}</div>
      </div>

      <div className="flex gap-6 mt-3 font-bold">
        <NavLink to="general" style={NavLinkCSS}>
          <button
            onClick={() => {
              handleModuleClick("Account Setting");
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
        <NavLink to="password" style={NavLinkCSS}>
          <button
            onClick={() => {
              handleModuleClick("Password Setting");
            }}
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <GoKey />
              </div>
              <div>Password</div>
            </div>
          </button>
        </NavLink>
        <NavLink to="security" style={NavLinkCSS}>
          <button
            onClick={() => {
              handleModuleClick("Security Setting");
            }}
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <SiSpringsecurity />
              </div>
              <div>Security</div>
            </div>
          </button>
        </NavLink>
        <NavLink to="notification" style={NavLinkCSS}>
          <button
            onClick={() => {
              handleModuleClick("Notifications ");
            }}
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <MdNotifications />
              </div>

              <div>Notification</div>
            </div>
          </button>
        </NavLink>
        <NavLink to="adminNotification" style={NavLinkCSS}>
          <button
            onClick={() => {
              handleModuleClick("Admin Notifications ");
            }}
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <MdNotifications />
              </div>

              <div>Admin Notification</div>
            </div>
          </button>
        </NavLink>
      </div>
      <div className="items-start ">
        <hr className="h-px border-0 bg-zinc-400 " />
      </div>
    </>
  );
}
export default NavigationBar;
