import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

const LeaveEdit = () => {
  const [showModal, setShowModal] = useState(false);

  const MyLeaveEdit = () => {
    return (
      <>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm w-[1260px] h-[665px]">
          <div className="p-3 bg-gray-100 h-[490px] w-[400px] text-sm">
            <div className="flex text-black gap-72">
              <div className="font-bold"> Edit Leave</div>
              <div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-xl text-black place-self-end"
                >
                  <IoIosCloseCircle />
                </button>
              </div>
            </div>

            <div className="flex justify-end mt-6 mr-2 text-xs font-semibold">
              <button className="p-1 text-blue-500 border border-gray-400 rounded-l-md">
                Monthly Credits
              </button>
              <button className="p-1 border border-gray-400 rounded-r-md">
                One time Credits
              </button>
            </div>

            <label for="" className="text-sm font-semibold text-gray-500">
              Casual Leave
            </label>
            <div>
              <input
                placeholder="01"
                type="text"
                className="border rounded-md w-[370px] mt-2 mb-2 bg-gray-300 border-gray-400 px-4 py-1 text-black"
              ></input>
            </div>

            <div className="flex justify-end mt-2 mr-2 text-xs font-semibold">
              <button className="p-1 border border-gray-400 rounded-l-md">
                Monthly Credits
              </button>
              <button className="p-1 text-blue-500 border border-gray-400 rounded-r-md">
                One time Credits
              </button>
            </div>
            <label for="" className="text-sm font-semibold text-gray-500">
              Medical Leave
            </label>
            <div>
              <input
                placeholder="01"
                type="text"
                className="border rounded-md w-[370px] mt-2 mb-2 bg-gray-300 border-gray-400 px-4 py-1"
              ></input>
            </div>

            <div className="flex justify-end mt-2 mr-2 text-xs font-semibold">
              <button className="p-1 text-blue-500 border border-gray-400 rounded-l-md">
                Monthly Credits
              </button>
              <button className="p-1 border border-gray-400 rounded-r-md">
                One time Credits
              </button>
            </div>

            <label for="" className="text-sm font-semibold text-gray-500">
              Previlege Leave
            </label>
            <div>
              <input
                placeholder="01"
                type="text"
                className="border rounded-md w-[370px] mt-2 mb-2 bg-gray-300 border-gray-400 px-4 py-1"
              ></input>
            </div>

            <div className="flex justify-end mt-2 mr-2 text-xs font-semibold">
              <button className="p-1 border border-gray-400 rounded-l-md">
                Monthly Credits
              </button>
              <button className="p-1 border border-gray-400 rounded-r-md">
                One time Credits
              </button>
            </div>

            <label for="" className="text-sm font-semibold text-gray-500 ">
              <div className="flex ">
            
                Other Leave [ Optional
                <input
                  className="h-4 m-1"
                  type="checkbox"
                  id="checkbox1"
                  name="checkbox1"
                  value="Option 1"
                />
                ]
              </div>
            </label>

            <div>
              <input className="border rounded-sm w-[370px] mt-2 mb-2  border-gray-400 py-1"></input>
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
      <button onClick={() => setShowModal(true)} className="">
        <button>
          <FaEdit />
        </button>
      </button>
      {showModal && <MyLeaveEdit />}
    </>
  );
};

export default LeaveEdit;
