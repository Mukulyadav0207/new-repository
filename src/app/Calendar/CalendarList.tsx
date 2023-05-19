import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaUmbrella } from "react-icons/fa";
import { BsCircleHalf } from "react-icons/bs";
import { FaTshirt } from "react-icons/fa";
import { FaFirstAid } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";
import { RxCircleBackslash } from "react-icons/rx";
import { FaBullhorn } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsFillPersonDashFill } from "react-icons/bs";
import {} from "react-icons/fa";
import Modal from "../departments/DepartmentAdd";

import DetailList from "./CalendarDetailListModal";

function Calendar() {
  return (
    <>
      <div className="flex ">
        <div>
          <h3 className="font-bold ">Leaves</h3>
        </div>

        <div className="flex justify-end flex-grow gap-4 ">
          <div className="relative ml-36 ">
            <input
              className="px-3 py-1 text-sm border border-gray-500 rounded-md"
              type="text"
              placeholder="Search keyword "
            />
            <BsSearch className="absolute -translate-y-1/2 right-1 top-1/2 " />
          </div>
        </div>
      </div>

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
        <table className="w-full mx-auto mt-6 text-xs font-semibold border-collapse table-auto ">
          <thead>
            <tr className="bg-violet-200">
              <th className="px-2 py-3 font-semibold">Sunday</th>
              <th className="px-2 py-3 font-semibold">Monday</th>
              <th className="px-2 py-3 font-semibold">Tuesday</th>
              <th className="px-2 py-3 font-semibold">Wednesday</th>
              <th className="px-2 py-3 font-semibold">Thursday</th>
              <th className="px-2 py-3 font-semibold">Friday</th>
              <th className="px-2 py-3 font-semibold">Saturday</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="px-2 py-2 border"></td>
              <td className="px-2 py-2 font-semibold border">1</td>
              <td className="px-2 py-2 font-semibold border">
                2
                <div className="flex-col items-center w-32 p-1 ml-4 -mt-3 bg-green-200 border-l-4 border-green-500 justify">
                  <div className="flex gap-5">
                    <div className="flex items-center justify-center gap-1 text-xs">
                      <BsCircleHalf />
                      <FaTshirt />
                      10
                    </div>
                    <div className="flex items-center justify-center gap-1 text-xs">
                      <BsFillPersonPlusFill />
                      <RxCircleBackslash />
                      04
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <BsCircleHalf />
                    <FaMedal />
                    02
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <BsCircleFill />
                    <FaTshirt />
                    02
                  </div>
                </div>
              </td>
              <td className="px-2 py-2 font-bold border">3</td>
              <td className="px-2 py-2 font-bold border">4</td>
              <td className="px-2 py-2 font-bold border">
                5
                <DetailList />
              </td>
              <td className="px-2 py-2 font-bold border">6</td>
            </tr>
            <tr>
              <td className="px-2 py-2 font-bold border">7</td>
              <td className="px-2 py-2 font-bold border">8</td>
              <td className="px-2 py-2 font-bold border">9</td>
              <td className="px-2 py-2 font-bold border">10</td>
              <td className="px-2 py-2 font-bold border">
                11
                <div className="flex-col items-center w-32 p-1 ml-4 -mt-3 bg-green-200 border-l-4 border-green-500 justify">
                  <div className="flex gap-5">
                    <div className="flex items-center justify-center gap-1 text-xs">
                      <BsCircleHalf />
                      <FaTshirt />
                      10
                    </div>
                    <div className="flex items-center justify-center gap-1 text-xs">
                      <BsFillPersonPlusFill />
                      <RxCircleBackslash />
                      04
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <BsCircleHalf />
                    <FaTshirt />
                    10
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <BsCircleHalf />
                    <FaTshirt />
                    10
                  </div>
                </div>
              </td>
              <td className="px-2 py-2 font-bold border">12</td>
              <td className="px-2 py-2 font-bold border">13</td>
            </tr>
            <tr>
              <td className="px-2 py-2 font-bold border">
                14
                <div className="flex-col items-center w-32 p-1 ml-4 -mt-3 bg-green-200 border-l-4 border-green-500 justify">
                  <div className="flex gap-5">
                    <div className="flex items-center justify-center gap-1 text-xs">
                      <FaBullhorn />
                      <GiSandsOfTime />
                      Samarth Singh
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <BsFillPersonPlusFill />
                    <FaCheckCircle />
                    Shreya Verma
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <FaFirstAid />
                    <BsCircleFill />
                    Sahil Soni
                  </div>
                </div>
              </td>
              <td className="px-2 py-2 font-bold border">
                15
                <div className="flex items-center justify-center text-3xl text-blue-700 ">
                  <FaUmbrella />
                </div>
              </td>
              <td className="px-2 py-2 font-bold border">16</td>
              <td className="px-2 py-2 font-bold border">
                17
                <div className="flex-col items-center w-32 p-1 ml-4 -mt-3 bg-green-200 border-l-4 border-green-500 justify">
                  <div className="flex gap-5">
                    <div className="flex items-center justify-center gap-1 text-xs">
                      <BsCircleHalf />
                      <FaTshirt />
                      08
                    </div>
                    <div className="flex items-center justify-center gap-1 text-xs">
                      <FaBullhorn />
                      <GiSandsOfTime />
                      01
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="flex items-center justify-center gap-1 text-xs">
                      <BsCircleHalf />
                      <FaTshirt />
                      02
                    </div>
                    <div className="flex items-center justify-center gap-1 text-xs">
                      <BsFillPersonPlusFill />
                      <RxCircleBackslash />
                      02
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <BsCircleHalf />
                    <FaTshirt />
                    02
                  </div>
                </div>
              </td>
              <td className="px-2 py-2 font-bold border">18</td>
              <td className="px-2 py-2 font-bold border">19</td>
              <td className="px-2 py-2 font-bold border">20</td>
            </tr>
            <tr>
              <td className="px-2 py-2 font-bold border">21</td>
              <td className="px-2 py-2 font-bold border">22</td>
              <td className="px-2 py-2 font-bold border">23</td>
              <td className="px-2 py-2 font-bold border">24</td>
              <td className="px-2 py-2 font-bold border">25</td>
              <td className="px-2 py-2 font-bold border">
                26
                <div className="flex-col items-center w-32 p-1 ml-6 -mt-3 bg-green-200 border-l-4 border-green-500">
                  <div className="flex gap-5">
                    <div className="flex items-center justify-center gap-1 text-xs">
                      <BsCircleHalf />
                      <FaTshirt />
                      10
                    </div>
                    <div className="flex items-center justify-center gap-1 text-xs">
                      <BsFillPersonPlusFill />
                      <RxCircleBackslash />
                      04
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <BsCircleHalf />
                    <FaTshirt />
                    10
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <BsCircleHalf />
                    <FaTshirt />
                    10
                  </div>
                </div>
              </td>
              <td className="px-2 py-2 font-bold border">27</td>
            </tr>
            <tr>
              <td className="px-2 py-2 font-bold border">28</td>
              <td className="px-2 py-2 font-bold border">
                29
                <div className="flex-col items-center w-32 p-1 ml-6 -mt-3 bg-green-200 border-l-4 border-green-500">
                  <div className="flex gap-5">
                    <div className="flex items-center justify-center gap-1 text-xs">
                      <BsCircleHalf />
                      <FaTshirt />
                      10
                    </div>
                    <div className="flex items-center justify-center gap-1 text-xs">
                      <BsFillPersonPlusFill />
                      <RxCircleBackslash />
                      04
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <BsCircleHalf />
                    <FaTshirt />
                    10
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <BsCircleHalf />
                    <FaTshirt />
                    10
                  </div>
                </div>
              </td>
              <td className="px-2 py-2 font-bold border">30</td>
              <td className="px-2 py-2 font-bold border">31</td>
              <td className="px-2 py-2 font-bold border"></td>
              <td className="px-2 py-2 font-bold border"></td>
              <td className="px-2 py-2 font-bold border"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Calendar;
