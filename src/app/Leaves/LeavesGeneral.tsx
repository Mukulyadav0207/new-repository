import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { FaLayerGroup } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { AiFillFileUnknown } from "react-icons/ai";
import { FaUserCheck } from "react-icons/fa";
// import AddNote from "./AddNotes";
import { BiNotepad } from "react-icons/bi";

import AlterRequest from "./LeavesAlterRequestModal";
import EditLeave from "./LeavesEditLeaveModal";

function LeaveGeneral() {
  return (
    <>
      <div className="flex gap-2 mt-4 ">
        <div className=" gap-1 p-2 bg-white w-[450px] border rounded-lg">
          <div className="flex items-center justify-end text-xl ">
            <EditLeave />
          </div>

          <div className="flex items-center">
            <p>12/02/2023</p>
            <CgArrowLongRight className="text-3xl w-[250px] " />
            <p>12/02/2023</p>
          </div>

          <div className="items-center p-2 border rounded-lg bg-cyan-100">
            <div className="flex items-center gap-2">
              <FaUser />
              <p className="w-32 text-gray-400 "> Employee Name</p>
              <p className="ml-32"> Pratham Singh</p>
            </div>

            <div className="flex items-center gap-2">
              <FaLayerGroup />
              <p className="w-32 text-gray-400"> Category</p>
              <p className="ml-32"> Casual</p>
            </div>
            <div className="flex items-center gap-2">
              <BsFillCalendarCheckFill />
              <p className="w-32 text-gray-400"> Applied On</p>
              <p className="ml-32"> 12/02/2023</p>
            </div>
            <div className="flex items-center gap-2">
              <FaUserCheck />
              <p className="w-32 text-gray-400"> Approver</p>
              <p className="ml-32"> Kartik Mehta</p>
            </div>
            <div className="flex items-center gap-2">
              <AiFillFileUnknown />
              <p className="text-gray-400"> Reason</p>
            </div>
            <p className="ml-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nam
              rerum molestiae quam quibusdam, fugit labore enim doloremque
              perspiciatis veritatis explicabo exercitationem eum.
            </p>

            <div className="flex items-center gap-2">
              <BiNotepad />
              <p className="text-gray-400">Remark From Approver</p>
            </div>
            <p className="ml-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nam
              rerum molestiae quam quibusdam, fugit labore enim doloremque
              perspiciatis veritatis explicabo exercitationem eum.
            </p>
          </div>
        </div>

        <div className="ml-4">
          <div className="flex gap-4 ">
            <div className="p-2 text-sm bg-white border rounded-lg">
              <div className="p-2 mt-5 font-semibold border rounded-lg bg-cyan-100 ">
                After Alteration
                <div className="flex">
                  <p className="text-gray-400"> From Date</p>
                  <p className="ml-5">16/11/2022</p>
                </div>
                <div className="flex">
                  <p className="text-gray-400"> To Date</p>
                  <p className="ml-10">20/11/2022</p>
                </div>
                <p className="mt-2"> Before Alteration</p>
                <div className="flex">
                  <p className="text-gray-400"> From Date</p>
                  <p className="ml-5">12/11/2022</p>
                </div>
                <div className="flex">
                  <p className="text-gray-400"> To Date</p>
                  <p className="ml-10">18/11/2022</p>
                </div>
              </div>
            </div>
            <div className="p-2 text-sm font-semibold bg-white border rounded-lg">
              Rejected Alteration
              <div className="p-2 mt-1 font-semibold border rounded-lg bg-cyan-100">
                After Alteration
                <div className="flex">
                  <p className="text-gray-400"> From Date</p>
                  <p className="ml-5">16/11/2022</p>
                </div>
                <div className="flex">
                  <p className="text-gray-400"> To Date</p>
                  <p className="ml-10">20/11/2022</p>
                </div>
                <p className="mt-2"> Before Alteration</p>
                <div className="flex">
                  <p className="text-gray-400"> From Date</p>
                  <p className="ml-5">12/11/2022</p>
                </div>
                <div className="flex">
                  <p className="text-gray-400"> To Date</p>
                  <p className="ml-10">18/11/2022</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="p-2 text-sm font-semibold bg-white border rounded-lg">
              Alteration Pending
              <div className="p-2 mt-1 font-semibold border rounded-lg bg-cyan-100">
                After Alteration
                <div className="flex">
                  <p className="text-gray-400"> From Date</p>
                  <p className="ml-5">16/11/2022</p>
                </div>
                <div className="flex">
                  <p className="text-gray-400"> To Date</p>
                  <p className="ml-10">20/11/2022</p>
                </div>
                <p className="mt-2"> Before Alteration</p>
                <div className="flex">
                  <p className="text-gray-400"> From Date</p>
                  <p className="ml-5">12/11/2022</p>
                </div>
                <div className="flex">
                  <p className="text-gray-400"> To Date</p>
                  <p className="ml-10">18/11/2022</p>
                </div>
              </div>
            </div>
            <div className="p-2 text-sm font-semibold bg-white border rounded-lg ">
              Status Changed
              <div className="p-2 mt-1 font-semibold border rounded-lg bg-cyan-100 w-[175px] h-[135px]">
                <div>
                  <p>After Alteration</p>
                  <p className="font-normal">Pending</p>
                </div>
                <div className="mt-2">
                  <p>Before Alteration</p>
                  <p className="font-normal">Rejected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-12 ">
          <AlterRequest />
        </div>
      </div>
    </>
  );
}
export default LeaveGeneral;
