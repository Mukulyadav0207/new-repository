import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { MdDelete } from "react-icons/md";





const DeleteConfermation = () => {
  const [showModal, setShowModal] = useState(false);

  const DeleteMyConfermation = () => {
    return (
      <>
        <div className=" fixed inset-0 w-[1260px] h-[665px] bg-black bg-opacity-25  backdrop-blur-sm   flex justify-center items-center   ">
          <div className="p-3 bg-gray-100 border rounded-md">
            <div className="flex text-black gap-36 ">
              <div className="flex items-center gap-1 font-bold">
                
                  <TbAlertTriangleFilled className='text-red-600' />
                
                <p>Delete Confirmation</p>
              </div>
              <div className="flex justify-end flex-grow">
                <button
                  onClick={() => setShowModal(false)}
                  className="text-xl text-black "
                >
                  <IoIosCloseCircle />
                </button>
              </div>
            </div>
            <p className="text-sm font-semibold ml-7">
              Are you sure want to delete this holiday
            </p>
            <div className="flex justify-end gap-3 mt-9">
              <div>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-2 text-blue-700 border border-blue-700 rounded-md w-50 "
                >
                  Cancel
                </button>
              </div>
              <div>
                <button className="px-2 text-white bg-blue-700 border rounded-md w-50">
                  Delete
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
      <button onClick={() => setShowModal(true)}>
        <MdDelete className="text-red-500 ml-52" />
      </button>
      {showModal && <DeleteMyConfermation />}
    </>
  );
};

export default DeleteConfermation;
