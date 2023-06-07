import react, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../sharedComponents/ButtonComponent";
const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const Modal = () => {
    return (
      <>
        <div className=" fixed inset-0 w-[1260px] h-[665px] bg-black bg-opacity-25  backdrop-blur-sm   flex justify-center items-center   ">
          <div className="p-2 text-sm bg-gray-100 w-[370px]">
            <div className="flex justify-between text-black">
              <div className="font-bold">Add /Create Leave</div>
              <div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-xl text-black place-self-end"
                >
                  <IoIosCloseCircle />
                </button>
              </div>
            </div>

            <label for="" className="text-x text-[#4B5563]">
              Employee Name
            </label>
            <div>
              <input
                type="text"
                className="border rounded-md w-[350px] mt-1 mb-2 text-x p-1 border-[#A19D9D]"
              ></input>
            </div>

            <label for="" className="text-x text-[#4B5563]">
              From Date
            </label>
            <div>
              <input
                type="date"
                className="border rounded-md w-[350px] mt-1 mb-2 text-x p-1 border-[#A19D9D] text-[#4B5563]"
              ></input>
            </div>

            <label for="" className="text-x text-[#4B5563]">
              To Date
            </label>
            <div>
              <input
                type="date"
                className="border rounded-md w-[350px] mt-1 mb-2 text-x p-1 border-[#A19D9D] text-[#4B5563]"
              ></input>
            </div>

            <label for="number" className="text-x text-[#4B5563]">
              Type
            </label>
            <div className="flex-none ">
              <select className="p-2 text-x rounded-md w-[350px] mb-2 mt-1 text-[#4B5563] border-[#A19D9D]">
                <option className="w-32 text-xs">Select Type</option>
                <option className="w-32 text-xs">Full Day Leave</option>
                <option className="w-32 text-xs">First Half Leave</option>
                <option className="w-32 text-xs">Second Half Leave</option>
              </select>
            </div>

            <label for="number" className="text-x text-[#4B5563]">
              Category
            </label>
            <div className="flex-none ">
              <select className="p-2 text-x rounded-md w-[350px] mb-2 mt-1 text-[#4B5563]">
                <option className="w-32 text-xs">Select Category</option>
                <option className="w-32 text-xs">Medical</option>
                <option className="w-32 text-xs">Privilege</option>
                <option className="w-32 text-xs">Casual</option>
                <option className="w-32 text-xs">Other Leaves (Exam)</option>
              </select>
            </div>

            <label className="text-x text-[#4B5563]">Reason</label>
            <div>
              <input
                type="text"
                className="border rounded-md w-[350px] h-16 mt-1 mb-2 border-[#A19D9D]"
              ></input>
            </div>
            <label className="text-x text-[#4B5563]">Leave With Pay</label>
            <div>
              <input
                type="text"
                className="border rounded-md w-[350px] mt-1 mb-2 text-x p-1 border-[#A19D9D]"
              ></input>
            </div>

            <div className="flex justify-end gap-3 mt-4 mb-2">
              <div>
                <Button
                  onClick={() => setShowModal(false)}
                  borderColor="#1A13CB"
                  textColor="#1A13CB"
                  label="Cancel"
                  border="1px solid black"
                  width={60}
                  padding="5px 5px"
                />
              </div>
              <div>
                <Button
                  backgroundColor="#1A13CB"
                  textColor="white"
                  label="Add"
                  width={60}
                  padding="6px 16px"
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
        label="  Add Devices"
        icon={<AiOutlinePlus />}
      />
      {showModal && <Modal />}
    </>
  );
};

export default Modal;
