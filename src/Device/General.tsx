import React from "react";
import { BsLaptop } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { BsExclamationCircle } from "react-icons/bs";
import { BiXCircle } from "react-icons/bi";
import { FiCheckCircle } from "react-icons/fi";
import AddImage from "./AddImages";
import AddNotes from "react-icons/fa";
import AddNote from "./AddNotes";
import { AiFillEye } from "react-icons/ai";

function General() {
  return (
    <>
      <div className="flex gap-5 mt-4">
        <div className="mt-3 bg-white rounded-md w-[250px] text-xs">
          <div className="flex mt-2 ml-20 gap-14">
            <div className="flex-col gap-2 ">
              <div>
                <BsLaptop className="text-6xl" />
              </div>

              <div className="flex w-20 font-bold ">Model Name</div>
            </div>

            <div className="flex items-center mr-2 mb-11 justify-top ">
              <button className=" hover:text-black">
                <AiFillEye />
              </button>
              <button className="p-1 ">
                <FaEdit />
              </button>
            </div>
          </div>
          <div className="flex flex-col p-2 m-1 rounded-md h-[82px] bg-cyan-100 gap-y-0.5">
            <div className="flex gap-10">
              <div className="w-32">Brand</div>
              <div>abc</div>
            </div>

            <div className="flex gap-10 ">
              <p className="w-32 ">Model Number</p>
              <p>xxxxxxxxx</p>
            </div>

            <div className="flex gap-10 ">
              <p className="w-32 ">Serial Number</p>
              <p>xxxxxxxxx</p>
            </div>

            <div className="flex gap-5 ">
              <p className="w-32 ">Status</p>
              <button className="w-20 text-xs bg-green-400 border rounded-lg h- font-extralight">
                Functional
              </button>
            </div>
          </div>
        </div>

        <div className="mt-3 bg-white rounded-md w-[250px] text-xs">
          <div className="flex mt-2 ml-20 gap-14">
            <div className="flex-col space-y-2 ">
              <div>
                <BsExclamationCircle className="text-5xl" />
              </div>

              <div className="flex w-24 font-bold ">Employee Name</div>
            </div>

            <div className="flex items-center mr-2 mb-11 justify-top ">
              <button className="p-1 ">
                <FaEdit />
              </button>
            </div>
          </div>
          <div className="flex flex-col p-1 m-1 rounded-md mt-2.5 h-[80px] bg-cyan-100 gap-y-1">
            <div className="">
              <div className="w-32 text-base">Current Assignee</div>
            </div>

            <div className="flex gap-16 ">
              <p className="w-32 ">Department</p>
              <p>IT</p>
            </div>

            <div className="flex gap-10 ">
              <p className="w-32 ">Assigned</p>
              <p>01/02/2020</p>
            </div>
          </div>
        </div>

        <div className="mt-3 bg-white rounded-md w-[250px] text-xs">
          <div className="flex gap-10 mt-2 ml-20">
            <div className="flex-col space-y-2 ">
              <div>
                <FiCheckCircle className="text-5xl text-green-500" />
              </div>

              <div className="flex font-bold w-28 ">Warranty [In Force]</div>
            </div>

            <div className="flex items-center mr-2 mb-11 justify-top ">
              <button className="p-1 ">
                <FaEdit />
              </button>
            </div>
          </div>
          <div className="flex flex-col p-2 m-1 rounded-md mt-2.5 bg-cyan-100 gap-y-2 h-[80px]">
            <div className="flex gap-10">
              <div className="w-32">Expires On</div>
              <div>-1/02/2026</div>
            </div>

            <div className="flex gap-10 ">
              <p className="w-16">Type</p>
              <p>Limited Warranty/ ADP</p>
            </div>
          </div>
        </div>

        <div className="mt-3 bg-white rounded-md w-[250px] text-xs">
          <div className="flex gap-10 mt-2 ml-20">
            <div className="flex-col space-y-2 ">
              <div>
                <BiXCircle className="text-5xl text-red-500" />
              </div>

              <div className="flex font-bold w-28 ">Warranty [Expired]</div>
            </div>

            <div className="flex items-center mr-2 mb-11 justify-top ">
              <button className="p-1 ">
                <FaEdit />
              </button>
            </div>
          </div>
          <div className="flex flex-col p-2 m-1 mt-2.5 rounded-md bg-cyan-100 gap-y-2 h-[80px]">
            <div className="flex gap-10">
              <div className="w-32">Expired On</div>
              <div>01/02/2021</div>
            </div>

            <div className="flex gap-10 ">
              <p className="w-16 ">Type</p>
              <p>Limited Warranty/ADP</p>
            </div>
          </div>
        </div>
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
