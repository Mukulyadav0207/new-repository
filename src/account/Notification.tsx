import React, { useState } from "react";

import { MdChatBubble } from "react-icons/md";
import { HiGlobeAlt } from "react-icons/hi";
import { FaEnvelope } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import NotificationNotes from "../modals/NotificationEdit";

const Notification = () => {
  const [showNotificationModal, setShowNotificationModal] = useState(false);

  return (
    <div className="p-3 pt-5 rounded-md bg-gray-100 w-[950px] mt-4  h-[470px] overflow-scroll">
      <h1 className="flex items-center justify-start text-md">
        User Notification
      </h1>
      <div className="flex items-center ">
        <hr className="border border-t-0 border-b-2 border-l-0 border-r-0 border-black w-[920px]  " />
      </div>
      <h1 className="flex items-start justify-start mt-3 ml-5 text-sm">
        Project
      </h1>
      <div className="flex flex-row items-start gap-16 text-sm font-normal b">
        <div className="flex flex-col ">
          <div className="flex flex-row items-center mt-3 gap-28">
            <div className="flex flex-row items-center justify-start gap-1 ml-14">
              <div className="text-blue-700">
                <FaEnvelope />
              </div>
              <div className="text-gray-400">
                <MdChatBubble />
              </div>
              <div className="text-gray-400">
                <HiGlobeAlt />
              </div>
              <div className="flex w-44">Project Added</div>
            </div>

            <div>
              <FaEdit />
            </div>
          </div>
          <div className="flex flex-row items-center mt-4 gap-28">
            <div className="flex flex-row items-center justify-start gap-1 ml-14">
              <div className="text-gray-400">
                <FaEnvelope />
              </div>
              <div className="text-blue-700">
                <MdChatBubble />
              </div>
              <div className="text-gray-400">
                <HiGlobeAlt />
              </div>
              <div className="flex w-44">Resource Removed</div>
            </div>

            <div>
              <FaEdit />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center mt-4 gap-28">
          <div className="flex flex-row items-center justify-start gap-1 ml-14">
            <div className="text-gray-400">
              <FaEnvelope />
            </div>
            <div className="text-blue-700">
              <MdChatBubble />
            </div>
            <div className="text-gray-400">
              <HiGlobeAlt />
            </div>
            <div className="flex w-44">Resource Added</div>
          </div>

          <div>
            <FaEdit />
          </div>
        </div>
      </div>

      <h1 className="flex items-start justify-start mt-3 ml-5 text-sm">
        Device
      </h1>
      <div className="flex flex-row items-start gap-16 text-sm font-normal ">
        <div className="flex flex-col ">
          <div className="flex flex-row items-center mt-3 gap-28">
            <div className="flex flex-row items-center justify-start gap-1 ml-14">
              <div className="text-gray-400">
                <FaEnvelope />
              </div>
              <div className="text-blue-700">
                <MdChatBubble />
              </div>
              <div className="text-gray-400">
                <HiGlobeAlt />
              </div>
              <div className="flex w-44">Device Assigned</div>
            </div>

            <div>
              <NotificationNotes />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center mt-4 gap-28">
          <div className="flex flex-row items-center justify-start gap-1 ml-14">
            <div className="text-gray-400">
              <FaEnvelope />
            </div>
            <div className="text-blue-700">
              <MdChatBubble />
            </div>
            <div className="text-gray-400">
              <HiGlobeAlt />
            </div>
            <div className="flex w-44">Device Unassigned</div>
          </div>

          <div>
            <FaEdit />
          </div>
        </div>
      </div>

      <h1 className="flex items-start justify-start mt-3 ml-5 text-sm">
        Leave
      </h1>
      <div className="flex flex-row items-start gap-16 text-sm font-normal ">
        <div className="flex flex-col ">
          <div className="flex flex-row items-center mt-3 gap-28">
            <div className="flex flex-row items-center justify-start gap-1 ml-14">
              <div className="text-blue-700">
                <FaEnvelope />
              </div>
              <div className="text-gray-400">
                <MdChatBubble />
              </div>
              <div className="text-blue-700">
                <HiGlobeAlt />
              </div>
              <div className="flex w-44">Leave Approved</div>
            </div>

            <div>
              <FaEdit />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center mt-4 gap-28">
          <div className="flex flex-row items-center justify-start gap-1 ml-14">
            <div className="text-gray-400">
              <FaEnvelope />
            </div>
            <div className="text-blue-700">
              <MdChatBubble />
            </div>
            <div className="text-gray-400">
              <HiGlobeAlt />
            </div>
            <div className="flex w-44">Leave Rejected</div>
          </div>

          <div>
            <FaEdit />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start gap-16 text-sm font-normal ">
        <div className="flex flex-col ">
          <div className="flex flex-row items-center mt-3 gap-28">
            <div className="flex flex-row items-center justify-start gap-1 ml-14">
              <div className="text-blue-700">
                <FaEnvelope />
              </div>
              <div className="text-gray-400">
                <MdChatBubble />
              </div>
              <div className="text-gray-400">
                <HiGlobeAlt />
              </div>
              <div className="flex w-44">Resource Pending Leave</div>
            </div>

            <div>
              <FaEdit />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center mt-4 gap-28">
          <div className="flex flex-row items-center justify-start gap-1 ml-14">
            <div className="text-blue-700">
              <FaEnvelope />
            </div>
            <div className="text-blue-700">
              <MdChatBubble />
            </div>
            <div className="text-gray-400">
              <HiGlobeAlt />
            </div>
            <div className="flex w-44">Resource Leave Approved</div>
          </div>

          <div>
            <FaEdit />
          </div>
        </div>
      </div>

      <div className="flex flex-row items-start gap-16 text-sm font-normal ">
        <div className="flex flex-col ">
          <div className="flex flex-row items-center mt-3 gap-28">
            <div className="flex flex-row items-center justify-start gap-1 ml-14">
              <div className="text-gray-400">
                <FaEnvelope />
              </div>
              <div className="text-blue-700">
                <MdChatBubble />
              </div>
              <div className="text-blue-700">
                <HiGlobeAlt />
              </div>
              <div className="flex w-44">Resource Leave Rejected</div>
            </div>

            <div>
              <FaEdit />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center mt-4 gap-28">
          <div className="flex flex-row items-center justify-start gap-1 ml-14">
            <div className="text-gray-400">
              <FaEnvelope />
            </div>
            <div className="text-gray-400">
              <MdChatBubble />
            </div>
            <div className="text-blue-700">
              <HiGlobeAlt />
            </div>
            <div className="flex w-44">Holiday Added</div>
          </div>

          <div>
            <FaEdit />
          </div>
        </div>
      </div>

      <h1 className="flex items-start justify-start mt-3 ml-5 text-sm">
        Invoice
      </h1>
      <div className="flex flex-row items-start gap-16 text-sm font-normal ">
        <div className="flex flex-col ">
          <div className="flex flex-row items-center mt-3 gap-28">
            <div className="flex flex-row items-center justify-start gap-1 ml-14">
              <div className="text-blue-700">
                <FaEnvelope />
              </div>
              <div className="text-gray-400">
                <MdChatBubble />
              </div>
              <div className="text-gray-400">
                <HiGlobeAlt />
              </div>
              <div className="flex w-44">Invoice pending Remainder</div>
            </div>

            <div>
              <FaEdit />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;

// import React, { useState } from "react";
// import { IoIosCloseCircle } from "react-icons/io";
//  import { MdChatBubble } from "react-icons/md";
// import { HiGlobeAlt } from "react-icons/hi";
//  import { FaEnvelope } from "react-icons/fa";
// import { FaEdit } from "react-icons/fa";

// const Notification = () => {
//   const [showNotificationModal, setShowNotificationModal] = useState(false);

//   const NotificationModal = () => {
//     return (
//       <div className="fixed left-44 top-40 bg-opacity-5">
//         <div className="p-3   bg-gray-100 w-[950px]   h-[470px] overflow-scroll">
//           <div className="flex justify-end text-black ">
//             <div>
//               <button
//                 onClick={() => setShowNotificationModal(false)}
//                 className="text-xl text-black place-self-end"
//               >
//                 <IoIosCloseCircle />
//               </button>
//             </div>
//           </div>

//           <h1 className="flex items-center justify-start text-md">
//             User Notification
//           </h1>
//           <div className="flex items-center ">
//             <hr className="border border-t-0 border-b-2 border-l-0 border-r-0 border-black w-[920px]  " />
//           </div>
//           <h1 className="flex items-start justify-start mt-3 ml-5 text-sm">
//             Project
//           </h1>
//           <div className="flex flex-row items-start gap-16 text-sm font-normal b">
//             <div className="flex flex-col ">
//               <div className="flex flex-row items-center mt-3 gap-28">
//                 <div className="flex flex-row items-center justify-start gap-1 ml-14">
//                   <div className="text-blue-700">
//                     <FaEnvelope />
//                   </div>
//                   <div className="text-gray-400">
//                     <MdChatBubble />
//                   </div>
//                   <div className="text-gray-400">
//                     <HiGlobeAlt />
//                   </div>
//                   <div className="flex w-44">Project Added</div>
//                 </div>

//                 <div>
//                   <FaEdit />
//                 </div>
//               </div>
//               <div className="flex flex-row items-center mt-4 gap-28">
//                 <div className="flex flex-row items-center justify-start gap-1 ml-14">
//                   <div className="text-gray-400">
//                     <FaEnvelope />
//                   </div>
//                   <div className="text-blue-700">
//                     <MdChatBubble />
//                   </div>
//                   <div className="text-gray-400">
//                     <HiGlobeAlt />
//                   </div>
//                   <div className="flex w-44">Resource Removed</div>
//                 </div>

//                 <div>
//                   <FaEdit />
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-row items-center mt-4 gap-28">
//               <div className="flex flex-row items-center justify-start gap-1 ml-14">
//                 <div className="text-gray-400">
//                   <FaEnvelope />
//                 </div>
//                 <div className="text-blue-700">
//                   <MdChatBubble />
//                 </div>
//                 <div className="text-gray-400">
//                   <HiGlobeAlt />
//                 </div>
//                 <div className="flex w-44">Resource Added</div>
//               </div>

//               <div>
//                 <FaEdit />
//               </div>
//             </div>
//           </div>

//           <h1 className="flex items-start justify-start mt-3 ml-5 text-sm">
//             Device
//           </h1>
//           <div className="flex flex-row items-start gap-16 text-sm font-normal ">
//             <div className="flex flex-col ">
//               <div className="flex flex-row items-center mt-3 gap-28">
//                 <div className="flex flex-row items-center justify-start gap-1 ml-14">
//                   <div className="text-gray-400">
//                     <FaEnvelope />
//                   </div>
//                   <div className="text-blue-700">
//                     <MdChatBubble />
//                   </div>
//                   <div className="text-gray-400">
//                     <HiGlobeAlt />
//                   </div>
//                   <div className="flex w-44">Device Assigned</div>
//                 </div>

//                 <div>
//                   <FaEdit />
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-row items-center mt-4 gap-28">
//               <div className="flex flex-row items-center justify-start gap-1 ml-14">
//                 <div className="text-gray-400">
//                   <FaEnvelope />
//                 </div>
//                 <div className="text-blue-700">
//                   <MdChatBubble />
//                 </div>
//                 <div className="text-gray-400">
//                   <HiGlobeAlt />
//                 </div>
//                 <div className="flex w-44">Device Unassigned</div>
//               </div>

//               <div>
//                 <FaEdit />
//               </div>
//             </div>
//           </div>

//           <h1 className="flex items-start justify-start mt-3 ml-5 text-sm">
//             Leave
//           </h1>
//           <div className="flex flex-row items-start gap-16 text-sm font-normal ">
//             <div className="flex flex-col ">
//               <div className="flex flex-row items-center mt-3 gap-28">
//                 <div className="flex flex-row items-center justify-start gap-1 ml-14">
//                   <div className="text-blue-700">
//                     <FaEnvelope />
//                   </div>
//                   <div className="text-gray-400">
//                     <MdChatBubble />
//                   </div>
//                   <div className="text-blue-700">
//                     <HiGlobeAlt />
//                   </div>
//                   <div className="flex w-44">Leave Approved</div>
//                 </div>

//                 <div>
//                   <FaEdit />
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-row items-center mt-4 gap-28">
//               <div className="flex flex-row items-center justify-start gap-1 ml-14">
//                 <div className="text-gray-400">
//                   <FaEnvelope />
//                 </div>
//                 <div className="text-blue-700">
//                   <MdChatBubble />
//                 </div>
//                 <div className="text-gray-400">
//                   <HiGlobeAlt />
//                 </div>
//                 <div className="flex w-44">Leave Rejected</div>
//               </div>

//               <div>
//                 <FaEdit />
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-row items-start gap-16 text-sm font-normal ">
//             <div className="flex flex-col ">
//               <div className="flex flex-row items-center mt-3 gap-28">
//                 <div className="flex flex-row items-center justify-start gap-1 ml-14">
//                   <div className="text-blue-700">
//                     <FaEnvelope />
//                   </div>
//                   <div className="text-gray-400">
//                     <MdChatBubble />
//                   </div>
//                   <div className="text-gray-400">
//                     <HiGlobeAlt />
//                   </div>
//                   <div className="flex w-44">Resource Pending Leave</div>
//                 </div>

//                 <div>
//                   <FaEdit />
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-row items-center mt-4 gap-28">
//               <div className="flex flex-row items-center justify-start gap-1 ml-14">
//                 <div className="text-blue-700">
//                   <FaEnvelope />
//                 </div>
//                 <div className="text-blue-700">
//                   <MdChatBubble />
//                 </div>
//                 <div className="text-gray-400">
//                   <HiGlobeAlt />
//                 </div>
//                 <div className="flex w-44">Resource Leave Approved</div>
//               </div>

//               <div>
//                 <FaEdit />
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-row items-start gap-16 text-sm font-normal ">
//             <div className="flex flex-col ">
//               <div className="flex flex-row items-center mt-3 gap-28">
//                 <div className="flex flex-row items-center justify-start gap-1 ml-14">
//                   <div className="text-gray-400">
//                     <FaEnvelope />
//                   </div>
//                   <div className="text-blue-700">
//                     <MdChatBubble />
//                   </div>
//                   <div className="text-blue-700">
//                     <HiGlobeAlt />
//                   </div>
//                   <div className="flex w-44">Resource Leave Rejected</div>
//                 </div>

//                 <div>
//                   <FaEdit />
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-row items-center mt-4 gap-28">
//               <div className="flex flex-row items-center justify-start gap-1 ml-14">
//                 <div className="text-gray-400">
//                   <FaEnvelope />
//                 </div>
//                 <div className="text-gray-400">
//                   <MdChatBubble />
//                 </div>
//                 <div className="text-blue-700">
//                   <HiGlobeAlt />
//                 </div>
//                 <div className="flex w-44">Holiday Added</div>
//               </div>

//               <div>
//                 <FaEdit />
//               </div>
//             </div>
//           </div>

//           <h1 className="flex items-start justify-start mt-3 ml-5 text-sm">
//             Invoice
//           </h1>
//           <div className="flex flex-row items-start gap-16 text-sm font-normal ">
//             <div className="flex flex-col ">
//               <div className="flex flex-row items-center mt-3 gap-28">
//                 <div className="flex flex-row items-center justify-start gap-1 ml-14">
//                   <div className="text-blue-700">
//                     <FaEnvelope />
//                   </div>
//                   <div className="text-gray-400">
//                     <MdChatBubble />
//                   </div>
//                   <div className="text-gray-400">
//                     <HiGlobeAlt />
//                   </div>
//                   <div className="flex w-44">Invoice pending Remainder</div>
//                 </div>

//                 <div>
//                   <FaEdit />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <button
//         onClick={() => {
//           setShowNotificationModal(true);
//         }}
//         className=""
//       >
//         Notifications
//       </button>
//       {showNotificationModal && <NotificationModal />}
//     </>
//   );
// };

// export default Notification;
