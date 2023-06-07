import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../sharedComponents/ButtonComponent";


const AddNote = () => {
  const [showModal, setShowModal] = useState(false);

  const AddMyNote = () => {
    return (
      <>
        <div className=" fixed inset-0 w-[1260px] h-[665px] bg-black bg-opacity-25  backdrop-blur-sm   flex justify-center items-center   ">
          <div className="p-3 bg-gray-100">
            <div className="flex text-black ">
              <div className="font-bold"> Add Note</div>
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
              Notes
            </label>
            <div>
              <input
                type="text"
                className="border rounded-md w-[370px] h-32 mt-2 mb-2"
              ></input>
            </div>

            <div className="flex justify-end gap-3">
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
      <Button
        onClick={() => setShowModal(true)}
        backgroundColor="#1A13CB"
        textColor="white"
        padding="8px 8px"
        label="  Add Notes"
        icon={<AiOutlinePlus />}
      />
      {showModal && <AddMyNote />}
    </>
  );
};

export default AddNote;
