import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { TiFilter } from "react-icons/ti";
import Button from "../sharedComponents/ButtonComponent";
const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);

  const MyFilter = () => {
    return (
      <>
        <div className=" fixed inset-0 bg-black bg-opacity-25 w-[1260px] h-[665px] backdrop-blur-sm   flex justify-center items-center   ">
          <div className="p-2  bg-gray-100 w-[370px]">
            <div className="flex justify-between text-black">
              <div className="flex items-center justify-center gap-1  ">
                <div className=" text-sm">
                  <TiFilter />
                </div>
                <div className="font-bold text-sm">Filters</div>
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

            <label for="" className="text-x text-[#4B5563]">
              Project
            </label>
            <div>
              <input
                type="text"
                className="border rounded-md w-[350px] mt-2 mb-2 text-sm p-1 border-[#A19D9D]"
              ></input>
            </div>

            <label for="" className="text-x text-[#4B5563]">
              Employees
            </label>
            <div>
              <input
                type="text"
                className="border rounded-md w-[350px] mt-2 mb-2 text-sm p-1 border-[#A19D9D]"
              ></input>
            </div>

            <label for="number" className="text-x text-[#4B5563]">
              Type
            </label>
            <div className="flex-none ">
              <select className="p-1 py-2 text-x rounded-md w-[350px] mb-2 mt-1 border-[#A19D9D] text-[#4B5563]">
                <option className="w-32 text-xs">Select Type</option>
                <option className="w-32 text-xs">Full Day Leave</option>
                <option className="w-32 text-xs">First Half Leave</option>
                <option className="w-32 text-xs">Second Half Leave</option>
              </select>
            </div>

            <label for="number" className="text-x text-[#4B5563] ">
              Category
            </label>
            <div className="flex-none ">
              <select className="p-1 py-2 text-x rounded-md w-[350px] mb-2 mt-1 text-[#4B5563] ">
                <option className="w-32 text-xs">Select Category</option>
                <option className="w-32 text-xs">Medical</option>
                <option className="w-32 text-xs">Privilege</option>
                <option className="w-32 text-xs">Casual</option>
                <option className="w-32 text-xs">Other Leaves (Exam)</option>
              </select>
            </div>

            <label for="number" className="text-x text-[#4B5563]">
              Status
            </label>
            <div className="flex-none ">
              <select className="p-1 py-2 text-x rounded-md w-[350px] mb-2 mt-1 border-[#A19D9D] text-[#4B5563]">
                <option className="w-32 text-xs">Select Status</option>
                <option className="w-32 text-xs">Pending</option>
                <option className="w-32 text-xs">Approved</option>
                <option className="w-32 text-xs">Rejected</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 mt-4 mb-2">
              <div>
                <Button
                  onClick={() => setShowFilter(false)}
                  borderColor="#1A13CB"
                  textColor="#1A13CB"
                  label="Cancel"
                  border="1px solid black"
                  width={60}
                  padding="5px 5px"
                />
              </div>
              <div>
                <Button
                  backgroundColor="#1A13CB"
                  textColor="white"
                  label="Apply"
                  width={60}
                  padding="6px 9px"
                />
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
        onClick={() => setShowFilter(true)}
        textColor="black"
        backgroundColor="white"
        label="Filters"
        icon={<TiFilter />}
        borderColor="black"
        padding="7px 9px"
        border="1px solid black"
      />
      {showFilter && <MyFilter />}
    </>
  );
};

export default Filter;
