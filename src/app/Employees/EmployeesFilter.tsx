import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { TiFilter } from "react-icons/ti";
const FilterEmployees = () => {
  const [showFilter, setShowFilter] = useState(false);

  const MyFilter = () => {
    return (
      <>
        <div className=" fixed inset-0 bg-black bg-opacity-25 w-[1260px] h-[665px] backdrop-blur-sm   flex justify-center items-center   ">
          <div className="p-2 bg-gray-100 ">
            <div className="flex mb-1 text-black gap-60">
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

            <label className="ext-sm m">Current Project</label>
            <div>
              <select className="w-full py-1 mt-1 mb-2 border border-gray-400 rounded-md text-x ">
                <option>Select Projects</option>
                <option>Project 1</option>
                <option>Project 2</option>
                <option>Project 3</option>
                <option>Project 4</option>
              </select>
            </div>

            <label className="text-sm">Role</label>
            <div>
              <select className="w-full py-1 mt-1 mb-2 border border-gray-400 rounded-md text-x">
                <option>Select Role</option>
                <option>Full Time</option>
                <option>Intern</option>
                <option>Contractor</option>
              </select>
            </div>

            <label className="text-sm">Department</label>
            <div>
              <select className="w-full py-1 mt-1 mb-2 border border-gray-400 rounded-md text-x">
                <option>Select Department</option>
                <option>IT</option>
                <option>Management</option>
                <option>Marketing And Sales</option>
              </select>
            </div>

            <label className="text-sm">Bandwidth</label>
            <div>
              <select className="w-full py-1 mt-1 mb-2 border border-gray-400 rounded-md text-x">
                <option>Select Department </option>
                <option>Engaged </option>
                <option>Partially Available</option>
                <option>Available</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 mt-2 mb-2">
              <div>
                <button
                  onClick={() => setShowFilter(false)}
                  className="px-2 py-1 text-blue-700 border border-blue-700 rounded-md w-50"
                >
                  Cancel
                </button>
              </div>
              <div>
                <button className="px-2 py-1 text-white bg-blue-700 border rounded-md w-50">
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
        <div className="flex items-center justify-center gap-1 py-1">
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

export default FilterEmployees;
