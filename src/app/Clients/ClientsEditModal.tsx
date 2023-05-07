import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";




const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const MyModal = () => {
    return (
      <>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm w-[1150px] h-[665px]">
          <div className="p-3 bg-gray-100 h-[470px] w-[400px] text-sm">
            <div className="flex text-black gap-72">
              <div className="font-bold"> Edit Client</div>
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
              Name
            </label>
            <div>
              <input
                type="text"
                className="border rounded-md w-[370px] mt-2 mb-2"
              ></input>
            </div>

            <label for="" className="text-sm">
              Project Name
            </label>
            <div>
              <input
                type="text"
                className="border rounded-md w-[370px] mt-2 mb-2"
              ></input>
            </div>

            <label for="" className="text-sm">
              Company Name
            </label>
            <div>
              <input
                type="text"
                className="border rounded-md w-[370px] mt-2 mb-2"
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
                className="border rounded-md w-[370px] mt-2 mb-2"
              ></input>
            </div>

            <label for="number" className="text-sm">
              Contact Info
            </label>
            <div>
              <input
                type="contact number"
                className="border rounded-md w-[370px] mt-2 mb-2"
              ></input>
            </div>

            <label for="" className="text-sm">
              Description
            </label>
            <div>
              <input
                type="text"
                className="border rounded-md w-[370px] h-20 mt-2 mb-2"
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
      <button
        onClick={() => setShowModal(true)}
        className=""
      >
        <button>
          <FaEdit />
        </button>
      </button>
      {showModal && <MyModal />}
    </>
  );
};

export default Modal;
