import {FaMoneyBillWave  } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const salaryData = [
  {
    heading: "Current Salary",
    icon1: FaMoneyBillWave,
    icon2: FaEyeSlash,
    icon3: FaEdit,
    button: "Draft/Approved",
    distributedSalary: [
      {
        Monthly: "XXX INR",
        Basic: "XXX INR",
        "Dearness Allowance": "XXX INR",
        "House Rent Allowance": "XXX INR",
        "Special Allowance": "XXX INR",
      },
      {
        Annual: "XXX INR",
        "Fixed Bonus": "XXX INR",
        "Variable Bonus": "XXX INR",
        "Effective date": "10/12/2022",
      },
    ],
  },
  {
    heading: "Upcoming Salary",
    icon1: FaMoneyBillWave,
    icon2: FaEyeSlash,
    icon3: FaEdit,
    button: "Draft/Approved",
    distributedSalary: [
      {
        Monthly: "XXX INR",
        Basic: "XXX INR",
        "Dearness Allowance": "XXX INR",
        "House Rent Allowance": "XXX INR",
        "Special Allowance": "XXX INR",
      },
      {
        Annual: "XXX INR",
        "Fixed Bonus": "XXX INR",
        "Variable Bonus": "XXX INR",
        "Effective date": "10/12/2022",
      },
    ],
  },
];

const salaryData2 = [
  {
    icon: FaEyeSlash,

    distributedSalary: [
      {
        Monthly: "XXX INR",
        Basic: "XXX INR",
        "Dearness Allowance": "XXX INR",
        "House Rent Allowance": "XXX INR",
        "Special Allowance": "XXX INR",
      },
      {
        Annual: "XXX INR",
        "Fixed Bonus": "XXX INR",
        "Variable Bonus": "XXX INR",
        "Leave Encashment": "XXX INR",
        "Effective Date": "10/12/2022",
        "End Date": "15/01/2023",
      },
    ],
  },
];




const salaryData3 = [
  {
    heading: "Monthly Stiped",
    icon: FaEyeSlash,    
    distributedSalary: [
      {
        "Monthly Stipped": "XXX INR",
        
        "Effective Date": "10/12/2021",
        "End Date": "15/01/2023",
        
      },
         ],
  },
 
];

function EmployeesSalary() {





  return (
    <>
      <div className="  flex gap-4  mt-4 text-x">
        {salaryData.map((salary, index) => (
          <div
            key={index}
            className={`bg-white flex-col gap-4 border rounded-md p-4 w-[500px] h-[225px] `}
          >
            <div className=" flex justify-between items-center  font-bold text-sm">
              <div className="flex items-center gap-1">
                <salary.icon1 />
                <p>{salary.heading}</p>
              </div>
              <div className="flex gap-1 items-center">
                <salary.icon2 />
                <salary.icon3 />
                {index === 1 ? (
                  <button className="border rounded-full bg-[#00d100] px-2 text-white">
                    {salary.button}
                  </button>
                ) : null}
              </div>
            </div>

            <div key={index} className=" flex  mt-4 gap-4">
              {salary.distributedSalary.map((item, index) => (
                <div
                  key={index}
                  className={`bg-[#E9F8F8] flex-col  mt-4 p-2 border rounded-md w-[225px] h-[140px] space-y-2 `}
                >
                  {Object.entries(item).map(([key, value]) => (
                    <p key={key} className={`flex justify-between`}>
                      <span className="text-[#4B5563] font-semibold h-fit">
                        {key}
                      </span>
                      <span className="text-[#000000] font-semibold w-[px] h-fit">
                        {value}
                      </span>
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="font-bold mt-3 "> Past Salary</p>
      <div className="flex gap-2">
        {salaryData2.map((salary, index) => (
          <div
            key={index}
            className="bg-white flex-col gap-4 border rounded-md p-4 w-[500px] h-[190px] mt-3"
          >
            <div className=" flex justify-end items-center   text-x ">
              <salary.icon />
            </div>

            <div key={index} className=" flex  mt- gap-4 text-x">
              {salary.distributedSalary.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#E9F8F8] flex-col  mt-2 p-2 border rounded-md w-[225px] h-[140px] space-y-2"
                >
                  {Object.entries(item).map(([key, value]) => (
                    <p key={key} className="flex justify-between">
                      <span className="text-[#4B5563] font-medium h-fit">
                        {key}
                      </span>
                      <span className="text-[#000000] font-semibold w-[px] h-fit">
                        {value}
                      </span>
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}

        {salaryData3.map((salary, index) => (
          <div
            key={index}
            className={`bg-white flex-col ml-2 border rounded-md p-4 w-[230px] h-[190px] mt-3 `}
          >
            <div className=" flex justify-between items-center  font-bold text-sm">
              <div className="flex items-center gap-1">
               
                <p>{salary.heading}</p>
              </div>
              <div className="flex gap-1 items-center">
                <salary.icon />
             
               
              </div>
            </div>

            <div key={index} className=" flex  mt-2 gap-4">
              {salary.distributedSalary.map((item, index) => (
                <div
                  key={index}
                  className={`bg-[#E9F8F8] flex-col  mt-2 p-2 border rounded-md w-[225px] h-[120px] space-y-2 text-x `}
                >
                  {Object.entries(item).map(([key, value]) => (
                    <p key={key} className={`flex justify-between`}>
                      <span className="text-[#4B5563] font-semibold h-fit">
                        {key}
                      </span>
                      <span className="text-[#000000] font-semibold w-[px] h-fit">
                        {value}
                      </span>
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
  
  
  
  
  
}
export default EmployeesSalary;
