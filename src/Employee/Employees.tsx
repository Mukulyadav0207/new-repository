import React from "react";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { RxHalf2 } from "react-icons/rx";
import { BsCircleHalf } from "react-icons/bs";
import { BsCircleFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { GoCheck } from "react-icons/go";
import AddEmployees from "./AddEmployee";
import FilterEmployees from "./EFilter";
import { BsLaptop } from "react-icons/bs";



function Employees() {
  return (
    <div>
      <div className="w-[1060px] p-3  overflow-hidden text-xs ">
        <div className="flex ">
          <div>
            <h3 className="font-bold ">Employees</h3>
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
              <FilterEmployees />
            </div>
            <div>
              <AddEmployees />
            </div>
          </div>
        </div>

        <table className="mt-4 w-[1000px]  h-[100px] ">
          <thead>
            <tr className="bg-slate-100">
              <th className="px-2 py-2 font-semibold">ID </th>
              <th className="px-2 py-2 font-semibold">Full Name</th>
              <th className="px-2 py-2 font-semibold">Projects</th>
              <th className="px-2 py-2 font-semibold">Hours Engagment</th>
              <th className="px-2 py-2 font-semibold">Role</th>
              <th className="px-2 py-2 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="flex items-center justify-center py-4 ">
                01
              </td>
              <td className="px-1 py-2 font-light border ">Pratham Singh</td>
              <td className="flex items-center justify-center px-2 py-4 border">
                <button className="px-2 bg-green-500 border rounded-full ">
                  ABC
                </button>
              </td>

              <td className="justify-center px-1 py-2 font-light border ">
                <button className="px-2 bg-green-500 border rounded-full item-center">
                  8 hrs
                </button>
              </td>
              <td className="flex items-center justify-center px-2 py-4 border">
                Full time
              </td>
              <td className="px-2 py-2 border">
                <div className="flex items-center justify-center gap-1">
                  <Link to="/LeaveActions">
                    <button className="text-gray-500 hover:text-black">
                      <AiFillEye />
                    </button>
                  </Link>
                  <button className="text-sm text-green-500">
                    <BsLaptop />
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <td className="flex items-center justify-center px-2 py-4 border">
                02
              </td>
              <td className="px-1 py-2 font-light border">Pragati Mishra</td>
              <td className="flex items-center justify-center px-2 py-4 border">
                <button className="px-2 bg-yellow-400 border rounded-full ">
                  ABC-4h
                </button>
              </td>

              <td className="px-1 py-2 font-light border">
                <button className="px-2 bg-orange-500 border rounded-full ">
                  4 hrs
                </button>
              </td>
              <td className="flex items-center justify-center px-2 py-4 border">
                Intern
              </td>
              <td className="px-2 py-2 border">
                <div className="flex items-center justify-center gap-1">
                  <Link to="/LeaveActions">
                    <button className="text-gray-500 hover:text-black">
                      <AiFillEye />
                    </button>
                  </Link>
                  <button className="text-sm text-green-500">
                    <BsLaptop />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="flex items-center justify-center px-2 py-4 border">
                03
              </td>
              <td className="px-1 py-2 font-light border">Satya Mall</td>
              <td className="flex items-center justify-center px-2 py-4 border">
                <button className="px-2 bg-green-500 border rounded-full ">
                  ABC
                </button>
              </td>

              <td className="px-1 py-2 font-light border">
                <button className="px-2 bg-red-500 border rounded-full ">
                  3 hrs
                </button>
              </td>
              <td className="flex items-center justify-center px-2 py-4 border">
                Full time
              </td>
              <td className="px-2 py-2 border">
                <div className="flex items-center justify-center gap-1">
                  <Link to="/LeaveActions">
                    <button className="text-gray-500 hover:text-black">
                      <AiFillEye />
                    </button>
                  </Link>
                  <button className="text-sm ">
                    <BsLaptop />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="flex items-center justify-center px-2 py-4 border">
                04
              </td>
              <td className="px-1 py-2 font-light border">Aditi Singh</td>
              <td className="flex items-center justify-center px-2 py-4 border">
                <button className="px-2 bg-yellow-400 border rounded-full ">
                  ABC
                </button>
              </td>

              <td className="px-1 py-2 font-light border">
                <button className="px-2 bg-orange-500 border rounded-full ">
                  5 hrs
                </button>
              </td>
              <td className="flex items-center justify-center px-2 py-4 border">
                Contractor
              </td>
              <td className="px-2 py-2 border">
                <div className="flex items-center justify-center gap-1">
                  <Link to="/LeaveActions">
                    <button className="text-gray-500 hover:text-black">
                      <AiFillEye />
                    </button>
                  </Link>
                  <button className="text-sm ">
                    <BsLaptop />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="flex items-center justify-center px-2 py-4 border">
                05
              </td>
              <td className="px-1 py-2 font-light border">Ankit Rao</td>
              <td className="flex items-center justify-center px-2 py-4 border">
                <div className="flex gap-1">
                  <button className="px-2 bg-green-500 border rounded-full ">
                    XYZ-6h
                  </button>
                  <button className="px-2 bg-green-500 border rounded-full ">
                    TCS-4h
                  </button>
                </div>
              </td>

              <td className="px-1 py-2 font-light border">
                <button className="px-2 bg-green-500 border rounded-full ">
                  10 hrs
                </button>
              </td>
              <td className="flex items-center justify-center px-2 py-4 border">
                Intern
              </td>
              <td className="px-2 py-2 border">
                <div className="flex items-center justify-center gap-1">
                  <Link to="/LeaveActions">
                    <button className="text-gray-500 hover:text-black">
                      <AiFillEye />
                    </button>
                  </Link>
                  <button className="text-sm text-green-500">
                    <BsLaptop />
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <td className="flex items-center justify-center px-2 py-4 border">
                06
              </td>
              <td className="px-1 py-2 font-light border">Pratham Singh</td>
              <td className="flex items-center justify-center px-2 py-4 border">
                <button className="px-2 bg-green-500 border rounded-full ">
                  ABC
                </button>
              </td>

              <td className="px-1 py-2 font-light border">
                <button className="px-2 bg-orange-500 border rounded-full ">
                  7 hrs
                </button>
              </td>
              <td className="flex items-center justify-center px-2 py-4 border">
                Full time
              </td>
              <td className="px-2 py-2 border">
                <div className="flex items-center justify-center gap-1">
                  <Link to="/LeaveActions">
                    <button className="text-gray-500 hover:text-black">
                      <AiFillEye />
                    </button>
                  </Link>
                  <button className="text-sm ">
                    <BsLaptop />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="flex items-center justify-center px-2 py-4 border">
                07
              </td>
              <td className="px-1 py-2 font-light border">Pratham Singh</td>
              <td className="flex items-center justify-center px-2 py-4 border">
                <button className="px-2 bg-yellow-400 border rounded-full ">
                  ABC
                </button>
              </td>

              <td className="px-1 py-2 font-light border">
                <button className="px-2 bg-yellow-400 border rounded-full ">
                  7 hrs
                </button>
              </td>
              <td className="flex items-center justify-center px-2 py-4 border">
                Contractor
              </td>
              <td className="px-2 py-2 border">
                <div className="flex items-center justify-center gap-1">
                  <Link to="/LeaveActions">
                    <button className="text-gray-500 hover:text-black">
                      <AiFillEye />
                    </button>
                  </Link>
                  <button className="text-sm text-green-500">
                    <BsLaptop />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="flex items-center justify-center px-2 py-4 border">
                08
              </td>
              <td className="px-1 py-2 font-light border">Pratham Singh</td>
              <td className="flex items-center justify-center px-2 py-4 border">
                <div className="flex gap-1">
                  <button className="px-2 bg-green-500 border rounded-full ">
                    XYZ-6h
                  </button>
                  <button className="px-2 bg-green-500 border rounded-full ">
                    ABC-4h
                  </button>
                </div>
              </td>

              <td className="px-1 py-2 font-light border">
                <button className="px-2 bg-green-500 border rounded-full ">
                  9 hrs
                </button>
              </td>
              <td className="flex items-center justify-center px-2 py-4 border">
                Intern
              </td>
              <td className="px-2 py-2 border">
                <div className="flex items-center justify-center gap-1">
                  <Link to="/LeaveActions">
                    <button className="text-gray-500 hover:text-black">
                      <AiFillEye />
                    </button>
                  </Link>
                  <button className="text-sm text-green-500">
                    <BsLaptop />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="flex items-center justify-center px-2 py-4 border">
                09
              </td>
              <td className="px-1 py-2 font-light border">Priya Singh</td>
              <td className="flex items-center justify-center px-2 py-4 border">
                <button className="px-2 bg-yellow-400 border rounded-full ">
                  ABC
                </button>
              </td>

              <td className="px-1 py-2 font-light border">
                <button className="px-2 bg-yellow-400 border rounded-full ">
                  7 hrs
                </button>
              </td>
              <td className="flex items-center justify-center px-2 py-4 border">
                Contractor
              </td>
              <td className="px-2 py-2 border">
                <div className="flex items-center justify-center gap-1">
                  <Link to="/LeaveActions">
                    <button className="text-gray-500 hover:text-black">
                      <AiFillEye />
                    </button>
                  </Link>
                  <button className="text-sm ">
                    <BsLaptop />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Employees;
