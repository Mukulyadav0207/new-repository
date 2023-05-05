import React, { useState } from "react";
import { Link } from "react-router-dom";
import InvoiceGeneral from "./InvoiceGeneral";
import InvoiceTimeline from "./InvoiceTimeline";
import InvoiceLineItems from "./InvoiceLineItems";
import { IoMdInformationCircle } from "react-icons/io";
import { AiOutlineApartment } from "react-icons/ai";
import { SiSpringsecurity } from "react-icons/si";
import { FaReceipt } from "react-icons/fa";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";

function InvoiceAction() {
  const handleModuleClick = (module) => {
    setCurrentModule(module);
  };

  const [currentModule, setCurrentModule] = useState("General Detail");

  let settingsContent;
  switch (currentModule) {
    case "Timeline":
      settingsContent = <InvoiceTimeline />;
      break;

    default:
      settingsContent = <InvoiceGeneral />;
      break;
  }

  return (
    <>
      <div className="flex items-center">
        <div> Invoices</div>
        <div className="text-xl">
          <IoIosArrowForward />
        </div>
        <div className="text-blue-700">{currentModule}</div>
      </div>

      <div className="flex gap-4 mt-3 font-bold">
        <Link to="./">
          <button
            onClick={() => {
              handleModuleClick("General Detail");
            }}
            className={
              currentModule === "General Detail"
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-32  font-bold"
                : "text-gray-400 "
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <IoMdInformationCircle />
              </div>
              <div>General</div>
            </div>
          </button>
        </Link>
        <Link to="InvoiceAction/lineItems">
          <button
            onClick={() => {
              handleModuleClick("LineItems");
            }}
            className={
              currentModule === "LineItems"
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-32  font-bold"
                : "text-gray-400"
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <FaReceipt />
              </div>
              <div>Line Items</div>
            </div>
          </button>
        </Link>
        <Link to="InvoiceAction/timeline">
          <button
            onClick={() => {
              handleModuleClick("Timeline");
            }}
            className={
              currentModule === "Timeline"
                ? "border border-b-4 border-t-0 border-r-0 border-l-0 border-blue-700 w-32  font-bold"
                : "text-gray-400"
            }
          >
            <div className="flex flex-row items-center justify-center gap-1 p-2 ">
              <div>
                <AiOutlineApartment />
              </div>
              <div>Timeline</div>
            </div>
          </button>
        </Link>
      </div>
      <div className="items-start ">
        <hr className="h-px border-0 bg-zinc-400 " />
      </div>

      <Routes>
        <Route path="/" element={<InvoiceGeneral />}></Route>
        <Route
          path="/InvoiceAction/timeline"
          element={<InvoiceTimeline />}
        ></Route>
     <Route path="/InvoiceAction/lineItems/" element={<InvoiceLineItems />}></Route> 
      </Routes>
    </>
  );
}
export default InvoiceAction;

//  <Route path="/" element={<General />}></Route>
//         <Route path="action/timeline" element={<Timeline />}></Route>
//         <Route path="timeline/incident" element={<Incident />}></Route>
