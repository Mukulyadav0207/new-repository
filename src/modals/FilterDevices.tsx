import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { TiFilter } from "react-icons/ti";
const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);

  const MyFilter = () => {
    return (
      <>
        <div className=" fixed inset-0 bg-black bg-opacity-25 w-[1150px] h-[665px] backdrop-blur-sm   flex justify-center items-center   ">
          <div className="p-2 bg-gray-100 ">
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
              Current Assignee
            </label>
            <div>
              <input
                type=""
                name=""
                id=""
                className="border rounded-md w-[300px] mt-2 mb-2"
              ></input>
            </div>

            <label for="" className="text-sm">
              Purchase Date
            </label>
            <div>
              <input
                type=""
                name=""
                id=""
                className="border rounded-md w-[300px] mt-2 mb-2"
              ></input>
            </div>

            <label for="" className="text-sm">
              Category
            </label>
            <div>
              <input
                type=""
                name=""
                id=""
                placeholder="Select Category"
                className="border rounded-md w-[300px] mt-2 mb-2"
              ></input>
            </div>

            <label for="" className="text-sm">
              Warranty Status
            </label>
            <div>
              <select typeof="Select Warranty" className="">
                <option>select </option>
                <option>In force </option>
                <option>Expired </option>
                <option>Doesn't Matter </option>
              </select>
            </div>

            <div className="flex justify-end gap-3">
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
