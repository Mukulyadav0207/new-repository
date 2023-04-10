import React, { useState } from "react";
import { IoMdInformationCircle } from "react-icons/io";
import { MdNotifications } from "react-icons/Md";
import { SiSpringsecurity } from "react-icons/si";
import { GoKey } from "react-icons/go";
import { IoIosCloseCircle } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Password from "./Password"


function Settings() {

   const [showGeneral, setShowGeneral] = useState(false);



 const General = () => {
   return (
     <>
       <div className=" fixed inset-0 bg-black bg-opacity-5     flex justify-center items-center   ">
         <div className="  bg-gray-100   p-2  ">
           <div className=" text-black flex  ">
             <div className="flex flex-grow justify-end">
               <button
                 onClick={() => setShowGeneral(false)}
                 className="text-black text-xl "
               >
                 <IoIosCloseCircle />
               </button>
             </div>
           </div>

           <div className="flex flex gap-3">
             <div>
               <label for="text" className="text-sm">
                 First Name
               </label>
               <div>
                 <input
                   type="text"
                   className="border rounded-md w-[300px] mt-2 mb-2"
                 ></input>
               </div>
             </div>
             <div>
               <label for="" className="text-sm">
                 Last Name
               </label>
               <div>
                 <input
                   type="text"
                   className="border rounded-md w-[300px] mt-2 mb-2"
                 ></input>
               </div>
             </div>
           </div>

           <div className="flex flex gap-3">
             <div>
               <label for="date" className="text-sm">
                 Date Of Birth
               </label>
               <div>
                 <input
                   type="date"
                   className="border rounded-md w-[300px] mt-2 mb-2"
                 ></input>
               </div>
             </div>
             <div>
               <label for="" className="text-sm">
                 Gender
               </label>
               <div>
                 <input
                   type="number"
                   className="border rounded-md w-[300px]  mt-2 mb-2"
                 ></input>
               </div>
             </div>
           </div>
           <label for="email" className="text-sm">
             E-mail Address
           </label>
           <div>
             <input
               type="email address"
               className="border rounded-md w-full mt-2 mb-2"
             ></input>
           </div>

           <div className = "flex flex justify-start items-center gap-3">
            <CgProfile className="text-3xl"/>
             <button className=" border text-white  bg-blue-700 rounded-md px-2 w-50 ">
               Change
             </button>
           </div>

           <div className="flex flex gap-3 justify-end">
             <div>
               <button
                 onClick={() => setShowGeneral(false)}
                 className=" border border-blue-700 text-blue-700 rounded-md px-2 w-50 "
               >
                 Cancel
               </button>
             </div>
             <div>
               <button className=" border text-white  bg-blue-700 rounded-md px-2 w-50 ">
                 Save
               </button>
             </div>
           </div>
         </div>
       </div>
     </>
   );
 };








  return (
    <>
      <div className =" p-2">settings </div>

      <div className="flex flex gap-5">
        <div className="flex flex-row justify-center items-center gap-1  font-bold p-2">
          <div>
            <IoMdInformationCircle />
          </div>

          <div>
            <button onClick={() => setShowGeneral(true)}>General</button>
          </div>
        </div>
        {showGeneral && <General />}

        <div className="flex flex-row justify-center items-center gap-1 font-bold p-2">
          <div>
            <GoKey />
          </div>

          <div><Password/></div>
        </div>
        <div className="flex flex-row justify-center items-center gap-1  font-bold p-2">
          <div>
            <SiSpringsecurity />
          </div>

          <div>Security</div>
        </div>
        <div className="flex flex-row justify-center items-center gap-1  font-bold p-2">
          <div>
            <MdNotifications />
          </div>

          <div>Notifications</div>
        </div>
        <div className="flex flex-row justify-center items-center gap-1  font-bold p-2">
          <div>
            <MdNotifications />
          </div>

          <div>Admin Notification</div>
        </div>
      </div>
      <div className=" items-start">
        <hr className="h-px  bg-gray-100  border-0 " />
      </div>
    </>
  );
}
export default Settings;
