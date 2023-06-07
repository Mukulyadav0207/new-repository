import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import {AiOutlinePlus} from "react-icons/ai";
import Button from "../sharedComponents/ButtonComponent";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const Modal = () => {
    return (
      <>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm w-[1260px] h-[665px]">
          <div className="p-5 bg-gray-100 ">
            <div className="flex text-black gap-44">
              <div className="font-bold"> Add Department</div>
              <div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-xl text-black place-self-end"
                >
                  <IoIosCloseCircle />
                </button>
              </div>
            </div>

            <label className="text-sm">Name</label>
            <div>
              <input
                type="text"
                className="border rounded-md w-full mt-2 mb-2"
              ></input>
            </div>

            <label className="text-sm">Company Name</label>
            <div>
              <input
                type="text"
                className="border rounded-md w-full mt-2 mb-2"
              ></input>
            </div>

            <label className="text-sm">Email Address</label>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                className="border rounded-md w-full mt-2 mb-2"
              ></input>
            </div>

            <label className="text-sm">Contact Info</label>
            <div>
              <input
                type="contact number"
                className="border rounded-md w-full mt-2 mb-2"
              ></input>
            </div>

            <label className="text-sm">Description</label>
            <div>
              <input
                type="text"
                className="border rounded-md w-full h-20 mt-2 mb-4"
              ></input>
            </div>

            <div className="flex justify-end gap-3">
              <div>
                <Button
                  onClick={() => setShowModal(false)}
                  borderColor="#1A13CB"
                  textColor="#1A13CB"
                  label="Cancel"
                  border="1px solid black"
                  width={60}
                  padding="6px 5px"
                  backgroundColor="white"
                />
              </div>
              <div>
                <Button
                  backgroundColor="#1A13CB"
                  textColor="white"
                  label="Add"
                  width={60}
                  padding="7px 18px"
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
      <Button
        onClick={() => setShowModal(true)}
        backgroundColor="#1A13CB"
        textColor="white"
        padding="8px 8px"
        label="  Add Employee"
        icon={<AiOutlinePlus />}
      />
      {showModal && <Modal />}
    </>
  );
};

export default Modal;
