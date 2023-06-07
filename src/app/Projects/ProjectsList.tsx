import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
// import Modal from "./projectsAddModal";
 import Filter from "./ProjectsFilterModal";
import { Link } from "react-router-dom";
import { receiveProjectsData } from "../../redux/actions/ProjectsActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { IoIosEye } from "react-icons/io";
import DumbChip from "../sharedComponents/ChipComponent"; 
import AddProjects from "./ProjectsAddProjectModal"

function Projects() {
  const projects = useSelector((state) => state.projects.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const projects = [
      {
        Project: "ABC",
        Name: "Pratham singh",
        src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",

        StartDate: "02/06/2025",
        CompleteDate: "02/06/2022",
        WorkerType1: "Full Time Employees",
        EmployeesNo: "2 Members",
        WorkerType2: "Interns",
        InternsNo: "5 Members",
        Status: "Pending",
        Invoice: "01/11/2022",
        Actions: IoIosEye,
      },

      {
        Project: "ABC",
        Name: "Ankur Verma",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU",

        StartDate: "10/05/2022",
        CompleteDate: "N.A",
        WorkerType1: "Full Time Employees",
        EmployeesNo: "2 Members",
        WorkerType2: "Interns",
        InternsNo: "5 Members",
        Status: "Completed",
        Invoice: "10/04/2022",
        Actions: IoIosEye,
      },
      {
        Project: "ABC",
        Name: "Amrita Irani",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU",

        StartDate: "09/04/2022",
        CompleteDate: "09/04/2022",
        WorkerType1: "Full Time Employees",
        EmployeesNo: "2 Members",
        WorkerType2: "Interns",
        InternsNo: "5 Members",
        Status: "Pending",
        Invoice: "08/10/2022",
        Actions: IoIosEye,
      },
      {
        Project: "ABC",
        Name: "Swapnil Barnwal",
        src: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg",

        StartDate: "01/01/2023",
        CompleteDate: "Perpetual",
        WorkerType1: "Full Time Employees",
        EmployeesNo: "2 Members",
        WorkerType2: "Interns",
        InternsNo: "5 Members",
        Status: "Upcoming",
        Invoice: "12/12/2022",
        Actions: IoIosEye,
      },
      {
        Project: "ABC",
        Name: "Akash Gupta",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU",

        StartDate: "10/01/2022",
        CompleteDate: "N.A",
        WorkerType1: "Full Time Employees",
        EmployeesNo: "2 Members",
        WorkerType2: "Interns",
        InternsNo: "5 Members",
        Status: "Completed",
        Invoice: "11/10/2022",
        Actions: IoIosEye,
      },

      {
        Project: "ABC",
        Name: "Vikas Mishra",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",

        StartDate: "25/08/2022",
        CompleteDate: "25/08/2022",
        WorkerType1: "Full Time Employees",
        EmployeesNo: "2 Members",
        WorkerType2: "Interns",
        InternsNo: "5 Members",
        Status: "Ongoing",
        Invoice: "13/09/2022",
        Actions: IoIosEye,
      },
      {
        Project: "ABC",
        Name: "Satyam Singh",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU",

        StartDate: "06/08/2022",
        CompleteDate: "06/08/2022",
        WorkerType1: "Full Time Employees",
        EmployeesNo: "2 Members",
        WorkerType2: "Interns",
        InternsNo: "5 Members",
        Status: "Completed",
        Invoice: "11/10/2022",
        Actions: IoIosEye,
      },
      {
        Project: "ABC",
        Name: "Divya Rai",
        src: "https://thumbs.dreamstime.com/b/true-power-comes-realising-your-potential-portrait-confident-young-businessman-working-modern-office-242593128.jpg",

        StartDate: "30/12/2022",
        CompleteDate: "30/12/2022",
        WorkerType1: "Full Time Employees",
        EmployeesNo: "2 Members",
        WorkerType2: "Interns",
        InternsNo: "5 Members",
        Status: "Ongoing",
        Invoice: "13/09/2022",
        Actions: IoIosEye,
      },
      {
        Project: "ABC",
        Name: "Shikhar Sharma",
        src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",

        StartDate: "20/12/2022",
        CompleteDate: "perpetual",
        WorkerType1: "Full Time Employees",
        EmployeesNo: "2 Members",
        WorkerType2: "Interns",
        InternsNo: "5 Members",
        Status: "Completed",
        Invoice: "20/12/2022",
        Actions: IoIosEye,
      },
    ];

    dispatch(receiveProjectsData(projects));
  }, [dispatch]);

  return (
    <>
      <div className=" h-[600px] ">
        <div className="flex ">
          <div>
            <h3 className="font-bold  text-lg">Projects</h3>
          </div>

          <div className="flex justify-end flex-grow gap-4 ">
            <div className="relative ml-36 ">
              <input
                className="rounded-md p-2 w-[400px]"
                type="text"
                placeholder="Search keyword"
              />
              <BsSearch className="absolute -translate-y-1/2 right-1 top-1/2 " />
            </div>
            <div>
              <Filter />
            </div>
            <div>
            
              <AddProjects />
            </div>
          </div>
        </div>
        <div className="w-[1060px] h-[530px]  overflow-y-scroll ">
          <table className="mt-4 border-collapse w-[1040px]  text-x">
            <thead>
              <tr className="bg-slate-100">
                <th className="px-4 py-3 font-semibold">Project Name</th>
                <th className="px-4 py-2 font-semibold">Team Leader </th>
                <th className="px-4 py-2 font-semibold">Start Date</th>
                <th className="px-4 py-2 font-semibold">Completion Date</th>
                <th className="px-4 py-2 font-semibold">Resources</th>

                <th className="px-4 py-2 font-semibold">Status</th>
                <th className="px-4 py-2 font-semibold">Last Invoice Date</th>
                <th className="px-4 py-2 font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody className="bg-white text-[#A59F9F] text-center h-[400px] ">
              {projects.map((project, index) => (
                <tr key={index} className=" ">
                  <td className="px-4 py-2 border">{project["Project"]}</td>
                  <td className="px-4 py-7 border gap-2 flex items-center">
                    <img
                      src={project.src}
                      className="relative z-30 inline-block h-5 w-5 rounded-full ring-1 ring-gray-100 object-cover"
                    />
                    {project["Name"]}
                  </td>
                  <td className="px-4 py-2 border">{project["StartDate"]}</td>
                  <td className="px-4 py-2 border">
                    {project["CompleteDate"]}
                  </td>
                  <td className="px-4 py-2 border w-[230px]">
                    {index === 0 ||
                    index === 2 ||
                    index === 4 ||
                    index === 5 ||
                    index === 7 ||
                    index === 8 ? (
                      <div className="flex-col space-y-1">
                        <p className="flex items-center justify-between text-[#A59F9F]">
                          <p> {project.WorkerType1}</p>
                          <p> {project.WorkerType2}</p>
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex -space-x-1.5 overflow-hidden">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU"
                              alt=""
                              className="relative z-20 object-cover inline-block h-5 w-5 rounded-full ring-1 ring-gray-500"
                            />
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"
                              alt=""
                              className="relative z-10 object-cover inline-block h-5 w-5 rounded-full ring-1 ring-gray-500"
                            />
                          </div>
                          <div className="isolate flex -space-x-1.5 overflow-hidden">
                            <img
                              src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg"
                              alt=""
                              className="relative z-50 object-cover inline-block h-5 w-5 rounded-full ring-1 ring-gray-500"
                            />
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU"
                              alt=""
                              className="relative z-40 object-cover inline-block h-5 w-5 rounded-full ring-1 ring-gray-500"
                            />
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
                              alt=""
                              className="relative z-30 inline-block object-cover h-5 w-5 rounded-full ring-1 ring-gray-500"
                            />
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"
                              alt=""
                              className="relative z-20 inline-block h-5 w-5 object-cover rounded-full ring-1 ring-gray-500"
                            />
                            <img
                              src="https://thumbs.dreamstime.com/b/true-power-comes-realising-your-potential-portrait-confident-young-businessman-working-modern-office-242593128.jpg"
                              alt=""
                              className="relative z-10 inline-block h-5 w-5 object-cover rounded-full ring-1 ring-gray-500"
                            />
                          </div>
                        </div>
                        <p className="flex font-semibold items-center justify-between text-[#000000]">
                          <p>{project.EmployeesNo}</p>
                          <p>{project.InternsNo}</p>
                        </p>
                      </div>
                    ) : (
                      <div className="flex-col space-y-1">
                        <p className="flex items-center justify-between text-[#A59F9F]">
                          <p> {project.WorkerType1}</p>
                          <p> {project.WorkerType2}</p>
                        </p>
                        <div className="flex items-center justify-between">
                          <div className=" flex -space-x-1.5 overflow-hidden">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU"
                              alt=""
                              className="relative z-20 object-cover inline-block h-5 w-5 rounded-full ring-1 ring-gray-500"
                            />
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"
                              alt=""
                              className="relative z-10 object-cover inline-block h-5 w-5 rounded-full ring-1 ring-gray-500"
                            />
                          </div>
                          <div className=" flex -space-x-1.5 overflow-hidden">
                            <img
                              src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg"
                              alt=""
                              className="relative z-50 object-cover inline-block h-5 w-5 rounded-full ring-1 ring-gray-500"
                            />
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU"
                              alt=""
                              className="relative z-40 object-cover inline-block h-5 w-5 rounded-full ring-1 ring-gray-500"
                            />
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
                              alt=""
                              className="relative z-30 inline-block object-cover h-5 w-5 rounded-full ring-1 ring-gray-500"
                            />
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"
                              alt=""
                              className="relative z-20  h-5 w-5 object-cover rounded-full ring-1 ring-gray-500"
                            />
                            <img
                              src="https://thumbs.dreamstime.com/b/true-power-comes-realising-your-potential-portrait-confident-young-businessman-working-modern-office-242593128.jpg"
                              alt=""
                              className="relative z-10  h-5 w-5 object-cover rounded-full ring-1 ring-gray-500"
                            />
                          </div>
                        </div>
                        <p className="flex font-semibold items-center justify-between text-[#000000]">
                          <p>{project.EmployeesNo}</p>
                          <p>{project.InternsNo}</p>
                        </p>
                      </div>
                    )}
                  </td>

                  <td className="px-2 py-2 border w-[120px]">
                    <DumbChip
                      label={project.Status}
                      backgroundColor={
                        index === 3 || index === 6 || index === 8
                          ? "#0000FF"
                          : index === 2 || index === 4
                          ? "#D5D5D5"
                          : index === 0 || index === 7
                          ? "#00D100"
                          : "#FE0012"
                      }
                      textColor={
                        index === 3 || index === 6 || index === 8
                          ? "white"
                          : index === 2 || index === 4
                          ? "black"
                          : index === 0 || index === 7
                          ? "white"
                          : "white"
                      }
                      width={95}
                    />
                  </td>
                  <td className="px-4 py-2 border ">{project.Invoice}</td>
                  <td className="px-4 py-2 border">
                    <Link to="/app/projects/details/1">
                      <button className="text-gray-500 hover:text-black text-sm">
                        <project.Actions />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Projects;
