import { AiTwotoneStar } from "react-icons/ai";
import { RxCounterClockwiseClock } from "react-icons/rx";

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import { GoDiffAdded } from "react-icons/go";
import { FaEdit } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";








const features = [
  {
    title: "Minimum Payment Time",
    revenue: "09 Days",
    icon1: AiTwotoneStar,
    inr: " In last 6 months ",
  },
  {
    title: "Maximum Payment Time",
    revenue: "09 Days",
    icon1: AiTwotoneStar,
    inr: " In last 6 months ",
  },
  {
    title: "Average Payment Time",
    revenue: "91 Hours",
    icon1: RxCounterClockwiseClock,
    inr: " In last 6 months ",
  },
];


 const invoices = [
   {
     invoiceNumber: "XXXXXXXXXX",
     project: "ABC",
     amount: "12,412 INR",
     dueDate: "20/12/2022",
     sentOn: "30/12/2022",
     sentBy: "Pratik Singh",
     status: "Invoice Sent",
     ttl: "02 Days",
     reason:
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur",
   },
   {
     invoiceNumber: "XXXXXXXXXX",
     project: "ABC",
     amount: "12,412 INR",
     dueDate: "20/12/2022",
     sentOn: "30/12/2022",
     sentBy: "Pratik Singh",
     status: "Draft",
     reason:
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur",
   },
   {
     invoiceNumber: "XXXXXXXXXX",
     project: "ABC",
     amount: "12,412 INR",
     dueDate: "20/12/2022",
     sentOn: "30/12/2022",
     sentBy: "Pratik Singh",
     status: "Invoice Sent",
     ttl: "02 Days",
     reason:
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur",
   },
   {
     invoiceNumber: "XXXXXXXXXX",
     project: "ABC",
     amount: "12,412 INR",
     dueDate: "20/12/2022",
     sentOn: "30/12/2022",
     sentBy: "Pratik Singh",
     status: "Payment Received In Bank",
     ttl: "02 Days",
     reason:
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur",
   },
   {
     invoiceNumber: "XXXXXXXXXX",
     project: "ABC",
     amount: "12,412 INR",
     dueDate: "20/12/2022",
     sentOn: "30/12/2022",
     sentBy: "Pratik Singh",
     status: "Payment Received In Account",
     ttl: "02 Days",
     reason:
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur",
   },
   {
     invoiceNumber: "XXXXXXXXXX",
     project: "ABC",
     amount: "12,412 INR",
     dueDate: "20/12/2022",
     sentOn: "30/12/2022",
     sentBy: "Pratik Singh",
     status: "Skipped",
     ttl: "02 Days",
     reason:
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit",
   },
 ];




function ProjectsInvoices() {
  return (
    <>
      <div className="mt-6 ">
        <dl className="grid max-w-xl grid-cols-3 gap-x-38 ">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative bg-white border rounded-md pl-9 w-[160px] h-[90px] "
            >
              <dt className="mt-3 text-gray-900 mb-2 text-x">
                <div className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-md left-2 ">
                  <feature.icon1
                    className="w-4 h-4 text-[#1A13CB] "
                    aria-hidden="true"
                  />
                </div>
                <div className="font-semibold text-center text-gray-600 ">
                  {feature.title}
                </div>
              </dt>
              <dd className="font-bold text-center text-black leading-">
                {feature.revenue}
              </dd>

              <div>
                <p className=" mt-2 mb-3 font-bold text-x -ml-7 text-[#1A13CB]">
                  {feature.inr}
                </p>
              </div>
            </div>
          ))}
        </dl>
      </div>

      <div className="w-[1060px]   overflow-hidden text-x mt-4  ">
        <table className="mt-6   h-[100px] w-[1070px] ">
          <thead>
            <tr className="bg-slate-100">
              <th className="px-2 py-2 font-semibold">Invoice Number</th>
              <th className="px-2 py-2 font-semibold">Project </th>
              <th className="px-2 py-2 font-semibold">Amount </th>
              <th className="px-2 py-2 font-semibold">Due Dates </th>
              <th className="px-2 py-2 font-semibold">Sent On</th>
              <th className="px-2 py-2 font-semibold">Sent By</th>
              <th className="px-2 py-2 font-semibold">Status</th>

              <th className="px-2 py-2 font-semibold">Reason</th>

              <th className="px-2 py-2 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white text-[#A59F9F]">
            {invoices.map((invoice, index) => (
              <tr key={index}>
                <td className="flex items-center justify-center gap-1">
                  <GoDiffAdded />
                  {invoice.invoiceNumber}
                </td>
                <td className="px-2 py-2 border "> {invoice.project}</td>
                <td className="px-2 py-2 border">{invoice.amount}</td>
                <td className="px-1 py-2 font-light border">
                  {invoice.dueDate}
                </td>
                <td className="px-2 py-2 border">{invoice.sentOn}</td>

                <td className="px-2 py-2 border">{invoice.sentBy}</td>
                <td className="flex items-center justify-center px-2 py-4 border">
                  <p
                    className={` 
            `}
                  >
                    {invoice.status}
                  </p>
                </td>

                <td className="px-2 py-2 border w-[260px]">{invoice.reason}</td>

                <td className="px-2 py-2 border">
                  <div className="flex items-center justify-center">
                    <button className="text-gray-500 hover:text-black">
                      <AiFillEye />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default ProjectsInvoices;
