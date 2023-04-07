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
            <div className=" text-black flex flex gap-44 ">
              <div className="font-bold"> Add Department</div>
              <div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-black text-xl place-self-end"
                >
                  <IoIosCloseCircle />
                </button>
              </div>
            </div>

            <label for="" className="text-sm">
              Name
            </label>
            <div>
              <input
                type="text"
                className="border rounded-md w-[300px] mt-2 mb-2"
              ></input>
            </div>

            <label for="" className="text-sm">
              Company Name
            </label>
            <div>
              <input
                type="text"
                className="border rounded-md w-[300px] mt-2 mb-2"
              ></input>
            </div>

            <label for="" className="text-sm">
              Email Address
            </label>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                className="border rounded-md w-[300px] mt-2 mb-2"
              ></input>
            </div>

            <label for="number" className="text-sm">
              Contact Info
            </label>
            <div>
              <input
                type="contact number"
                className="border rounded-md w-[300px] mt-2 mb-2"
              ></input>
            </div>

            <label for="" className="text-sm">
              Description
            </label>
            <div>
              <input
                type="text"
                className="border rounded-md w-[300px] h-20 mt-2 mb-2"
              ></input>
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
        + Add Client
      </button>
      {showModal && <Modal />}
    </>
  );
};

export default Modal;
