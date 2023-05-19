import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Modal from "./DevicesAddModal";
import Filter from "./DevicesFilterModal";
import { Link } from "react-router-dom";
import { receiveDevicesData } from "../../redux/actions/DevicesActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { IoIosEye } from "react-icons/io";

function Device() {
  const devices = useSelector((state) => state.devices.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const devices = [
      {
        "Model Name": "ABC",
        "Device Category": "Mobile phone",
        "Purchased Date": "02/06/2025",
        "Warranty Expire Date": "02/06/2025",
        "Brand Name": "Vivo",
        "Current Assignee": "Aditi Mishra",
        Status: "Function",
        Notes:
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, rerum.",
        Actions: IoIosEye,
      },
      {
        "Model Name": "ABC",
        "Device Category": "Mobile phone",
        "Purchased Date": "02/06/2025",
        "Warranty Expire Date": "02/06/2025",
        "Brand Name": "Vivo",
        "Current Assignee": "Aditi Mishra",
        Status: "Limited Functionality",
        Notes:
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, rerum.",
        Actions: IoIosEye,
      },
      {
        "Model Name": "ABC",
        "Device Category": "Mobile phone",
        "Purchased Date": "02/06/2025",
        "Warranty Expire Date": "02/06/2025",
        "Brand Name": "Vivo",
        "Current Assignee": "Aditi Mishra",
        Status: "Dysfunctional",
        Notes:
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, rerum.",
        Actions: IoIosEye,
      },
      {
        "Model Name": "ABC",
        "Device Category": "Mobile phone",
        "Purchased Date": "02/06/2025",
        "Warranty Expire Date": "02/06/2025",
        "Brand Name": "Vivo",
        "Current Assignee": "Aditi Mishra",
        Status: "Limited Functionality",
        Notes:
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, rerum.",
        Actions: IoIosEye,
      },
      {
        "Model Name": "ABC",
        "Device Category": "Mobile phone",
        "Purchased Date": "02/06/2025",
        "Warranty Expire Date": "02/06/2025",
        "Brand Name": "Vivo",
        "Current Assignee": "Aditi Mishra",
        Status: "Function",
        Notes:
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, rerum.",
        Actions: IoIosEye,
      },
      {
        "Model Name": "ABC",
        "Device Category": "Mobile phone",
        "Purchased Date": "02/06/2025",
        "Warranty Expire Date": "02/06/2025",
        "Brand Name": "Vivo",
        "Current Assignee": "Aditi Mishra",
        Status: "Function",
        Notes:
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, rerum.",
        Actions: IoIosEye,
      },
      {
        "Model Name": "ABC",
        "Device Category": "Mobile phone",
        "Purchased Date": "02/06/2025",
        "Warranty Expire Date": "02/06/2025",
        "Brand Name": "Vivo",
        "Current Assignee": "Aditi Mishra",
        Status: "Dysfunctional",
        Notes:
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, rerum.",
        Actions: IoIosEye,
      },
      {
        "Model Name": "ABC",
        "Device Category": "Mobile phone",
        "Purchased Date": "02/06/2025",
        "Warranty Expire Date": "02/06/2025",
        "Brand Name": "Vivo",
        "Current Assignee": "Aditi Mishra",
        Status: "Limited Functionality",
        Notes:
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, rerum.",
        Actions: IoIosEye,
      },
      {
        "Model Name": "ABC",
        "Device Category": "Mobile phone",
        "Purchased Date": "02/06/2025",
        "Warranty Expire Date": "02/06/2025",
        "Brand Name": "Vivo",
        "Current Assignee": "Aditi Mishra",
        Status: "Function",
        Notes:
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, rerum.",
        Actions: IoIosEye,
      },
    ];

    dispatch(receiveDevicesData(devices));
  }, [dispatch]);

  return (
    <>
      <div className=" h-[600px]">
        <div className="flex ">
          <div>
            <h3 className="font-bold ">Device List</h3>
          </div>

          <div className="flex justify-end flex-grow gap-4 ">
            <div className="relative ml-36 ">
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
              <Modal />
            </div>
          </div>
        </div>
        <div className="w-[1060px]  h-[400px]">
          <table className="mt-4 border-collapse table-auto h-[400px] text-x">
            <thead>
              <tr className="bg-slate-100">
                <th className="px-4 py-2 font-semibold">Model Name</th>
                <th className="px-4 py-2 font-semibold">Device Category </th>
                <th className="px-4 py-2 font-semibold">Purchased Date</th>
                <th className="px-4 py-2 font-semibold">
                  Warranty Expire Date
                </th>
                <th className="px-4 py-2 font-semibold">Brand Name</th>
                <th className="px-4 py-2 font-semibold">Current Assignee</th>
                <th className="px-4 py-2 font-semibold">Status</th>
                <th className="px-4 py-2 font-semibold">Notes</th>
                <th className="px-4 py-2 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white text-[#A59F9F]">
              {devices.map((device, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border">{device["Model Name"]}</td>
                  <td className="px-4 py-2 border">
                    {device["Device Category"]}
                  </td>
                  <td className="px-4 py-2 border">
                    {device["Purchased Date"]}
                  </td>
                  <td className="px-4 py-2 border">
                    {device["Warranty Expire Date"]}
                  </td>
                  <td className="px-4 py-2 border">{device["Brand Name"]}</td>
                  <td className="px-4 py-2 border">
                    {device["Current Assignee"]}
                  </td>
                  <td className="px-4 py-2 border">
                    <button
                      className={`px-2   border rounded-full 
              ${
                index === 2 || index === 3 || index === 7
                  ? "bg-[#FFFF00] text-black "
                  : index === 0 || index === 4 || index === 5 || index === 8
                  ? "bg-[#00D100] text-white"
                  : "bg-[#FE0012] text-white"
              } `}
                    >
                      {device.Status}
                    </button>
                  </td>
                  <td className="px-4 py-2 border w-[220px]">{device.Notes}</td>
                  <td className="px-4 py-2 border">
                    <Link to="/devices/details/1">
                      <button className="text-gray-500 hover:text-black">
                        <device.Actions />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Device;
