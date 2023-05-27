import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { RxHalf2 } from "react-icons/rx";

import { BsCircleFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { GoCheck } from "react-icons/go";
import AddEmployees from "./EmployeesAdd";
import FilterEmployees from "./EmployeesFilter";
import { BsLaptop } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";

import { receiveEmployeesData } from "../../redux/actions/EmployeesActions";



function Employees() {


const employees = useSelector((state) => state.employees.data);
const dispatch = useDispatch(); 


 useEffect(() => {
   const employees = [
     {
       ID: "01",
       fullName: "Pratham Singh",
       projects: "ABC",
       hoursEngagement: "8 hrs",
       role: "Full time",
       emailId: "abc@domain.com",
       icon: BsLaptop,
     },
     {
       ID: "02",
       fullName: "Pragati Mishra",
       projects: "ABC-4h",
       hoursEngagement: "4 hrs",
       role: "Intern",
       emailId: "abc@domain.com",
       icon: BsLaptop,
     },
     {
       ID: "03",
       fullName: "Satya Mall",
       projects: "ABC",
       hoursEngagement: "3 hrs",
       role: "Full time",
       emailId: "abc@domain.com",
       icon: BsLaptop,
     },
     {
       ID: "04",
       fullName: "Pratham Singh",
       projects: "ABC",
       hoursEngagement: "5 hrs",
       role: "Contractor",
       emailId: "abc@domain.com",
       icon: BsLaptop,
     },
     {
       ID: "05",
       fullName: "Ankit Rao",
       projects: "XYZ-6h",
       project2: "TCS-4h",
       hoursEngagement: "10 hrs",
       role: "Intern",
       emailId: "abc@domain.com",
       icon: BsLaptop,
     },
     {
       ID: "06",
       fullName: "Akiriti Sethi",
       projects: "ABC",
       hoursEngagement: "7 hrs",
       role: "Full time",
       emailId: "abc@domain.com",
       icon: BsLaptop,
     },
     {
       ID: "07",
       fullName: "Edda Maviya",
       projects: "ABC",
       hoursEngagement: "7 hrs",
       role: "Contractor",
       emailId: "abc@domain.com",
       icon: BsLaptop,
     },
     {
       ID: "08",
       fullName: "Anuj Verma",
       projects: "XYZ-6h",
       project2: " ABC-4h",
       hoursEngagement: "9 hrs",
       role: "Intern",
       emailId: "abc@domain.com",
       icon: BsLaptop,
     },
     {
       ID: "09",
       fullName: "John Doe",
       projects: "XYZ",
       hoursEngagement: "6 hrs",
       role: "Full time",
       emailId: "abc@domain.com",
       icon: BsLaptop,
     },
   ];

   dispatch(receiveEmployeesData(employees));
 }, [dispatch]);
















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

        <table className="mt-4 w-[1035px]  h-[100px] ">
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
            {employees.map((employee, index) => (
              <tr
                key={index}
                className="border border-gray-200 text-[#A59F9F] "
              >
                <td className="flex items-center justify-center py-4 ">
                  {employee.ID}
                </td>
                <td className="font-light w-[250px] text-center">
                  <div className="flex items-center justify-center  text-black ">
                    <img
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                      className="w-6 h-6 rounded-full object-cover overflow-hidden"
                    />
                    <div className="flex-col">
                      <p className="w-32 font-normal"> {employee.fullName}</p>
                      <p className="text-x"> {employee.emailId}</p>
                    </div>
                  </div>
                </td>
                <td className="flex items-center justify-center px-2 py-4 ">
                  <button
                    className={`px-4 py-0.5  border rounded-full 
              ${
                index === 0 ||
                index === 2 ||
                index === 4 ||
                index === 5 ||
                index === 7
                  ? "bg-[#00D100] text-white"
                  : "bg-[#FFFF00] text-black"
              } `}
                  >
                    {employee.projects}
                  </button>

                  {index === 4 || index === 7 ? (
                    <button className="px-4 py-0.5 border rounded-full bg-[#00D100] text-white">
                      {employee.project2}
                    </button>
                  ) : null}
                </td>

                <td className="justify-center px-1 py-2 font-light text-center">
                  <button
                    className={`px-4 py-0.5  border rounded-full 
              ${
                index === 0 || index === 4 || index === 7
                  ? "bg-[#00D100] text-white"
                  : index === 6 || index === 8
                  ? "bg-[#FFFF00] text-black "
                  : index === 1 || index === 3 || index === 5
                  ? "bg-[#FFA500] text-white "
                  : "bg-[#FE0012] text-white"
              } `}
                  >
                    {employee.hoursEngagement}
                  </button>
                </td>
                <td className="flex items-center justify-center px-2 py-4 ">
                  {employee.role}
                </td>
                <td className="px-2 py-2 ">
                  <div className="flex items-center justify-center gap-1">
                    <Link to="/employees/details/1">
                      <button className=" hover:text-black">
                        <AiFillEye />
                      </button>
                    </Link>
                    <button
                      className={`text-sm ${
                        index === 0 ||
                        index === 1 ||
                        index === 4 ||
                        index === 6 ||
                        index === 7
                          ? "text-[#00D100] "
                          : " "
                      }`}
                    >
                      <employee.icon />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Employees;
