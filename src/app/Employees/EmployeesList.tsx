import React from "react";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { RxHalf2 } from "react-icons/rx";

import { BsCircleFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { GoCheck } from "react-icons/go";
import AddEmployees from "./EmployeesAdd";
import FilterEmployees from "./EmployeesFilter";
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
            <tr className="border border-gray-200">
              <td className="flex items-center justify-center py-4 ">01</td>
              <td className="font-light w-[250px]">
                <div className="flex items-center justify-center gap-2 ">
                  <img
                    className="object-cover w-6 h-6 border-black rounded-xl"
                    src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                  <div className="flex-col">
                    <p className="w-32 font-normal">Pratham Singh</p>
                    <p className="text-x">abc@domain.com</p>
                  </div>
                </div>
              </td>
              <td className="flex items-center justify-center px-2 py-4 ">
                <button className="px-2 bg-green-500 border rounded-full ">
                  ABC
                </button>
              </td>

              <td className="justify-center px-1 py-2 font-light text-center">
                <button className="px-2 bg-green-500 border rounded-full item-center">
                  8 hrs
                </button>
              </td>
              <td className="flex items-center justify-center px-2 py-4 ">
                Full time
              </td>
              <td className="px-2 py-2 ">
                <div className="flex items-center justify-center gap-1">
                  <Link to="/EmployeeAction">
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

            <tr className="border border-gray-200">
              <td className="flex items-center justify-center px-2 py-4 ">
                02
              </td>
              <td className="font-light ">
                <div className="flex items-center justify-center gap-2 ">
                  <img
                    className="object-cover w-6 h-6 border-black rounded-xl"
                    src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                  <div className="flex-col">
                    <p className="w-32 font-normal">Pragati Mishra</p>
                    <p className="text-x">abc@domain.com</p>
                  </div>
                </div>
              </td>
              <td className="flex items-center justify-center px-2 py-4 ">
                <button className="px-2 bg-yellow-400 rounded-full ">
                  ABC-4h
                </button>
              </td>

              <td className="px-1 py-2 font-light text-center">
                <button className="px-2 bg-orange-500 rounded-full ">
                  4 hrs
                </button>
              </td>
              <td className="flex items-center justify-center px-2 py-4 ">
                Intern
              </td>
              <td className="px-2 py-2 ">
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
            <tr className="border border-gray-200">
              <td className="flex items-center justify-center px-2 py-4 ">
                03
              </td>
              <td className="font-light ">
                <div className="flex items-center justify-center gap-2 ">
                  <img
                    className="object-cover w-6 h-6 border-black rounded-xl"
                    src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                  <div className="flex-col">
                    <p className="w-32 font-normal">Satya Mall</p>
                    <p className="text-x">abc@domain.com</p>
                  </div>
                </div>
              </td>
              <td className="flex items-center justify-center px-2 py-4 ">
                <button className="px-2 bg-green-500 rounded-full ">ABC</button>
              </td>

              <td className="px-1 py-2 font-light text-center ">
                <button className="px-2 bg-red-500 rounded-full ">3 hrs</button>
              </td>
              <td className="flex items-center justify-center px-2 py-4 ">
                Full time
              </td>
              <td className="px-2 py-2 ">
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
            <tr className="border border-gray-200">
              <td className="flex items-center justify-center px-2 py-4 ">
                04
              </td>
              <td className="font-light ">
                <div className="flex items-center justify-center gap-2 ">
                  <img
                    className="object-cover w-6 h-6 border-black rounded-xl"
                    src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                  <div className="flex-col">
                    <p className="w-32 font-normal">Pratham Singh</p>
                    <p className="text-x">abc@domain.com</p>
                  </div>
                </div>
              </td>
              <td className="flex items-center justify-center px-2 py-4">
                <button className="px-2 bg-yellow-400 rounded-full ">
                  ABC
                </button>
              </td>

              <td className="px-1 py-2 font-light text-center">
                <button className="px-2 bg-orange-500 rounded-full ">
                  5 hrs
                </button>
              </td>
              <td className="flex items-center justify-center px-2 py-4 ">
                Contractor
              </td>
              <td className="px-2 py-2 ">
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
            <tr className="border border-gray-200 ">
              <td className="flex items-center justify-center px-2 py-4 ">
                05
              </td>
              <td className="font-light ">
                <div className="flex items-center justify-center gap-2 ">
                  <img
                    className="object-cover w-6 h-6 border-black rounded-xl"
                    src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                  <div className="flex-col">
                    <p className="w-32 font-normal">Ankit Rao</p>
                    <p className="text-x">abc@domain.com</p>
                  </div>
                </div>
              </td>
              <td className="flex items-center justify-center px-2 py-4 ">
                <div className="flex gap-1">
                  <button className="px-2 bg-green-500 rounded-full ">
                    XYZ-6h
                  </button>
                  <button className="px-2 bg-green-500 rounded-full ">
                    TCS-4h
                  </button>
                </div>
              </td>

              <td className="px-1 py-2 font-light text-center">
                <button className="px-2 bg-green-500 rounded-full ">
                  10 hrs
                </button>
              </td>
              <td className="flex items-center justify-center px-2 py-4 ">
                Intern
              </td>
              <td className="px-2 py-2 ">
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

            <tr className="border border-gray-200">
              <td className="flex items-center justify-center px-2 py-4 ">
                06
              </td>
              <td className="font-light ">
                <div className="flex items-center justify-center gap-2 ">
                  <img
                    className="object-cover w-6 h-6 border-black rounded-xl"
                    src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                  <div className="flex-col">
                    <p className="w-32 font-normal">Akiriti Sethi</p>
                    <p className="text-x">abc@domain.com</p>
                  </div>
                </div>
              </td>
              <td className="flex items-center justify-center px-2 py-4 ">
                <button className="px-2 bg-green-500 rounded-full ">ABC</button>
              </td>

              <td className="px-1 py-2 font-light text-center">
                <button className="px-2 bg-orange-500 rounded-full ">
                  7 hrs
                </button>
              </td>
              <td className="flex items-center justify-center px-2 py-4 ">
                Full time
              </td>
              <td className="px-2 py-2 ">
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
            <tr className="border border-gray-200 ">
              <td className="flex items-center justify-center px-2 py-4 ">
                07
              </td>
              <td className="font-light ">
                <div className="flex items-center justify-center gap-2 ">
                  <img
                    className="object-cover w-6 h-6 border-black rounded-xl"
                    src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                  <div className="flex-col">
                    <p className="w-32 font-normal">Edda Maviya</p>
                    <p className="text-x">abc@domain.com</p>
                  </div>
                </div>
              </td>
              <td className="flex items-center justify-center px-2 py-4 ">
                <button className="px-2 bg-yellow-400 rounded-full ">
                  ABC
                </button>
              </td>

              <td className="px-1 py-2 font-light text-center">
                <button className="px-2 bg-yellow-400 rounded-full ">
                  7 hrs
                </button>
              </td>
              <td className="flex items-center justify-center px-2 py-4 ">
                Contractor
              </td>
              <td className="px-2 py-2 ">
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
            <tr className="border border-gray-200">
              <td className="flex items-center justify-center px-2 py-4 ">
                08
              </td>
              <td className="font-light ">
                <div className="flex items-center justify-center gap-2 ">
                  <img
                    className="object-cover w-6 h-6 border-black rounded-xl"
                    src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                  <div className="flex-col">
                    <p className="w-32 font-normal">Anuj Verma</p>
                    <p className="text-x">abc@domain.com</p>
                  </div>
                </div>
              </td>
              <td className="flex items-center justify-center px-2 py-4 ">
                <div className="flex gap-1">
                  <button className="px-2 bg-green-500 rounded-full ">
                    XYZ-6h
                  </button>
                  <button className="px-2 bg-green-500 rounded-full ">
                    ABC-4h
                  </button>
                </div>
              </td>

              <td className="px-1 py-2 font-light text-center">
                <button className="px-2 bg-green-500 rounded-full ">
                  9 hrs
                </button>
              </td>
              <td className="flex items-center justify-center px-2 py-4 ">
                Intern
              </td>
              <td className="px-2 py-2 ">
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
            <tr className="border border-gray-200">
              <td className="flex items-center justify-center px-2 py-4 ">
                09
              </td>
              <td className="font-light ">
                <div className="flex items-center justify-center gap-2 ">
                  <img
                    className="object-cover w-6 h-6 border-black rounded-xl"
                    src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                  <div className="flex-col">
                    <p className="w-32 font-normal">Priya Singh</p>
                    <p className="text-x">abc@domain.com</p>
                  </div>
                </div>
              </td>
              <td className="flex items-center justify-center px-2 py-4 ">
                <button className="px-2 bg-yellow-400 rounded-full ">
                  ABC
                </button>
              </td>

              <td className="px-1 py-2 font-light text-center ">
                <button className="px-2 bg-yellow-400 rounded-full ">
                  7 hrs
                </button>
              </td>
              <td className="flex items-center justify-center px-2 py-4 ">
                Contractor
              </td>
              <td className="px-2 py-2">
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
