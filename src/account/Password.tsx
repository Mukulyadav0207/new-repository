import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const Password = (  ) => {


  
    return (
      <>
        <div className="p-3 rounded-md bg-gray-100 w-[950px] mt-4  h-[470px]">
          <div className="flex flex-col items-start justify-start">
            <label for="" className="text-sm ">
              Old Password
            </label>
            <div>
              <input
                type="text"
                className="border rounded-md w-[850px] mt-2 mb-2"
              ></input>
            </div>

            <label for="" className="text-sm">
              New Password
            </label>
            <div>
              <input
                type="text"
                className="border rounded-md w-[850px] mt-2 mb-2"
              ></input>
            </div>

            <label for="" className="text-sm">
              Confirm New Password
            </label>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                className="border rounded-md w-[850px] mt-2 mb-2"
              ></input>
            </div>
          </div>
          <div className="flex justify-end gap-3 m-7">
            <div>
              <button className="px-2 text-white bg-blue-700 border rounded-md w-50">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

 
export default Password;












// import React, { useState } from "react";
// import { IoIosCloseCircle } from "react-icons/io";

// const Password = () => {
//   const [showPasswordModal, setShowPasswordModal] = useState(false);

//   const PasswordModal = () => {
//     return (
//       <>
//         <div className="fixed left-48 top-40 bg-opacity-5">
//           <div className="p-3   bg-gray-100 w-[900px]  h-[400px]">
//             <div className="flex justify-end text-black ">
//               <div>
//                 <button
//                   onClick={() => setShowPasswordModal(false)}
//                   className="text-xl text-black place-self-end"
//                 >
//                   <IoIosCloseCircle />
//                 </button>
//               </div>
//             </div>

//             <div className="flex flex-col items-start justify-start">
//               <label for="" className="text-sm ">
//                 Old Password
//               </label>
//               <div>
//                 <input
//                   type="text"
//                   className="border rounded-md w-[850px] mt-2 mb-2"
//                 ></input>
//               </div>

//               <label for="" className="text-sm">
//                 New Password
//               </label>
//               <div>
//                 <input
//                   type="text"
//                   className="border rounded-md w-[850px] mt-2 mb-2"
//                 ></input>
//               </div>

//               <label for="" className="text-sm">
//                 Confirm New Password
//               </label>
//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   className="border rounded-md w-[850px] mt-2 mb-2"
//                 ></input>
//               </div>
//             </div>
//             <div className="flex justify-end gap-3 m-7">
//               <div>
//                 <button className="px-2 text-white bg-blue-700 border rounded-md w-50">
//                   Change Password
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   };

//   return (
//     <>
//       <button
//         onClick={() => {
//           setShowPasswordModal(true);
//         }}
//         className=""
//       >
//         Password
//       </button>
//       {showPasswordModal && <PasswordModal />}
//     </>
//   );
// };

// export default Password;
