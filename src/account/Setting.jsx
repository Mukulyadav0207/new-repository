import React, { useState } from "react";
import { IoMdInformationCircle } from "react-icons/io";
import { MdNotifications } from "react-icons/Md";
import { SiSpringsecurity } from "react-icons/si";
import { GoKey } from "react-icons/go";

import { MdArrowForwardIos } from "react-icons/Md";
import Password from "./Password"
 import { General,MyGeneral } from "./General";
import SetSecurity from "./Security";





const SettingsMenu = ({
  currentModule,
  setCurrentModule,
  
}) => {
  const handleModuleClick = (module) => {
    setCurrentModule(module);
  };
  
  

  return (
    <>
      <div className="">
        <p>Setting &gt; {currentModule}</p>
        <div />
        <div className="flex gap-5 ">
          <button
            onClick={() => {
              handleModuleClick("General");
            }}
            className={
              currentModule === "General"
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-32"
                : "text-gray-500 "
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 font-bold ">
              <div>
                <IoMdInformationCircle />
              </div>
              <div>
                <General />
              </div>
            </div>
          </button>

          <button
            onClick={() => {
              handleModuleClick("Password Setting");
            }}
            className={
              currentModule == "Password Setting"
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-32"
                : "text-gray-500"
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 font-bold ">
              <div>
                <GoKey />
              </div>
              <div>
                <Password />
              </div>
            </div>
          </button>

          <button
            onClick={() => {
              handleModuleClick("Security Setting");
            }}
            className={
              currentModule === "Security Setting"
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-32"
                : "text-gray-500 "
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 font-bold">
              <div>
                <SiSpringsecurity />
              </div>
              <div>
                <SetSecurity />
              </div>
            </div>
          </button>

          <button
            onClick={() => {
              handleModuleClick("Notifications Setting");
            }}
            className={
              currentModule === "Notifications Setting"
                ? " border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-32  "
                : "text-gray-500 "
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 font-bold">
              <div>
                <MdNotifications />
              </div>

              <div>Notification</div>
            </div>
          </button>

          <button
            onClick={() => {
              handleModuleClick("Admin Notifications Setting");
            }}
            className={
              currentModule === "Admin Notifications Setting"
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-48"
                : "text-gray-500 "
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 font-bold">
              <div>
                <MdNotifications />
              </div>

              <div> Admin Notifications</div>
            </div>
          </button>
        </div>
      </div>
      <div className="items-start ">
        <hr className="h-px bg-gray-100 border-0 " />
      </div>
    </>
  );
};











function Settings( {closeModal} ) {
  const [currentModule, setCurrentModule] = useState("Account Setting");

  let settingsContent;
  switch (currentModule) {
    case "Password":
      settingsContent = <Password />;
      break;
    case "SetSecurity":
      settingsContent = <SetSecurity />;
      break;
    case "Notifications":
      settingsContent = <Notification />;
      break;
    case " Admin Notifications":
      settingsContent = <Admin Notification />;
      break;
    default:
      settingsContent = <MyGeneral/>;
      break;
  }

  return (
    <>
      <SettingsMenu
        currentModule={currentModule}
        setCurrentModule={setCurrentModule}
      />
      {settingsContent}
    </>
  );
}
export default Settings;
