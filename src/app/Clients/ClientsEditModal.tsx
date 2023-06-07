import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import Button from "../sharedComponents/ButtonComponent";



const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const MyModal = () => {
    return (
      <>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm w-[1260px] h-[665px]">
          <div className="p-4 bg-gray-100 h-[500px] w-[400px] text-sm">
            <div className="flex text-black justify-between">
              <div className="font-bold  w-[100px]"> Edit Client</div>
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

            <div className="flex justify-end gap-3 mt-2 mb-2">
              <div>
                <Button
                  onClick={() => setShowModal(false)}
                  borderColor="#1A13CB"
                  textColor="#1A13CB"
                  label="Cancel"
                  border="1px solid black"
                  width={60}
                  padding="5px 5px"
                />
              </div>
              <div>
                <Button
                  backgroundColor="#1A13CB"
                  textColor="white"
                  label="Apply"
                  width={60}
                  padding="6px 9px"
                />
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
