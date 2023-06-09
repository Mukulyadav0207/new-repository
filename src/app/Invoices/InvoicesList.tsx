import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import AddInvoice from "./InvoicesAddInvoiceModal";
import Filter from "./InvoicesFilterModal";
import { GoDiffAdded } from "react-icons/go";
import { FaEdit } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";

import { receiveInvoicesData } from "../../redux/actions/InvoicesActions";
import DumbChip from "../sharedComponents/ChipComponent";


function Invoices() {

const invoices = useSelector((state) => state.invoices.data);
const dispatch = useDispatch(); 


 useEffect(() => {
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
       reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
     {
       invoiceNumber: "XXXXXXXXXX",
       project: "ABC",
       amount: "12,412 INR",
       dueDate: "20/12/2022",
       sentOn: "30/12/2022",
       sentBy: "Pratik Singh",
       status: "Payment Defaulted",
       ttl: "02 Days",
       reason:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit",
     },
     {
       invoiceNumber: "XXXXXXXXXX",
       project: "ABC",
       amount: "12,412 INR",
       dueDate: "20/12/2022",
       sentOn: "30/12/2022",
       sentBy: "Pratik Singh",
       status: "Payment Released By Client",
       ttl: "02 Days",
       reason:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit",
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
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit",
     },
   ];

   dispatch(receiveInvoicesData(invoices));
 }, [dispatch]);






  
  return (
    <div>
      <div className="flex ">
        <div>
          <h3 className="font-bold ">Invoices</h3>
        </div>

        <div className="flex justify-end flex-grow gap-4 ">
          <div className="relative flex justify-end ">
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
            <AddInvoice />
          </div>
        </div>
      </div>

      <div className="w-[1060px]   overflow-hidden text-x ">
        <table className="mt-4   h-[100px] w-[1070px] ">
          <thead>
            <tr className="bg-slate-100">
              <th className="px-2 py-2 font-semibold">Invoice Number</th>
              <th className="px-2 py-2 font-semibold">Project </th>
              <th className="px-2 py-2 font-semibold">Amount </th>
              <th className="px-2 py-2 font-semibold">Due Dates </th>
              <th className="px-2 py-2 font-semibold">Sent On</th>
              <th className="px-2 py-2 font-semibold">Sent By</th>
              <th className="px-2 py-2 font-semibold">Status</th>
              <th className="px-2 py-2 font-semibold">TTL</th>
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
                <td className="flex items-center justify-center px-2 py-[15px] border">
                  <DumbChip
                    label={invoice.status}
                    backgroundColor={
                      index === 0 || index === 2 || index === 8
                        ? "#00D100"
                        : index === 6
                        ? "#FFFF00"
                        : index === 7
                        ? "#0062CC"
                        : index === 4
                        ? "#D5D5D5"
                        : index === 3
                        ? "#003D80 "
                        : index === 5
                        ? "#FFA500"
                        : "#FE0012"
                    }
                    textColor={index === 6 || index === 4 ? "black " : "white"}
                  />
                </td>
                <td className="px-1 py-2 font-light border">{invoice.ttl}</td>
                <td className="px-2 py-2 border w-[260px]">{invoice.reason}</td>

                <td className="px-2 py-2 border">
                  <div className="flex items-center  justify-center gap-1">
                    <Link to="/app/invoices/details/1">
                      <button className="text-gray-500 hover:text-black mt-1.5">
                        <AiFillEye />
                      </button>
                    </Link>
                    <button className="text-xs ">
                      <FaEdit />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Invoices;
