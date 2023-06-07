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
          <div className="p-4 bg-gray-100 border rounded-md ">
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
              <select className=" border rounded-md text-xs w-full p-2 text-gray-400 border-gray-500">
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
                className="border rounded-md w-full mt-2 mb-2 text-xs p-2 border-gray-500"
              ></input>
            </div>

            <label for="" className="text-sm">
              Status
            </label>
            <div>
              <select
                placeholder=""
                className=" border rounded-md text-xs w-full p-2 text-gray-400 border-gray-500"
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
