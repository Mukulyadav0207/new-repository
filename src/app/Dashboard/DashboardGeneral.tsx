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

const features = [
  {
    title: "Average Daily Hours",
    numberOfTimes: "9 Hours",
    icon1: RxCounterClockwiseClock,
    icon2: TbArrowUpRight,
    number: "+10",
    per: "per employee",
  },
  {
    title: "Average Daily Hours",
    numberOfTimes: "9 Hours",
    icon1: RxCounterClockwiseClock,
    icon2: TbArrowUpRight,
    number: "+10",
    per: "per intern",
  },
  {
    title: "Average Projects",
    numberOfTimes: "91",
    icon1: FaListAlt,
    icon2: TbArrowUpRight,
    number: "+4",
  },
  {
    title: "Average Employees",
    numberOfTimes: "91",
    icon1: RiGroupFill,
    icon2: TbArrowDownRight,
    number: "-06",
  },
  {
    title: "Average interns",
    numberOfTimes: "09 ",
    icon1: FaUserClock,
    icon2: TbArrowDownRight,
    number: "-05",
  },
];

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
    Intern: 9,
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


function DashboardGeneral() {
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
                    index === 1 || index === 2 || index === 0
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
export default DashboardGeneral;
