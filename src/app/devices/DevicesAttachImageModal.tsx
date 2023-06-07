import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";



const AttachImage = () => {
  const [showModal, setShowModal] = useState(false);

  const AddMyImage = () => {
    return (
      <>
        <div className=" fixed inset-0 w-[1260px] h-[665px] bg-black bg-opacity-25  backdrop-blur-sm   flex justify-center items-center   ">
          <div className="p-2 bg-gray-100 ">
            <div className="flex text-black ">
              <div className="font-bold"> Add/ Upload Image</div>
              <div className="flex justify-end flex-grow">
                <button
                  onClick={() => setShowModal(false)}
                  className="text-xl text-black "
                >
                  <IoIosCloseCircle />
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-5 m-3 border border-gray-500 border-dashed rounded-lg ">
              <div>
                <button className="">
                  <BsFillCloudArrowUpFill className="text-gray-500 text-7xl" />
                </button>
              </div>
              <div>
            
                Click or Drag and drop your file in this area to upload.
              </div>
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
                  Upload
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
      <button onClick={() => setShowModal(true)} className="">
        <AiOutlinePlus className="text-gray-300 rounded-md text-[100px] w-[170px]  " />
      </button>
      {showModal && <AddMyImage />}
    </>
  );
};

export default AttachImage;
 