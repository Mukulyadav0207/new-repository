import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../sharedComponents/ButtonComponent";
const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const Modal = () => {
    return (
      <>
        <div className=" fixed inset-0 w-[1260px] h-[665px] bg-black bg-opacity-25  backdrop-blur-sm   flex justify-center items-center   ">
          <div className="p-2 bg-gray-100 ">
            <div className="flex text-black ">
              <div className="font-bold"> Add Device</div>
              <div className="flex justify-end flex-grow">
                <button
                  onClick={() => setShowModal(false)}
                  className="text-xl text-black "
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
                className="w-full mt-2 mb-2 border rounded-md"
              ></input>
            </div>

            <label for="" className="text-sm">
              Device Category
            </label>
            <div>
              <input
                placeholder="Select Category"
                type="dropdown"
                className="w-full mt-2 mb-2 border rounded-md"
              ></input>
            </div>

            <label for="" className="text-sm">
              Brand Name
            </label>
            <div>
              <input
                type="name"
                className="w-full mt-2 mb-2 border rounded-md"
              ></input>
            </div>
            <div className="flex gap-3">
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

            <div className="flex gap-3">
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

            <div className="flex justify-end gap-3 mt-3 ">
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
        label="  Add Devices"
        icon={<AiOutlinePlus />}
      />
      {showModal && <Modal />}
    </>
  );
};

export default Modal;
