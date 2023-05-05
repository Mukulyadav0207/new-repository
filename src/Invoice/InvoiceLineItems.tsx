import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { FaLayerGroup } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { AiFillFileUnknown } from "react-icons/ai";
import { FaUserCheck } from "react-icons/fa";
// import AddNote from "./AddNotes";
import { FaEdit } from "react-icons/fa";
import { AiFillFile } from "react-icons/ai";
import { FaCoins } from "react-icons/fa";
import { BsCurrencyRupee } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import { FaStickyNote } from "react-icons/fa";

import LineItems2 from "./LineItems2";
import {} from "react-icons/";
import {} from "react-icons/";
import {} from "react-icons/";
import LineItems from "./LineItems";

// import AlterRequest from "./AlterRequest";
// import EditLeave from "./EditLeave";

function InvoiceLineItems() {
  return (
    <>
      <div className="flex gap-2 mt-4 ">
        <div className=" gap-1 p-2 bg-white w-[450px] border rounded-lg">
          <div className="flex items-center font-bold">
            <p>Line Items</p> <FaEdit className="ml-[339px]" />
          </div>

          <div className="items-center p-2 mt-2 space-y-1 border rounded-lg bg-cyan-100">
            <div className="flex items-center gap-2">
              <AiFillFile />
              <p className="w-32 text-gray-400 "> Description</p>
              <p className="font-semibold ml-52"> ABC</p>
            </div>

            <div className="flex items-center gap-2">
              <FaCoins />
              <p className="w-32 text-gray-400">Amount</p>
              <p className="ml-40 font-semibold"> 60,000 INR</p>
            </div>
            <div className="flex items-center gap-2">
              <BsCurrencyRupee />
              <p className="w-32 text-gray-400"> Rate</p>
              <p className="font-semibold ml-[150px]"> 1,249 INR/hr</p>
            </div>
            <div className="flex items-center gap-2">
              <BsFillClockFill />
              <p className="w-32 text-gray-400">Hours</p>
              <p className="font-semibold ml-52"> 70hr</p>
            </div>
            <div className="flex items-center gap-2">
              <FaStickyNote />
              <p className="text-gray-400">Note</p>
            </div>
            <p className="ml-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nam
              rerum molestiae quam quibusdam, fugit labore enim doloremque
              perspiciatis veritatis explicabo exercitationem eum.
            </p>
          </div>
        </div>

        <div className=" gap-1 p-2 bg-white w-[450px] border rounded-lg">
          <div className="flex items-center font-bold">
            <p>Line Items</p> <FaEdit className="ml-[339px]" />
          </div>

          <div className="items-center p-2 mt-2 space-y-1 border rounded-lg bg-cyan-100 h-[254px]">
            <div className="flex items-center gap-2">
              <AiFillFile />
              <p className="w-32 text-gray-400 "> Description</p>
              <p className="font-semibold ml-52"> ABC</p>
            </div>

            <div className="flex items-center gap-2">
              <FaCoins />
              <p className="w-32 text-gray-400">Amount</p>
              <p className="ml-40 font-semibold"> 60,000 INR</p>
            </div>
           
            <div className="flex items-center gap-2">
              <FaStickyNote />
              <p className="text-gray-400">Note</p>
            </div>
            <p className="ml-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nam
              rerum molestiae quam quibusdam, fugit labore enim doloremque
              perspiciatis veritatis explicabo exercitationem eum.
            </p>
          </div>
        </div>

        <div className="ml-8 ">
            <LineItems2/>
            </div>
      </div>
    </>
  );
}
export default InvoiceLineItems;
