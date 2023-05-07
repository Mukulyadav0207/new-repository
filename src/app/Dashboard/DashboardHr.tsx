
import { TbArrowDownRight } from "react-icons/tb";

import { TbArrowUpRight } from "react-icons/tb";

import { GiSandsOfTime } from "react-icons/gi";
import { IoMdCheckbox } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import { AiFillClockCircle } from "react-icons/ai";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



 const LeavesData = [
   {
     month: "Jan",
     "Accepted Leaves": 5,
     "Rejected Leaves": 3,
     "Pending Leaves": 11,
   },
   {
     month: "Feb",
   "Accepted Leaves": 4,
     "Rejected Leaves":5 ,
     "Pending Leaves":13,
   },
   {
     month: "Mar",
  "Accepted Leaves": 5,
     "Rejected Leaves": 5,
     "Pending Leaves": 5,
   },
   {
     month: "April",
   "Accepted Leaves": 4,
     "Rejected Leaves": 2,
     "Pending Leaves": 11,
   },
   {
     month: "May",
    "Accepted Leaves": 2,
     "Rejected Leaves": 2,
     "Pending Leaves": 7,
   },
   {
     month: "June",
    "Accepted Leaves": 1,
     "Rejected Leaves": 3,
     "Pending Leaves": 19,
   },
   {
     month: "July",
    "Accepted Leaves": 2,
     "Rejected Leaves": 3,
     "Pending Leaves": 13,
   },
   {
     month: "Aug",
    "Accepted Leaves": 2,
     "Rejected Leaves": 8,
     "Pending Leaves": 3,
   },
   {
     month: "Sept",
  "Accepted Leaves": 2,
     "Rejected Leaves": 10,
     "Pending Leaves": 11,
   },
   {
     month: "Oct",
   "Accepted Leaves": 4,
     "Rejected Leaves": 4,
     "Pending Leaves": 14,
   },
   {
     month: "Nov",
    "Accepted Leaves": 1,
     "Rejected Leaves": 2,
     "Pending Leaves": 9,
   },
   {
     month: "Dec",
    "Accepted Leaves": 2,
     "Rejected Leaves": 3,
     "Pending Leaves": 13,
   },
 ];





function HR() {
  return (
    <>
      <div className="flex gap-4">
        <div className="flex gap-3 p-2 mt-3 bg-white border rounded-lg w-fit">
          <div className="flex-col space-y-4">
            <div className="flex items-center justify-center p-2 ml-2 text-blue-600 bg-indigo-100 border rounded-lg w-fit">
              <GiSandsOfTime />
            </div>
            <div className="flex items-center justify-center ">
              <TbArrowUpRight className="text-red-500" />

              <p className="text-gray-400">-5</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-x">Pending Requests</p>
            <p className="text-2xl font-semibold ">91</p>
            <p className="text-gray-400 text-x"></p>
          </div>
        </div>

        <div className="flex gap-3 p-2 mt-3 bg-white border rounded-lg w-fit">
          <div className="flex-col space-y-4">
            <div className="flex items-center justify-center p-2 ml-2 text-blue-600 bg-indigo-100 border rounded-lg w-fit">
              <IoMdCheckbox />
            </div>
            <div className="flex items-center justify-center ">
              <TbArrowUpRight className="text-green-500" />

              <p className="text-gray-400">+08</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-x">Accepted request</p>
            <p className="text-2xl font-semibold ">09</p>
            <p className="text-gray-400 text-x"></p>
          </div>
        </div>
        <div className="flex gap-3 p-2 mt-3 bg-white border rounded-lg w-fit">
          <div className="flex-col space-y-4">
            <div className="flex items-center justify-center p-2 ml-2 text-blue-600 bg-indigo-100 border rounded-lg w-fit">
              <RxCrossCircled />
            </div>
            <div className="flex items-center justify-center ">
              <TbArrowUpRight className="text-red-500" />

              <p className="text-gray-400">-02</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-x">Rejected Leaves</p>
            <p className="text-2xl font-semibold ">09</p>
            <p className="text-gray-400 text-x"></p>
          </div>
        </div>
        <div className="flex gap-3 p-2 mt-3 bg-white border rounded-lg w-fit">
          <div className="flex-col space-y-4">
            <div className="flex items-center justify-center p-2 ml-2 text-blue-600 bg-indigo-100 border rounded-lg w-fit">
              <GiSandsOfTime />
            </div>
            <div className="flex items-center justify-center ">
              <TbArrowDownRight className="text-red-500" />

              <p className="text-gray-400">-6</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-x">Late Leave Submissions</p>
            <p className="text-2xl font-semibold ">91</p>
            <p className="text-gray-400 text-x"></p>
          </div>
        </div>
        <div className="flex gap-3 p-2 mt-3 bg-white border rounded-lg w-fit">
          <div className="flex-col space-y-4">
            <div className="flex items-center justify-center p-2 ml-2 text-blue-600 bg-indigo-100 border rounded-lg w-fit">
              <AiFillClockCircle />
            </div>
            <div className="flex items-center justify-center ">
              <TbArrowDownRight className="text-red-500" />

              <p className="text-gray-400">-2</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-x">Reaction Time</p>
            <p className="text-2xl font-semibold ">2 Hrs</p>
            <p className="text-gray-400 text-x"></p>
          </div>
        </div>
      </div>

      <div className="flex mt-3 gap-7">
        <div className="mt-4 bg-white w-[500px] text-sm border rounded-md ">
          <p className="m-3 mb-1 font-bold">Leaves</p>
          <BarChart
            width={500}
            height={310}
            data={LeavesData}
            margin={{
              top: 20,
              right: 30,

              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="month" tick={{ fontSize: 10 }} />
            <YAxis
              tick={{ fontSize: 10 }}
              ticks={[0, 5, 10, 15, 20, 25]}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="Pending Leaves" stackId="" fill="#1446CD" />
            <Bar dataKey="Rejected Leaves" stackId="" fill="#F5472D" />
            <Bar dataKey="Accepted Leaves" stackId="" fill="#282281" />
          </BarChart>
        </div>
      </div>
    </>
  );
}
export default HR;
