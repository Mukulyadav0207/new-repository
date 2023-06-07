 import React, { useState } from 'react';
 import { FaSitemap } from "react-icons/fa";
 import { BsFillCalendar2Fill } from "react-icons/bs";
 import { FaCalendarDay } from "react-icons/fa";
 import { FaEnvelopeSquare } from "react-icons/fa";
 import { FaPhoneSquareAlt } from "react-icons/fa";
 import { RxCountdownTimer } from "react-icons/rx";
 import { BsLaptopFill } from "react-icons/bs";
 import { FaUmbrellaBeach } from "react-icons/fa";
 import {FaEye  } from "react-icons/fa";
 import { BsCircleHalf } from "react-icons/bs";
 import { BsCircleFill } from "react-icons/bs";
 import { RxHalf2 } from "react-icons/rx";
 import { HiPencilAlt } from "react-icons/hi";
import { SiDiscord } from "react-icons/si";
import { AiOutlineGoogle } from "react-icons/ai";
import { AiFillGitlab } from "react-icons/ai";
import { SiRazorpay } from "react-icons/si";
import {  BiLinkExternal} from "react-icons/bi";
 import { AiFillGithub } from "react-icons/ai";
 import {  } from "react-icons/si";
 import {  } from "react-icons/si";
 import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import LeaveEdit from '../leaves/LeavesEditLeavesModal';
 import upcomingLeaves from './EmployeesUpcomingLeavesModal';
import EditLeaveModal from './EmployeesEditEmployeesModal';
import DumbChip from '../sharedComponents/ChipComponent';
 
 
 
 
 
 
 
 
 function EmployeesGeneral() {
const navigate = useNavigate();

 

  
  const [toggledStates, setToggledStates] = useState([]);

  const handleToggle = (index) => {
    const updatedToggledStates = [...toggledStates];
    updatedToggledStates[index] = !updatedToggledStates[index];
    setToggledStates(updatedToggledStates);
  };

 const ticketDetails = [
   { icon: FaSitemap, label: "Department", value: "IT" },
   { icon: BsFillCalendar2Fill, label: "Joining Date", value: "01/11/2022" },
   { icon: FaCalendarDay, label: "Rollover Date", value: "10/11/2022" },
 ];


   const one= [
   { icon: FaEnvelopeSquare, label: "Company Email", value: "abc@domain.com" },
   {  label: "Personal Email", value: "xyz@domain.com" },
  ];


    const two = [
      { icon: FaPhoneSquareAlt, label: "Phone Number", value: "XXXXXXXX78" },
      {
        icon: RxCountdownTimer,
        label: "Hours Engagement",
        value: "08 Hours /Day",
      },
    ];
 
const leaves = [
  {
    icon: FaUmbrellaBeach,
    heading: "Upcoming Leaves",

    data: [
      {
        icon1: BsCircleHalf,
        icon2: upcomingLeaves,
        label: "Casual Leave",
        value: "Wed, 12 March, 2023",
      },
      {
        icon1: BsCircleFill,
        icon2: upcomingLeaves,
        label: "Medical Leave",
        value: "Thur, 20 March, 2023",
      },
      {
        icon1: RxHalf2,
        icon2: upcomingLeaves,
        label: "Exam Leave",
        value: "Wed, 12 March, 2023",
      },
    ],
  },
];

const leaveAvailable = [
  {
    icon1: FaUmbrellaBeach,
    icon2: LeaveEdit,
    heading: "Leaves Available",
    data: [
      {
        label: "Casual Leave",
        value: "01/01 (Monthly Credits)",
      },
      {
        label: "Medical Leave",
        value: "02/02 (One Time Credits)",
      },
      {
        label: "Previlege Leave",
        value: "02/02 (Monthly Credits)",
      },
      {
        label: "Other Leaves",
        value: "02/10 (Monthly Credits)",
      },
    ],
  },
];

const applications = [
  {
    heading: "Applications",
    data: [
      { icon: SiDiscord, title: "Discord", },
      { icon: AiOutlineGoogle, title: "G-suite", },
      { icon: AiFillGitlab, title: "GitLab", },
      { icon: SiRazorpay, title: "Razorpay", },
    ],
  },
];


const projects = [
  {
    icon1: AiFillGithub,
    icon2: BiLinkExternal,
    heading: "Git hub",
    time: "6 Hrs",
    status: "Ongoing",
    items: [
      {
        key: "Team Lead",
       
        value: "Pratham Singh",
      },
      { key: "Assigned On", value: "10/11/2022" },
      {
        key: "Full Time Employee",
       
        value: "2 Members",
      },
      {
        key: "Interns",
       
        value: "5 Members",
      },
    ],
  },
  {
    icon1: AiFillGithub,
    icon2: BiLinkExternal,
    heading: "Git hub",
    time: "3 Hrs",
    status: "Ongoing",
    items: [
      {
        key: "Team Lead",
      
        value: "Pratham Singh",
      },
      { key: "Assigned On", value: "10/11/2022" },
      {
        key: "Full Time Employee",
       
        value: "2 Members",
      },
      {
        key: "Interns",
       
        value: "5 Members",
      },
    ],
  },
  {
    icon1: AiFillGithub,
    icon2: BiLinkExternal,
    heading: "Git hub",
    time: "8 Hrs",
    status: "Ongoing",
    items: [
      {
        key: "Team Lead",
       
        value: "Pratham Singh",
      },
      { key: "Assigned On", value: "10/11/2022" },
      {
        key: "Full Time Employee",
      
        value: "2 Members",
      },
      {
        key: "Interns",
       
        value: "5 Members",
      },
    ],
  },
];











  return (
    <>
      <div className="flex gap-[14px] ">
        <div className="bg-white w-fit border rounded-md p-3  text-x mt-3">
          <div className="flex-col text-center">
            <div className=" flex justify-start  ml-[95px] gap-x-[53px]  ">
              <div className="">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                  className="w-10 h-10 rounded-full object-cover overflow-hidden"
                />
              </div>
              <div className=" flex items-top gap-1 text-sm ">
                <button onClick={() => navigate("/app/devices")}>
                  <BsLaptopFill className="text -mt-[18px] " />
                </button>
                <p>
                  <EditLeaveModal />
                </p>
              </div>
            </div>
            <div className="header-content">
              <h2 className="text-base font-bold leading-none">
                Pratham Singh (02)
              </h2>
              <p className="text-[#A59F9F] leading-none mb-1">Developer</p>
            </div>
          </div>
          <div className="bg-[#E9F8F8] p-2 space-y-1 w-[220px] rounded-md">
            {ticketDetails.map((detail, index) => (
              <div key={index} className={` flex gap-1 text-x items-center  `}>
                <div className="ticket-icon">
                  <detail.icon />
                </div>
                <div className="flex gap-5 justify-end ">
                  <div className="  text-[#A59F9F]  w-[61px]">
                    {detail.label}
                  </div>
                  <div className="  font-semibold  w-[105px]  text-end">
                    {detail.value}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex gap-4">
              {one.map((detail, index) => (
                <div key={index} className={` flex gap-1 text-x items-center `}>
                  <div className="ticket-icon">
                    {index === 0 ? <detail.icon /> : null}
                  </div>
                  <div className="flex-col items-center">
                    <div className="ticket-label text-[#A59F9F]  w-[82px]  ">
                      {detail.label}
                    </div>
                    <div className="ticket-value font-semibold   text-black  ">
                      {detail.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {two.map((detail, index) => (
                <div key={index} className={` flex gap-1 text-x items-center `}>
                  <div className="ticket-icon">
                    <detail.icon />
                  </div>
                  <div className="flex-col  items-center">
                    <div className={`ticket-label text-[#A59F9F] `}>
                      {detail.label}
                    </div>
                    <div className="ticket-value font-semibold ">
                      {detail.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-3 mt-3 border rounded-md ">
          {leaves.map((leave, index) => (
            <>
              <div
                key={index}
                className="flex items-center gap-1 font-semibold "
              >
                <leave.icon />
                {leave.heading}
              </div>
              <div className="bg-[#E9F8F8] p-2 text-x mt-3 border rounded-md">
                {leave.data.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex-col justify-between items-center "
                  >
                    <p
                      className={`text-[#A59F9F] font-semibold flex items-center gap-1 ${
                        itemIndex === 0 ? "mt-0" : "mt-2"
                      }`}
                    >
                      <item.icon1 className="text-black" /> {item.label}
                    </p>

                    <p
                      className="text-[#000000] font-semibold flex ml-4 justify-between"
                      style={{ width: "200px" }}
                    >
                      {item.value} <item.icon2 />
                    </p>
                  </div>
                ))}
              </div>
            </>
          ))}
          <button
            onClick={() => navigate("/app/leaves")}
            className="border rounded-md bg-[#1A13CB] text-white px-[59px] py-0.5 mt-4"
          >
            View All Leaves
          </button>
        </div>

        <div className="bg-white p-3 mt-3 border rounded-md">
          {leaveAvailable.map((leave, index) => (
            <>
              <div
                key={index}
                className="flex justify-between items-center gap-1 font-semibold "
              >
                <div className="flex items-center gap-1 font-semibold ">
                  <leave.icon1 />
                  {leave.heading}
                </div>
                <p>
                  <leave.icon2 />
                </p>
              </div>
              <div className="bg-[#E9F8F8] p-2 text-x mt-3 border rounded-md space-y-[30px]">
                {leave.data.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex justify-between items-center gap-[17px]   "
                  >
                    <p
                      className={`text-[#A59F9F] font-semibold  items-center   
                      `}
                    >
                      {item.label}
                    </p>

                    <p className="text-[#000000] font-semibold  ml-4 ">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
        <div className="bg-white p-3 mt-3 border rounded-md">
          {applications.map((leave, index) => (
            <>
              <div
                key={index}
                className="flex items-center gap-1 font-semibold "
              >
                {leave.heading}
              </div>
              <div className="bg-[#E9F8F8] p-3 text-x mt-3 border rounded-md space-y-[16px]">
                {leave.data.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex-col justify-between items-center "
                  >
                    <p
                      className={`text-[#A59F9F] font-semibold flex items-center gap-1 ${
                        itemIndex === 0 ? "mt-0" : "mt-2"
                      }`}
                    >
                      <item.icon className="text-black text-2xl" />
                      <p className="w-[50px]">{item.title}</p>
                      <div className="ml-[96px] text-">
                        <button
                          className={`rounded-full  w-[24px] h-[12px] flex items-center  focus:outline-none ${
                            toggledStates[itemIndex]
                              ? "bg-[#1A13CB]"
                              : "bg-gray-400"
                          }`}
                          onClick={() => handleToggle(itemIndex)}
                        >
                          <div
                            className={`bg-white rounded-full w-[10px] h-[10px] transform transition-all ml-0.5 ${
                              toggledStates[itemIndex] ? "translate-x-2.5" : ""
                            } `}
                          ></div>
                        </button>
                      </div>
                    </p>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="flex  items-center justify-between mt-2">
        <p className="font-bold">Projects</p>
        <button
          onClick={() => navigate("/app/projects")}
          className="border rounded-lg bg-[#1A13CC] text-white px-4 py-2 flex items-center gap-2 font-semibold"
        >
          <BiLinkExternal />
          View All
        </button>
      </div>
      <div className="flex gap-8">
        {projects.map((project, index) => (
          <div className="bg-white   rounded-md p-3 mt-3 text-x w-[240px]">
            <div className="flex justify-between">
              <div className="flex-col font-bold">
                <project.icon1 className="text-[#1A13CC] text-lg" />
                {project.heading}
              </div>
              <div className="flex  gap-1 items-start">
                <button
                  onClick={() => navigate("/app/projects")}
                  className="flex gap-1 items-center"
                >
                  <project.icon2 className="text-lg" />
                </button>
                <DumbChip
                  backgroundColor={
                    index === 0
                      ? "#FFFF00"
                      : index === 1
                      ? "#FE0012"
                      : "#00D100"
                  }
                  label={project.time}
                  width={55}
                  size="small"
                  fontSize={8}
                  textColor={index === 0 ? "black" : "white"}
                />
                <DumbChip
                  label={project.status}
                  textColor="white"
                  backgroundColor="#00D100"
                  width={55}
                  size="small"
                  fontSize={8}
                />
              </div>
            </div>
            <div className="bg-[#E9F8F8] p-2 space-y-2 w-[213px] text-x rounded-md">
              {project.items.map((item, index) => (
                <div
                  key={index}
                  className={` flex justify-between text-x items-center  font-semibold `}
                >
                  <div className="ticket-icon text-[#A59F9F]">{item.key}</div>
                  <div
                    className={` gap-1 ${
                      index === 3 ? "flex-col flex items-center " : "flex"
                    }`}
                  >
                    {index === 0 ? (
                      <div className=" flex space-x-1 overflow-hidden ">
                        <img
                          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                          alt=""
                          className="  h-5 w-5 rounded-full ring-1 ring-gray-200 object-cover overflow-hidden"
                        />
                      </div>
                    ) : index === 2 ? (
                      <div className=" flex -space-x-1.5 overflow-hidden">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU"
                          alt=""
                          className=" object-cover inline-block h-5 w-5 rounded-full ring-1 ring-white"
                        />
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"
                          alt=""
                          className=" object-cover inline-block h-5 w-5 rounded-full ring-1 ring-white"
                        />
                      </div>
                    ) : index === 3 ? (
                      <div className=" flex -space-x-1.5 overflow-hidden">
                        <img
                          src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg"
                          alt=""
                          className="object-cover inline-block h-5 w-5 rounded-full ring-1 ring-white"
                        />
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU"
                          alt=""
                          className="  object-cover inline-block h-5 w-5 rounded-full ring-1 ring-white"
                        />
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
                          alt=""
                          className="  inline-block object-cover h-5 w-5 rounded-full ring-1 ring-white"
                        />
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"
                          alt=""
                          className=" inline-block h-5 w-5 object-cover rounded-full ring-1 ring-white"
                        />
                        <img
                          src="https://thumbs.dreamstime.com/b/true-power-comes-realising-your-potential-portrait-confident-young-businessman-working-modern-office-242593128.jpg"
                          alt=""
                          className="  inline-block h-5 w-5 object-cover rounded-full ring-1 ring-white"
                        />
                      </div>
                    ) : null}

                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default EmployeesGeneral;
  