import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";
import Button from "../sharedComponents/ButtonComponent";


const AlterRequest = () => {
  const [showModal, setShowModal] = useState(false);
 const [showAlterDates, setShowAlterDates] = useState(false);
 const [showLeaves, setShowLeaves] = useState(false);
const [activeButton, setActiveButton] = useState("");

  






const AlterDates =()=>{
  return(
  <div>    
 
            <label  className="text-sm">
              From Date
            </label>
            <div>
              <input
                type="date"
                className="border rounded-md w-[350px] mt-2 mb-2 text-sm p-1 "
              ></input>
            </div>

            <label  className="text-sm">
              To Date
            </label>
            <div>
              <input
                type="date"
                className="border rounded-md w-[350px] mt-2 mb-2 text-sm p-1"
              ></input>
            </div>

            <label  className="text-sm">
              Type
            </label>
          <div>
              <input
                type="text"
                placeholder="Full Day"
                className="border rounded-md w-[350px] mt-2 mb-2 text-sm p-1 "
              ></input>
            </div>

            <label  className="text-sm ">
              Category
            </label>
           <div>
              <input
                type="text"
                placeholder="Casual"
                className="border rounded-md w-[350px] mt-2 mb-2 text-sm p-1 "
              ></input>
            </div>

            <label  className="text-sm">
              Reason
            </label>
            <div>
              <input
                type="text"
                className="border rounded-md w-[350px] h-20 mt-2 mb-2"
              ></input>
            </div>

            <div className="flex justify-end gap-3">
              <div>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-2 text-blue-700 border border-blue-700 rounded-md w-50"
                >
                  Cancel
                </button>
              </div>
              <div>
                <button className="px-2 text-white bg-blue-700 border rounded-md w-50">
                  Alter
                </button>
              </div>
            </div>
    
  </div>
    
  );
}


const Leaves =()=>{
  return (
    <div>
      <label className="text-sm">From Date</label>
      <div>
        <input
          type=""
          placeholder="12/10/2022"
          className="border rounded-md w-[350px] mt-2 mb-2 text-sm p-1 "
        ></input>
      </div>

      <label className="text-sm">To Date</label>
      <div>
        <input
          type=""
          placeholder="14/10/2022"
          className="border rounded-md w-[350px] mt-2 mb-2 text-sm p-1"
        ></input>
      </div>

      <label className="text-sm">Type</label>
      <div>
        <input
          type="text"
          placeholder="First Half Leave"
          className="border rounded-md w-[350px] mt-2 mb-2 text-sm p-1 "
        ></input>
      </div>

      <label className="text-sm ">Category</label>
      <div>
        <input
          type="text"
          placeholder="Medical"
          className="border rounded-md w-[350px] mt-2 mb-2 text-sm p-1 "
        ></input>
      </div>

      <label className="text-sm">Reason</label>
      <div>
        <input
          type="text"
          placeholder=""
          className="border rounded-md w-[350px] h-20 mt-2 mb-2"
        ></input>
      </div>

      <div className="flex justify-end gap-3">
        <div>
          <button
            onClick={() => setShowModal(false)}
            className="px-2 text-blue-700 border border-blue-700 rounded-md w-50"
          >
            Cancel
          </button>
        </div>
        <div>
          <button className="px-2 text-white bg-blue-700 border rounded-md w-50">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}






 
  const Modal = () => {
    return (
      <>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 w-[1260px] h-[670px] backdrop-blur-sm">
          <div className="p-2 text-xs bg-gray-100 w-[370px] h-[470px]">
            <div className="flex gap-64 text-black">
              <div className="font-bold">Alter Request</div>
              <div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-xl text-black place-self-end"
                >
                  <IoIosCloseCircle />
                </button>
              </div>
            </div>
            <div className="flex">
              <button
                onClick={() => {
                  setShowLeaves(false);
                  setShowAlterDates(true);
                   setActiveButton("alterDates");
                }}
                className={'p-1 border border-gray-400 rounded-l-md  ${  activeButton === "alterDates" ? "text-blue-500" : ""}'}
              >
                alterDates
              </button>

              <button
                onClick={() => {
                  setShowAlterDates(false);
                  setShowLeaves(true);
                }}
                className="p-1 border border-gray-400 rounded-r-md"
              >
                Leave Not Required
              </button>
            </div>
            {showAlterDates && <AlterDates />}
            {showLeaves && <Leaves />}
          </div>
        </div>
      </>
    );
  };
  

  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        label={"Alert Request"}
        icon={<BsPencilFill className="text-xs " />}
        border="1px solid "
        backgroundColor="#1A13CB"
        textColor="white"
        padding="5px 11px"
      />
     
      {showModal && <Modal />}
    </>
  );
};

export default AlterRequest;












//             <label for="" className="text-sm">
//               Employee Name
//             </label>
//             <div>
//               <input
//                 type="text"
//                 placeholder="Pratham Singh"
//                 className="border rounded-md w-[350px] mt-2 mb-2 text-sm p-1"
//               ></input>
//             </div>

//             <label for="" className="text-sm">
//               From Date
//             </label>
//             <div>
//               <input
//                 type="date"
//                 className="border rounded-md w-[350px] mt-2 mb-2 text-sm p-1 "
//               ></input>
//             </div>

//             <label for="" className="text-sm">
//               To Date
//             </label>
//             <div>
//               <input
//                 type="date"
//                 className="border rounded-md w-[350px] mt-2 mb-2 text-sm p-1"
//               ></input>
//             </div>

//             <label for="number" className="text-sm">
//               Type
//             </label>
//             <div className="flex-none ">
//               <select className="p-1 text-sm rounded-md w-[350px] mb-2 mt-1">
//                 <option className="w-32 text-xs">Select Type</option>
//                 <option className="w-32 text-xs">Full Day Leave</option>
//                 <option className="w-32 text-xs">First Half Leave</option>
//                 <option className="w-32 text-xs">Second Half Leave</option>
//               </select>
//             </div>

//             <label for="number" className="text-sm ">
//               Category
//             </label>
//             <div className="flex-none ">
//               <select className="p-1 text-sm rounded-md w-[350px] mb-2 mt-1">
//                 <option className="w-32 text-xs">Select Category</option>
//                 <option className="w-32 text-xs">Medical</option>
//                 <option className="w-32 text-xs">Privilege</option>
//                 <option className="w-32 text-xs">Casual</option>
//                 <option className="w-32 text-xs">Other Leaves (Exam)</option>
//               </select>
//             </div>

//             <label for="" className="text-sm">
//               Reason
//             </label>
//             <div>
//               <input
//                 type="text"
//                 className="border rounded-md w-[350px] h-20 mt-2 mb-2"
//               ></input>
//             </div>

//             <div className="flex justify-end gap-3">
//               <div>
//                 <button
//                   onClick={() => setShowModal(false)}
//                   className="px-2 text-blue-700 border border-blue-700 rounded-md w-50"
//                 >
//                   Cancel
//                 </button>
//               </div>
//               <div>
//                 <button className="px-2 text-white bg-blue-700 border rounded-md w-50">
//                   Add
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
//       <button onClick={() => setShowModal(true)} className="">
//         <FaEdit />
//       </button>
//       {showModal && <EditMyLeave />}
//     </>
//   );
// };

// export default EditLeave;
