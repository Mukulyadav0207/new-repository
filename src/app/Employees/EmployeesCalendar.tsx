import React, { useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaUmbrella } from "react-icons/fa";
import { BsCircleHalf } from "react-icons/bs";
import { FaTshirt } from "react-icons/fa";
import { FaFirstAid } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import { RxHalf2 } from "react-icons/rx";
import { GiSandsOfTime } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsFillPersonDashFill } from "react-icons/bs";
import {} from "react-icons/fa";
// import Modal from "./modals/AddDepartment";

// import DetailList from "./CalendarDetailList.tsx/DetailList";
import { useSelector, useDispatch } from "react-redux";
import { receiveEmployeesCalendarData } from "../../redux/actions/EmployeesCalendarActions";
import CreateLeave from "./EmployeesCalendarCreateLeaveModal";
import {  useNavigate } from "react-router-dom";




function EmployeesCalendar() {
const navigate = useNavigate();
const calendar = useSelector((state) => state.employeesCalendar.data);
const dispatch = useDispatch(); 



useEffect(() => {
  const calendar = [
    {
      Sunday: "",
      Monday: "1",
      Tuesday: "",
      Wednesday: "3",
      Thursday: "4",
      Friday: "5",
      Satday: "6",
    },
    {
      Sunday: "7",
      Monday: "8",
      Tuesday: "9",
      Wednesday: "10",
      Thursday: "11",
      Friday: "12",
      Satday: "13",
    },
    {
      Sunday: "14",
      Monday: "15",
      Tuesday: "16",
      Wednesday: "17",
      Thursday: "18",
      Friday: "19",
      Satday: "20",
    },
    {
      Sunday: "21",
      Monday: "22",
      Tuesday: "23",
      Wednesday: "24",
      Thursday: "25",
      Friday: "26",
      Satday: "27",
    },
    {
      Sunday: "28",
      Monday: "29",
      Tuesday: "30",
      Wednesday: "31",
      Thursday: "",
      Friday: "",
      Satday: "",
    },
  ];

  dispatch(receiveEmployeesCalendarData(calendar));
}, [dispatch]);







  return (
    <>
      <div className="flex mt-5  gap-[795px] ">
        <div className="font-bold">April,2023</div>
        <div>
          <div className="flex gap-3">
            <div className="">
              <select
                typeof=""
                className="text-gray-400 border border-gray-500 rounded-md "
              >
                <option className="py-2 text-xs ">Select Month </option>
                <option className="py-2 text-xs">January </option>
                <option className="py-2 text-xs">February </option>
                <option className="py-2 text-xs">May </option>
                <option className="py-2 text-xs">June </option>
                <option className="py-2 text-xs">April </option>
                <option className="py-2 text-xs"> July</option>
                <option className="py-2 text-xs">March </option>
                <option className="py-2 text-xs">August </option>
                <option className="py-2 text-xs">September </option>
                <option className="py-2 text-xs">October </option>
                <option className="py-2 text-xs">November </option>
                <option className="py-2 text-xs">December </option>
              </select>
            </div>

            <div>
              <select
                typeof="Select Warranty"
                className="text-gray-400 border border-gray-500 rounded-md"
              >
                <option>2023 </option>
                <option>2022 </option>
                <option>2021 </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div>
        <table className="w-full mx-auto mt-6 text-xs font-semibold border-collapse table-auto h-[420px] ">
          <thead>
            <tr className="bg-[#e4dfec]">
              <th className="px-2 py-3 font-semibold">Sunday</th>
              <th className="px-2 py-3 font-semibold">Monday</th>
              <th className="px-2 py-3 font-semibold">Tuesday</th>
              <th className="px-2 py-3 font-semibold">Wednesday</th>
              <th className="px-2 py-3 font-semibold">Thursday</th>
              <th className="px-2 py-3 font-semibold">Friday</th>
              <th className="px-2 py-3 font-semibold">Saturday</th>
            </tr>
          </thead>
          <tbody className="bg-white align-top">
            {calendar.map((data, index) => (
              <tr className="">
                <td
                  className={`px-2  border w-[160px] ${
                    index === 0 ? "bg-[#E9F8F8]" : ""
                  }   `}
                >
                  {data.Sunday}
                </td>
                <td className="px-2 py- font-semibold border w-[160px] ">
                  {index === 0 ? (
                    <button
                      className="  flex flex-col  focus:outline-none"
                      onClick={() =>
                        navigate("/leaves/allleaves/details/1/general")
                      }
                    >
                      <div>{data.Monday}</div>
                      <div className="mt-6 text-[#FE0012]">
                        <div className="flex items-center pl-3 gap-1 text-xs w-32 p-1 bg-red-200 border-l-4 border-[#FE0012]">
                          <BsCircleHalf />
                          <RxCrossCircled />
                          Privilege
                        </div>
                      </div>
                    </button>
                  ) : (
                    <>
                      <div>{data.Monday}</div>
                      <div className="mt-6 text-[#FE0012]">
                        {index === 0 ? (
                          <div className="flex items-center pl-3 gap-1 text-xs w-32 p-1 bg-red-200 border-l-4 border-[#FE0012]">
                            <BsCircleHalf />
                            <RxCrossCircled />
                            Privilege
                          </div>
                        ) : null}
                      </div>
                    </>
                  )}
                </td>

                <td className={`px-2 py-2 font-semibold border w-[160px] `}>
                  {data.Tuesday}
                  <div className=" text-[#000000] ">
                    {index === 0 ? <CreateLeave /> : null}
                    {index === 3 ? (
                      <div className="flex items-center pl-3 gap-1 text-xs mt-6 w-32 p-1  bg-[#A59F9F] border-l-4 border-[#000000]">
                        <BsCircleFill />
                        <GiSandsOfTime />
                        Casual
                      </div>
                    ) : null}
                  </div>
                </td>
                <td className="px-2 py-2 font-bold border w-[160px]">
                  {data.Wednesday}
                  <div className="mt-6 ">
                    {index === 1 ? (
                      <div className="flex items-center pl-3 gap-1  text-xs w-32 p-1  bg-green-200 border-l-4 border-green-500 ">
                        <RxHalf2 />
                        <FaCheckCircle />
                        Medical
                      </div>
                    ) : null}
                  </div>
                </td>
                <td
                  className={`px-2  border w-[160px] ${
                    index === 4 ? "bg-[#E9F8F8]" : ""
                  }   `}
                >
                  {data.Thursday}
                  <div className="mt-6 text-[#1A13CB] ">
                    {index === 1 ? (
                      <div className="flex items-center pl-3 gap-1 mt-6 text-xs w-32 p-1  border-[#1A13CB] border-l-4  bg-[#E9F8F8]">
                        <FaUmbrella />
                        Holiday
                      </div>
                    ) : null}
                  </div>
                </td>
                <td
                  className={`px-2  border w-[160px] ${
                    index === 4 ? "bg-[#E9F8F8]" : ""
                  }   `}
                >
                  {data.Friday}
                  {/* <DetailList /> */}
                </td>
                <td
                  className={`px-2  border w-[160px] ${
                    index === 4 ? "bg-[#E9F8F8]" : ""
                  }   `}
                >
                  {data.Satday}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default EmployeesCalendar;
