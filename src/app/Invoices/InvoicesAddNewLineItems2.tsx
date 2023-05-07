import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { GrFormAdd } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";






const LineItems2 = () => {
  const [showModal, setShowModal] = useState(false);
  const [showHourly, setShowHourly] = useState(false);
  const [showFixed, setShowFixed] = useState(false);

  const Hourly = () => {
    return (
      <>
        <label className="text-sm">Description</label>
        <div>
          <input
            type="text"
            className="w-full h-20 mt-2 mb-2 border border-gray-400 rounded-md"
          ></input>
        </div>
        <label for="number" className="text-sm">
          Currency
        </label>
        <div>
          <select className="border rounded-md w-[383px] mt-2 mb-2 border-gray-400 text=xs">
            <option>Select Currency</option>
            <option>USD</option>
            <option>INR</option>
          </select>
        </div>

        <label for="" className="text-sm">
          Rate
        </label>
        <div>
          <input
            placeholder=""
            type="dropdown"
            className="w-full mt-2 mb-2 border border-gray-400 rounded-md"
          ></input>
        </div>

        <label className="text-sm">Hours</label>
        <div>
          <input
            type="name"
            className="w-full mt-2 mb-2 border border-gray-400 rounded-md "
          ></input>
        </div>
      </>
    );
  };

  const Fixed = () => {
    return (
      <>
        <label className="text-sm">Description</label>
        <div>
          <input
            type="text"
            className="w-full h-20 mt-2 mb-2 border border-gray-400 rounded-md"
          ></input>
        </div>
        <label for="number" className="text-sm">
          Currency
        </label>
        <div>
          <select className="border rounded-md w-[383px] mt-2 mb-2 border-gray-400 text=xs">
            <option>Select Currency</option>
            <option>USD</option>
            <option>INR</option>
          </select>
        </div>

        <label for="" className="text-sm">
          Amount
        </label>
        <div>
          <input
            placeholder=""
            type="dropdown"
            className="w-full mt-2 mb-2 border border-gray-400 rounded-md"
          ></input>
        </div>
      </>
    );
  };

  const Modal = () => {
    return (
      <>
        <div className=" fixed inset-0 w-[1260px] h-[665px]  bg-opacity-25  backdrop-blur-sm   flex justify-center items-center   ">
          <div className="p-2 bg-gray-100 w-[400px] h-[450px]">
            <div className="flex ">
              <div className="font-bold"> Line Items</div>
              <div className="flex justify-end flex-grow">
                <button
                  onClick={() => setShowModal(false)}
                  className="text-xl text-black "
                >
                  <IoIosCloseCircle />
                </button>
              </div>
            </div>
            <div className="flex mt-2 mb-2">
              <button
                onClick={() => {
                  setShowFixed(true);
                  setShowHourly(false);
                }}
                className="px-1 border border-gray-400 rounded-l-md"
              >
                Fixed
              </button>
              <button
                onClick={() => {
                  setShowHourly(true);
                  setShowFixed(false);
                }}
                className="px-1 border border-gray-400 rounded-r-md"
              >
                Hourly
              </button>
            </div>
            <div className=" h-[340px]">
              {showHourly && <Hourly />}
              {showFixed && <Fixed />}
            </div>

            <div className="flex justify-end gap-3 mt-">
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
        onClick={() => {
          setShowModal(true);
          setShowFixed(true);
          setShowHourly(false);
        }}
       className=" flex items-center px-0.5 py-2 font-bold text-white bg-blue-600 border rounded-md text-x gap-1">
                <AiOutlinePlus className="font- "/>
            Add New Line Item</button>
      {showModal && <Modal />}
    </>
  );
};

export default LineItems2;
