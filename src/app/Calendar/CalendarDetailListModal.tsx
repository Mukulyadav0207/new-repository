import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

import { FaFirstAid } from "react-icons/fa";

import { BsCircleFill } from "react-icons/bs";

import { FaBullhorn } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";










const DetailList = () => {
  const [showModal, setShowModal] = useState(false);

  const MyDetailList = () => {
    return (
      <>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm w-[1260px] h-[665px]">
          <div className="p-4 bg-gray-100 h-[470px] w-[400px] text-sm">
            <div className="flex text-black gap-[220px]">
              <div className="w-32 text-2xl font-bold"> Details List</div>
              <div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-xl text-black place-self-end"
                >
                  <IoIosCloseCircle />
                </button>
              </div>
            </div>

            <p className="mt-3 font-bold"> Icrement Reminder</p>
            <div className="flex gap-2 mt-2 ml-1">
              <p className="font-bold">1.</p>
              <img
                className="object-cover w-6 h-6 border-black rounded-xl"
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <p className="w-48 font-normal "> Pratham Singh</p>
              <button className="px-3 ml-16 text-xs bg-yellow-300 border rounded-lg">
                Pending
              </button>
            </div>

            <div className="flex gap-2 mt-2 ml-1">
              <p className="font-bold">2.</p>
              <img
                className="object-cover w-6 h-6 border-black rounded-xl"
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <p className="w-48 font-normal "> Pratham Singh</p>
              <button className="px-2 ml-16 text-xs bg-green-500 border rounded-lg">
                Completed
              </button>
            </div>

            <div className="flex gap-2 mt-2 ml-1">
              <p className="font-bold">3.</p>
              <img
                className="object-cover w-6 h-6 border-black rounded-xl"
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <p className="font-normal  w-[179px] br-red-300">
                Pratham Singh
              </p>
              <button className="px-1 ml-10 text-xs bg-red-500 border rounded-lg">
                Not Required
              </button>
            </div>

            <p className="mt-3 font-bold "> On boarding Employee Name</p>
            <div className="flex gap-5 ">
              <div className="flex gap-2 mt-2">
                <p className="font-bold">1.</p>
                <img
                  className="object-cover w-6 h-6 border-black rounded-xl"
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <p className="font-normal w-44 "> Pratham Singh</p>
              </div>

              <div className="flex gap-2 mt-2">
                <p className="font-bold">2.</p>
                <img
                  className="object-cover w-6 h-6 border-black rounded-xl"
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <p className="font-normal w-44 "> Pratham Singh</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex gap-2 mt-2">
                <p className="font-bold">3.</p>
                <img
                  className="object-cover w-6 h-6 border-black rounded-xl"
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <p className="font-normal w-44 "> Pratham Singh</p>
              </div>

              <div className="flex gap-2 mt-2">
                <p className="font-bold">4.</p>
                <img
                  className="object-cover w-6 h-6 border-black rounded-xl"
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <p className="font-normal w-44 "> Pratham Singh</p>
              </div>
            </div>

            <p className="mt-3 font-bold">Medical Leave (Employee Name)</p>
            <div className="flex gap-5">
              <div className="flex gap-2 mt-2">
                <p className="font-bold">1.</p>
                <img
                  className="object-cover w-6 h-6 border-black rounded-xl"
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <p className="font-normal w-44 "> Pratham Singh</p>
              </div>

              <div className="flex gap-2 mt-2">
                <p className="font-bold">2.</p>
                <img
                  className="object-cover w-6 h-6 border-black rounded-xl"
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <p className="font-normal w-44 "> Pratham Singh</p>
              </div>
            </div>

            <div className="flex justify-end gap-3 ">
              <div>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-2 mt-16 text-blue-700 border border-blue-700 rounded-md w-50"
                >
                  Cancel
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
        <div className="flex-col items-center w-32 p-1 ml-4 -mt-3 bg-green-200 border-l-4 border-green-500 justify">
          <div className="flex gap-5">
            <div className="flex items-center justify-center gap-1 text-xs">
              <FaBullhorn />
              <GiSandsOfTime />
              03
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <BsFillPersonPlusFill />
            <FaCheckCircle />
            04
          </div>
          <div className="flex items-center gap-1 text-xs">
            <FaFirstAid />
            <BsCircleFill />
            02
          </div>
        </div>
      </button>
      {showModal && <MyDetailList />}
    </>
  );
};

export default DetailList;
