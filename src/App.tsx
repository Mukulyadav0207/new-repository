import React from "react";
import Sidebar from "./sideBar";
import Header from "./header";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import Employees from "./Employees";

import Projects from "./Projects";
import Departments from "./Departments";
import Clients from "./Clients";
import Devices from "./Devices";
import Calendar from "./Calendar";
import Leaves from "./Leaves";
import Invoices from "./Invoices";
import Reports from "./Reports";

const App: React.FC = () => {
  return (
    <div className=" bg-gray-600 w-fit ml-10">
      <div className="flex flex-row mt-4">
        <div>
          <Sidebar />
        </div>
        <div className="flex flex-col bg-slate-300">
          <div>
            <Header />
          </div>
          <div className="p-5">
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>

              <Route path="/employees" element={<Employees />}></Route>

              <Route path="/projects" element={<Projects />}></Route>

              <Route path="/departments" element={<Departments />}></Route>

              <Route path="/clients" element={<Clients />}></Route>

              <Route path="/devices" element={<Devices />}></Route>

              <Route path="/calendar" element={<Calendar />}></Route>

              <Route path="/leaves" element={<Leaves />}></Route>
              <Route path="/invoices" element={<Invoices />}></Route>
              <Route path="/reports" element={<Reports />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;


