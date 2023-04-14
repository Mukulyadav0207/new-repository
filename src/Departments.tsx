import React from "react";
import {AiFillEye} from "react-icons/ai"
import {BsSearch} from "react-icons/bs"
import Modal from "./pops/AddDepartment";

function Department() {
  return (
    <>
      <div className="flex  ">
        <div>
          <h3 className="font-bold ">Departments</h3>
        </div>

 <div className="flex   gap-4  flex-grow justify-end   ">
        <div className="relative ml-36 ">
          <input
            className=" rounded-md "
            type="text"
            placeholder="Search keyword"
          />
          <BsSearch className="absolute right-1 top-1/2 -translate-y-1/2 " />
        </div>
        <div>
          <Modal />
        </div>
      </div>
      </div>
      <div>
        <table className="table-auto border-collapse w-full  mt-4 mx-auto">
          <thead>
            <tr className="bg-slate-100">
              <th className="px-4 py-2 font-bold">Department Name</th>
              <th className="px-4 py-2 font-bold">Expenditure</th>
              <th className="px-4 py-2 font-bold">Revenue</th>
              <th className="px-4 py-2 font-bold">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="border px-4 py-2">IT</td>
              <td className="border px-4 py-2">INR 13K</td>
              <td className="border px-4 py-2">USD 9K</td>
              <td className="border px-4 py-2">
                <AiFillEye />
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Marketing and sales</td>
              <td className="border px-4 py-2">INR 21K</td>
              <td className="border px-4 py-2">USD 12K</td>
              <td className="border px-4 py-2">
                <AiFillEye />
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Management</td>
              <td className="border px-4 py-2">INR 20K</td>
              <td className="border px-4 py-2">USD 21K</td>
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
export default Department;
