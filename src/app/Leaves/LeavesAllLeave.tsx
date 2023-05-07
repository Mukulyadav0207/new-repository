import React from "react";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { RxHalf2 } from "react-icons/rx";
import { BsCircleHalf } from "react-icons/bs";
import { BsCircleFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { GoCheck } from "react-icons/go";
import RejectLeave from "./LeavesRejectLeaveModal";




function AllLeaves(){

return (
  <div>
    <div className="w-[1060px] p-3  overflow-hidden text-xs ">
      <table className="mt-4   h-[100px] ">
        <thead>
          <tr className="bg-slate-100">
            <th className="px-2 py-2 font-semibold">Employee Name</th>
            <th className="px-2 py-2 font-semibold">Dates </th>
            <th className="px-2 py-2 font-semibold">Category</th>
            <th className="px-2 py-2 font-semibold">type</th>
            <th className="px-2 py-2 font-semibold">Status</th>
            <th className="px-2 py-2 font-semibold">Reason</th>

            <th className="px-2 py-2 font-semibold">Applied</th>
            <th className="px-2 py-2 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr>
            <td className="px-2 py-2 borde2">Akshay Mishra</td>
            <td className="px-1 py-2 font-light border">
              03/11/2022 - 05/11/2022
            </td>
            <td className="px-2 py-2 border">Medical</td>

            <td className="px-2 py-2 border">
              <div className="flex items-center gap-2">
                <BsCircleFill />
                <div>Full Day</div>
              </div>
            </td>
            <td className="flex items-center justify-center px-2 py-4 border">
              <button className="px-2 bg-yellow-400 border rounded-full ">
                Alteration Pending
              </button>
            </td>
            <td className="px-2 py-2 border">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur
            </td>
            <td className="px-1 py-2 font-light border">
              03/11/2022 - 05/11/2022
            </td>
            <td className="px-2 py-2 border">
              <div className="flex items-center gap-1">
                <button className="text-sm text-green-500">
                  <GoCheck />
                </button>
                <RejectLeave/>

                <Link to="/LeaveActions">
                  <button className="text-gray-500 hover:text-black">
                    <AiFillEye />
                  </button>
                </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td className="px-2 py-2 border">Alok Yadav</td>
            <td className="px-1 py-2 font-light border">
              03/11/2022 - 05/11/2022
            </td>

            <td className="px-2 py-2 border">Privilege</td>
            <td className="px-2 py-2 border">
              <div className="flex items-center gap-2">
                <BsCircleHalf />
                <div>First Half</div>
              </div>
            </td>
            <td className="flex items-center justify-center w-auto px-2 py-4 border">
              <button className="px-2 text-black bg-green-500 border rounded-full ">
                Approved
              </button>
            </td>
            <td className="px-2 py-2 border">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </td>
            <td className="px-1 py-2 font-light border">
              03/11/2022 - 05/11/2022
            </td>
            <td className="px-2 py-2 border">
              <AiFillEye />
            </td>
          </tr>
          <tr>
            <td className="px-2 py-2 border">Abhimanyu Birla</td>
            <td className="px-1 py-2 font-light border">
              03/11/2022 - 05/11/2022
            </td>

            <td className="px-2 py-2 border">Casual</td>
            <td className="px-2 py-2 border">
              <div className="flex items-center gap-2">
                <RxHalf2 className="text-sm" />
                <div>Second Half</div>
              </div>
            </td>
            <td className="flex items-center justify-center px-2 py-4 border">
              <button className="px-2 text-white bg-red-500 border rounded-full ">
                Rejected
              </button>
            </td>
            <td className="px-2 py-2 border">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur
            </td>
            <td className="px-1 py-2 font-light border">
              03/11/2022 - 05/11/2022
            </td>
            <td className="px-2 py-2 border">
              <AiFillEye />
            </td>
          </tr>
          <tr>
            <td className="px-2 py-2 border">Vinay Rai</td>
            <td className="px-1 py-2 font-light border">
              03/11/2022 - 05/11/2022
            </td>
            <td className="px-2 py-2 border">Casual</td>

            <td className="px-2 py-2 border">
              <div className="flex items-center gap-2">
                <BsCircleFill />
                <div>Full Day</div>
              </div>
            </td>
            <td className="flex items-center justify-center w-auto px-2 py-4 border">
              <button className="px-2 text-black bg-yellow-400 border rounded-full ">
                Pending
              </button>
            </td>
            <td className="px-2 py-2 border">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </td>
            <td className="px-1 py-2 font-light border">
              03/11/2022 - 05/11/2022
            </td>
            <td className="px-2 py-2 border">
              <AiFillEye />
            </td>
          </tr>
          <tr>
            <td className="px-2 py-2 border">Subham Singh</td>
            <td className="px-1 py-2 font-light border">
              03/11/2022 - 05/11/2022
            </td>
            <td className="px-2 py-2 border">Privilege</td>

            <td className="px-2 py-2 border">
              <div className="flex items-center gap-2">
                <BsCircleHalf />
                <div>First Half</div>
              </div>
            </td>
            <td className="flex items-center justify-center px-2 py-4 border">
              <button className="px-2 text-white bg-green-500 border rounded-full ">
                Approved
              </button>
            </td>
            <td className="px-2 py-2 border">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur
            </td>
            <td className="px-1 py-2 font-light border">
              03/11/2022 - 05/11/2022
            </td>

            <td className="px-2 py-2 border">
              <AiFillEye />
            </td>
          </tr>

          <tr>
            <td className="px-2 py-2 border">Prashant Verma</td>
            <td className="px-1 py-2 font-light border">
              03/11/2022 - 05/11/2022
            </td>
            <td className="px-2 py-2 border">Medical</td>

            <td className="px-2 py-2 border">
              <div className="flex items-center gap-2">
                <RxHalf2 className="text-sm" />
                <div>Second Half</div>
              </div>
            </td>
            <td className="flex items-center justify-center px-2 py-4 border">
              <button className="px-2 bg-yellow-400 border rounded-full ">
                Pending
              </button>
            </td>
            <td className="px-2 py-2 border">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur
            </td>
            <td className="px-1 py-2 font-light border">
              03/11/2022 - 05/11/2022
            </td>
            <td className="px-2 py-2 border">
              <AiFillEye />
            </td>
          </tr>
          <tr>
            <td className="px-2 py-2 border">Mayank Rai</td>
            <td className="px-1 py-2 font-light border">
              03/11/2022 - 05/11/2022
            </td>
            <td className="px-2 py-2 border">Casual</td>

            <td className="px-2 py-2 border">
              <div className="flex items-center gap-2">
                <BsCircleHalf />
                <div>First Half</div>
              </div>
            </td>
            <td className="flex items-center justify-center px-2 py-4 border">
              <button className="px-2 text-white bg-red-500 border rounded-full ">
                Rejected
              </button>
            </td>
            <td className="px-2 py-2 border">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </td>
            <td className="px-1 py-2 font-light border">
              03/11/2022 - 05/11/2022
            </td>
            <td className="px-2 py-2 border">
              <AiFillEye />
            </td>
          </tr>
          <tr>
            <td className="px-2 py-2 border">Aarti singh</td>
            <td className="px-1 py-2 font-light border">
              03/11/2022 - 05/11/2022
            </td>
            <td className="px-2 py-2 border">Privilege</td>

            <td className="px-2 py-2 border">
              <div className="flex items-center gap-2">
                <RxHalf2 className="text-sm" />
                <div>Second Half</div>
              </div>
            </td>
            <td className="flex items-center justify-center w-auto px-2 py-4 border">
              <button className="w-32 px-2 text-black bg-yellow-400 border rounded-full">
                Limited functionality
              </button>
            </td>
            <td className="px-2 py-2 border w-[290px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur
            </td>
            <td className="px-1 py-2 font-light border">
              03/11/2022 - 05/11/2022
            </td>
            <td className="px-2 py-2 border">
              <AiFillEye />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);



}
export default AllLeaves