






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


const features = [
  {
    title: "Total Leaves",
    average: "91",
    icon1: FaUmbrellaBeach,
    icon2: TbArrowDownRight,
    number: "-5",
  },
  {
    title: "Early Leave",
    average: "09 ",
    icon1: AiFillClockCircle,
    icon2: TbArrowDownRight,
    number: "-7",
  },
  {
    title: "Last Minute Leave",
    average: "91",
    icon1: AiFillClockCircle,
    icon2: TbArrowUpRight,
    number: "+7",
  },
  {
    title: "Average Daily Hours",
    average: "09",
    icon1: RxCounterClockwiseClock,
    icon2: TbArrowUpRight,
    number: "+10",
  },
  {
    title: "Average Projects",
    average: "09 ",
    icon1: FaListAlt,
    icon2: TbArrowUpRight,
    number: "+10",
  },
  {
    title: "Average interns Hours",
    average: "09 hrs ",
    icon1: RiGroupFill,
    icon2: TbArrowDownRight,
    number: "-2",
  },
];



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



function EmployeesPerformance() {
  return (
    <>
      <p className="mt-2 font-bold text-[#4b5563]">Stats</p>
      <div className="mt-4 ">
        <dl className="grid max-w-xl grid-cols-6 gap-x-[182px] ">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative bg-white border rounded-lg pl-9 w-[150px]"
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
                {feature.average}
              </dd>

              <div className="flex items-center justify-start mx-2 mb-3 text-x -ml-7">
                <feature.icon2
                  className={
                    index === 0 || index === 1 || index === 5
                      ? "text-red-500"
                      : " text-green-500"
                  }
                />
                <span className="text-black">{feature.number}</span>
              </div>
            </div>
          ))}
        </dl>
      </div>

      <p className="mt-2 font-bold text-[#4b5563]">Graphs</p>

      <div className="flex gap-3 ">
        <div className="mt-4 bg-white w-[540px] text-sm border rounded-md ">
          <p className="m-2 font-bold">Engagement</p>
          <LineChart
            width={550}
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
              tick={{ fontSize: 7 }}
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
export default EmployeesPerformance;
