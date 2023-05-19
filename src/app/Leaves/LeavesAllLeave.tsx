import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { RxHalf2 } from "react-icons/rx";
import { BsCircleHalf } from "react-icons/bs";
import { BsCircleFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { GoCheck } from "react-icons/go";
import RejectLeave from "./LeavesRejectLeaveModal";
import { IoIosEye } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";

import { receiveLeavesData } from "../../redux/actions/LeavesActions";





function AllLeaves(){
 const leaves = useSelector((state) => state.leaves.data);
 const dispatch = useDispatch(); 



 useEffect(() => {
   const leaves = [
     {
       EmployeeName: "Akshay Mishra",
       Dates: "03/11/2022 - 05/11/2022",
       Category: "Medical",
       Type: "Full Day",
       Status: "Alteration Pending",
       Reason:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur",
       Applied: "03/11/2022 - 05/11/2022",
       Actions: IoIosEye,
       icon1: BsCircleFill,
     },
     {
       EmployeeName: "Alok Yadav",
       Dates: "03/11/2022 - 05/11/2022",
       Category: "Privilege",
       Type: "First Half",
       Status: "Approved",
       Reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
       Applied: "03/11/2022 - 05/11/2022",
       Actions: IoIosEye,
       icon1: BsCircleHalf,
     },
     {
       EmployeeName: "Abhimanyu Birla",
       Dates: "03/11/2022 - 05/11/2022",
       Category: "Casual",
       Type: "Second Half",
       Status: "Rejected",
       Reason:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur",
       Applied: "03/11/2022 - 05/11/2022",
       Actions: IoIosEye,
       icon1: RxHalf2,
     },
     {
       EmployeeName: "Vinay Rai",
       Dates: "03/11/2022 - 05/11/2022",
       Category: "Casual",
       Type: "Full Day",
       Status: "Pending",
       Reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
       Applied: "03/11/2022 - 05/11/2022",
       Actions: IoIosEye,
       icon1: BsCircleFill,
     },
     {
       EmployeeName: "Subham Singh",
       Dates: "03/11/2022 - 05/11/2022",
       Category: "Privilege",
       Type: "First Half",
       Status: "Approved",
       Reason:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur",
       Applied: "03/11/2022 - 05/11/2022",
       Actions: IoIosEye,
       icon1: BsCircleHalf,
     },
     {
       EmployeeName: "Prashant Verma",
       Dates: "03/11/2022 - 05/11/2022",
       Category: "Medical",
       Type: "Second Half",
       Status: "Pending",
       Reason:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur",
       Applied: "03/11/2022 - 05/11/2022",
       Actions: IoIosEye,
       icon1: RxHalf2,
     },
     {
       EmployeeName: "Mayank Rai",
       Dates: "03/11/2022 - 05/11/2022",
       Category: "Casual",
       Type: "First Half",
       Status: "Rejected",
       Reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
       Applied: "03/11/2022 - 05/11/2022",
       Actions: IoIosEye,
       icon1: BsCircleHalf,
     },
     {
       EmployeeName: "Aarti Singh",
       Dates: "03/11/2022 - 05/11/2022",
       Category: "Privilege",
       Type: "Second Half",
       Status: "Limited functionality",
       Reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
       Applied: "03/11/2022 - 05/11/2022",
       Actions: IoIosEye,
       icon1: RxHalf2,
     },
   ];

   dispatch(receiveLeavesData(leaves));
 }, [dispatch]);

return (
  <>
    <div>
      <div className="w-[1060px]   overflow-hidden text-xs ">
        <table className="mt-4 ">
          <thead>
            <tr className="bg-slate-100">
              <th className="px-2 py-2 font-semibold">Employee Name</th>
              <th className="px-2 py-2 font-semibold">Dates </th>
              <th className="px-2 py-2 font-semibold">Category</th>
              <th className="px-2 py-2 font-semibold">Type</th>
              <th className="px-2 py-2 font-semibold">Status</th>
              <th className="px-2 py-2 font-semibold">Reason</th>

              <th className="px-2 py-2 font-semibold">Applied</th>
              <th className="px-2 py-2 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white text-[#A59F9F]">
            {leaves.map((leave, index) => (
              <tr>
                <td className="px-1 py-2 font-light border w-[120px] text-center ">
                 {leave["EmployeeName"]}
                </td>
                <td className="px-1 py-2 font-light border w-[140px]">
                  {leave["Dates"]}
                </td>
                <td className="px-2 py-2 border">{leave["Category"]}</td>

                <td className="px-2 py-2 border w-[110px]">
                  <div className="flex items-center gap-2">
                    <leave.icon1 />
                    <div>{leave["Type"]}</div>
                  </div>
                </td>
                <td className=" text-center px-2 py-2 border w-[150px]">
                  <button
                    className={`px-2   border rounded-full 
              ${
                index === 0 || index === 3 || index === 5 || index === 7
                  ? "bg-[#FFFF00] text-black "
                  : index === 1 || index === 4
                  ? "bg-[#00D100] text-white"
                  : "bg-[#FE0012] text-white"
              } `}
                  >
                    {leave["Status"]}
                  </button>
                </td>
                <td className="px-2 py-2 border w-[280px]">
                  {leave["Reason"]}
                </td>
                <td className="px-1 py-2 font-light border w-[140px]">
                  {leave["Applied"]}
                </td>
                <td className="px-2 py-2 border">
                  <div className="flex items-center gap-1">
                    <button className="text-sm text-green-500">
                      <GoCheck />
                    </button>
                    <RejectLeave />

                    <Link to="/leaves/allleaves/details/1">
                      <button className="text-gray-500 hover:text-black">
                        <leave.Actions />
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div></div>
  </>
);



}
export default AllLeaves