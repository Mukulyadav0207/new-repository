import React, { useState } from "react";
import { Link } from "react-router-dom";
import General from "./General";
import Password from "./Password";

import SetSecurity from "./Security";
import Notification from "./Notification";
import AdminNotification from "./AdminNotification";
import { IoMdInformationCircle } from "react-icons/io";
import { MdNotifications } from "react-icons/Md";
import { SiSpringsecurity } from "react-icons/si";
import { GoKey } from "react-icons/go";

import { IoIosArrowForward } from "react-icons/io";




function NavigationBar() {
  const handleModuleClick = (module) => {
    setCurrentModule(module);
  };

  const [currentModule, setCurrentModule] = useState("Account Setting");

  let settingsContent;
    switch (currentModule) {
      case "Password Setting":
        settingsContent = <Password />;
        break;
      case "Security Setting":
        settingsContent = <SetSecurity />;
        break;
      case "Notifications ":
        settingsContent = <Notification />;
        break;
      case "Admin Notifications ":
        settingsContent = <AdminNotification />;
        break;
      default:
        settingsContent = <General/>;
        break;
    }

  return (
    <>
      <div className="flex items-center">
        <div> Settings</div>
        <div className="text-xl">
          <IoIosArrowForward />
        </div>
        <div className="text-blue-700">{currentModule}</div>
      </div>

      <div className="flex gap-4 mt-3 font-bold">
        <Link to="./">
          <button
            onClick={() => {
              handleModuleClick("Account Setting");
            }}
            className={
              currentModule === "Account Setting"
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-32  font-bold"
                : "text-gray-400 "
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <IoMdInformationCircle />
              </div>
              <div>General</div>
            </div>
          </button>
        </Link>
        <Link to="settings/password">
          <button
            onClick={() => {
              handleModuleClick("Password Setting");
            }}
            className={
              currentModule === "Password Setting"
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-32  font-bold"
                : "text-gray-400"
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <GoKey />
              </div>
              <div>Password</div>
            </div>
          </button>
        </Link>
        <Link to="settings/security">
          <button
            onClick={() => {
              handleModuleClick("Security Setting");
            }}
            className={
              currentModule === "Security Setting"
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-32  font-bold"
                : "text-gray-400 "
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <SiSpringsecurity />
              </div>
              <div>Security</div>
            </div>
          </button>
        </Link>
        <Link to="settings/notification">
          <button
            onClick={() => {
              handleModuleClick("Notifications ");
            }}
            className={
              currentModule === "Notifications "
                ? " border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-32  font-bold "
                : "text-gray-400 "
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <MdNotifications />
              </div>

              <div>Notification</div>
            </div>
          </button>
        </Link>
        <Link to="settings/adminNotification">
          <button
            onClick={() => {
              handleModuleClick("Admin Notifications ");
            }}
            className={
              currentModule === "Admin Notifications "
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-48  font-bold"
                : "text-gray-400 "
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <MdNotifications />
              </div>

              <div>Admin Notification</div>
            </div>
          </button>
        </Link>
      </div>
      <div className="items-start ">
        <hr className="h-px border-0 bg-zinc-400 " />
      </div>
    </>
  );
}
export default NavigationBar;
