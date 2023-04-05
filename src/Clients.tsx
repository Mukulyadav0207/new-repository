import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

function Client() {
  return (
    <>
      <div className="flex flex gap-4">
        <div>
          <h3 className="font-bold ">Clients</h3>
        </div>
        <div className="relative ml-36 ">
          <input
            className=" rounded-md "
            type="text"
            placeholder="Search items"
          />
          <BsSearch className="absolute right-1 top-1/2 -translate-y-1/2 " />
        </div>
        <div>
          <button className=" border border-red-500 text-white rounded-md px-2 w-50 bg-blue-700 hover:bg-red-600">
            + Add Client
          </button>
        </div>
      </div>
      <div>
        <table className="table-auto border-collapse w-full  mt-4 mx-auto">
          <thead>
            <tr className="bg-slate-100">
              <th className="px-4 py-2 font-semibold">Client Name</th>
              <th className="px-4 py-2 font-semibold">Project Name</th>
              <th className="px-4 py-2 font-semibold">Company Name</th>
              <th className="px-4 py-2 font-semibold">Email Address</th>
              <th className="px-4 py-2 font-semibold">Start Date</th>
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

              <td className="border px-4 py-2">
                <AiFillEye />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Client;
