import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import




{ FaEdit } from "react-icons/fa";
const EditLeaveModal = () => {
  const [showModal, setShowModal] = useState(false);

  const Modal = () => {
   
 return (
   <>
     <div className=" fixed inset-0 w-[1260px] h-[665px] bg-white bg-opacity-80  backdrop-blur-xs   flex justify-center items-center   ">
       <div className="p-2 bg-gray-100 ">
         <div className="flex text-black ">
           <div className="font-bold text-sm"> Edit Employee</div>
           <div className="flex justify-end flex-grow">
             <button
               onClick={() => setShowModal(false)}
               className="text-xl text-black "
             >
               <IoIosCloseCircle />
             </button>
           </div>
         </div>

         <div className="flex gap-3">
           <div>
             <label className="text-x">First Name</label>
             <div>
               <input
                 type="text"
                 className=" w-[300px] mt-2 mb-2 border rounded-md py-1 text-x"
               ></input>
             </div>
           </div>
           <div>
             <label className="text-x ">Last Name</label>
             <div>
               <input
                 type="text"
                 className="w-[300px] mt-2 mb-2 border rounded-md py-1 text-x"
               ></input>
             </div>
           </div>
         </div>

         <label className="text-x">Personal Email</label>
         <div>
           <input className="w-full mt-2 mb-2 border rounded-md py-1 text-x "></input>
         </div>

         <label className="text-x">Company Email</label>
         <div>
           <input
             type="name"
             className="w-full mt-2 mb-2 border rounded-md py-1 text-x"
           ></input>
         </div>
         <div className="flex gap-3">
           <div>
             <label className="text-x">Role</label>
             <div>
               <select className="w-[300px] mt-2 mb-2 border rounded-md py-1 text-x">
                 <option></option>
                 <option>Intern</option>
                 <option>Full Time</option>
                 <option>Contractor</option>
               </select>
             </div>
           </div>
           <div>
             <label className="text-x"> Hours Engagement</label>
             <div>
               <input
                 type=""
                 value="08 Hours/day"
                 className="border rounded-md w-[300px] mt-2 mb-2 text-x py-1"
               ></input>
             </div>
           </div>
         </div>

         <label className="text-x">Phone Number</label>
         <div>
           <input
             type="tel"
             name="phone"
             pattern="[0-9]{10}"
             className="w-full mt-2 mb-2 border rounded-md py-1 text-x"
           ></input>
         </div>

         <div className="flex gap-3">
           <div>
             <label className="text-x">Joining Date</label>
             <div>
               <input
                 type="date"
                 className="border rounded-md w-[300px] mt-2 mb-2 py-1 text-x"
               ></input>
             </div>
           </div>
           <div>
             <label className="text-x">Rollover Date</label>
             <div>
               <input
                 type="date"
                 className="border rounded-md w-[300px]  mt-2 mb-2 py-1 text-x"
               ></input>
             </div>
           </div>
         </div>

         <div className="flex justify-end gap-3  mt-2 mb-3">
           <div>
             <button
               onClick={() => setShowModal(false)}
               className="px-3 py-2 text-[#1A13Cb]  border border-[#1A13Cb] rounded-md w-50"
             >
               Cancel
             </button>
           </div>
           <div>
             <button className="px-4 py-2 text-white bg-[#1A13Cb]  border rounded-md w-50">
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
      <button onClick={() => setShowModal(true)} className="">
        <button>
          <FaEdit />
        </button>
      </button>
      {showModal && <Modal />}
    </>
  );
};

export default EditLeaveModal;
