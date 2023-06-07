import React from "react";
import { BsLaptop } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { BsExclamationCircle } from "react-icons/bs";
import { BiXCircle } from "react-icons/bi";
import { FiCheckCircle } from "react-icons/fi";
import AddImage from "./DevicesAddImagesModal";
import AddNotes from "react-icons/fa";
import AddNote from "./DevicesAddNotesModal";
import { AiFillEye } from "react-icons/ai";
import DumbChip from "../sharedComponents/ChipComponent";
import { TbQuestionMark } from "react-icons/tb";
import AssignDevice from "./DevicesAssignDeviceModal";
import EditDevice from "./DevicesEditEmployeeModal";
import Warranty from "./DevicesEditWarranty";
import ModelName from "./DevicesEditModelModal";
import { Routes,Route, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import ModelDetails from "./DevicesModelDetails";



const data1 = [
  {
    title1: "Model Name",
    icon1: BsLaptop,
    icon2: ModelName,
    icon3: AiFillEye,
    data2: [
      {
        Brand: "abc",
        "Model Number": "XXXXXXXXX",
        "Serail Number": "XXXXXXX",
        Status: "",
      },
    ],
  },
  {
    title1: "Employee Name",
    title3: "Current Assignee",
    icon1: BsExclamationCircle,
    icon2: EditDevice,
    data2: [
      {
        Department: "IT",
        "Assigned On": "01/02/2020",
      },
    ],
  },
  {
    title1: "[In Force] ",
    title2: " Warranty",
    icon1: FiCheckCircle,
    icon2: Warranty,
    data2: [
      {
        "Expired On": "01/02/2026",
        Type: "Limited Warranty/ADP",
      },
    ],
  },
  {
    title1: " [Expired]",
    title2: "Warranty",
    icon1: BiXCircle,
    icon2: Warranty,
    data2: [
      {
        "Expired On": "01/02/2026",
        Type: "Limited Warranty/ADP",
      },
    ],
  },

  {
    title: "Unassigned Device",
    icon2: TbQuestionMark,
    icon1: AssignDevice,
  },
];










function General() {
const currentPath = location.pathname;

  return (
    <>
     
      
          <div className="flex gap-x-[15px] mt-3 bg-red-300s">
            {data1.map((data, index) => (
              <div className="mt-2 bg-white rounded-md p-1 w-[200px] h-[170px] text-xs ">
                {index === 4 ? (
                  <div>
                    <div className="flex items-center justify-between m-2 ">
                      <p className="font-extrabold">{data.title}</p>{" "}
                      <data.icon1 />
                    </div>
                    <div className="text-[#4B5563]   m-2 flex justify-center items-center text-9xl">
                      <data.icon2 />
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-start justify-end mt-2 mb-1 gap-2 ">
                      <div className=" flex flex-col items-center justify-center  gap-y-1 w-[120px]">
                        {index === 1 ? (
                          <div className=" flex -space-x-1.5 overflow-hidden">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU"
                              alt=""
                              className=" object-cover inline-block h-9 w-9 rounded-full ring-1 ring-gray-500"
                            />
                          </div>
                        ) : (
                          <data.icon1
                            className={`text-4xl  ${
                              index === 2
                                ? "text-[#00D100]"
                                : index === 3
                                ? " text-[#FE0012]"
                                : ""
                            }`}
                          />
                        )}

                        <div className="flex font-bold ">
                          <p className=" text-[#A59F9F]">{data.title2}</p>
                          <p className="text-[#413F3F]">{data.title1}</p>
                        </div>
                      </div>

                      <div className="flex-col mr-2   space-x-1  items-center ">
                        <button className=" hover:text-black">
                          {index === 0 ? (
                            <Link to="modelDetails">
                              <data.icon3 />
                            </Link>
                          ) : null}
                        </button>
                        <button className=" ">
                          <data.icon2 />
                        </button>
                      </div>
                    </div>
                    {data.data2.map((item, index) => (
                      <div
                        key={index}
                        className={`flex flex-col p-2 pt-1 m-1 rounded-md h-[90px] w-[185px] bg-[#E9F8F8]  ${
                          index === 1 ||
                          index === 2 ||
                          index === 3 ||
                          index === 4
                            ? "gap-y-"
                            : "gap-y-1"
                        }`}
                      >
                        <p>{data.title3}</p>
                        {Object.entries(item).map(([key, value]) => {
                          return (
                            <p key={key} className="flex justify-between">
                              <p className="text-[#A59F9F]"> {key}</p>

                              {index === 2 ? (
                                <DumbChip
                                  backgroundColor="#00D100"
                                  label="Function"
                                  width={55}
                                  size="small"
                                  fontSize={8}
                                  textColor="white"
                                />
                              ) : (
                                <p className="text-[#4B5563]">{value}</p>
                              )}
                            </p>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex mt-4  justify-between ">
            <div className="font-bold">Past Owners</div>
            <div className="flex gap-2">
              <div>
                <AddImage />
              </div>
              <div>
                <AddNote />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <table class="table-fixed w-full">
              <thead class="bg-gray-100">
                <tr class="flex flex-wrap w-full justify-center items-center">
                  <th class="w-1/3 px-4 py-2 text-sm text-center flex items-center justify-center">
                    Owner Name
                  </th>
                  <th class="w-1/3 px-4 py-2 text-sm text-center flex items-center justify-center">
                    From Date
                  </th>
                  <th class="w-1/3 px-4 py-2 text-sm text-center flex items-center justify-center">
                    To Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white flex flex-wrap w-full justify-center items-center border-b-2 border-gray-100">
                  <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                    Abc
                  </td>
                  <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                    2022-01-01
                  </td>
                  <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                    2022-01-31
                  </td>
                </tr>
                <tr class="bg-white flex flex-wrap w-full justify-center items-center border-b-2 border-gray-100">
                  <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                    Abc
                  </td>
                  <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                    2022-02-01
                  </td>
                  <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                    2022-02-28
                  </td>
                </tr>
                <tr class="bg-white flex flex-wrap w-full justify-center items-center border-b-2 border-gray-100">
                  <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                    Abc
                  </td>
                  <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                    2022-03-01
                  </td>
                  <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                    2022-03-31
                  </td>
                </tr>
                <tr class=" bg-white flex flex-wrap w-full justify-center items-center border-b-2 border-gray-100">
                  <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                    Abc
                  </td>
                  <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                    2022-04-01
                  </td>
                  <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                    2022-04-30
                  </td>
                </tr>
                <tr class="bg-white flex flex-wrap w-full justify-center items-center border-b-2 border-zinc-100">
                  <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                    Abc
                  </td>
                  <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                    2022-04-01
                  </td>
                  <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                    2022-04-30
                  </td>
                </tr>
                <tr class="bg-white flex flex-wrap w-full justify-center items-center border-b-2 ">
                  <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                    Abc
                  </td>
                  <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                    2022-04-01
                  </td>
                  <td class="w-1/3 px-4 py-1 text-sm text-center flex items-center justify-center">
                    2022-04-30
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    

      <Routes>
        <Route path="modelDetails" element={<ModelDetails />}></Route>
      </Routes>
    </>
  );
}
export default General;
