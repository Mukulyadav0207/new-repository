import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { GrFormAdd } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../sharedComponents/ButtonComponent";
import Input from "../sharedComponents/InputComponent";
import { FaStarOfLife } from "react-icons/fa";


const AddProjects = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCreateNew, setShowCreateNew] = useState(false);
const [showAddProject, setShowAddProject] = useState(false);
// const handleClick = () => {
 
//    setTextColour("blue");
  
// };
// const click = () => {
//   setTextColor("blue");
  
// };

  const Modal = () => {
    return (
      <>
        <div className=" absolute inset-0 w-[1260px] h-[665px] bg-black bg-opacity-25  backdrop-blur-sm   flex justify-center items-center   ">
          <div className="p-2 bg-[#FFFFFF] rounded-sm">
            <div className="flex text-black ">
              <div className="font-bold"> Add Project</div>
              <div className="flex justify-end flex-grow ">
                <button
                  onClick={() => setShowModal(false)}
                  className="text-xl text-black "
                >
                  <IoIosCloseCircle />
                </button>
              </div>
            </div>
            <div className="flex text-x ">
              <Button
                border="1px solid black"
                borderColor="#D5D5D5"
                label="Add From Existing"
                textColor="#1A13CB"
                padding="4px 5px"
              />
              <Button
                border="1px solid black"
                borderColor="#D5D5D5"
                label="Create New"
                textColor="#4B5563"
                padding="4px 5px"
                onClick={() => {setShowCreateNew(true);setShowModal(false);}}
              />
            </div>

            <label className="text-x">Client Name</label>
            <div>
              <input
                type=""
                className=" mt- mb-2 border border-gray-400 rounded-sm w-[400px]"
              ></input>
            </div>
            <div className="flex justify-end gap-3 mt-2 mb-2">
              <div>
                <Button
                  onClick={() => {setShowModal(false);setShowCreateNew(false);}}
                  borderColor="#1A13CB"
                  textColor="#1A13CB"
                  label="Cancel"
                  border="1px solid black"
                  width={60}
                  padding="3px 5px"
                />
              </div>
              <div>
                <Button
                  backgroundColor="#1A13CB"
                  textColor="white"
                  label="Add"
                  width={60}
                  padding="4px 18px"
                  onClick={() => {
                    setShowAddProject(true);
                    setShowModal(false);
                    setShowCreateNew(false);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };


const AddProject =() =>{
  return (
    <>
      <div className=" absolute left-40 top-[56px] w-[1100px] h-[610px] bg-[#00000029] bg-opacity-10  backdrop-blur-xl   flex justify-center items-center   ">
        <div className="p-2  rounded-sm">
          <div className="flex text-sm ml-2 ">
            <Button
              border="1px solid black"
              borderColor="#D5D5D5"
              label="Add From Existing"
              textColor="#1A13CB"
              padding="4px 5px"
              backgroundColor="white"
            />
            <Button
              border="1px solid black"
              borderColor="#D5D5D5"
              label="Create New"
              padding="6px 6px"
              backgroundColor="white"
              onClick={() => {
                setShowCreateNew(true);
                setShowAddProject(false);
              }}
            />
          </div>
          <div className="flex gap-x-2  p-2  ">
            <div className=" bg-white p-3 pt-2 rounded-md">
              <label className="text-x flex mb-1 mt-2 ">
                Name <FaStarOfLife className="text-red-500 w-[4px]" />
              </label>
              <Input
                padding="2px 3px"
                border="1px solid black"
                borderColor="#A19D9D"
                width={500}
                height={40}
              />
              <label className="text-x flex mb-1 mt-4">
                Company Name <FaStarOfLife className="text-red-500 w-[4px]" />
              </label>
              <Input
                padding="2px 3px"
                border="1px solid black"
                borderColor="#A19D9D"
                width={500}
                height={40}
              />
              <label className="text-x flex mb-1 mt-4">
                Email Address <FaStarOfLife className="text-red-500 w-[4px]" />
              </label>
              <Input
                padding="2px 3px"
                border="1px solid black"
                borderColor="#A19D9D"
                width={500}
                height={40}
              />
              <label className="text-x flex mb-1 mt-4">
                Contact Info <FaStarOfLife className="text-red-500 w-[4px]" />
              </label>
              <Input
                padding="2px 3px"
                border="1px solid black"
                borderColor="#A19D9D"
                width={500}
                type="tel"
                height={40}
              />
              <label className="text-x flex mb-1 mt-4">
                Description <FaStarOfLife className="text-red-500 w-[4px]" />
              </label>
              <Input
                padding="2px 3px"
                border="1px solid black"
                borderColor="#A19D9D"
                width={500}
                height={90}
              />
            </div>

            <div className=" bg-white p-3 pt-2 rounded-md">
              <label className="text-x flex mb-1  mt-2 ">
                Project Name <FaStarOfLife className="text-red-500 w-[4px]" />
              </label>
              <Input
                padding="2px 3px"
                border="1px solid black"
                borderColor="#A19D9D"
                width={500}
                height={40}
              />
              <label className="text-x flex mb-1 mt-4">
                Type <FaStarOfLife className="text-red-500 w-[4px]" />
              </label>
              <select className="text-x text-[#BBBABA] border border-[#A19D9D] rounded-md w-[500px] py-2 h-[40px]">
                <option>Select Type</option>
                <option>Fix Bid</option>
                <option>Hourly Basis </option>
              </select>
              <label className="text-x flex mb-1 mt-4">
                Team Lead <FaStarOfLife className="text-red-500 w-[4px]" />
              </label>
              <Input
                padding="2px 3px"
                border="1px solid black"
                borderColor="#A19D9D"
                width={500}
                height={40}
              />
              <label className="text-x flex mb-1 mt-4">
                Start Date <FaStarOfLife className="text-red-500 w-[4px]" />
              </label>
              <Input
                padding="2px 3px"
                border="1px solid black"
                borderColor="#A19D9D"
                width={500}
                type="tel"
                height={40}
              />
              <label className="text-x flex mb-1 mt-4">
                Project Description{" "}
                <FaStarOfLife className="text-red-500 w-[4px]" />
              </label>
              <Input
                padding="2px 3px"
                border="1px solid black"
                borderColor="#A19D9D"
                width={500}
                height={90}
              />

              <div className="flex justify-end gap-5 mt-3 mb-2">
                <div>
                  <Button
                    onClick={() => setShowAddProject(false)}
                    borderColor="#1A13CB"
                    textColor="#1A13CB"
                    label="Cancel"
                    border="1px solid black"
                    width={60}
                    padding="3px 5px"
                  />
                </div>
                <div>
                  <Button
                    backgroundColor="#1A13CB"
                    textColor="white"
                    label="Create Project"
                    width={140}
                    padding="4px 18px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const CreateNew = () => {
  return (
    <>
      <div className=" absolute left-40 top-[56px] w-[1100px] h-[610px] bg-[#00000029] bg-opacity-10  backdrop-blur-xl   flex justify-center items-center   ">
        <div className="p-2  rounded-sm">
          <div className="flex text-sm ml-2 ">
            <Button
              border="1px solid black"
              borderColor="#D5D5D5"
              label="Add From Existing"
              padding="4px 5px"
              backgroundColor="white"
              onClick={() => setShowModal(true)}
            />
            <Button
              border="1px solid black"
              borderColor="#D5D5D5"
              label="Create New"
              textColor="#1A13CB"
              padding="6px 6px"
              backgroundColor="white"
            />
          </div>
          <div className="flex gap-x-2  p-2  ">
            <div className=" bg-white p-3 pt-2 rounded-md">
              <p className="font-bold">Add Client</p>
              <label className="text-x flex mb-1 mt-2 ">
                Name <FaStarOfLife className="text-red-500 w-[4px]" />
              </label>
              <Input
                padding="2px 3px"
                border="1px solid black"
                borderColor="#A19D9D"
                width={500}
                height={34}
              />
              <label className="text-x flex mb-1 mt-4">
                Company Name <FaStarOfLife className="text-red-500 w-[4px]" />
              </label>
              <Input
                padding="2px 3px"
                border="1px solid black"
                borderColor="#A19D9D"
                width={500}
                height={34}
              />
              <label className="text-x flex mb-1 mt-4">
                Email Address <FaStarOfLife className="text-red-500 w-[4px]" />
              </label>
              <Input
                padding="2px 3px"
                border="1px solid black"
                borderColor="#A19D9D"
                width={500}
                height={34}
              />
              <label className="text-x flex mb-1 mt-4">
                Contact Info <FaStarOfLife className="text-red-500 w-[4px]" />
              </label>
              <Input
                padding="2px 3px"
                border="1px solid black"
                borderColor="#A19D9D"
                width={500}
                type="tel"
                height={34}
              />
              <label className="text-x flex mb-1 mt-4">
                Description <FaStarOfLife className="text-red-500 w-[4px]" />
              </label>
              <Input
                padding="2px 3px"
                border="1px solid black"
                borderColor="#A19D9D"
                width={500}
                height={90}
              />

              <div className="flex justify-end gap-5 mt-3 mb-2">
                <div>
                  <Button
                    onClick={() => setShowAddProject(false)}
                    borderColor="#1A13CB"
                    textColor="#1A13CB"
                    label="Cancel"
                    border="1px solid black"
                    width={60}
                    padding="3px 5px"
                  />
                </div>
                <div>
                  <Button
                    backgroundColor="#1A13CB"
                    textColor="white"
                    label="Add"
                    width={60}
                    padding="4px 18px"
                  />
                </div>
              </div>
            </div>

            <div className=" bg-white p-3 pt-2 rounded-md">
              <label className="text-x flex mb-1  mt-2 ">
                Project Name <FaStarOfLife className="text-red-500 w-[4px]" />
              </label>
              <Input
                padding="2px 3px"
                border="1px solid black"
                borderColor="#A19D9D"
                width={500}
                height={40}
              />
              <label className="text-x flex mb-1 mt-4">
                Type <FaStarOfLife className="text-red-500 w-[4px]" />
              </label>
              <select className="text-x text-[#BBBABA] border border-[#A19D9D] rounded-md w-[500px] py-2 h-[40px]">
                <option>Select Type</option>
                <option>Fix Bid</option>
                <option>Hourly Basis </option>
              </select>
              <label className="text-x flex mb-1 mt-4">
                Team Lead <FaStarOfLife className="text-red-500 w-[4px]" />
              </label>
              <Input
                padding="2px 3px"
                border="1px solid black"
                borderColor="#A19D9D"
                width={500}
                height={40}
              />
              <label className="text-x flex mb-1 mt-4">
                Start Date <FaStarOfLife className="text-red-500 w-[4px]" />
              </label>
              <Input
                padding="2px 3px"
                border="1px solid black"
                borderColor="#A19D9D"
                width={500}
                type="tel"
                height={40}
              />
              <label className="text-x flex mb-1 mt-4">
                Project Description{" "}
                <FaStarOfLife className="text-red-500 w-[4px]" />
              </label>
              <Input
                padding="2px 3px"
                border="1px solid black"
                borderColor="#A19D9D"
                width={500}
                height={90}
              />

              <div className="flex justify-end gap-5 mt-3 mb-2">
                <div>
                  <Button
                    onClick={() => {setShowAddProject(false); setShowCreateNew(false);setShowModal(false) }}
                    borderColor="#1A13CB"
                    textColor="#1A13CB"
                    label="Cancel"
                    border="1px solid black"
                    width={60}
                    padding="3px 5px"
                  />
                </div>
                <div>
                  <Button
                    backgroundColor="#1A13CB"
                    textColor="white"
                    label="Create Project"
                    width={140}
                    padding="4px 18px"
                    onClick={() => {setShowAddProject(false); setShowCreateNew(false);setShowModal(false);    }}
                  />
                </div>
              </div>
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
        label="  Add Projects"
        icon={<AiOutlinePlus />}
      />
      {showModal && <Modal />}
      {showAddProject && <AddProject />}
      {showCreateNew && <CreateNew />}
      {showModal && <Modal />}
      {showCreateNew && <CreateNew />}
      {showModal && <Modal />}
    </>
  );
};

export default AddProjects;
