import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
 import { HiPencilAlt } from "react-icons/hi";
  import { MdOutlineAttachment } from "react-icons/md";
 import { BsArchiveFill } from "react-icons/bs";
import Modal from "./ProjectsEditProjectModal";
import EditTeamModal from "./ProjectsEditTeam";
import DumbChip from "../sharedComponents/ChipComponent";
import Button from "../sharedComponents/ButtonComponent";
const projects = [
  {
    icon1: AiFillGithub,
    icon2: Modal,
    heading: "Git hub",
    date: "12/02/2023",
    text: "Delivery Date",
    status: "Ongoing",
    items: [
      {
        key: "Notes",

        value:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti accusantium ipsum temporibus illum? Doloremque, incidunt explicabo, consectetur quod inventore quis libero blanditiis expedita ipsa rem, deserunt et natus eius. Quas!  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti accusantium ipsum temporibus illum? Doloremque, incidunt explicabo, consectetur quod inventore quis libero blanditiis expedita ipsa rem, deserunt et natus eius. Quas!",
      },
    ],
  },
];

function ProjectsGeneral() {
  return (
    <>
      <div className="flex justify-between  ">
        <div className="flex gap-4  ">
          {projects.map((project, index) => (
            <div className="bg-white   rounded-md p-3 mt-3 text-x w-[325px] h-[225px] ">
              <div className="flex justify-between">
                <div className="flex-col flex font-bold gap-y-2">
                  <project.icon1 className="text-[#1A13CC] text-lg" />
                  {project.heading}
                </div>
                <div className="flex gap-1  justify-betwwen items-start ">
                  <project.icon2 />

                  <div className="flex-col  items-end  space-y-2">
                    <DumbChip
                      label={project.status}
                      textColor="white"
                      backgroundColor="#00D100"
                      fontSize={9}
                      size={"small"}
                    />
                    <div className="flex-col flex items-end pr-1 ">
                      <p className="-mb-1 ">{project.date}</p>
                      {project.text}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#E9F8F8] p-2 space-y-2 w-[300px] text-x rounded-md">
                {project.items.map((item, index) => (
                  <div
                    key={index}
                    className={` flex-col justify-between text-x items-center  font-semibold `}
                  >
                    <div className="ticket-icon text-[#A59F9F]">{item.key}</div>
                    <div className="ticket-icon font-light  text-[#302F2F]">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="bg-white w-fit border rounded-md p-3 mt-3 text-x">
            <div className="flex-col text-center">
              <div className=" flex justify-start  ml-[95px] gap-x-[53px]  ">
                <div className="">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                    className="w-16 h-16 rounded-full object-cover overflow-hidden"
                  />
                </div>
                <div className=" flex items-top gap-1 text-sm ">
                  <p>
                    <EditTeamModal />
                  </p>
                </div>
              </div>
              <div className="header-content">
                <h2 className="text-base font-bold leading-none">
                  Pratham Singh (02)
                </h2>
                <p className="text-[#A59F9F] leading-none mb-2 mt-1">
                  Team Lead
                </p>
              </div>
            </div>

            <div className="bg-[#E9F8F8] p-2 space-y-2 w-[225px] text-x rounded-md">
              <div className="flex items-center justify-between">
                <p className="text-[#A59F9F]">Full Time Employees</p>
                <MdOutlineAttachment />
              </div>
              <div className="isolate flex -space-x-1.5 overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU"
                  alt=""
                  className=" z-20 object-cover inline-block h-5 w-5 rounded-full ring-1 ring-white"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"
                  alt=""
                  className=" z-10 object-cover inline-block h-5 w-5 rounded-full ring-1 ring-white"
                />
              </div>
              <p className="font-semibold">2 Members</p>

              <div className="flex items-center justify-between">
                <p className="text-[#A59F9F]">Interns</p>{" "}
                <MdOutlineAttachment />
              </div>
              <div className="isolate flex -space-x-1.5 overflow-hidden">
                <img
                  src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg"
                  alt=""
                  className=" z-50 object-cover inline-block h-5 w-5 rounded-full ring-1 ring-white"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU"
                  alt=""
                  className="relative z-40 object-cover inline-block h-5 w-5 rounded-full ring-1 ring-white"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
                  alt=""
                  className="relative z-30 inline-block object-cover h-5 w-5 rounded-full ring-1 ring-white"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"
                  alt=""
                  className="relative z-20 inline-block h-5 w-5 object-cover rounded-full ring-1 ring-white"
                />
                <img
                  src="https://thumbs.dreamstime.com/b/true-power-comes-realising-your-potential-portrait-confident-young-businessman-working-modern-office-242593128.jpg"
                  alt=""
                  className="relative z-10 inline-block h-5 w-5 object-cover rounded-full ring-1 ring-white"
                />
              </div>
              <p className="font-semibold">5 Members</p>
            </div>
          </div>
        </div>
        <div className="font-semibold items-center mt-3">
          <Button
            icon={<BsArchiveFill />}
            label="Archive"
            borderColor="#FE0012"
            textColor="#FE0012"
            padding="8px 9px"
            border="1px solid black"
            backgroundColor="white"
          />
        </div>
      </div>
    </>
  );
}
export default ProjectsGeneral;
 