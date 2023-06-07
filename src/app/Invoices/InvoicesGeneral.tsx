import React from "react";

import { BsFillCalendarCheckFill } from "react-icons/bs";

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
import Button from "../sharedComponents/ButtonComponent";



const features = [
  {
    title: "INV-120",
    icon: EditInvoice,

    data: [
      { icon1: IoIosListBox, label: "Project", value: "ABC" },
      { icon1: FaCoins, label: "Amount", value: "60,000 INR" },
      {
        icon1: BsFillCalendarCheckFill,
        label: "Status",
        value: "Payment Released By Client",
      },
      { icon1: FaTelegramPlane, label: "Send By", value: "Dheeraj Sharma" },
      { icon1: BsFillCalendarPlusFill, label: "Send On", value: "10/12/2022" },
      { icon1: TbCalendarTime, label: "Due Date", value: "30/12/2022" },
      {
        icon1: BsFillCalendarCheckFill,
        label: "Payment Received On",
        value: "01/01/2022",
      },
    ],
  },
  {
    title: "Notes",
    icon: AddNote,
    icon8: FaStickyNote,

    data: [
      {
      
        label: "",
        value:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus esse quod autem assumenda quae voluptate quam perspiciatis quis itaque laboriosam.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis distinctio dolores sunt commodi quibusdam nam ullam cupiditate ipsam impedit veritatis? Sit placeat ipsam quas veniam nulla assumenda ullam officia laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsa nostrum. ",
      },
    ],
  },
];



const invoices = [
  {
    icon1: VscFilePdf,
    icon2: RxCrossCircled,

    datas: [
      {
        "File Name": "INV-012",
        "Uploaded On": "10/12/2022",
      },
    ],
  },
  {
    icon1: VscFilePdf,
    icon2: RxCrossCircled,

    datas: [
      {
        "File Name": "INV-012",
        "Uploaded On": "10/12/2022",
      },
    ],
  },
];







function InvoiceGeneral() {
  return (
    <>
      <div className="flex gap-3 mt-6">
        {features.map((feature, index) => (
          <div className="   p-4 bg-white w-[450px] h-[310px] border rounded-lg ">
            <div className="flex items-center justify-between text-xl font-bold">
              {index === 1 ? <feature.icon8 className="" /> : ""}
              <p className="text-[#000000]">{feature.title}</p>
              <feature.icon />
            </div>
            <div className="   rounded-md  space-y-2.5  h-[250px] bg-[#E9F8F8] p-3">
              {feature.data.map((item, index) => (
                <div key={index} className="flex justify-between">
                  {item.icon1 ? (
                    <p className="flex items-center gap-1  ">
                      <item.icon1 />
                      <p className="text-[#A59F9F]"> {item.label}</p>
                    </p>
                  ) : (
                    <p className="text-[#A59F9F]">{item.label}</p>
                  )}
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div>
          {" "}
          <Button
            label={"Download Invoice"}
            border="1px solid "
            backgroundColor="#1A13CB"
            textColor="white"
            padding="5px 4px"
          />
        </div>
      </div>

      <h5 className="mt-6 mb-3 font-bold">Invoices</h5>
      <div className="flex gap-3">
        {invoices.map((invoice, datas) => (
          <div className="flex ">
            <div className="flex gap-5 p-2 bg-white border border-gray-400 rounded-l-lg w-[399px] h-[80px]">
              <div className="flex gap-2 text-5xl ">
                <invoice.icon1 className="text-blue-600 " />
              </div>
              <div className="flex-col gap-2">
                {invoice.datas.map((item, index) => (
                  <>
                    {Object.entries(item).map(([key, value]) => {
                      return (
                        <p key={key} className="flex justify-between">
                          <div className="flex gap-16 ">
                            <p className="flex  w-[100px] font-semibold text-[#4B5563]">
                              {key}
                            </p>
                            <p className="font-semibold "> {value}</p>
                          </div>
                        </p>
                      );
                    })}
                  </>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center w-16 gap-5 p-2 text-3xl text-red-600 bg-white border border-l-0 border-gray-400 rounded-r-lg">
              <invoice.icon2 />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default InvoiceGeneral;
