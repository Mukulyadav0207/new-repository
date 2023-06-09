import { AiTwotoneStar } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import {} from "react-icons/ai";
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

const RevenueData = [
  {
    month: "Jan",
    "Project 1": 3000,
    "Project 2": 1000,
    "Project 3": 14500,
  },
  {
    month: "Feb",
    "Project 1": 2000,
    "Project 2": 2000,
    "Project 3": 15000,
  },
  {
    month: "Mar",
    "Project 1": 2000,
    "Project 2": 2000,
    "Project 3": 12000,
  },
  {
    month: "April",
    "Project 1": 2000,
    "Project 2": 1000,
    "Project 3": 14800,
  },
  {
    month: "May",
    "Project 1": 500,
    "Project 2": 1000,
    "Project 3": 13500,
  },
  {
    month: "June",
    "Project 1": 500,
    "Project 2": 1000,
    "Project 3": 17800,
  },
  {
    month: "July",
    "Project 1": 500,
    "Project 2": 1000,
    "Project 3": 15000,
  },
  {
    month: "Aug",
    "Project 1": 500,
    "Project 2": 3000,
    "Project 3": 11500,
  },
  {
    month: "Sept",
    "Project 1": 500,
    "Project 2": 4000,
    "Project 3": 14500,
  },
  {
    month: "Oct",
    "Project 1": 2000,
    "Project 2": 2000,
    "Project 3": 15500,
  },
  {
    month: "Nov",
    "Project 1": 1000,
    "Project 2": 2000,
    "Project 3": 13800,
  },
  {
    month: "Dec",
    "Project 1": 1000,
    "Project 2": 2000,
    "Project 3": 15000,
  },
];

const SalariesData = [
  {
    month: "Jan",
    IT: 1800,
    "Marketing And Sales": 1500,
    Management: 15500,
  },
  {
    month: "Feb",
    IT: 1200,
    "Marketing And Sales": 1800,
    Management: 14200,
  },
  {
    month: "Mar",
    IT: 2000,
    "Marketing And Sales": 2000,
    Management: 12000,
  },
  {
    month: "April",
    IT: 2000,
    "Marketing And Sales": 1000,
    Management: 14800,
  },
  {
    month: "May",
    IT: 500,
    "Marketing And Sales": 1000,
    Management: 13500,
  },
  {
    month: "June",
    IT: 1500,
    "Marketing And Sales": 5000,
    Management: 6800,
  },
  {
    month: "July",
    IT: 500,
    "Marketing And Sales": 1000,
    Management: 15000,
  },
  {
    month: "Aug",
    IT: 5000,
    "Marketing And Sales": 3000,
    Management: 3500,
  },
  {
    month: "Sept",
    IT: 500,
    "Marketing And Sales": 4000,
    Management: 14500,
  },
  {
    month: "Oct",
    IT: 2000,
    "Marketing And Sales": 2000,
    Management: 15500,
  },
  {
    month: "Nov",
    IT: 1000,
    "Marketing And Sales": 2000,
    Management: 13800,
  },
  {
    month: "Dec",
    IT: 1000,
    "Marketing And Sales": 2000,
    Management: 15000,
  },
];

function EmployeesFinancials() {
  return (
    <>
      <div className="flex mt-3 gap-7">
        <div className="mt-4 bg-white w-[500px] text-sm border rounded-md ">
          <p className="m-3 mb-1 font-bold">Revenue</p>
          <BarChart
            width={500}
            height={310}
            data={RevenueData}
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
              ticks={[10000, 12000, 14000, 16000, 18000, 20000]}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="Project 3" stackId="" fill="#1446CD" />
            <Bar dataKey="Project 2" stackId="" fill="#2B26A8" />
            <Bar dataKey="Project 1" stackId="" fill="#1E2587" />
          </BarChart>
        </div>

        <div className="mt-4 bg-white w-[500px] text-sm border rounded-md ">
          <p className="m-3 mb-1 font-bold">Salaries</p>
          <BarChart
            width={500}
            height={310}
            data={SalariesData}
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
              ticks={[10000, 12000, 14000, 16000, 18000, 20000]}
            />
            <Tooltip />
            <Legend />

            <Bar dataKey="Management" stackId="" fill="#EC3215" />
            <Bar dataKey="Marketing And Sales" stackId="" fill="#EC7915" />
            <Bar dataKey="IT" stackId="" fill="#ECAC15" />
          </BarChart>
        </div>
      </div>
    </>
  );
}
export default EmployeesFinancials;
