import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";



const EditLeave = () => {
  const [showModal, setShowModal] = useState(false);

  const EditMyLeave = () => {
    return (
      <>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 w-[1260px] h-[670px] backdrop-blur-sm">
          <div className="p-2 text-xs bg-gray-100 w-[370px]">
            <div className="flex gap-64 text-black">
              <div className="font-bold">Edit Leave</div>
              <div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-xl text-black place-self-end"
                >
                  <IoIosCloseCircle />
                </button>
              </div>
            </div>

            <label for="" className="text-sm">
              Employee Name
            </label>
            <div>
              <input
                type="text"
                placeholder="Pratham Singh"
                className="border rounded-md w-[350px] mt-2 mb-2 text-sm p-1"
              ></input>
            </div>

            <label for="" className="text-sm">
              From Date
            </label>
            <div>
              <input
                type="date"
                className="border rounded-md w-[350px] mt-2 mb-2 text-sm p-1 "
              ></input>
            </div>

            <label for="" className="text-sm">
              To Date
            </label>
            <div>
              <input
                type="date"
                className="border rounded-md w-[350px] mt-2 mb-2 text-sm p-1"
              ></input>
            </div>

            <label for="number" className="text-sm">
              Type
            </label>
            <div className="flex-none ">
              <select className="p-1 text-sm rounded-md w-[350px] mb-2 mt-1">
                <option className="w-32 text-xs">Select Type</option>
                <option className="w-32 text-xs">Full Day Leave</option>
                <option className="w-32 text-xs">First Half Leave</option>
                <option className="w-32 text-xs">Second Half Leave</option>
              </select>
            </div>

            <label for="number" className="text-sm ">
              Category
            </label>
            <div className="flex-none ">
              <select className="p-1 text-sm rounded-md w-[350px] mb-2 mt-1">
                <option className="w-32 text-xs">Select Category</option>
                <option className="w-32 text-xs">Medical</option>
                <option className="w-32 text-xs">Privilege</option>
                <option className="w-32 text-xs">Casual</option>
                <option className="w-32 text-xs">Other Leaves (Exam)</option>
              </select>
            </div>

            <label for="" className="text-sm">
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
                  Add
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
        <FaEdit />
      </button>
      {showModal && <EditMyLeave />}
    </>
  );
};

export default EditLeave;
