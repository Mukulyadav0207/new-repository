import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

const EditInvoice = () => {
  const [showModal, setShowModal] = useState(false);

  const EditMyInvoice = () => {
    return (
      <>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 w-[1260px] h-[670px] backdrop-blur-sm">
          <div className="p-2 text-xs bg-gray-100 w-[370px]">
            <div className="flex gap-56 text-black">
              <div className="font-bold">Edit Invoice Details</div>
              <div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-xl text-black place-self-end"
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
                value=" IVN-120"
                className="border rounded-md w-[350px] mt-2 mb-2  p-1 font-semibold"
              ></input>
            </div>

            <label for="" className="text-sm">
              Project
            </label>
            <div>
              <input
                type=""
                value="ABC"
                className="border rounded-md w-[350px] mt-2 mb-2 text-sm p-1 font-semibold "
              ></input>
            </div>

            <label for="" className="text-sm">
              Amount
            </label>
            <div>
              <input
                type=""
                value="60,000INR"
                className="border rounded-md w-[350px] mt-2 mb-2 text-sm p-1 font-semibold"
              ></input>
            </div>

            <label for="number" className="text-sm">
              Status
            </label>
            <div className="flex-none ">
              <select className="p-1 text-sm rounded-md w-[350px] mb-2 mt-1">
                <option className="w-32 text-xs">
                  Payment Released By Client
                </option>
                <option className="w-32 text-xs">Invoice Sent</option>
                <option className="w-32 text-xs">Draft</option>
                <option className="w-32 text-xs">Skipped</option>
                <option className="w-32 text-xs">
                  Payment Received By Bank
                </option>
                <option className="w-32 text-xs">
                  Payment Received By Account
                </option>
                <option className="w-32 text-xs">Payment Defaulted</option>
                <option className="w-32 text-xs">Acknowledge By Client</option>
              </select>
            </div>

            <label for="" className="text-sm">
              Sent By
            </label>
            <div>
              <input
                type="text"
                value=" Dheeraj Sharma"
                className="border rounded-md w-[350px] mt-2 mb-2  p-1 font-semibold"
              ></input>
            </div>

            <label for="" className="text-sm">
              Sent on
            </label>
            <div>
              <input
                value="10/12/202"
                className="border rounded-md w-[350px] mt-2 mb-2 text-sm p-1 font-semibold "
              ></input>
            </div>

            <label for="" className="text-sm">
              Due Date
            </label>
            <div>
              <input
                type=""
                value="10/12/2022"
                className="border rounded-md w-[350px] mt-2 mb-2 text-sm p-1 font-semibold"
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
      <button onClick={() => setShowModal(true)} className="ml-80">
        <FaEdit />
      </button>
      {showModal && <EditMyInvoice/>}
    </>
  );
};

export default EditInvoice;
 