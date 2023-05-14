import React from "react";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import AddInvoice from "./InvoicesAddInvoiceModal";
import Filter from "./InvoicesFilterModal";
import { GoDiffAdded } from "react-icons/go";
import { FaEdit } from "react-icons/fa";

function Invoices() {
  return (
    <div>
      <div className="flex ">
        <div>
          <h3 className="font-bold ">Invoices</h3>
        </div>

        <div className="flex justify-end flex-grow gap-4 ">
          <div className="relative flex justify-end ">
            <input
              className="rounded-md "
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
          <tbody className="bg-white">
            <tr>
              <td className="flex items-center gap-1 px-2 py-2 border">
                <GoDiffAdded />
                XXXXXXXXXX
              </td>
              <td className="px-2 py-2 border ">ABC</td>
              <td className="px-2 py-2 border">12,412 INR</td>
              <td className="px-1 py-2 font-light border">20/12/2022</td>
              <td className="px-2 py-2 border">30/12/2022</td>

              <td className="px-2 py-2 border">Pratik Singh</td>
              <td className="flex items-center justify-center px-2 py-4 border">
                <button className="px-2 bg-green-400 border rounded-full ">
                  Invoice Sent
                </button>
              </td>
              <td className="px-1 py-2 font-light border">02 Days</td>
              <td className="px-2 py-2 border w-[260px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur
              </td>

              <td className="px-2 py-2 border">
                <div className="flex items-center gap-1">
                  <Link to="/invoices/details/1">
                    <button className="text-gray-500 hover:text-black">
                      <AiFillEye />
                    </button>
                  </Link>
                  <button className="text-xs ">
                    <FaEdit />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-1 px-2 py-2 border">
                <GoDiffAdded />
                XXXXXXXXXX
              </td>
              <td className="px-2 py-2 border ">ABC</td>
              <td className="px-2 py-2 border">12,412 INR</td>
              <td className="px-1 py-2 font-light border">20/12/2022</td>
              <td className="px-2 py-2 border">30/12/2022</td>
              <td className="px-2 py-2 border">Pratik Singh</td>
              <td className="flex items-center justify-center w-auto px-2 py-4 border">
                <button className="px-2 text-black bg-red-500 border rounded-full ">
                  Draft
                </button>
              </td>
              <td className="px-1 py-2 font-light border">02 Days</td>
              <td className="px-2 py-2 border">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </td>

              <td className="px-2 py-2 border">
                <div className="flex items-center gap-1">
                 
                    <button className="text-gray-500 hover:text-black">
                      <AiFillEye />
                    </button>
          
                  <button className="text-xs ">
                    <FaEdit />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-1 px-2 py-2 border">
                <GoDiffAdded />
                XXXXXXXXXX
              </td>
              <td className="px-2 py-2 border ">ABC</td>
              <td className="px-2 py-2 border">12,412 INR</td>
              <td className="px-1 py-2 font-light border">20/12/2022</td>
              <td className="px-2 py-2 border">30/12/2022</td>
              <td className="px-2 py-2 border">Pratik Singh</td>
              <td className="flex items-center justify-center px-2 py-4 border">
                <button className="px-2 text-white bg-green-500 border rounded-full ">
                  Invoice Sent
                </button>
              </td>
              <td className="px-1 py-2 font-light border">02 Days</td>
              <td className="px-2 py-2 border ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur
              </td>

              <td className="px-2 py-2 border">
                <div className="flex items-center gap-1">
                 
                    <button className="text-gray-500 hover:text-black">
                      <AiFillEye />
                    </button>
            
                  <button className="text-xs ">
                    <FaEdit />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-1 px-2 py-2 border">
                <GoDiffAdded />
                XXXXXXXXXX
              </td>
              <td className="px-2 py-2 border ">ABC</td>
              <td className="px-2 py-2 border">12,412 INR</td>
              <td className="px-1 py-2 font-light border">20/12/2022</td>
              <td className="px-2 py-2 border">30/12/2022</td>

              <td className="px-2 py-2 border">Pratik Singh</td>
              <td className="flex items-center justify-center w-auto px-2 py-4 border">
                <button className="px-2 text-black border rounded-full bg-violet-600 ">
                  Payment Received In Account
                </button>
              </td>
              <td className="px-1 py-2 font-light border">02 Days</td>
              <td className="px-2 py-2 border">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </td>

              <td className="px-2 py-2 border">
                <div className="flex items-center gap-1">
              
                    <button className="text-gray-500 hover:text-black">
                      <AiFillEye />
                    </button>
              
                  <button className="text-xs ">
                    <FaEdit />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-1 px-2 py-2 border">
                <GoDiffAdded />
                XXXXXXXXXX
              </td>
              <td className="px-2 py-2 border ">ABC</td>
              <td className="px-2 py-2 border">12,412 INR</td>
              <td className="px-1 py-2 font-light border">20/12/2022</td>
              <td className="px-2 py-2 border">30/12/2022</td>

              <td className="px-2 py-2 border">Pratik Singh</td>
              <td className="flex items-center justify-center px-2 py-4 border">
                <button className="px-2 text-white bg-orange-500 border rounded-full ">
                  Skipped
                </button>
              </td>
              <td className="px-1 py-2 font-light border">02 Days</td>
              <td className="px-2 py-2 border">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur
              </td>

              <td className="px-2 py-2 border">
                <div className="flex items-center gap-1">
                
                    <button className="text-gray-500 hover:text-black">
                      <AiFillEye />
                    </button>
                
                  <button className="text-xs ">
                    <FaEdit />
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <td className="flex items-center gap-1 px-2 py-2 border">
                <GoDiffAdded />
                XXXXXXXXXX
              </td>
              <td className="px-2 py-2 border ">ABC</td>
              <td className="px-2 py-2 border">12,412 INR</td>
              <td className="px-1 py-2 font-light border">20/12/2022</td>
              <td className="px-2 py-2 border">30/12/2022</td>

              <td className="px-2 py-2 border">Pratik Singh</td>
              <td className="flex items-center justify-center px-2 py-4 border">
                <button className="px-2 bg-yellow-400 border rounded-full ">
                  Payment Defaulted
                </button>
              </td>
              <td className="px-1 py-2 font-light border">02 Days</td>
              <td className="px-2 py-2 border">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur
              </td>

              <td className="px-2 py-2 border">
                <div className="flex items-center gap-1">
                 
                    <button className="text-gray-500 hover:text-black">
                      <AiFillEye />
                    </button>
                  
                  <button className="text-xs ">
                    <FaEdit />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-1 px-2 py-2 border">
                <GoDiffAdded />
                XXXXXXXXXX
              </td>
              <td className="px-2 py-2 border ">ABC</td>
              <td className="px-2 py-2 border">12,412 INR</td>
              <td className="px-1 py-2 font-light border">20/12/2022</td>
              <td className="px-2 py-2 border">30/12/2022</td>

              <td className="px-2 py-2 border">Pratik Singh</td>
              <td className="flex items-center justify-center px-2 py-4 border">
                <button className="px-2 text-white border rounded-full bg-violet-800 ">
                  Payment Released By Client
                </button>
              </td>
              <td className="px-1 py-2 font-light border">02 Days</td>
              <td className="px-2 py-2 border">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </td>

              <td className="px-2 py-2 border">
                <div className="flex items-center gap-1">
                  
                    <button className="text-gray-500 hover:text-black">
                      <AiFillEye />
                    </button>
           
                  <button className="text-xs ">
                    <FaEdit />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-1 px-2 py-2 border">
                <GoDiffAdded />
                XXXXXXXXXX
              </td>
              <td className="px-2 py-2 border ">ABC</td>
              <td className="px-2 py-2 border">12,412 INR</td>
              <td className="px-1 py-2 font-light border">20/12/2022</td>
              <td className="px-2 py-2 border">30/12/2022</td>

              <td className="px-2 py-2 border">Pratik Singh</td>
              <td className="flex items-center justify-center w-auto px-2 py-4 border">
                <button className="w-32 px-2 text-black bg-yellow-400 border rounded-full">
                  Limited functionality
                </button>
              </td>
              <td className="px-1 py-2 font-light border">02 Days</td>
              <td className="px-2 py-2 border ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur
              </td>

              <td className="px-2 py-2 border">
                <div className="flex items-center gap-1">
               
                    <button className="text-gray-500 hover:text-black">
                      <AiFillEye />
                    </button>
             
                  <button className="text-xs ">
                    <FaEdit />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-1 px-2 py-2 border">
                <GoDiffAdded />
                XXXXXXXXXX
              </td>
              <td className="px-2 py-2 border ">ABC</td>
              <td className="px-2 py-2 border">12,412 INR</td>
              <td className="px-1 py-2 font-light border">20/12/2022</td>
              <td className="px-2 py-2 border">30/12/2022</td>

              <td className="px-2 py-2 border">Pratik Singh</td>
              <td className="flex items-center justify-center w-auto px-2 py-4 border">
                <button className="w-32 px-2 text-black bg-green-400 border rounded-full">
                  Invoice Sent
                </button>
              </td>
              <td className="px-1 py-2 font-light border">02 Days</td>
              <td className="px-2 py-2 border ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur
              </td>

              <td className="px-2 py-2 border">
                <div className="flex items-center gap-1">
                
                    <button className="text-gray-500 hover:text-black">
                      <AiFillEye />
                    </button>
               
                  <button className="text-xs ">
                    <FaEdit />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Invoices;
