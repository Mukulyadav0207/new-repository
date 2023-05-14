import React from "react";
import { BsLaptop } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { BsExclamationCircle } from "react-icons/bs";
import { BiXCircle } from "react-icons/bi";
import { FiCheckCircle } from "react-icons/fi";
import AddImage from "./DevicesAddImagesModal";
import AddNotes from "react-icons/fa";
import AddNote from "./DevicesAddNotesModal";
import { AiFillEye } from "react-icons/ai";

const data1 = [
  {
    title1: "Model Name",
    icon1: BsLaptop,
    icon2: FaEdit,
    icon3: AiFillEye,
    data2: [
      {
        Brand: "abc",
        "Model Number": "XXXXXXXXX",
        "Serail Number": "XXXXXXX",
        Status: "Functional",
      },
    ],
  },
  {
    title1: "Employee Name",
    title3: "Current Assignee",
    icon1: BsExclamationCircle,
    icon2: FaEdit,
    data2: [
      {
        Department: "IT",
        "Assigned On": "01/02/2020",
      },
    ],
  },
  {
    title1: "[In Force] ",
    title2: " Warranty",
    icon1: FiCheckCircle,
    icon2: FaEdit,
    data2: [
      {
        "Expired On": "01/02/2026",
        Type: "Limited Warranty/ADP",
      },
    ],
  },
  {
    title1: " [Expired]",
    title2: "Warranty",
    icon1: BiXCircle,
    icon2: FaEdit,
    data2: [
      {
        "Expired On": "01/02/2026",
        Type: "Limited Warranty/ADP",
      },
    ],
  },
];










function General() {
  return (
    <>
      <div className="flex gap-5 mt-4 bg-red-300s">
        {data1.map((data, index) => (
          <div className="mt-3 bg-white rounded-lg p-1 w-[292px] h-[255px] text-xs ">
            <div className="flex items-start justify-end mt-4 mb-12 gap-11">
              <div className=" flex flex-col items-center justify-center  gap-y-1 w-[120px] ">
                <div>
                  <data.icon1 className="text-6xl " />
                </div>

                <div className="flex font-bold ">
                  <p className=" text-[#A59F9F]">{data.title2}</p>
                  <p className="text-[#413F3F]">{data.title1}</p>
                </div>
              </div>

              <div className="flex items-center mr-2 mb-11 justify-top ">
                <button className=" hover:text-black">
                  {index === 0 ? <data.icon3 /> : null}
                </button>
                <button className="p-1 ">
                  <data.icon2  />
                </button>
              </div>
            </div>

            {data.data2.map((item, index) => (
              <div
                key={index}
                className="flex flex-col p-2 m-1 rounded-md h-[95px] w-[238px] bg-[#E9F8F8] gap-y-1.5 "
              >
                <p>{data.title3}</p>
                {Object.entries(item).map(([key, value]) => {
                  return (
                    <p key={key} className="flex justify-between" >
                      <p className="text-[#A59F9F]"> {key}</p>

                      <p className="text-[#4B5563]"> {value}</p>
                    </p>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex mt-6  gap-[730px]">
        <div className="font-bold">Past Owners</div>
        <div className="flex gap-2">
          <div>
            <AddImage />
          </div>
          <div>
            <AddNote />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <table class="table-fixed w-full">
          <thead class="bg-gray-100">
            <tr class="flex flex-wrap w-full justify-center items-center">
              <th class="w-1/3 px-4 py-2 text-sm text-center flex items-center justify-center">
                Owner Name
              </th>
              <th class="w-1/3 px-4 py-2 text-sm text-center flex items-center justify-center">
                From Date
              </th>
              <th class="w-1/3 px-4 py-2 text-sm text-center flex items-center justify-center">
                To Date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white flex flex-wrap w-full justify-center items-center border-b-2 border-gray-100">
              <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                Abc
              </td>
              <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                2022-01-01
              </td>
              <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                2022-01-31
              </td>
            </tr>
            <tr class="bg-white flex flex-wrap w-full justify-center items-center border-b-2 border-gray-100">
              <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                Abc
              </td>
              <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                2022-02-01
              </td>
              <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                2022-02-28
              </td>
            </tr>
            <tr class="bg-white flex flex-wrap w-full justify-center items-center border-b-2 border-gray-100">
              <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                Abc
              </td>
              <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                2022-03-01
              </td>
              <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                2022-03-31
              </td>
            </tr>
            <tr class=" bg-white flex flex-wrap w-full justify-center items-center border-b-2 border-gray-100">
              <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                Abc
              </td>
              <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                2022-04-01
              </td>
              <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                2022-04-30
              </td>
            </tr>
            <tr class="bg-white flex flex-wrap w-full justify-center items-center border-b-2 border-zinc-100">
              <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                Abc
              </td>
              <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                2022-04-01
              </td>
              <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                2022-04-30
              </td>
            </tr>
            <tr class="bg-white flex flex-wrap w-full justify-center items-center border-b-2 ">
              <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                Abc
              </td>
              <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                2022-04-01
              </td>
              <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                2022-04-30
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default General;
