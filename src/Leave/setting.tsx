import React, { useState } from "react";
import EditLeave from "./EditLeave";
import LeaveEdit from "./LeaveEdit";
function Settings() {
  return (
    <div className="flex gap-12 m-5">
      <div className=" gap-1 p-2 bg-white w-[470px] border rounded-lg">
        <div className="flex items-center text-lg font-bold gap-52 ">
          <p>Fulltime Employee Leaves</p> <LeaveEdit />
        </div>

        <div className="flex items-center mt-3 text-gray-500">
          Total leave available for fulltime employee.
        </div>

        <div className="items-center p-2 border rounded-lg bg-cyan-100">
          <div className="flex items-center gap-2">
            <p className="w-32 "> Casual Leaves</p>
            <p className="ml-32 font-semibold"> 01/01[One Time Credit]</p>
          </div>

          <div className="flex items-center gap-2 mt-5">
            <p className="w-32 "> Medical Leaves</p>
            <p className="ml-32 font-semibold">01/01[One Time Credit]</p>
          </div>
          <div className="flex items-center gap-2 mt-5">
            <p className="w-32 ">Previlege Leaves</p>
            <p className="ml-32 font-semibold"> 01/01[One Time Credit]</p>
          </div>
          <div className="flex items-center gap-2 mt-5">
            <p className="w-32"> Other Leaves</p>
            <p className="ml-32 font-semibold"> 01/01[Monthly Credit]</p>
          </div>
        </div>
      </div>

      <div className=" gap-1 p-2 bg-white w-[470px] border rounded-lg">
        <div className="flex items-center text-lg font-bold gap-52 ">
          <p>Fulltime Employee Leaves</p> <LeaveEdit />
        </div>

        <div className="flex items-center mt-3 text-gray-500">
          Total leave available for fulltime employee.
        </div>

        <div className="items-center p-2 border rounded-lg bg-cyan-100">
          <div className="flex items-center gap-2">
            <p className="w-32 "> Casual Leaves</p>
            <p className="ml-32 font-semibold"> 01/01[One Time Credit]</p>
          </div>

          <div className="flex items-center gap-2 mt-5">
            <p className="w-32 "> Medical Leaves</p>
            <p className="ml-32 font-semibold">01/01[One Time Credit]</p>
          </div>
          <div className="flex items-center gap-2 mt-5">
            <p className="w-32 ">Previlege Leaves</p>
            <p className="ml-32 font-semibold"> 01/01[One Time Credit]</p>
          </div>
          <div className="flex items-center gap-2 mt-5">
            <p className="w-32"> Other Leaves</p>
            <p className="ml-32 font-semibold"> 01/01[Monthly Credit]</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Settings;