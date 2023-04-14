import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Modal from "./pops/AddDevice";
import Filter from "./pops/FilterDevices";



function Device() {
  return (
    <>
      <div className="">
        <div className="flex   ">
          <div>
            <h3 className="font-bold ">Devices</h3>
          </div>

          <div className="flex   gap-4  flex-grow justify-end   ">
            <div className="relative  ml-36 ">
              <input
                className=" rounded-md "
                type="text"
                placeholder="Search keyword"
              />
              <BsSearch className="absolute right-1 top-1/2 -translate-y-1/2 " />
            </div>
            <div>
              <Filter />
            </div>
            <div>
              <Modal />
            </div>
          </div>
        </div>
        <div>
          <table className="table-auto border-collapse  w-20 mt-4">
            <thead>
              <tr className="bg-slate-100">
                <th className="px-4 py-2 font-semibold">Device Name</th>
                <th className="px-4 py-2 font-semibold">Device Category </th>
                <th className="px-4 py-2 font-semibold">Purchased Date</th>
                <th className="px-4 py-2 font-semibold">
                  Warranty Expire Date
                </th>
                <th className="px-4 py-2 font-semibold">Brand Name</th>
                <th className="px-4 py-2 font-semibold">Current Assignee</th>
                <th className="px-4 py-2 font-semibold">Status</th>
                <th className="px-4 py-2 font-semibold">Notes</th>
                <th className="px-4 py-2 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">
                  <button className=" border  text-white rounded-full px-2  bg-green-500 ">
                    Functional
                  </button>
                </td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">
                  <AiFillEye />
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2 w-auto">
                  <button className=" border  text-black rounded-full px-2  w-44 bg-yellow-400 ">
                    Limited Functionality
                  </button>
                </td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">
                  <AiFillEye />
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">abca</td>
                <td className="border px-4 py-2">abca</td>
                <td className="border px-4 py-2">abca</td>
                <td className="border px-4 py-2">abca</td>
                <td className="border px-4 py-2">abca</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">
                  <button className=" border  text-white rounded-full  px-2  bg-red-500 ">
                    Dysfunctional
                  </button>
                </td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">
                  <AiFillEye />
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">abcabc</td>
                <td className="border px-4 py-2">abcabc</td>
                <td className="border px-4 py-2">abcabc</td>
                <td className="border px-4 py-2">abcabc</td>
                <td className="border px-4 py-2">abcabc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2 w-auto">
                  <button className=" border  text-black rounded-full px-2 w-44 bg-yellow-400 ">
                    Limited Functionality
                  </button>
                </td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">
                  <AiFillEye />
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">
                  <button className=" border  text-white rounded-full px-2 w-50 bg-green-500 ">
                    Functional
                  </button>
                </td>
                <td className="border px-4 py-2">abc</td>

                <td className="border px-4 py-2">
                  <AiFillEye />
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">
                  <button className=" border  text-white rounded-full px-2 w-50 bg-green-500 ">
                    functional
                  </button>
                </td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">
                  <AiFillEye />
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">
                  <button className=" border  text-white rounded-full px-2 w-50 bg-red-500 ">
                    Dysfunctional
                  </button>
                </td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">
                  <AiFillEye />
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2 w-auto">
                  <button className=" border  text-black rounded-full px-2 w-44 bg-yellow-400 ">
                    Limited functionality
                  </button>
                </td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">
                  <AiFillEye />
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">
                  <button className=" border  text-white rounded-full px-2 w-50 bg-green-500 ">
                    Functional
                  </button>
                </td>
                <td className="border px-4 py-2">abc</td>
                <td className="border px-4 py-2">
                  <AiFillEye />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Device;
