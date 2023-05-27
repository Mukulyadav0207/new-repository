import { CgArrowLongRight } from "react-icons/cg";
import { FaLayerGroup } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { AiFillFileUnknown } from "react-icons/ai";
import { FaUserCheck } from "react-icons/fa";
// import AddNote from "./AddNotes";
import { BiNotepad } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";






function upcomingLeaves (){

const [ showModal, setShowModal ] = useState(false);

    const MyModal =() =>{
    return (
      <div className=" fixed inset-0 bg-white bg-opacity-50 w-[1260px] h-[665px] backdrop-blur-sm   flex justify-center items-center   ">
        <div className=" gap-1 p-2 bg-white w-[400px] border rounded-lg bg-opacity-300">
          <div className="p-2">
            <div className="flex items-center justify-between text-x mt-2  ">
              <p className=" font-bold ">Basic Details</p>
              <button onClick={() => setShowModal(false)} className="text-sm ">
                <IoIosCloseCircle />
              </button>
            </div>

            <div className="flex items-center font-bold text-sm">
              <p>12/02/2023</p>
              <CgArrowLongRight className="text-3xl w-[210px] " />
              <p>12/02/2023</p>
            </div>
          </div>

          <div className="items-center p-2 border rounded-lg bg-[#E9F8F8] text-x space-y-5 m-2 ">
            <div className="flex items-center gap-2">
              <FaUser />
              <p className="w-32 text-gray-400 "> Employee Name</p>
              <p className="ml-32"> Pratham Singh</p>
            </div>

            <div className="flex items-center gap-2">
              <FaLayerGroup />
              <p className="w-32 text-gray-400"> Category</p>
              <p className="ml-32"> Casual</p>
            </div>
            <div className="flex items-center gap-2">
              <BsFillCalendarCheckFill />
              <p className="w-32 text-gray-400"> Applied On</p>
              <p className="ml-32"> 12/02/2023</p>
            </div>
            <div className="flex items-center gap-2">
              <FaUserCheck />
              <p className="w-32 text-gray-400"> Approver</p>
              <p className="ml-32"> Kartik Mehta</p>
            </div>
            <div className="flex items-center gap-2">
              <AiFillFileUnknown />
              <p className="text-gray-400"> Reason</p>
            </div>
            <p className="ml-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nam
              rerum molestiae quam quibusdam, fugit labore enim doloremque
              perspiciatis .
            </p>

            <div className="flex items-center gap-2">
              <BiNotepad />
              <p className="text-gray-400">Remark From Approver</p>
            </div>
            <p className="ml-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nam
              rerum molestiae quam quibusdam, fugit labore enim doloremque
              perspiciatis veritatis .
            </p>
          </div>

          <div className="flex justify-end mr-2 mt-5 mb-3">
            <button
              onClick={() => setShowModal(false)}
              className="px-2 py-1 text-blue-700 border border-blue-700 rounded-md w-50 "
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
    }

return (
  <>
    <button onClick={() => setShowModal(true)} className={`text-[#A59F9F]`}>
      <FaEye />
    </button>
    {showModal && <MyModal />}
  </>
);

}


export default upcomingLeaves;