import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
const AddInternModal = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  const MyModal = () => {
    return (
      <>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm w-[1260px] h-[665px]">
          <div className="  bg-gray-100 w-[350px]   p-3  rounded-md ">
            <div className="flex text-black justify-between">
              <div className="font-bold text-sm text-[#302F2F]">Add Intern</div>
              <div>
                <button
                  onClick={closeModal}
                  className="text-xl text-black place-self-end"
                >
                  <IoIosCloseCircle />
                </button>
              </div>
            </div>
            <div className="flex-col flex items-start">
              <label className="text-sm">Intern Name</label>
              <div>
                <input
                  type="text"
                  className="border w-[325px] mt-2 mb-2 border-[#707070] rounded-md p-1"
                ></input>
              </div>
              <label className="text-sm">Hourly Engagement</label>
              <div>
                <input
                  type="text"
                  className="border w-[325px] mt-2 mb-2 border-[#707070] rounded-md p-1"
                ></input>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <div>
                <button
                  onClick={closeModal}
                  className="px-2 text-[#1A13CB] border border-[#1A13CB] rounded-md w-50"
                >
                  Cancel
                </button>
              </div>
              <div>
                <button className="  px-3 text-white border-[#1A13CB] bg-[#1A13CB] border rounded-md w-50">
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
      <button
        onClick={() => setShowModal(true)}
        className=" flex items-center gap-2 px-2 py-2 pr-5 text-white bg-[#1A13CB] border rounded-md w-50 hover:bg-blue-600"
      >
        <AiOutlinePlus /> <p>Add Intern</p>
      </button>
      {showModal && <MyModal />}
    </>
  );
};

export default AddInternModal;
