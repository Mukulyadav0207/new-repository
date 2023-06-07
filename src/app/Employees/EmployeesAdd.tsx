import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import Button from "../sharedComponents/ButtonComponent";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";




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
                <Button
                  onClick={() => setShowModal(false)}
                  borderColor="#1A13CB"
                  textColor="#1A13CB"
                  label="Cancel"
                  border="1px solid black"
                  width={60}
                  padding="7px 9px"
                  backgroundColor="white"
                />
              </div>
              <div>
                <Button
                  backgroundColor="#1A13CB"
                  textColor="white"
                  label="Add"
                  width={60}
                  padding="8px 18px"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        backgroundColor="#1A13CB"
        textColor="white"
        padding="8px 8px"
        label="  Add Employee"
        icon={<AiOutlinePlus />}
      />
      {showModal && <Modal />}
    </>
  );
};

export default AddEmployees;
