import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";


const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);


const MyModal = () => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm w-[1260px] h-[665px]">
        <div className="  bg-gray-100 w-[350px] h-36  p-2  ">
          <div className="flex text-black gap-44">
            <div className="font-bold"> Add Department</div>
            <div>
              <button
                onClick={closeModal}
                className="text-xl text-black place-self-end"
              >
                <IoIosCloseCircle />
              </button>
            </div>
          </div>
          <label  className="text-sm">
            Department Name
          </label>
          <div>
            <input type="text" className="border w-[300px] mt-2 mb-2"></input>
          </div>

          <div className="flex justify-end gap-3">
            <div>
              <button
                onClick={closeModal}
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
        className="px-2 text-white bg-blue-700 border rounded-md w-50 hover:bg-blue-600"
      >
        + Add Department
      </button>
      {showModal && <MyModal  />}
    </>
  );
};

export default Modal;
