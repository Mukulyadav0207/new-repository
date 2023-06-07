import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import Button from "../sharedComponents/ButtonComponent";

const EditDevice = () => {
  const [showModal, setShowModal] = useState(false);

  const MyModal = () => {
    return (
      <>
        <div className=" fixed inset-0 bg-[#E9E9E9] bg-opacity-25 w-[1260px] h-[665px] backdrop-blur-sm   flex justify-center items-center   ">
          <div className="p-4 bg-white border rounded-md ">
            <div className="flex text-black gap-60">
              <div className="flex items-center justify-center gap-1 mb-3 ">
                <h3 className="font-bold text-sm">Edit/Unset Employee</h3>
              </div>
              <div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-xl text-black place-self-end"
                >
                  <IoIosCloseCircle />
                </button>
              </div>
            </div>

            <div className="flex-col flex items-start ">
              <label className="text-x text-[#4B5563]  ">Employee Name</label>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder=""
                  className="border rounded-md w-[400px]  mb-1 text-xs px-2 py-1 border-gray-400"
                ></input>
              </div>
              <label className="text-x text-[#4B5563] mt-2">Assigned Date</label>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder=""
                  className="border rounded-md w-[400px]  mb-1 text-xs px-2 py-1 border-gray-400"
                ></input>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-4 mb-2">
              <div>
                <Button
                  onClick={() => setShowModal(false)}
                  borderColor="#1A13CB"
                  textColor="#1A13CB"
                  label="Unset"
                  border="1px solid black"
                  width={60}
                  padding="7px 12px"
                />
              </div>
              <div>
                <Button
                  backgroundColor="#1A13CB"
                  textColor="white"
                  label="Save"
                  width={60}
                  padding="8px 18px"
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
        textColor="black"
        icon={<FaEdit />}
      />
      {showModal && <MyModal />}
    </>
  );
};

export default EditDevice;
