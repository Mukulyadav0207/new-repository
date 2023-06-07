import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { TiFilter } from "react-icons/ti";
import Button from "../sharedComponents/ButtonComponent";

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
                <Button
                  onClick={() => setShowFilter(false)}
                  borderColor="#1A13CB"
                  textColor="#1A13CB"
                  label="Cancel"
                  border="1px solid black"
                  width={60}
                  padding="7px 9px"
                />
              </div>
              <div>
                <Button
                  backgroundColor="#1A13CB"
                  textColor="white"
                  label="Apply"
                  width={60}
                  padding="8px 18px"
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

export default FilterEmployees;
