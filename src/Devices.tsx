import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Modal from "./modals/AddDevice";
import Filter from "./modals/FilterDevices";
import { Link } from "react-router-dom";


function Device() {
  return (
    <>
      <div className="">
        <div className="flex ">
          <div>
            <h3 className="font-bold ">Device List</h3>
          </div>

          <div className="flex justify-end flex-grow gap-4 ">
            <div className="relative ml-36 ">
              <input
                className="rounded-md "
                type="text"
                placeholder="Search keyword"
              />
              <BsSearch className="absolute -translate-y-1/2 right-1 top-1/2 " />
            </div>
            <div>
              <Filter />
            </div>
            <div>
              <Modal />
            </div>
          </div>
        </div>
        <div className="w-[1060px]">
          <table className="mt-4 border-collapse table-auto ">
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
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">
                  <button className="px-2 text-white bg-green-500 border rounded-full ">
                    Functional
                  </button>
                </td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">
                  <Link to="/action">
                    <button className="text-gray-500 hover:text-black">
                      <AiFillEye />
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="w-auto px-4 py-2 border">
                  <button className="px-2 text-black bg-yellow-400 border rounded-full w-44">
                    Limited Functionality
                  </button>
                </td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">
                  <AiFillEye />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">abca</td>
                <td className="px-4 py-2 border">abca</td>
                <td className="px-4 py-2 border">abca</td>
                <td className="px-4 py-2 border">abca</td>
                <td className="px-4 py-2 border">abca</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">
                  <button className="px-2 text-white bg-red-500 border rounded-full ">
                    Dysfunctional
                  </button>
                </td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">
                  <AiFillEye />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">abcabc</td>
                <td className="px-4 py-2 border">abcabc</td>
                <td className="px-4 py-2 border">abcabc</td>
                <td className="px-4 py-2 border">abcabc</td>
                <td className="px-4 py-2 border">abcabc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="w-auto px-4 py-2 border">
                  <button className="px-2 text-black bg-yellow-400 border rounded-full w-44">
                    Limited Functionality
                  </button>
                </td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">
                  <AiFillEye />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">
                  <button className="px-2 text-white bg-green-500 border rounded-full w-50">
                    Functional
                  </button>
                </td>
                <td className="px-4 py-2 border">abc</td>

                <td className="px-4 py-2 border">
                  <AiFillEye />
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">
                  <button className="px-2 text-white bg-green-500 border rounded-full w-50">
                    functional
                  </button>
                </td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">
                  <AiFillEye />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">
                  <button className="px-2 text-white bg-red-500 border rounded-full w-50">
                    Dysfunctional
                  </button>
                </td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">
                  <AiFillEye />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="w-auto px-4 py-2 border">
                  <button className="px-2 text-black bg-yellow-400 border rounded-full w-44">
                    Limited functionality
                  </button>
                </td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">
                  <AiFillEye />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">
                  <button className="px-2 text-white bg-green-500 border rounded-full w-50">
                    Functional
                  </button>
                </td>
                <td className="px-4 py-2 border">abc</td>
                <td className="px-4 py-2 border">
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
