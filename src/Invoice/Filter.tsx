import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { TiFilter } from "react-icons/ti";
const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);

  const MyFilter = () => {
    return (
      <>
        <div className=" fixed inset-0 bg-black bg-opacity-25 w-[1260px] h-[665px] backdrop-blur-sm   flex justify-center items-center   ">
          <div className="p-2 bg-gray-100 border rounded-md ">
            <div className="flex text-black gap-60">
              <div className="flex items-center justify-center gap-1 ">
                <div className="text-sm">
                  <TiFilter />
                </div>
                <div className="font-bold">Filters</div>
              </div>
              <div>
                <button
                  onClick={() => setShowFilter(false)}
                  className="text-xl text-black place-self-end"
                >
                  <IoIosCloseCircle />
                </button>
              </div>
            </div>

            <label for="" className="text-sm">
              Project
            </label>
            <div>
              <select className=" border rounded-md text-xs w-[320px] px-2 text-gray-400 border-gray-500">
                <option>Select Project</option>
                <option className="text-x">
                  <input type="checkbox"></input>ABC
                </option>
                <option className="text-x">
                  <input type="checkbox"></input>ABC
                </option>
                <option className="text-x">
                  <input type="checkbox"></input>ABC
                </option>
                <option className="text-x">
                  <input type="checkbox"></input>ABC
                </option>
                <option className="text-x">
                  <input type="checkbox"></input>ABC
                </option>
              </select>
            </div>

            <label for="" className="text-sm">
              Month
            </label>
            <div>
              <input
                type="date"
                name=""
                id=""
                placeholder=""
                className="border rounded-md w-[320px] mt-2 mb-2 text-xs px-2 border-gray-500"
              ></input>
            </div>

            <label for="" className="text-sm">
              Status
            </label>
            <div>
              <select
                placeholder=""
                className=" border rounded-md text-xs w-[320px] px-2 text-gray-400 border-gray-500"
              >
                <option>Select Status</option>
                <option>Invoice Sent</option>
                <option>Draft</option>
                <option>Payment Released By Client</option>
                <option>Payment Received By Bank</option>
                <option>Payment Received in Account</option>
                <option>Payment Defaulted</option>
                <option>Acknowledged By Cient</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 mt-3">
              <div>
                <button
                  onClick={() => setShowFilter(false)}
                  className="px-2 text-blue-700 border border-blue-700 rounded-md w-50"
                >
                  Cancel
                </button>
              </div>
              <div>
                <button className="px-2 text-white bg-blue-700 border rounded-md w-50">
                  Apply
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
        onClick={() => setShowFilter(true)}
        className="px-2 text-black bg-white border border-black rounded-md w-50"
      >
        <div className="flex items-center justify-center gap-1 ">
          <div className="text-sm">
            <TiFilter />
          </div>
          <div className="font-bold">Filters</div>
        </div>
      </button>
      {showFilter && <MyFilter />}
    </>
  );
};

export default Filter;
