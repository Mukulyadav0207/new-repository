import React from "react";
import Sidebar from "./sideBar";
import Header from "./header";
import { Routes, Route, BrowserRouter } from "react-router-dom";

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
import SettingsMenu from "./account/SettingPage";
import DeviceAction from "./Device/action";
import ClientAction from "./client/Actions";


const App: React.FC = () => {
  return (
    <>
      <div className="absolute items-center justify-center overflow-hidden">
        <div className="flex flex-row mt-4">
          <div>
            <Sidebar />
          </div>
          <div className="  flex flex-col  bg-slate-300 w-[1100px] h-[650px]">
            <div>
              <Header />
            </div>
            <div className="p-5">
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>

                <Route path="/employees" element={<Employees />}></Route>

                <Route path="/projects" element={<Projects />}></Route>

                <Route path="/departments" element={<Departments />}></Route>

                <Route path="/clients/*" element={<Clients />}></Route>
                <Route path="/actions/*" element={<ClientAction />}></Route>

                
                <Route path="/devices/*" element={<Devices />}></Route>
                <Route path="/action/*" element={<DeviceAction />}></Route>

                
                <Route path="/calendar" element={<Calendar />}></Route>

                <Route path="/leaves" element={<Leaves />}></Route>
                <Route path="/invoices" element={<Invoices />}></Route>
                <Route path="/reports" element={<Reports />}></Route>

                <Route path="/settings/*" element={<SettingsMenu />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;


