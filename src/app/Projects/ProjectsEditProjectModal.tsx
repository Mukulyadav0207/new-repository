import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { BsFillCloudArrowUpFill } from "react-icons/bs";



const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const MyModal = () => {
    return (
      <>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm w-[1260px] h-[665px]">
          <div className="p-3 bg-gray-100 h-[470px] w-[400px] text-x border rounded-md">
            <div className="flex text-black justify-between">
              <div className="font-bold text-sm text-[#302F2F]">
                {" "}
                Edit Project Detail
              </div>
              <div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-xl text-black "
                >
                  <IoIosCloseCircle />
                </button>
              </div>
            </div>

            <label className="text-sm text-[#4B5563]">Name</label>
            <div>
              <input
                type="text"
                className="border rounded-sm w-[370px] mt-1 mb-2 py-1 border-[#A19D9D]"
              ></input>
            </div>

            <label className="text-sm">Start Date</label>
            <div>
              <input
                type="text"
                className="border rounded-sm w-[370px] mt-1 mb-2 py-1 border-[#A19D9D]"
              ></input>
            </div>

            <label className="text-sm">Type</label>
            <div className="">
              <select className="border rounded-sm w-[370px] mt-1 mb-2 py-1.5 border-[#BBBABA] ">
                <option>Select Type</option>
                <option>Fix Bid</option>
                <option>Hourly Basis</option>
              </select>
            </div>
            <label className="text-sm">Add/ Update Logo</label>
            <div className="flex flex-col items-center justify-center p-1 mt-1 mb-2 w-[370px] border border-[#767575] border-dashed rounded-sm ">
              <div>
                <button className="">
                  <BsFillCloudArrowUpFill className="text-[#BBBABA] text-3xl" />
                </button>
              </div>
              <div className="text-[#BBBABA] text-x">
                Click or Drag and drop your file in this area to upload.
              </div>
            </div>

            <label className="text-sm ">Description</label>
            <div>
              <input
                type="text"
                className="border rounded-sm w-[370px] h-20 mt-1 mb-6 border-[#BBBABA]"
              ></input>
            </div>

            <div className="flex justify-end gap-3 mr-1">
              <div>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-2 py-1 text-blue-700 border border-blue-700 rounded-md w-50"
                >
                  Cancel
                </button>
              </div>
              <div>
                <button className="px-3 py-1 text-white bg-blue-700 border rounded-md w-50">
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
          <FaEdit className="text-sm"/>
        </button>
      </button>
      {showModal && <MyModal />}
    </>
  );
};

export default Modal;
