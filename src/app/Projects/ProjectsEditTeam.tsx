import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { FiXCircle } from "react-icons/fi";
import AddEmployeeModal from "./ProjectsAddEmployeeModal";
import AddInternModal from "./ProjectsAddInternModal";

const EditTeamModal = () => {
  const [showModal, setShowModal] = useState(false);

  const MyModal = () => {
    return (
      <>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm w-[1260px] h-[665px]">
          <div className="p-3 bg-gray-100 h-[470px] w-[px] text-x border rounded-md">
            <div className="flex text-black justify-between">
              <div className="font-bold text-sm text-[#302F2F]">
                Edit/ Update Team
              </div>
              <div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-xl text-black "
                >
                  <IoIosCloseCircle />
                </button>
              </div>
            </div>
            <div className="flex  gap-3 mt-2 items-center">
              <label className="text-left text-[#4B5563] w-[126px]">
                Account Start Date
              </label>

              <input
                type="text"
                value="10/08/2021"
                className="border rounded-md w-[570px] mt-1 mb-2 py-1 px-2 border-[#4B5563] font-semibold"
              ></input>
            </div>

            <div className="flex  gap-3  items-center">
              <label className="text-left text-[#4B5563]  w-[126px]">
                Reference Name
              </label>

              <input
                type="text"
                value="Satish Pandey"
                className="border rounded-md w-[570px] mt-1 mb-2 py-1 px-2 border-[#4B5563] font-semibold"
              ></input>
            </div>

            <div className=" flex-col items-center border rounded-md p-2 bg-[#E9E8F9] h-[190px]">
              <div className="flex">
                <div className="flex-col flex items-start">
                  <p> Team Lead</p>
                  <button className="flex items-center py-1 px-2 rounded-md border border-[#707070] bg-[#D5D5D5] gap-1 pr-3">
                    <img
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                      alt=""
                      className="relative z-30 inline-block h-5 w-5 rounded-full ring-1 ring-gray-200 object-cover"
                    />
                    <p>Pratham Singh</p>
                  </button>
                </div>

                <div className="flex-col flex items-start ml-7">
                  <p>Full Time Employee</p>
                  <div className="flex gap-2   ">
                    <div className="flex h-[43px]  ">
                      <div className="border rounded-l-md p-1  border-[#707070] bg-white w-[110px]  ">
                        <div className="flex items-center gap-1 justify-center -mt-1">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"
                            alt=""
                            className="relative z-10 object-cover inline-block h-3 w-3 rounded-full ring-1 ring-gray-200"
                          />
                          <div className="flex-col flex items-start ">
                            <p>Sagar Singh</p>
                            <select className=" rounded-sm  py-[1px]  px-1 text-x bg-[#E9F8F8]">
                              <option> 4Hr/Day</option>
                              <option> 5Hr/Day</option>
                              <option> 6Hr/Day</option>
                              <option> 8Hr/Day</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className=" flex items-center border rounded-r-md p-2 border-[#707070] bg-white ">
                        <FiXCircle className="text-[#FE0012] text-lg " />
                      </div>
                    </div>
                    <div className="flex h-[43px]  ">
                      <div className="border rounded-l-md p-1  border-[#707070] bg-white w-[110px]  ">
                        <div className="flex items-center gap-1 justify-center -mt-1">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"
                            alt=""
                            className="relative z-10 object-cover inline-block h-3 w-3 rounded-full ring-1 ring-gray-200"
                          />
                          <div className="flex-col flex items-start ">
                            <p>Sagar Singh</p>
                            <select className="rounded-sm  py-[1px] px-1  text-x bg-[#E9F8F8]">
                              <option> 4Hr/Day</option>
                              <option> 5Hr/Day</option>
                              <option> 6Hr/Day</option>
                              <option> 8Hr/Day</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className=" flex items-center border rounded-r-md p-2 border-[#707070] bg-white ">
                        <FiXCircle className="text-[#FE0012] text-lg " />
                      </div>
                    </div>
                    <div>
                      <AddEmployeeModal />
                    </div>
                  </div>
                  <p className="mt-3">Interns</p>
                  <div className="flex gap-2   ">
                    <div className="flex h-[43px]  ">
                      <div className="border rounded-l-md p-1  border-[#707070] bg-white w-[110px]  ">
                        <div className="flex items-center gap-1 justify-center -mt-1">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"
                            alt=""
                            className="relative z-10 object-cover inline-block h-3 w-3 rounded-full ring-1 ring-gray-200"
                          />
                          <div className="flex-col flex items-start ">
                            <p>Sagar Singh</p>
                            <select className="rounded-sm  py-[1px] px-1  text-x bg-[#E9F8F8]">
                              <option> 4Hr/Day</option>
                              <option> 5Hr/Day</option>
                              <option> 6Hr/Day</option>
                              <option> 8Hr/Day</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className=" flex items-center border rounded-r-md p-2 border-[#707070] bg-white ">
                        <FiXCircle className="text-[#FE0012] text-lg" />
                      </div>
                    </div>
                    <div className="flex h-[43px]  ">
                      <div className="border rounded-l-md p-1  border-[#707070] bg-white w-[110px]  ">
                        <div className="flex items-center gap-1 justify-center -mt-1">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"
                            alt=""
                            className="relative z-10 object-cover inline-block h-3 w-3 rounded-full ring-1 ring-gray-200"
                          />
                          <div className="flex-col flex items-start ">
                            <p>Sagar Singh</p>
                            <select className="rounded-sm  py-[1px] px-1  text-x bg-[#E9F8F8]">
                              <option> 4Hr/Day</option>
                              <option> 5Hr/Day</option>
                              <option> 6Hr/Day</option>
                              <option> 8Hr/Day</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className=" flex items-center border rounded-r-md p-2 border-[#707070] bg-white ">
                        <FiXCircle className="text-[#FE0012] text-lg " />
                      </div>
                    </div>
                    <div className="flex h-[43px]  ">
                      <div className="border rounded-l-md p-1  border-[#707070] bg-white w-[110px]  ">
                        <div className="flex items-center gap-1 justify-center -mt-1">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"
                            alt=""
                            className="relative z-10 object-cover inline-block h-3 w-3 rounded-full ring-1 ring-gray-200"
                          />
                          <div className="flex-col flex items-start ">
                            <p>Sagar Singh</p>
                            <select className="rounded-sm  py-[1px] px-1  text-x bg-[#E9F8F8]">
                              <option> 4Hr/Day</option>
                              <option> 5Hr/Day</option>
                              <option> 6Hr/Day</option>
                              <option> 8Hr/Day</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className=" flex items-center border rounded-r-md p-2 border-[#707070] bg-white ">
                        <FiXCircle className="text-[#FE0012] text-lg " />
                      </div>
                    </div>
                    <div>
                      <AddInternModal />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex"></div>
            </div>

            <div className="flex justify-end gap-3 mr-1 items-end h-[120px] ">
              <div>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-3 py-1 text-[#1A13CB] border border-[#1A13CB] rounded-md w-50"
                >
                  Cancel
                </button>
              </div>
              <div>
                <button className="px-4 py-1 text-white bg-[#1A13CB] border rounded-md w-50 ">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <button onClick={() => setShowModal(true)} className="">
        <button>
          <FaEdit className="text-sm" />
        </button>
      </button>
      {showModal && <MyModal />}
    </>
  );
};

export default EditTeamModal;
