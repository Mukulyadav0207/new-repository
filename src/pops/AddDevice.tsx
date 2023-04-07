import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const Modal = () => {
    return (
      <>
        <div
          
          className=" fixed inset-0 bg-black bg-opacity-25  backdrop-blur-sm   flex justify-center items-center   "
        >
          <div className="  bg-gray-100   p-2  ">
          <div className=" text-black flex  ">
            <div className="font-bold"> Add Device</div>
            <div className ="flex flex-grow justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="text-black text-xl "
              >
                <IoIosCloseCircle />
              </button>
            </div>
          </div>

          <label for="" className="text-sm">
            Device Name
          </label>
          <div>
            <input
              type="text"
              className="border rounded-md w-full mt-2 mb-2"
            ></input>
          </div>

          <label for="" className="text-sm">
            Device Category
          </label>
          <div>
            <input
            placeholder="Select Category"
              type="dropdown"
              className="border rounded-md w-full mt-2 mb-2"
            ></input>
          </div>

          <label for="" className="text-sm">
            Brand Name
          </label>
          <div>
            <input
              type="name"
            
            
              className="border rounded-md w-full mt-2 mb-2"
            ></input>
          </div>
          <div className="flex flex gap-3">
            <div>
              <label for="number" className="text-sm">
                Warranty Expiry Date
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
                Purchased Date
              </label>
              <div>
                <input
                  type="date"
                  className="border rounded-md w-[300px] mt-2 mb-2"
                ></input>
              </div>
            </div>
          </div>

          <div className="flex flex gap-3">
            <div>
              <label for="number" className="text-sm">
                Model Number
              </label>
              <div>
                <input
                  type=" number"
                  className="border rounded-md w-[300px] mt-2 mb-2"
                ></input>
              </div>
            </div>
            <div>
              <label for="" className="text-sm">
                Serial Number
              </label>
              <div>
                <input
                  type="number"
                  className="border rounded-md w-[300px]  mt-2 mb-2"
                ></input>
              </div>
            </div>
          </div>

          <div className="flex flex gap-3 justify-end">
            <div>
              <button
                onClick={() => setShowModal(false)}
                className=" border border-blue-700 text-blue-700 rounded-md px-2 w-50 "
              >
                Cancel
              </button>
            </div>
            <div>
              <button className=" border text-white  bg-blue-700 rounded-md px-2 w-50 ">
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
      <button
        onClick={() => setShowModal(true)}
        className=" border  text-white rounded-md px-2 w-50 bg-blue-700 hover:bg-blue-600 "
      >
        + Add Devices
      </button>
      {showModal && <Modal />}
    </>
  );
};

export default Modal;
