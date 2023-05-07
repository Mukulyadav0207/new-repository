import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { FaLayerGroup } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { AiFillFileUnknown } from "react-icons/ai";
import { FaUserCheck } from "react-icons/fa";
// import AddNote from "./AddNotes";
import { IoIosListBox } from "react-icons/io";
import { FaCoins } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { BsFillCalendarPlusFill } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { FaStickyNote } from "react-icons/fa";
import EditInvoice from "./InvoicesEditInvoice";
import AddNote from "./AddNotes";
import { VscFilePdf } from "react-icons/vsc";
import { RxCrossCircled } from "react-icons/rx";
import {  } from "react-icons/bi";
import {  } from "react-icons/bi";
import {  } from "react-icons/bi";



function InvoiceGeneral() {
  return (
    <>
      <div className="flex gap-2 mt-4 ">
        <div className=" gap-1 p-2 bg-white w-[450px] border rounded-lg">
          <div className="flex items-center text-xl ">
            <h2 className="w-20 font-bold ">INV-120</h2>
            <EditInvoice />
          </div>

          <div className="flex-col items-center p-2 space-y-4 text-sm font-semibold border rounded-lg bg-cyan-100">
            <div className="flex items-center gap-2 ">
              <IoIosListBox />
              <p className="w-32 text-gray-400 "> Project</p>
              <p className="ml-[205px]"> ABC</p>
            </div>

            <div className="flex items-center gap-2">
              <FaCoins />
              <p className="w-32 text-gray-400"> Amount</p>
              <p className="ml-[163px] "> 60,000 INR</p>
            </div>
            <div className="flex items-center gap-2">
              <BsFillCalendarCheckFill />
              <p className="w-32 text-gray-400 "> Status</p>
              <p className="ml-[57px] ">Payment Released By Client</p>
            </div>
            <div className="flex items-center gap-2">
              <FaTelegramPlane />
              <p className="w-32 text-gray-400"> Send By</p>
              <p className="ml-[132px]"> Dheeraj Sharma</p>
            </div>

            <div className="flex items-center gap-2">
              <BsFillCalendarPlusFill />
              <p className="w-32 text-gray-400"> Sent On</p>
              <p className="ml-[163px]"> 10/12/2022</p>
            </div>
            <div className="flex items-center gap-2">
              <TbCalendarTime />
              <p className="w-32 text-gray-400">Due Date</p>
              <p className="ml-[163px]"> 30/12/2022</p>
            </div>
            <div className="flex items-center gap-2">
              <BsFillCalendarCheckFill />
              <p className="text-gray-400 w-36">Payment Received On</p>
              <p className="ml-[150px]"> 01/01/2022</p>
            </div>
          </div>
        </div>

        <div className=" gap-1 p-2 bg-white w-[450px] border rounded-lg">
          <div className="flex items-center gap-1 text-xl font-bold ">
            <FaStickyNote /> <h2>Notes</h2> <AddNote />
          </div>

          <div className="items-center p-2 border rounded-lg bg-cyan-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            esse quod autem assumenda quae voluptate quam perspiciatis quis
            itaque laboriosam.lorem Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Officiis distinctio dolores sunt commodi quibusdam
            nam ullam cupiditate ipsam impedit veritatis? Sit placeat ipsam quas
            veniam nulla assumenda ullam officia laborum? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Dolores ipsa nostrum aliquam,
            laudantium unde nihil animi eos blanditiis provident .
          </div>
        </div>

        <div className="ml-10 ">
          <button className="w-32 py-1 text-xs text-white bg-blue-600 border rounded-md">
            Download Invoice
          </button>
        </div>
      </div>
      <h5 className="mt-8 mb-3 font-bold">Invoices</h5>
      <div className="flex gap-3">
        <div className="flex">
          <div className="flex gap-5 p-2 bg-white border border-gray-400 rounded-l-lg w-fit">
            <div className="flex gap-2 text-5xl ">
              <VscFilePdf className="text-blue-600 " />
            </div>
            <div className="flex-col gap-2">
              <div className="flex gap-16">
                <p>File Name</p>
                <p className="font-semibold"> INV-012</p>
              </div>
              <div className="flex gap-10">
                <p>Uploaded On</p>
                <p className="font-semibold">10/12/2022</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-16 gap-5 p-2 text-3xl text-red-600 bg-white border border-l-0 border-gray-400 rounded-r-lg">
            <RxCrossCircled />
          </div>
        </div>

        <div className="flex">
          <div className="flex gap-5 p-2 bg-white border border-gray-400 rounded-l-lg w-fit">
            <div className="flex gap-2 text-5xl ">
              <VscFilePdf className="text-blue-600 " />
            </div>
            <div className="flex-col gap-2">
              <div className="flex gap-16">
                <p>File Name</p>
                <p className="font-semibold"> INV-012</p>
              </div>
              <div className="flex gap-10">
                <p>Uploaded On</p>
                <p className="font-semibold">10/12/2022</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-16 gap-5 p-2 text-3xl text-red-600 bg-white border border-l-0 border-gray-400 rounded-r-lg">
            <RxCrossCircled />
          </div>
        </div>
      </div>
    </>
  );
}
export default InvoiceGeneral;
