import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { GrFormAdd } from "react-icons/gr";
import LineItems from "./LineItems";




const AddInvoice = () => {
  const [showModal, setShowModal] = useState(false);

  const Modal = () => {
    return (
      <>
        <div className=" fixed inset-0 w-[1260px] h-[665px] bg-black bg-opacity-25  backdrop-blur-sm   flex justify-center items-center   ">
          <div className="p-2 bg-gray-100 ">
            <div className="flex text-black ">
              <div className="font-bold"> Add Invoice</div>
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
              Invoice Number
            </label>
            <div>
              <input
                type="text"
                className="w-full mt-2 mb-2 border border-gray-400 rounded-md"
              ></input>
            </div>

            <div className="flex items-center">
              <p>Line Items</p>
              <LineItems />
            </div>
            <label for="" className="text-sm">
              Project
            </label>
            <div>
              <input
                placeholder=""
                type="dropdown"
                className="w-full mt-2 mb-2 border border-gray-400 rounded-md"
              ></input>
            </div>

            <label for="" className="text-sm">
              Invoice Date
            </label>
            <div>
              <input
                type="name"
                className="w-full mt-2 mb-2 border border-gray-400 rounded-md "
              ></input>
            </div>

            <label for="number" className="text-sm">
              Due Date
            </label>
            <div>
              <input
                type=""
                className="w-full mt-2 mb-2 border border-gray-400 rounded-md"
              ></input>
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
        + Add Invoice
      </button>
      {showModal && <Modal />}
    </>
  );
};

export default AddInvoice;
