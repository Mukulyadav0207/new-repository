
import { RxCounterClockwiseClock } from "react-icons/rx";
import { TbArrowUpRight } from "react-icons/tb";
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
import { AiFillForward } from "react-icons/ai";
import { FaFirstdraft } from "react-icons/fa";
import { IoMdPaperPlane } from "react-icons/io";




 const LeavesData = [
   {
     month: "Jan",
     "Skipped Invoice": 5,
     "Draft Invoice": 3,
     "Sent Invoice": 11,
   },
   {
     month: "Feb",
     "Skipped Invoice": 4,
     "Draft Invoice": 5,
     "Sent Invoice": 13,
   },
   {
     month: "Mar",
     "Skipped Invoice": 5,
     "Draft Invoice": 5,
     "Sent Invoice": 5,
   },
   {
     month: "April",
     "Skipped Invoice": 4,
     "Draft Invoice": 2,
     "Sent Invoice": 11,
   },
   {
     month: "May",
     "Skipped Invoice": 2,
     "Draft Invoice": 2,
     "Sent Invoice": 7,
   },
   {
     month: "June",
     "Skipped Invoice": 1,
     "Draft Invoice": 3,
     "Sent Invoice": 19,
   },
   {
     month: "July",
     "Skipped Invoice": 2,
     "Draft Invoice": 3,
     "Sent Invoice": 13,
   },
   {
     month: "Aug",
     "Skipped Invoice": 2,
     "Draft Invoice": 8,
     "Sent Invoice": 3,
   },
   {
     month: "Sept",
     "Skipped Invoice": 2,
     "Draft Invoice": 10,
     "Sent Invoice": 11,
   },
   {
     month: "Oct",
     "Skipped Invoice": 4,
     "Draft Invoice": 4,
     "Sent Invoice": 14,
   },
   {
     month: "Nov",
     "Skipped Invoice": 1,
     "Draft Invoice": 2,
     "Sent Invoice": 9,
   },
   {
     month: "Dec",
     "Skipped Invoice": 2,
     "Draft Invoice": 3,
     "Sent Invoice": 13,
   },
 ];


function Invoice() {
  return (
    <>
      <div className="flex gap-4">
        <div className="flex gap-3 p-2 mt-3 bg-white border rounded-lg w-fit">
          <div className="flex-col space-y-4">
            <div className="flex items-center justify-center p-2 ml-2 text-blue-600 bg-indigo-100 border rounded-lg w-fit">
              <AiFillForward />
            </div>
            <div className="flex items-center justify-center ">
              <TbArrowUpRight className="text-red-500" />

              <p className="text-gray-400">-5</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-x">Current Skipped Invoices</p>
            <p className="text-2xl font-semibold ">15</p>
            <p className="text-gray-400 text-x"></p>
          </div>
        </div>

        <div className="flex gap-3 p-2 mt-3 bg-white border rounded-lg w-fit">
          <div className="flex-col space-y-4">
            <div className="flex items-center justify-center p-2 ml-2 text-blue-600 bg-indigo-100 border rounded-lg w-fit">
              <FaFirstdraft />
            </div>
            <div className="flex items-center justify-center ">
              <TbArrowUpRight className="text-green-500" />

              <p className="text-gray-400">+08</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-x">Current Draft Invoices</p>
            <p className="text-2xl font-semibold ">08</p>
            <p className="text-gray-400 text-x"></p>
          </div>
        </div>
        <div className="flex gap-3 p-2 mt-3 bg-white border rounded-lg w-fit">
          <div className="flex-col space-y-4">
            <div className="flex items-center justify-center p-2 ml-2 text-blue-600 bg-indigo-100 border rounded-lg w-fit">
              <IoMdPaperPlane />
            </div>
            <div className="flex items-center justify-center ">
              <TbArrowUpRight className="text-red-500" />

              <p className="text-gray-400">-02</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-x">Total Sent Invoices</p>
            <p className="text-2xl font-semibold ">10</p>
            <p className="text-gray-400 text-x"></p>
          </div>
        </div>
        <div className="flex gap-3 p-2 mt-3 bg-white border rounded-lg w-fit">
          <div className="flex-col space-y-4">
            <div className="flex items-center justify-center p-2 ml-2 text-blue-600 bg-indigo-100 border rounded-lg w-fit">
              <RxCounterClockwiseClock />
            </div>
            <div className="flex items-center justify-center ">
              <TbArrowUpRight className="text-red-500" />

              <p className="text-gray-400">-02</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-x">Average TTL</p>
            <p className="text-2xl font-semibold ">09 Days</p>
            <p className="text-gray-400 text-x"></p>
          </div>
        </div>
      </div>

      <div className="flex mt-3 gap-7">
        <div className="mt-4 bg-white w-[500px] text-sm border rounded-md ">
          <p className="m-3 mb-1 font-bold">Late Invoices</p>
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
            <CartesianGrid
              strokeDasharray="5 5"
           
            />
            <XAxis dataKey="month" tick={{ fontSize: 10 }}  />
            <YAxis tick={{ fontSize: 10 }} ticks={[0, 5, 10, 15, 20, 25]} />
            <Tooltip />
            <Legend iconSize={15} />
            <Bar dataKey="Sent Invoice" stackId="" fill="#1446CD" />
            <Bar dataKey="Draft Invoice" stackId="" fill="#2B26A8" />
            <Bar dataKey="Skipped Invoice" stackId="" fill="#282281" />
          </BarChart>
        </div>
      </div>
    </>
  );
}
export default Invoice;
