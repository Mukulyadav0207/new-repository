import { HiPencilAlt } from "react-icons/hi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
   
    Salary: 15500,
  },
  {
    month: "Feb",
   
    Salary: 14200,
  },
  {
    month: "Mar",
    
    Salary: 12000,
  },
  {
    month: "April",
    
    Salary: 14800,
  },
  {
    month: "May",
  
    Salary: 13500,
  },
  {
    month: "June",
   
    Salary: 6800,
  },
  {
    month: "July",
    
    Salary: 15000,
  },
  {
    month: "Aug",
   
    Salary: 3500,
  },
  {
    month: "Sept",
   
    Salary: 14500,
  },
  {
    month: "Oct",
    
    Salary: 15500,
  },
  {
    month: "Nov",
   
    Salary: 13800,
  },
  {
    month: "Dec",
   
    Salary: 15000,
  },
];







const cards = [
  {
    icon2: HiPencilAlt,
    heading: "Hourly Rate Card",
    data: [
      {
        label: "Developer",
        value: "10 USD/hr",
      },
      {
        label: "Designer",
        value: "08 USD/hr",
      },
      {
        label: "QA",
        value: "12 USD/hr",
      },
      {
        label: "PM",
        value: "07 USD/hr",
      },
    ],
  },
];

function ProjectsFinancials() {
  return (
    <div className="flex">
      <div className="flex-col">
        <div className="bg-white p-3 mt-3 border rounded-md">
          {cards.map((card, index) => (
            <>
              <div
                key={index}
                className="flex justify-between items-center gap-1 font-semibold "
              >
                <div className="flex items-center gap-1 font-semibold ">
                  {card.heading}
                </div>
                <p>
                  <card.icon2 />
                </p>
              </div>
              <div className="bg-[#E9F8F8] p-2 text-x mt-3 border rounded-md space-y-[25px]">
                {card.data.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex justify-between items-center gap-[100px]   "
                  >
                    <p
                      className={`text-[#A59F9F] font-semibold  items-center  
                      `}
                    >
                      {item.label}
                    </p>

                    <p className="text-[#000000] font-semibold  ml-4 ">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>

        <div className="bg-white p-3 mt-3 border rounded-md">
          {cards.map((card, index) => (
            <>
              <div
                key={index}
                className="flex justify-end items-center gap-1 font-semibold "
              >
                <p>
                  <card.icon2 />
                </p>
              </div>
              <div className="bg-[#E9F8F8] p-2 text-x mt-3 border rounded-md space-y-[25px]">
                <p className="flex-col font-semibold ">
                  <p className="text-[#A59F9F]">Total Bid</p>{" "}
                  <p className="text-[#000000]">1.1L INR</p>
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="flex ml-5">
        <div className="flex  gap-4">
          <div className="mt-3 bg-white w-[385px] text-sm border rounded-md ">
            <p className="m-3 mb-1 font-bold">Revenue</p>
            <BarChart
              width={380}
              height={290}
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
              <Bar dataKey="Project 3" stackId="" fill="#0062CC" />
              <Bar dataKey="Project 2" stackId="" fill="#004999" />
              <Bar dataKey="Project 1" stackId="" fill="#003D80" />
            </BarChart>
          </div>

          <div className="mt-3 bg-white w-[385px] text-sm border rounded-md ">
            <p className="m-3 mb-1 font-bold">Salaries</p>
            <BarChart
              width={380}
              height={290}
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

              <Bar dataKey="Salary" stackId="" fill="#DD0716" />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectsFinancials;
