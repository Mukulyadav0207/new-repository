import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { FaLayerGroup } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { AiFillFileUnknown } from "react-icons/ai";
import { FaUserCheck } from "react-icons/fa";
// import AddNote from "./AddNotes";
import { MdDelete } from "react-icons/md";

import AlterRequest from "./LeavesAlterRequestModal";
import EditLeave from "./LeavesEditLeaveModal";
import DeleteConfermation from "./LeavesDeleteConfirmation";

function Holidays() {
  return (
    <div className="flex gap-3 mt-5">
      <div className=" gap-1 p-2 bg-white w-[330px] border rounded-lg">
        <div className="flex items-center text-xl font-bold">
          <p>Holiday</p>
          <DeleteConfermation />
        </div>

        <div className="items-center p-3 font-semibold ">
          <div className="flex items-center gap-2">
            <p className="w-32 text-gray-400 "> Date:</p>
            <p className="ml-4"> 15/04/2023</p>
          </div>

          <div className="flex ">
            <p className="w-32 text-gray-400"> Description:</p>
            <p className="ml-16">
              {" "}
              Lorem, ipsum to a dolor sit amet rdet consectetur sddffs
              adipisicing elit.Dft oluptas, itaque.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-32 text-gray-400"> Created By:</p>
            <p className="ml-4 font-bold"> Piyush Mishra</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-32 text-gray-400"> Created At:</p>
            <p className="ml-4"> 12/01/2023</p>
          </div>
        </div>
      </div>

      <div className=" gap-1 p-2 bg-white w-[330px] border rounded-lg">
        <div className="flex items-center text-xl font-bold">
          <p>Holiday</p>
          <DeleteConfermation />
        </div>

        <div className="items-center p-3 font-semibold ">
          <div className="flex items-center gap-2">
            <p className="w-32 text-gray-400 "> Date:</p>
            <p className="ml-4"> 15/04/2023</p>
          </div>

          <div className="flex ">
            <p className="w-32 text-gray-400"> Description:</p>
            <p className="ml-16">
              Lorem, ipsum to a dolor sit amet rdet consectetur sddffs
              adipisicing elit.Dft oluptas, itaque dfr.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-32 text-gray-400"> Created By:</p>
            <p className="ml-4 font-bold"> Piyush Mishra</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-32 text-gray-400"> Created At:</p>
            <p className="ml-4"> 12/01/2023</p>
          </div>
        </div>
      </div>
      <div>
        <select className="border border-gray-400 rounded-md ml-80">
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
        </select>
      </div>
    </div>
  );
}
export default Holidays;
