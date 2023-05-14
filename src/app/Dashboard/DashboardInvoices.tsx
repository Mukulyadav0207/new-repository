
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

const features = [
  {
    invoices: "Current Skipped Invoices",
    numberOfTimes: "15",
    icon1: AiFillForward,
    icon2: TbArrowUpRight,
    number: "-5",
  },
  {
    invoices: "Current Draft Invoices",
    numberOfTimes: "08",
    icon1: FaFirstdraft,
    icon2: TbArrowUpRight,
    number: "+08",
  },
  {
    invoices: "Total Sent Invoices",
    numberOfTimes: "10",
    icon1: IoMdPaperPlane,
    icon2: TbArrowUpRight,
    number: "-02",
  },
  {
    invoices: "Average TTL",
    numberOfTimes: "09 Days",
    icon1: RxCounterClockwiseClock,
    icon2: TbArrowUpRight,
    number: "-02",
  },
];



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


function DashboardInvoice() {
  return (
    <>
      <div className="mt-4 ">
        <dl className="grid max-w-xl grid-cols-4 gap-x-40 ">
          {features.map((feature,index) => (
            <div
              key={feature.invoices}
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
                
                  {feature.invoices}
                </div>
              </dt>
              <dd className="font-bold text-center text-black leading-">
                {feature.numberOfTimes}
              </dd>

              <div className="flex items-center justify-start mx-2 mb-3 text-x -ml-7">
                <feature.icon2
                  className={index === 1 ? "text-green-500" : "text-red-500"}
                />
                <span className="text-gray-400">{feature.number}</span>
              </div>
            </div>
          ))}
        </dl>
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
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="month" tick={{ fontSize: 10 }} />
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
export default DashboardInvoice;



// import {
//   ArrowPathIcon,
//   CloudArrowUpIcon,
//   FingerPrintIcon,
//   LockClosedIcon,
// } from "@heroicons/react/24/outline";


//  const features = [
//    {
//      name: "Push to deploy",
//      description:
//        "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
//      icon: CloudArrowUpIcon,
//    },
//    {
//      name: "SSL certificates",
//      description:
//        "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
//      icon: LockClosedIcon,
//    },
//    {
//      name: "Simple queues",
//      description:
//        "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
//      icon: ArrowPathIcon,
//    },
//    {
//      name: "Advanced security",
//      description:
//        "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
//      icon: FingerPrintIcon,
//    },
//  ];

// function FirstUserInterface() {
 

//   return (
//     <>
     

//       <div className="py-24 bg-blue-200 sm:py-32">
//         <div className="mx-auto bg-red-100 max-w-7xl lg:px-8">
//           <div className="max-w-2xl mx-auto bg-green-100 lg:text-center">
//             <h2 className="text-base font-semibold leading-7 text-indigo-600">
//               Deploy faster
//             </h2>
//             <p className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//               Everything you need to deploy your app
//             </p>
//             <p className="mt-6 text-lg leading-8 text-gray-600">
//               Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
//               Suspendisse eget egestas a elementum pulvinar et feugiat blandit
//               at. In mi viverra elit nunc.
//             </p>
//           </div>


          
//           <div className="max-w-2xl mx-auto mt-16 bg-yellow-100 sm:mt-20 lg:mt-24 lg:max-w-4xl">
//             <dl className="grid max-w-xl grid-cols-1 bg-pink-200 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
//               {features.map((feature) => (
//                 <div key={feature.name} className="relative pl-16 bg-orange-100">
//                   <dt className="text-base font-semibold leading-7 text-gray-900">
//                     <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-lg">
//                       <feature.icon
//                         className="w-6 h-6 text-white"
//                         aria-hidden="true"
//                       />
//                     </div>
//                     {feature.name}
//                   </dt>
//                   <dd className="mt-2 text-base leading-7 text-gray-600">
//                     {feature.description}
//                   </dd>
//                 </div>
//               ))}
//             </dl>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default FirstUserInterface;
