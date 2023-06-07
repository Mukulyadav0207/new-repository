import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { IoMdInformationCircle } from "react-icons/io";
import { FaUmbrella } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { BsCalculatorFill } from "react-icons/bs";
import { Routes, NavLink, Navigate, Outlet } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { NavLinkCSS } from "../dashboard/DashboardList";
import { useLocation } from "react-router-dom";
import Modal from "./LeavesAddLeavesModal";
import Filter from "./LeavesFilterModal";


function Leaves() {
  const location = useLocation();
  const path = location.pathname;

  

  return (
    <>
      <div className="flex items-center font-bold justify-between">
        <div> Leaves</div>
        {path === "/app/leaves/allleaves" ? (
          <div className="flex gap-5">
            <div className="relative ml-36 ">
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
              <Modal />
            </div>
          </div>
        ) : path === "/app/leaves/holidays" ? (
          <div>
            <div className="flex gap-5">
              <div className="relative ml-36 ">
                <input
                  className="rounded-md p-2 w-[400px]"
                  type="text"
                  placeholder="Search keyword"
                />
                <BsSearch className="absolute -translate-y-1/2 right-1 top-1/2 " />
              </div>

              <div>
                <Modal />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex gap-5">
              <div className="relative ml-36 ">
                <input
                  className="rounded-md p-2 w-[400px] "
                  type="text"
                  placeholder="Search keyword"
                />
                <BsSearch className="absolute -translate-y-1/2 right-1 top-1/2 " />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-4 font-bold">
        <NavLink to="allleaves" style={NavLinkCSS}>
          <div className="flex flex-row items-center justify-center gap-1 p-2 ">
            <div>
              <IoMdInformationCircle />
            </div>
            <div>All leaves</div>
          </div>
        </NavLink>
        <NavLink to="holidays" style={NavLinkCSS}>
          <div className="flex flex-row items-center justify-center gap-1 p-2 ">
            <div>
              <FaUmbrella />
            </div>
            <div>Holidays</div>
          </div>
        </NavLink>
        <NavLink to="settings" style={NavLinkCSS}>
          <div className="flex flex-row items-center justify-center gap-1 p-2 ">
            <div>
              <IoMdSettings />
            </div>
            <div>Settings</div>
          </div>
        </NavLink>
        <NavLink to="deductions" style={NavLinkCSS}>
          <div className="flex flex-row items-center justify-center gap-1 p-2 ">
            <div>
              <BsCalculatorFill />
            </div>

            <div>Deductions and Encashment</div>
          </div>
        </NavLink>
        <NavLink to="overtime" style={NavLinkCSS}>
          <div className="flex flex-row items-center justify-center gap-1 p-2 ">
            <div>
              <FaBusinessTime />
            </div>

            <div>Overtime</div>
          </div>
        </NavLink>
      </div>

      <div className="items-start ">
        <hr className="h-px border-0 bg-zinc-400 " />
      </div>
      <Outlet />
      <div>
        <Routes>{/* <Route index element={<AllLeaves />}></Route> */}</Routes>
      </div>
    </>
  );
}
export default Leaves;
