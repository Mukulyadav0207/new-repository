import React, { useState } from "react";
import { IoMdInformationCircle } from "react-icons/io";
import { MdNotifications } from "react-icons/Md";
import { SiSpringsecurity } from "react-icons/si";
import { GoKey } from "react-icons/go";

import { MdArrowForwardIos } from "react-icons/Md";
import Password from "./Password";
import  General from "./General";
import Security from "./Security";
import Notification from "./Notification";
import AdminNotification from "./AdminNotification";
import { Link } from "react-router-dom";
 import NavigationBar from "./stngNavigation";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const SettingsMenu = () => {
  
  return (
    <>
      <div>
        <NavigationBar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<General />}></Route>
          <Route path="settings/password" element={<Password />}></Route>
          <Route path="settings/security" element={<Security />}></Route>
          <Route
            path="settings/notification"
            element={<Notification />}
          ></Route>
          <Route
            path="settings/adminNotification"
            element={<AdminNotification />}
          ></Route>
         
        </Routes>
      </div>
    </>
  );
}
export default SettingsMenu;

 











// import React, { useState } from "react";
// import { IoMdInformationCircle } from "react-icons/io";
// import { MdNotifications } from "react-icons/Md";
// import { SiSpringsecurity } from "react-icons/si";
// import { GoKey } from "react-icons/go";

// import { MdArrowForwardIos } from "react-icons/Md";
// import Password from "./Password";
// import  General from "./General";
// import SetSecurity from "./Security";
// import Notification from "./Notification";
// import AdminNotification from "./AdminNotification";




// const SettingsMenu = ({ currentModule, setCurrentModule,  }) => {
  
  
//   const handleModuleClick = (module) => {
//     setCurrentModule(module);
    
//   };

//   return (
//     <>
//       <div className="">
//         <p>Setting &gt; {currentModule}</p>
//         <div />
//         <div className="flex gap-5 ">
//           <button
//             onClick={() => {
//               handleModuleClick("Account Setting");
//             }}
//             className={
//               currentModule === "Account Setting"
//                 ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-32  font-bold"
//                 : "text-gray-500 "
//             }
//           >
//             <div className="flex flex-row items-center justify-center gap-1 p-2 ">
//               <div>
//                 <IoMdInformationCircle />
//               </div>
//               <div>
//                 <General />
//               </div>
//             </div>
//           </button>

//           <button
//             onClick={() => {
//               handleModuleClick("Password Setting");
//             }}
//             className={
//               currentModule === "Password Setting"
//                 ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-32  font-bold"
//                 : "text-gray-500"
//             }
//           >
//             <div className="flex flex-row items-center justify-center gap-1 p-2 ">
//               <div>
//                 <GoKey />
//               </div>
//               <div>
//                 <Password />
//               </div>
//             </div>
//           </button>

//           <button
//             onClick={() => {
//               handleModuleClick("Security Setting");
//             }}
//             className={
//               currentModule === "Security Setting"
//                 ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-32  font-bold"
//                 : "text-gray-500 "
//             }
//           >
//             <div className="flex flex-row items-center justify-center gap-1 p-2 ">
//               <div>
//                 <SiSpringsecurity />
//               </div>
//               <div>
//                 <SetSecurity />
//               </div>
//             </div>
//           </button>

//           <button
//             onClick={() => {
//               handleModuleClick("Notifications ");
//             }}
//             className={
//               currentModule === "Notifications "
//                 ? " border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-32  font-bold "
//                 : "text-gray-500 "
//             }
//           >
//             <div className="flex flex-row items-center justify-center gap-1 p-2 ">
//               <div>
//                 <MdNotifications />
//               </div>

//               <div>
//                 <Notification />
//               </div>
//             </div>
//           </button>

//           <button
//             onClick={() => {
//               handleModuleClick("Admin Notifications ");
//             }}
//             className={
//               currentModule === "Admin Notifications "
//                 ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-48  font-bold"
//                 : "text-gray-500 "
//             }
//           >
//             <div className="flex flex-row items-center justify-center gap-1 p-2 ">
//               <div>
//                 <MdNotifications />
//               </div>

//               <div>
//                 {" "}
//                 <AdminNotification />
//               </div>
//             </div>
//           </button>
//         </div>
//       </div>
//       <div className="items-start ">
//         <hr className="h-px bg-gray-100 border-0 " />
//       </div>
//     </>
//   );
// };

// function Settings({ closeModal }) {
//   const [currentModule, setCurrentModule] = useState("Account Setting");

//   let settingsContent;
//   switch (currentModule) {
//     case "Password Setting":
//       settingsContent = <Password />;
//       break;
//     case "Security Setting":
//       settingsContent = <SetSecurity />;
//       break;
//     case "Notifications ":
//       settingsContent = <Notification />;
//       break;
//     case "Admin Notifications ":
//       settingsContent = <AdminNotification />;
//       break;
//     default:
//       settingsContent = <General/>;
//       break;
//   }

//   return (
//     <>
//       <div>
//         <SettingsMenu
//           currentModule={currentModule}
//           setCurrentModule={setCurrentModule}
//         />
//         <div className="text-blue-600"> {settingsContent}</div>
//       </div>
//     </>
//   );
// }
// export default Settings;
