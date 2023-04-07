import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { TiFilter } from "react-icons/ti";
const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);

  const MyFilter = () => {
    return (
      <>
       <div
         
          className=" fixed inset-0 bg-black bg-opacity-25  backdrop-blur-sm   flex justify-center items-center   "
        >
          <div className="  bg-gray-100   p-2  ">
          <div className=" text-black flex flex gap-60 ">
            <div className="flex gap-1 justify-center items-center ">
              <div className="text-sm">
                <TiFilter />
              </div>
              <div className="font-bold">Filters</div>
            </div>
            <div>
              <button
                onClick={() => setShowFilter(false)}
                className="text-black text-xl place-self-end"
              >
                <IoIosCloseCircle />
              </button>
            </div>
          </div>

          <label for="" className="text-sm">
            Archived
          </label>
          <div>
            <input
              type=""
              name=""
              id=""
              placeholder="Select"
              className="border rounded-md w-[300px] mt-2 mb-2"
            ></input>
          </div>

          <div className="flex flex gap-3 justify-end">
            <div>
              <button
                onClick={() => setShowFilter(false)}
                className=" border border-blue-700 text-blue-700 rounded-md px-2 w-50 "
              >
                Cancel
              </button>
            </div>
            <div>
              <button className=" border text-white  bg-blue-700 rounded-md px-2 w-50 ">
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
        className=" border border-black text-black rounded-md px-2 w-50 bg-white  "
      >
        <div className="flex gap-1 justify-center items-center ">
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



