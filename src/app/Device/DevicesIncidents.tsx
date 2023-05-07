import AddNote from "./DevicesAddNotesModal";
import { MdOutlinePhoto } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import AttachImage from "./DevicesAttachImageModal";

function Incident() {
  return (
    <div>
      <div className="flex mt-3 gap-7">
        <div className="flex-col bg-white border rounded-lg h-[225px] ">
          <MdOutlinePhoto className="text-gray-300 rounded-md text-[170px]  " />
          <div className="pl-4 ">
            <h2 className="text-xl font-semibold ">File Name</h2>
            <h3>File Size</h3>
          </div>
        </div>

        <div className="flex-col bg-white border rounded-lg h-[225px] ">
          <MdOutlinePhoto className="text-gray-300 rounded-md text-[170px]  " />
          <div className="pl-4 ">
            <h2 className="text-xl font-semibold ">File Name</h2>
            <h3>File Size</h3>
          </div>
        </div>

        <div className="flex bg-white  justify-center items-center border rounded-lg h-[225px] ">
          <AttachImage />
        </div>

        <div className="ml-[352px]">
          <AddNote />
        </div>
      </div>
      <h2 className="mt-3 text-xl font-semibold">Notes</h2>
      <div className="p-4 mt-3 bg-white border rounded-lg w-[400px]">
        <p className="p-2 border rounded-md bg-cyan-200">
          Lorem ipsum dolor sit amet consectetur we to adipisicing elit. Placeat
          recusandae non of the it cupiditate reprehenderit, asperiores
          distinctio impedit quidem. Nisi harum porro qui impedit consequatur.
          Qui, nihil? Nemo eos sint quas quo.
        </p>
      </div>
    </div>
  );
}

export default Incident;
