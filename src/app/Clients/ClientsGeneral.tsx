import React from "react";
import {BsGithub} from "react-icons/bs"
import { BsArchiveFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineDescription } from "react-icons/md";
import { Bs0Square } from "react-icons/bs";
import {} from "react-icons/bs";

import Modal from "./ClientsEditModal";




function General() {




  return (
    <>
      <div className="flex gap-8 m-2 bg-slate-300">
        <div className="flex m-2 ">
          <div className="m-3 bg-white rounded-md ">
            <div className="flex items-start mt-2 justify-self-end">
              <div className="flex-col gap-2 ml-32 w-max">
                <Bs0Square className="flex ml-10 text-5xl text-gray-400 " />
                <p className="flex justify-center text-xl font-bold ">
                  Project Name
                </p>
                <p className="flex justify-center mb-2">Client Name</p>
              </div>
              <div className="flex items-center justify-end gap-2 mt-2 mr-2 text-2xl ml-28">
               <Modal/>
                <button className="p-1 text-sm text-white bg-green-500 border rounded-full ">
                  Ongoing
                </button>
              </div>
            </div>
            <div className="p-2 m-2 rounded-md bg-cyan-100 ">
              <p className="text-gray-400">Company Name</p>
              <p className="font-semibold">Abc Pvt. Ltd.</p>
              <div className="flex">
                <div className="flex items-center m-2">
                  <BsFillEnvelopeFill />
                </div>
                <div>
                  <p className="text-gray-400">Email Address</p>
                  <p className="font-semibold">xyz@domain.com</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex items-center m-2">
                  <TbPhoneCall />
                </div>
                <div className="m-2">
                  <p className="text-gray-400">Contact Info</p>
                  <p className="font-semibold">XXXXXXXXXX</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex items-start m-2">
                  <MdOutlineDescription />
                </div>
                <div>
                  <p className="text-gray-400">Description</p>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Officia consequuntur tenetur quibusdam labore hic numquam
                    dolorum ipsum? Autem natus repellendus illo possimus
                    numquam? Consequatur repellendus molestias, tempore quis
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="p-3 mt-2 ml-3 mr-3 bg-white rounded-md ">
              <h1 className="font-semibold"> Ongoing Projects</h1>
              <div className="flex gap-16 mt-3">
                <div className="flex items-center gap-4">
                  <BsGithub className="text-blue-700" /> Git Hub
                </div>
                <div className="flex items-center gap-4">
                  <BsGithub className="text-blue-700" />
                  Git Hub
                </div>
              </div>

              <div className="flex items-center gap-4 mt-3">
                <BsGithub className="text-blue-700" />
                Git Hub
              </div>
            </div>
            <div className="p-3 m-4 bg-white rounded-md w-max">
              <h1 className="font-semibold">Past Projects</h1>
              <div className="flex gap-16 mt-3">
                <div className="flex items-center gap-4 ">
                  <BsGithub className="text-blue-700" /> Git Hub
                </div>
                <div className="flex items-center gap-4">
                  <BsGithub className="text-blue-700" />
                  Git Hub
                </div>
              </div>

              <div className="flex items-center gap-4 mt-3">
                <BsGithub className="text-blue-700" />
                Git Hub
              </div>
            </div>
          </div>
        </div>
        <div className="justify-end ">
          <button className="flex items-center gap-2 p-2 m-3 font-semibold text-red-500 bg-white border border-red-500 rounded-md">
            <BsArchiveFill /> Archive
          </button>
        </div>
      </div>
    </>
  );
}
export default General;
