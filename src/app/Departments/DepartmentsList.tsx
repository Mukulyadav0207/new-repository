import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Modal from "./DepartmentsAddDepartmentModal";

function Department() {
  return (
    <>
      <div className="flex ">
        <div>
          <h3 className="font-bold ">Departments</h3>
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
            <Modal />
          </div>
        </div>
      </div>
      <div>
        <table className="w-full mx-auto mt-4 border-collapse table-auto">
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
              <td className="px-4 py-2 border">IT</td>
              <td className="px-4 py-2 border">INR 13K</td>
              <td className="px-4 py-2 border">USD 9K</td>
              <td className="px-4 py-2 border">
                <AiFillEye />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Marketing and sales</td>
              <td className="px-4 py-2 border">INR 21K</td>
              <td className="px-4 py-2 border">USD 12K</td>
              <td className="px-4 py-2 border">
                <AiFillEye />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Management</td>
              <td className="px-4 py-2 border">INR 20K</td>
              <td className="px-4 py-2 border">USD 21K</td>
              <td className="px-4 py-2 border">
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
