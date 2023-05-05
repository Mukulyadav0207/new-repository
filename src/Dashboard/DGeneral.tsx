import {RxCounterClockwiseClock} from "react-icons/rx"
import { TbArrowUpRight } from "react-icons/tb";
import { BiPlus } from "react-icons/bi";
import {FaListAlt} from "react-icons/fa"
import {RiGroupFill} from "react-icons/ri"
import {BsDash} from "react-icons/bs"
import {TbArrowDownRight} from "react-icons/tb"
import { FaUserClock } from "react-icons/fa";
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



const data = [
  {
    name: "",
    Employee: 0,
    Intern: 0,
  },
  {
    month: "Jan",
    Employee: 4.8,
    Intern: 2,
  },
  {
    month: "Feb",
    Employee: 3.5,
    Intern: 4,
  },
  {
    month: "Mar",
    Employee: 8.1,
    Intern: 3.6,
  },
  {
    month: "April",
    Employee: 5.9,
    Intern: 8.2,
  },
  {
    month: "May",
    Employee: 8.6,
    Intern: 7.7,
  },
  {
    month: "June",
    Employee: 6.6,
    Intern: 8,
  },
  {
    month: "July",
    Employee: 8,
    Intern: 6.2,
  },
  {
    month: "Aug",
    Employee: 8.9,
    Intern: 8,
  },
  {
    month: "Sept",
    Employee: 6.2,
    Intern: 6.5,
  },
  {
    month: "Oct",
    Employee: 8,
    Intern: 6,
  },
  {
    month: "Nov",
    Employee: 6.5,
    Intern: 6,
  },
  {
    month: "Dec",
    Employee: 9,
    Intern: 8,
  },
 
];

const ProjectData = [
  {
    name: "",
    New: 0,
    Ongoing: 0,
    Shutdown: 0,
  },
  {
    month: "Jan",
    New: 25,
    Ongoing: 22,
    Shutdown: 18,
  },
  {
    month: "Feb",
    New: 15,
    Ongoing: 22,
    Shutdown: 35,
  },
  {
    month: "Mar",
    New: 33,
    Ongoing: 45,
    Shutdown: 55,
  },
  {
    month: "April",
    New: 28,
    Ongoing: 22,
    Shutdown: 26,
  },
  {
    month: "May",
    New: 47,
    Ongoing: 35,
    Shutdown: 7,
  },
  {
    month: "June",
    New: 30,
    Ongoing: 26,
    Shutdown: 38,
  },
  {
    month: "July",
    New: 56,
    Ongoing: 45,
    Shutdown: 28,
  },
  {
    month: "Aug",
    New: 46,
    Ongoing: 31,
    Shutdown: 50,
  },
  {
    month: "Sept",
    New: 48,
    Ongoing: 57,
    Shutdown: +30,
  },
  {
    month: "Oct",
    New: 30,
    Ongoing: 21,
    Shutdown: 25,
  },
  {
    month: "Nov",
    New: 45,
    Ongoing: 53,
    Shutdown: 42,
  },
  {
    month: "Dec",
    New: 41,
    Ongoing: 44,
    Shutdown: 31,
  },
];

const EmployeesData = [
  {
    name: "",
    Employee: 0,
    Intern: 0,
  },
  {
    month: "Jan",
    Employee: 30,
    Intern: 38,
  },
  {
    month: "Feb",
    Employee: 20,
    Intern: 31,
  },
  {
    month: "Mar",
    Employee: 40,
    Intern: 41,
  },
  {
    month: "April",
    Employee: 35,
    Intern: 40,
  },
  {
    month: "May",
    Employee: 59,
    Intern: 57,
  },
  {
    month: "June",
    Employee: 30,
    Intern: 21,
  },
  {
    month: "July",
    Employee: 45,
    Intern: 35,
  },
  {
    month: "Aug",
    Employee: 40,
    Intern: 27,
  },
  {
    month: "Sept",
    Employee: 50,
    Intern: 55,
  },
  {
    month: "Oct",
    Employee:30,
    Intern: 40,
  },
  {
    month: "Nov",
    Employee: 45,
    Intern: 50,
  },
  {
    month: "Dec",
    Employee: 37,
    Intern: 42,
  },
];


function General() {





  
  return (
    <>
      <div className="flex gap-4">
        <div className="flex gap-3 p-2 mt-3 bg-white border rounded-lg w-fit">
          <div className="flex-col space-y-4">
            <div className="flex items-center justify-center p-2 ml-2 text-blue-600 bg-indigo-100 border rounded-lg w-fit">
              <RxCounterClockwiseClock />
            </div>
            <div className="flex items-center justify-center ">
              <TbArrowUpRight className="text-green-500" />
              <BiPlus className="font-bold text-gray-400" />
              <p className="text-gray-400">10</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-x">Average Daily Hours</p>
            <p className="text-2xl font-semibold ">9 Hours</p>
            <p className="text-gray-400 text-x">per employee</p>
          </div>
        </div>

        <div className="flex gap-3 p-2 mt-3 bg-white border rounded-lg w-fit">
          <div className="flex-col space-y-4">
            <div className="flex items-center justify-center p-2 ml-2 text-blue-600 bg-indigo-100 border rounded-lg w-fit">
              <RxCounterClockwiseClock />
            </div>
            <div className="flex items-center justify-center ">
              <TbArrowUpRight className="text-green-500" />
              <BiPlus className="font-bold text-gray-400" />
              <p className="text-gray-400">10</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-x">Average Daily Hours</p>
            <p className="text-2xl font-semibold ">9 Hours</p>
            <p className="text-gray-400 text-x">per intern</p>
          </div>
        </div>

        <div className="flex gap-3 p-2 mt-3 bg-white border rounded-lg w-fit">
          <div className="flex-col space-y-4">
            <div className="flex items-center justify-center p-2 ml-2 text-blue-600 bg-indigo-100 border rounded-lg w-fit">
              <FaListAlt />
            </div>
            <div className="flex items-center justify-center ">
              <TbArrowUpRight className="text-green-500" />
              <BiPlus className="font-bold text-gray-400" />
              <p className="text-gray-400">4</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-x">Average Projects</p>
            <p className="text-2xl font-semibold ">91</p>
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
              <BsDash className="font-bold text-gray-400" />
              <p className="text-gray-400">6</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <p className="text-x">Average Employees</p>
            <p className="text-2xl font-semibold ">91</p>
            <p className="text-gray-400 text-x"></p>
          </div>
        </div>

        <div className="flex gap-3 p-2 mt-3 bg-white border rounded-lg w-fit">
          <div className="flex-col space-y-4">
            <div className="flex items-center justify-center p-2 ml-2 text-blue-600 bg-indigo-100 border rounded-lg w-fit">
              <FaUserClock />
            </div>
            <div className="flex items-center justify-center ">
              <TbArrowDownRight className="text-red-500" />
              <BsDash className="font-bold text-gray-400" />
              <p className="text-gray-400">5</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-x">Average Interns</p>
            <p className="text-2xl font-semibold ">09 </p>
            <p className="text-gray-400 text-x"></p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-3">
        <div className="mt-4 bg-white w-[340px] text-sm border rounded-md ">
          <p className="m-2 font-bold">Average Hours Per Day</p>
          <LineChart
            width={350}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,

              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="month" tick={{ fontSize: 7 }} />
            <YAxis ticks={[2, 4, 6, 8, 10]} />
            <Legend />
            <Line
              type="monotone"
              dataKey="Employee"
              stroke="#0C1866"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="Intern"
              stroke="#4E7FD2"
              dot={false}
            />
          </LineChart>
        </div>

        <div className="mt-4 bg-white w-[340px] text-sm border rounded-md ">
          <p className="m-2 font-bold">Number Of Projects</p>
          <LineChart
            width={350}
            height={300}
            data={ProjectData}
            margin={{
              top: 5,
              right: 30,

              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="month" tick={{ fontSize: 7 }} />
            <YAxis ticks={[10, 20, 30, 40, 50, 60]} />
            <Legend />
            <Line type="monotone" dataKey="New" stroke="#3C10CB" dot={false} />
            <Line
              type="monotone"
              dataKey="Ongoing"
              stroke="#1CF239"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="Shutdown"
              stroke="#F21C40"
              dot={false}
            />
          </LineChart>
        </div>
        <div className="  mt-4 bg-white w-[340px] text-sm border rounded-md ">
          <p className="m-2 font-bold">Number Of Employees, Intern</p>
          
          
            <LineChart
              width={350}
              height={300}
              data={EmployeesData}
              margin={{
                top: 5,
                right: 30,

                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="month" tick={{ fontSize: 7 }} />
              <YAxis ticks={[10, 20, 30, 40, 50, 60]} />
              <Legend />
              <Line
                type="monotone"
                dataKey="Employee"
                stroke="#0C1866"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="Intern"
                stroke="#4E7FD2"
                dot={false}
              />
            </LineChart>
         
        </div>
      </div>
    </>
  );
}
export default General;
