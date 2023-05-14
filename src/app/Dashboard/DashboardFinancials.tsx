import { AiTwotoneStar } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { } from "react-icons/ai";
import {
  BarChart,
  Bar,

  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,

} from "recharts";






const features = [
  {
    title: "Maximum Revenue This Month",
    revenue: "ABC",
    icon1: AiTwotoneStar,
    inr: " 1.1L INR ",
    icon2: BsBoxArrowUpRight,
  },
  {
    title: "Maximum Revenue This Quarter",
    revenue: "XYZ",
    icon1: AiTwotoneStar,
    icon2: BsBoxArrowUpRight,
    inr: "11L INR",
  },
  {
    title: "Maximum Revenue This Half",
    revenue: "ABC",
    icon1: AiTwotoneStar,
    icon2: BsBoxArrowUpRight,
    inr: "11L INR  ",
  },
  {
    title: "Maximum Revenue This Year",
    revenue: "XYZ",
    icon1: AiTwotoneStar,
    icon2: BsBoxArrowUpRight,
    inr: "1.12Cr INR",
  },
];






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
    "Project 1":500,
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







function DashboardFinancials() {
  return (
    <>
      <div className="mt-4 ">
        <dl className="grid max-w-xl grid-cols-5 gap-x-48 ">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative bg-white border rounded-lg pl-9 w-[160px]"
            >
              <dt className="mt-3 text-gray-900 mb- text-x">
                <div className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-md left-2 ">
                  <feature.icon1
                    className="w-4 h-4 text-[#1A13CB] "
                    aria-hidden="true"
                  />
                </div>
                <div className="font-semibold text-center text-gray-600 ">
                  {feature.title}
                </div>
              </dt>
              <dd className="font-bold text-center text-black leading-">
                {feature.revenue}
              </dd>

              <div className="flex items-center justify-between mx-2 mb-3 font-bold text-x -ml-7">
                <p >{feature.inr}</p>
                <feature.icon2 className="" />
              </div>
            </div>
          ))}
        </dl>
      </div>

      {/* <div className="flex gap-4">
        <div className="flex-col gap-1 p-2 mt-3 bg-white border rounded-lg w-[170px]">
          <div className="flex gap-5">
            <div className="flex-col space-y-4">
              <div className="flex items-center justify-center p-2 text-blue-600 bg-indigo-100 border rounded-lg ml- w-fit">
                <AiTwotoneStar />
              </div>
            </div>

            <div className="flex flex-col items-center ">
              <p className="text-x">Max. Revenue This</p>
              <p className=" text-x">Month</p>
              <p className="text-xl font-semibold ">ABC</p>
            </div>
          </div>
          <div className="flex items-center gap-20 text-sm font-bold justify-">
            <p className="">1.1L INR</p>
            <BsBoxArrowUpRight className="font-bold text-black" />
          </div>
        </div>

        <div className="flex-col gap-1 p-2 mt-3 bg-white border rounded-lg w-[170px]">
          <div className="flex gap-5">
            <div className="flex-col space-y-4">
              <div className="flex items-center justify-center p-2 text-blue-600 bg-indigo-100 border rounded-lg ml- w-fit">
                <AiTwotoneStar />
              </div>
            </div>

            <div className="flex flex-col items-center ">
              <p className="text-x">Max. Revenue This</p>
              <p className=" text-x">Quarter</p>
              <p className="text-xl font-semibold ">XYZ</p>
            </div>
          </div>
          <div className="flex items-center gap-20 text-sm font-bold justify-">
            <p className="">11L INR</p>
            <BsBoxArrowUpRight className="font-bold text-black" />
          </div>
        </div>

        <div className="flex-col gap-1 p-2 mt-3 bg-white border rounded-lg w-[170px]">
          <div className="flex gap-5">
            <div className="flex-col space-y-4">
              <div className="flex items-center justify-center p-2 text-blue-600 bg-indigo-100 border rounded-lg ml- w-fit">
                <AiTwotoneStar />
              </div>
            </div>

            <div className="flex flex-col items-center ">
              <p className="text-x">Max. Revenue This</p>
              <p className=" text-x">Half</p>
              <p className="text-xl font-semibold ">ABC</p>
            </div>
          </div>
          <div className="flex items-center gap-20 text-sm font-bold justify-">
            <p className="">11L INR</p>
            <BsBoxArrowUpRight className="font-bold text-black" />
          </div>
        </div>

        <div className="flex-col gap-1 p-2 mt-3 bg-white border rounded-lg w-[185px]">
          <div className="flex gap-5">
            <div className="flex-col space-y-4">
              <div className="flex items-center justify-center p-2 text-blue-600 bg-indigo-100 border rounded-lg ml- w-fit">
                <AiTwotoneStar />
              </div>
            </div>

            <div className="flex flex-col items-center ">
              <p className="text-x">Max. Revenue This</p>
              <p className=" text-x">Year</p>
              <p className="text-xl font-semibold ">XYZ</p>
            </div>
          </div>
          <div className="flex items-center gap-20 text-sm font-bold justify-">
            <p className="">1.12Cr INR</p>
            <BsBoxArrowUpRight className="font-bold text-black" />
          </div>
        </div>
      </div> */}

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
export default DashboardFinancials;

 