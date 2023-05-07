






import { RxCounterClockwiseClock } from "react-icons/rx";
import { TbArrowUpRight } from "react-icons/tb";
import { BiPlus } from "react-icons/bi";
import { FaListAlt } from "react-icons/fa";
import { RiGroupFill } from "react-icons/ri";
import { BsDash } from "react-icons/bs";
import { TbArrowDownRight } from "react-icons/tb";
import { FaUmbrellaBeach } from "react-icons/fa";

import { AiFillClockCircle } from "react-icons/ai";




import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



const ProjectData = [
  {
    name: "",
    New: 0,
    "# Projects": 0,
    "Hours Spent Daily": 0,
  },
  {
    month: "Jan",

    "# Projects": 8,
    "Hours Spent Daily": 0o7,
  },
  {
    month: "Feb",

    "# Projects": 0o7,
    "Hours Spent Daily": 8,
  },
  {
    month: "Mar",
   
    "# Projects": 0o3,
    "Hours Spent Daily": 0o7,
  },
  {
    month: "April",
   
    "# Projects": 0o2,
    "Hours Spent Daily": 0o3,
  },
  {
    month: "May",
    
    "# Projects": 4.5,
    "Hours Spent Daily": 0o6,
  },
  {
    month: "June",
    New: 30,
    "# Projects": 4.3,
    "Hours Spent Daily": 8.2,
  },
  {
    month: "July",
   
    "# Projects": 1,
    "Hours Spent Daily": 9,
  },
  {
    month: "Aug",
    
    "# Projects": 1.8,
    "Hours Spent Daily": 7.8,
  },
  {
    month: "Sept",
    
    "# Projects": 6.5,
    "Hours Spent Daily": 2,
  },
  {
    month: "Oct",
   
    "# Projects":0.3,
    "Hours Spent Daily": 9.7,
  },
  {
    month: "Nov",
   
    "# Projects": 4.3,
    "Hours Spent Daily": 8,
  },
  {
    month: "Dec",
    New: 41,
    "# Projects": 5,
    "Hours Spent Daily": 8,
  },
];



function Performance() {
  return (
    <>
      <div className="flex mt-3 space-x-[885px]">
        <p className="font-bold">Stats</p>
        <select
          name="Select"
          id=""
          className="py-1 text-sm border border-gray-400 rounded-lg"
        >
          <option>Select</option>
          <option>Last 0-12 Months</option>
          <option>Last 12-24 Months</option>
        </select>
      </div>

      <div className="flex gap-4">
        <div className="flex gap-3 p-2 mt-3 bg-white border rounded-lg w-fit">
          <div className="flex-col space-y-4">
            <div className="flex items-center justify-center p-2 ml-2 text-blue-600 bg-indigo-100 border rounded-lg w-fit">
              <FaUmbrellaBeach />
            </div>
            <div className="flex items-center justify-center ">
              <TbArrowDownRight className="text-red-500" />

              <p className="text-gray-400">-5</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-x">Total Leaves</p>
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

              <p className="text-gray-400">-7</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-x">Early Leave</p>
            <p className="text-2xl font-semibold ">09</p>
            <p className="text-gray-400 text-x"></p>
          </div>
        </div>

        <div className="flex gap-3 p-2 mt-3 bg-white border rounded-lg w-fit">
          <div className="flex-col space-y-4">
            <div className="flex items-center justify-center p-2 ml-2 text-blue-600 bg-indigo-100 border rounded-lg w-fit">
              <AiFillClockCircle />
            </div>
            <div className="flex items-center justify-center ">
              <TbArrowUpRight className="text-green-500" />

              <p className="text-gray-400">+7</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-x">Last Minute Leave</p>
            <p className="text-2xl font-semibold ">91</p>
            <p className="text-gray-400 text-x"></p>
          </div>
        </div>

        <div className="flex gap-3 p-2 mt-3 bg-white border rounded-lg w-fit">
          <div className="flex-col space-y-4">
            <div className="flex items-center justify-center p-2 ml-2 text-blue-600 bg-indigo-100 border rounded-lg w-fit">
              <RxCounterClockwiseClock />
            </div>
            <div className="flex items-center justify-center ">
              <TbArrowUpRight className="text-green-500" />

              <p className="text-gray-400">+10</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-x">Average Daily Hours</p>
            <p className="text-2xl font-semibold ">9 Hours</p>
            <p className="text-gray-400 text-x"></p>
          </div>
        </div>

        <div className="flex gap-3 p-2 mt-3 bg-white border rounded-lg w-fit">
          <div className="flex-col space-y-4">
            <div className="flex items-center justify-center p-2 ml-2 text-blue-600 bg-indigo-100 border rounded-lg w-fit">
              <FaListAlt />
            </div>
            <div className="flex items-center justify-center ">
              <TbArrowUpRight className="text-green-500" />

              <p className="text-gray-400">+10</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-x">Average Projects</p>
            <p className="text-2xl font-semibold ">09</p>
            <p className="text-gray-400 text-x"></p>
          </div>
        </div>

        <div className="flex gap-3 p-2 mt-3 bg-white border rounded-lg w-fit">
          <div className="flex-col space-y-4">
            <div className="flex items-center justify-center p-2 ml-2 text-blue-600 bg-indigo-100 border rounded-lg w-fit">
              <RiGroupFill />
            </div>
            <div className="flex items-center justify-center ">
              <TbArrowDownRight className="text-red-500" />

              <p className="text-gray-400">-2</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <p className="text-x">Average Interns Hours</p>
            <p className="text-2xl font-semibold ">09 hrs</p>
            <p className="text-gray-400 text-x"></p>
          </div>
        </div>
      </div>

      <p className="mt-2 font-bold">Graphs</p>

      <div className="flex gap-3 ">
        <div className="mt-4 bg-white w-[490px] text-sm border rounded-md ">
          <p className="m-2 font-bold">Engagement</p>
          <LineChart
            width={500}
            height={270}
            data={ProjectData}
            margin={{
              top: 5,
              right: 30,

              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="month" tick={{ fontSize: 7 }} />
            <YAxis
              ticks={[0, 0o2, 0o4, 0o6, 0o10, 10]}
              
             tick= {{ fontSize: 7 }}
             />
            <Legend />

            <Line
              type="monotone"
              dataKey="# Projects"
              stroke="#1CF239"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="Hours Spent Daily"
              stroke="#F21C40"
              dot={false}
            />
          </LineChart>
        </div>
      </div>
    </>
  );
}
export default Performance;
