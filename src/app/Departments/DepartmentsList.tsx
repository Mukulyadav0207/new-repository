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
          <div className="relative ml-36">
            <input
              className="rounded-md p-2 w-[400px]"
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
        <table className="w-full mx-auto mt-4 ">
          <thead className="">
            <tr className="bg-[#F6F6F6] text-[#4B5563]">
              <th className="px-4 py-2 font-bold">Department Name</th>
              <th className="px-4 py-2 font-bold">Expenditure</th>
              <th className="px-4 py-2 font-bold">Revenue</th>
              <th className="px-4 py-2 font-bold">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white text-center text-[#A59F9F]">
            <tr className=" ">
              <td className="px-4 py-2 border">IT</td>
              <td className="px-4 py-2 border">INR 13K</td>
              <td className="px-4 py-2 border">USD 9K</td>
              <td className=" flex px-4 py-4 border justify-center">
                <AiFillEye />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Marketing and sales</td>
              <td className="px-4 py-2 border">INR 21K</td>
              <td className="px-4 py-2 border">USD 12K</td>
              <td className="px-4 py-4 border flex justify-center">
                <AiFillEye />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Management</td>
              <td className="px-4 py-2 border">INR 20K</td>
              <td className="px-4 py-2 border">USD 21K</td>
              <td className="px-4 py-4 border flex justify-center">
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
