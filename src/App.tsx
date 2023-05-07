import React from "react";
import Sidebar from "./app/sideBar";
import Header from "./app/Header/HeaderList";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Dashboard from "./app/Dashboard/DashboardList";
import Employees from "./app/Employees/EmployeesList";
import EmployeeAction from "./app/Employees/EmployeesDetails";
import Projects from "./app/Projects/ProjectsList";
import Departments from "./app/Departments/DepartmentsList";
import Clients from "./app/Clients/ClientsList";
import Devices from "./app/Device/DevicesList";
import Calendar from "./app/Calendar/CalendarList";
import Leaves from "./app/Leaves/LeavesList";
import Invoices from "./app/Invoices/Invoices";
import Reports from "./app/Reports/ReportsList";
import SettingsMenu from "./app/Settings/SettingsDetails";
import DeviceAction from "./app/Device/DevicesDetails";
import ClientAction from "./app/Clients/ClientsDetails";
import LeaveAction from "./app/Leaves/LeavesDetails";
import InvoiceAction from "./app/Invoices/InvoicesDetails";

const App = () => {
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
                <Route path="/*" element={<Dashboard />}></Route>

                <Route path="/employees" element={<Employees />}></Route>
                <Route
                  path="/employeeAction/*"
                  element={<EmployeeAction />}
                ></Route>
                <Route path="/projects" element={<Projects />}></Route>

                <Route path="/departments" element={<Departments />}></Route>

                <Route path="/clients" element={<Clients />}></Route>
                <Route path="/actions" element={<ClientAction />}></Route>

                <Route path="/devices" element={<Devices />}></Route>
                <Route path="/action/*" element={<DeviceAction />}></Route>

                <Route path="/calendar" element={<Calendar />}></Route>

                <Route path="/leaves/*" element={<Leaves />}></Route>
                <Route path="/LeaveActions/*" element={<LeaveAction />}></Route>

                <Route path="/invoices/*" element={<Invoices />}></Route>
                <Route
                  path="/invoiceAction/*"
                  element={<InvoiceAction />}
                ></Route>
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
