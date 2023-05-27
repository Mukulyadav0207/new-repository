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

            <label for="" className="text-sm text-[#4B5563]">
              Client
            </label>
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder=""
                className="border rounded-md w-[320px]  mb-1 text-xs px-2 py-1 border-gray-400"
              ></input>
            </div>
            <label for="" className="text-sm text-[#4B5563]">
              Status
            </label>
            <div>
              <select className=" border rounded-md text-xs w-[320px] mb-1 px-2 py-1 text-gray-400 border-gray-400">
                <option>Select Status</option>
                <option className="text-x">
                  <input type="checkbox"></input>Ongoing
                </option>
                <option className="text-x">
                  <input type="checkbox"></input>Upcoming
                </option>
                <option className="text-x">
                  <input type="checkbox"></input>Pending
                </option>
                <option className="text-x">
                  <input type="checkbox"></input>Completed
                </option>
              </select>
            </div>

            <label className="text-sm text-[#4B5563]">Archieved</label>
            <div>
              <select className=" border rounded-md text-xs w-[320px] mb-1 px-2 py-1 text-gray-400 border-gray-400">
                <option>Select </option>
                <option>Yes</option>
                <option>No</option>
                <option>Doesn't Matter</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 mt-3">
              <div>
                <button
                  onClick={() => setShowFilter(false)}
                  className="px-3 py-1 text-[#1A13CB] border-[#1A13CB] border  rounded-md w-50"
                >
                  Cancel
                </button>
              </div>
              <div>
                <button className="px-3 py-1 text-white bg-[#1A13CB] border rounded-md w-50">
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
 