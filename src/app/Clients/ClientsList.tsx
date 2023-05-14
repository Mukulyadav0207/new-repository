import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Modal from "./ClientAdd";
import Filter from "./ClientsFilter";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GrAction } from "react-icons/gr";
import ClientAction from "./ClientsDetails";
import { Link } from "react-router-dom";

function Client() {
  return (
    <>
      <div className="flex ">
        <div>
          <h3 className="font-bold ">Clients</h3>
        </div>

        <div className="flex justify-end flex-grow gap-4 ">
          <div className="relative flex justify-end ">
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

      <div>
        <table className="w-full mx-auto mt-4 border-collapse table-auto">
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
              <td className="px-4 py-2 border">abc</td>
              <td className="px-4 py-2 border">abc</td>
              <td className="px-4 py-2 border">abc</td>
              <td className="px-4 py-2 border">abc</td>
              <td className="px-4 py-2 border">abc</td>

              <td className="px-4 py-2 border">
                <Link to="/clients/details/1">
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

              <td className="px-4 py-2 border">
                <Link to="/clients/details/2">
                  <button className="text-gray-500 hover:text-black">
                    <AiFillEye />
                  </button>
                </Link>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">abca</td>
              <td className="px-4 py-2 border">abca</td>
              <td className="px-4 py-2 border">abca</td>
              <td className="px-4 py-2 border">abca</td>
              <td className="px-4 py-2 border">abca</td>

              <td className="px-4 py-2 border">
                <AiFillEye className="text-gray-500 hover:text-black" />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">abcabc</td>
              <td className="px-4 py-2 border">abcabc</td>
              <td className="px-4 py-2 border">abcabc</td>
              <td className="px-4 py-2 border">abcabc</td>
              <td className="px-4 py-2 border">abcabc</td>

              <td className="px-4 py-2 border">
                <AiFillEye className="text-gray-500 hover:text-black" />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">abc</td>
              <td className="px-4 py-2 border">abc</td>
              <td className="px-4 py-2 border">abc</td>
              <td className="px-4 py-2 border">abc</td>
              <td className="px-4 py-2 border">abc</td>

              <td className="px-4 py-2 border">
                <AiFillEye className="text-gray-500 hover:text-black" />
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2 border">abc</td>
              <td className="px-4 py-2 border">abc</td>
              <td className="px-4 py-2 border">abc</td>
              <td className="px-4 py-2 border">abc</td>
              <td className="px-4 py-2 border">abc</td>

              <td className="px-4 py-2 border">
                <AiFillEye className="text-gray-500 hover:text-black" />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">abc</td>
              <td className="px-4 py-2 border">abc</td>
              <td className="px-4 py-2 border">abc</td>
              <td className="px-4 py-2 border">abc</td>
              <td className="px-4 py-2 border">abc</td>

              <td className="px-4 py-2 border">
                <AiFillEye className="text-gray-500 hover:text-black" />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">abc</td>
              <td className="px-4 py-2 border">abc</td>
              <td className="px-4 py-2 border">abc</td>
              <td className="px-4 py-2 border">abc</td>
              <td className="px-4 py-2 border">abc</td>

              <td className="px-4 py-2 border">
                <AiFillEye className="text-gray-500 hover:text-black" />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">abc</td>
              <td className="px-4 py-2 border">abc</td>
              <td className="px-4 py-2 border">abc</td>
              <td className="px-4 py-2 border">abc</td>
              <td className="px-4 py-2 border">abc</td>

              <td className="px-4 py-2 border">
                <AiFillEye className="text-gray-500 hover:text-black" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Client;
