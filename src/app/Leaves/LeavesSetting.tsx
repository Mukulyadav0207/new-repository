import React, { useState } from "react";
import EditLeave from "./LeavesEditLeaveModal";
import LeaveEdit from "./LeavesEditLeavesModal";

const features = [
  {
    title: "Fulltime Employee Leaves",
    icon: LeaveEdit,
    heading: "Total leave available for fulltime employee.",
    data: [
      {
       
        "Casual Leaves": "01/01[One Time Credit]",
        "Medical Leaves": "01/01[One Time Credit]",

        "Previlege Leaves": "01/01[One Time Credit]",
        "Other Leaves": "01/01[Monthly Credit]",
      },
    ],
  },
  {
    title: "Fulltime Employee Leaves",
    icon: LeaveEdit,
    heading: "Total leave available for fulltime employee.",
    data: [
      {
       
        "Casual Leaves": "01/01[One Time Credit]",
        "Medical Leaves": "01/01[One Time Credit]",

        "Previlege Leaves": "01/01[One Time Credit]",
        "Other Leaves": "01/01[Monthly Credit]",
      },
    ],
  },
];







function Settings() {
  return (
    <div className="flex gap-3 mt-6">
      {features.map((feature) => (
        <div className="   p-4 bg-white w-[525px] h-[300px] border rounded-lg ">
          <div className="flex items-center justify-between text-xl font-bold">
            <p className="text-[#000000]">{feature.title}</p>
            <feature.icon />
          </div>
          <p className="mt-3 font-semibold text-[#4B5563]">{feature.heading}</p>
          {feature.data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col  mt-1 rounded-md   gap-y-4  w-[490px] h-[200px] bg-[#E9F8F8] p-3 "
            >
              {Object.entries(item).map(([key, value]) => {
                return (
                  <p key={key} className="flex justify-between ">
                    <p className="text-[#302F2F] font-semibold w-[150px] h-fit">
                      {key}
                    </p>

                    <p className="text-[#000000] font-semibold  w-[200px] h-fit">
                      {value}
                    </p>
                  </p>
                );
              })}
            </div>
          ))}
        </div>
      ))}
    </div>

    // <div className="flex gap-12 m-5">
    //   <div className=" gap-1 p-2 bg-white w-[470px] border rounded-lg">
    //     <div className="flex items-center text-lg font-bold gap-52 ">
    //       <p>Fulltime Employee Leaves</p> <LeaveEdit />
    //     </div>

    //     <div className="flex items-center mt-3 text-gray-500">
    //       Total leave available for fulltime employee.
    //     </div>

    //     <div className="items-center p-2 border rounded-lg bg-cyan-100">
    //       <div className="flex items-center gap-2">
    //         <p className="w-32 "> Casual Leaves</p>
    //         <p className="ml-32 font-semibold"> 01/01[One Time Credit]</p>
    //       </div>

    //       <div className="flex items-center gap-2 mt-5">
    //         <p className="w-32 "> Medical Leaves</p>
    //         <p className="ml-32 font-semibold">01/01[One Time Credit]</p>
    //       </div>
    //       <div className="flex items-center gap-2 mt-5">
    //         <p className="w-32 ">Previlege Leaves</p>
    //         <p className="ml-32 font-semibold"> 01/01[One Time Credit]</p>
    //       </div>
    //       <div className="flex items-center gap-2 mt-5">
    //         <p className="w-32"> Other Leaves</p>
    //         <p className="ml-32 font-semibold"> 01/01[Monthly Credit]</p>
    //       </div>
    //     </div>
    //   </div>

    //   <div className=" gap-1 p-2 bg-white w-[470px] border rounded-lg">
    //     <div className="flex items-center text-lg font-bold gap-52 ">
    //       <p>Fulltime Employee Leaves</p> <LeaveEdit />
    //     </div>

    //     <div className="flex items-center mt-3 text-gray-500">
    //       Total leave available for fulltime employee.
    //     </div>

    //     <div className="items-center p-2 border rounded-lg bg-cyan-100">
    //       <div className="flex items-center gap-2">
    //         <p className="w-32 "> Casual Leaves</p>
    //         <p className="ml-32 font-semibold"> 01/01[One Time Credit]</p>
    //       </div>

    //       <div className="flex items-center gap-2 mt-5">
    //         <p className="w-32 "> Medical Leaves</p>
    //         <p className="ml-32 font-semibold">01/01[One Time Credit]</p>
    //       </div>
    //       <div className="flex items-center gap-2 mt-5">
    //         <p className="w-32 ">Previlege Leaves</p>
    //         <p className="ml-32 font-semibold"> 01/01[One Time Credit]</p>
    //       </div>
    //       <div className="flex items-center gap-2 mt-5">
    //         <p className="w-32"> Other Leaves</p>
    //         <p className="ml-32 font-semibold"> 01/01[Monthly Credit]</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
export default Settings;
