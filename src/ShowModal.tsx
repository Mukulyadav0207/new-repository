import { IoIosCloseCircle } from "react-icons/io";
import React, { useState } from "react";


const MyModal = ({closeModal}) => {

      
  return (
    <>
      <div
       
        className=" fixed inset-0 bg-black bg-opacity-25  backdrop-blur-sm   flex justify-center items-center   "
      >
        <div className="  bg-gray-100 w-[350px] h-36  p-2  ">
          <div className=" text-black flex flex gap-44 ">
            <div className="font-bold"> Add Department</div>
            <div>
              <button
                onClick={closeModal}
                className="text-black text-xl place-self-end"
              >
                <IoIosCloseCircle />
              </button>
            </div>
          </div>
          <label for="" className="text-sm">
            Department Name
          </label>
          <div>
            <input type="text" className="border w-[300px] mt-2 mb-2"></input>
          </div>

          <div className="flex flex gap-3 justify-end">
            <div>
              <button
                onClick={closeModal}
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
export default MyModal;
