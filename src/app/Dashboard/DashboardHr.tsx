
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

const features = [
  {
    title: "Pending Requests",
    numberOfTimes: "91",
    icon1: GiSandsOfTime,
    icon2: TbArrowUpRight,
    number: "-5",
   
  },
  {
    title: "Accepted Requests",
    numberOfTimes: "09",
    icon1: IoMdCheckbox,
    icon2: TbArrowUpRight,
    number: "+08",
    
  },
  {
    title: "Rejected Leaves",
    numberOfTimes: "09",
    icon1: RxCrossCircled,
    icon2: TbArrowUpRight,
    number: "-02",
  },
  {
    title: "Late Leave Submissions",
    numberOfTimes: "91",
    icon1: GiSandsOfTime,
    icon2: TbArrowDownRight,
    number: "-6",
  },
  {
    title: "Reaction time",
    numberOfTimes: "2 Hrs ",
    icon1: AiFillClockCircle,
    icon2: TbArrowDownRight,
    number: "-2",
  },
];

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





function DashboardHR() {
  return (
    <>
      <div className="mt-4 ">
        <dl className="grid max-w-xl grid-cols-5 gap-x-48 ">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative bg-white border rounded-lg pl-9 w-[160px]"
            >
              <dt className="mt-3 mb-2 text-gray-900 text-x">
                <div className="absolute flex items-center justify-center w-6 h-6 mb-2 bg-blue-100 rounded-md left-2 ">
                  <feature.icon1
                    className="w-4 h-4 text-[#1A13CB]"
                    aria-hidden="true"
                  />
                </div>
                <div className="font-semibold text-center text-gray-600 ">
                  {feature.title}
                </div>
              </dt>
              <dd className="font-bold text-center text-black leading-">
                {feature.numberOfTimes}
              </dd>

              <div className="flex items-center justify-start mx-2 mb-3 text-x -ml-7">
                <feature.icon2
                  className={
                     index === 2 
                      ? "text-green-500"
                      : "text-red-500"
                  }
                />
                <span className="text-gray-400">{feature.number}</span>
                <p className="ml-10 text-gray-400">{feature.per}</p>
              </div>
            </div>
          ))}
        </dl>
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
            <YAxis tick={{ fontSize: 10 }} ticks={[0, 5, 10, 15, 20, 25]} />
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
export default DashboardHR;
