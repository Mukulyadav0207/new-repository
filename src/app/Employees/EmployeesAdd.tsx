import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const AddEmployees = () => {
  const [showModal, setShowModal] = useState(false);

  const Modal = () => {
    return (
      <>
        <div className=" fixed inset-0 w-[1260px] h-[665px] bg-black bg-opacity-25  backdrop-blur-sm   flex justify-center items-center   ">
          <div className="p-2 bg-gray-100 ">
            <div className="flex text-black ">
              <div className="font-bold"> Add Employee</div>
              <div className="flex justify-end flex-grow">
                <button
                  onClick={() => setShowModal(false)}
                  className="text-xl text-black "
                >
                  <IoIosCloseCircle />
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              <div>
                <label className="text-sm">First Name</label>
                <div>
                  <input
                    type="text"
                    className="border rounded-md w-[300px] mt-2 mb-2 py-1"
                  ></input>
                </div>
              </div>
              <div>
                <label className="text-sm">Last Name</label>
                <div>
                  <input
                    type="text"
                    className="border rounded-md w-[300px]  mt-2 mb-2 py-1"
                  ></input>
                </div>
              </div>
            </div>
            <label className="text-sm">Personal Email</label>
            <div>
              <input
                type="email"
                className="w-full py-1 mt-2 mb-2 border rounded-md"
              ></input>
            </div>

            <label className="text-sm">Company Email</label>
            <div>
              <input
                type="email"
                className="w-full py-1 mt-2 mb-2 border rounded-md"
              ></input>
            </div>

            <div className="flex gap-3">
              <div>
                <label className="text-sm">Phone Number</label>
                <div>
                  <input
                    type="number"
                    className="border rounded-md w-[300px] mt-2 mb-2 py-1"
                  ></input>
                </div>
              </div>
              <div>
                <label className="text-sm">Gender</label>
                <div>
                  <input
                    type="text"
                    className="border rounded-md w-[300px] mt-2 mb-2 py-1"
                  ></input>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div>
                <label className="text-sm">Joining Date</label>
                <div>
                  <input
                    type="date"
                    className="border rounded-md w-[300px] mt-2 mb-2 py-1"
                  ></input>
                </div>
              </div>
              <div>
                <label className="text-sm">Rollover Date</label>
                <div>
                  <input
                    type="date"
                    className="border rounded-md w-[300px] py-1 mt-2 mb-2"
                  ></input>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div>
                <label className="text-sm">Department</label>
                <div>
                  <select className="w-[300px] py-1 mt-1 mb-2 border border-gray-400 rounded-md text-x">
                    <option>Select Department</option>
                    <option>IT</option>
                    <option>Management</option>
                    <option>Marketing And Sales</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm">Role</label>
                <div>
                  <select className="w-[300px] py-1 mt-1 mb-2 border border-gray-400 rounded-md text-x">
                    <option>Select Role</option>
                    <option>Full Time</option>
                    <option>Intern</option>
                    <option>Contractor</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <div>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-2 text-blue-700 border border-blue-700 rounded-md w-50"
                >
                  Cancel
                </button>
              </div>
              <div>
                <button className="px-2 text-white bg-blue-700 border rounded-md w-50">
                  Add
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
      <button
        onClick={() => setShowModal(true)}
        className="px-2 py-1 text-white bg-[#1A13CB] font-medium border rounded-md"
      >
        + Add Employee
      </button>
      {showModal && <Modal />}
    </>
  );
};

export default AddEmployees;
