import React, { useState, useEffect } from "react";
import Sidebar from "./app/SideBar";
import Header from "./app/Header/HeaderList";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import Dashboard from "./app/Dashboard/DashboardList";
import Employees from "./app/Employees/EmployeesList";
import EmployeesDetails from "./app/Employees/EmployeesDetails";
import Projects from "./app/Projects/ProjectsList";
import Departments from "./app/Departments/DepartmentsList";
import Clients from "./app/Clients/ClientsList";
import Devices from "./app/Device/DevicesList";
import Calendar from "./app/Calendar/CalendarList";
import Leaves from "./app/Leaves/LeavesList";
import Invoices from "./app/Invoices/InvoicesList";
import Reports from "./app/Reports/ReportsList";
import SettingsMenu from "./app/Settings/SettingsDetails";
import DeviceDetails from "./app/Device/DevicesDetails";
import ClientDetails from "./app/Clients/ClientsDetails";
import LeaveDetails from "./app/Leaves/LeavesDetails";
import LeaveGeneral from "./app/Leaves/LeavesGeneral";
import LeaveTimeline from "./app/Leaves/LeavesTimeline";
import InvoiceDetails from "./app/Invoices/InvoicesDetails";
import InvoiceGeneral from "./app/Invoices/InvoicesGeneral";
import InvoiceTimeline from "./app/Invoices/InvoiceTimeline";
import InvoiceLineItems from "./app/Invoices/InvoicesLineItems";
import ClientGeneral from "./app/Clients/ClientsGeneral";
import AllLeaves from "./app/Leaves/LeavesAllLeave";
import Holidays from "./app/Leaves/LeavesHoliday";

import Settings from "./app/Leaves/LeavesSetting";
import Deductions from "./app/Leaves/LeavesDeductionsAndEncashment";
import Overtime from "./app/Leaves/LeavesOvertime";

import General from "./app/Device/DevicesGeneral";
import Timeline from "./app/Device/DevicesTimiline";
import Incident from "./app/Device/DevicesIncidents";

import EmployeesGeneral from "./app/Employees/EmployeesGeneral";
import EmployeesNote from "./app/Employees/EmployeesNotes";
import EmployeesPerformance from "./app/Employees/EmployeesPerformance";
import EmployeesFinancials from "./app/Employees/EmployeesFinancials";
import EmployeesSalary from "./app/Employees/EmployeesSalary";
import EmployeesCalendar from "./app/Employees/EmployeesCalendar";
import EmployeesTimeline from "./app/Employees/EmployeesTimeline";
import EmployeesDocument from "./app/Employees/EmployeesDocuments";
import EmployeesFeedbacks from "./app/Employees/EmployeesFeedback";

import DashboardGeneral from "./app/Dashboard/DashboardGeneral";
import DashboardHR from "./app/Dashboard/DashboardHr";
import DashboardInvoice from "./app/Dashboard/DashboardInvoices";
import DashboardPayroll from "./app/Dashboard/DashboardPayroll";
import DashboardFinancials from "./app/Dashboard/DashboardFinancials";
import Spinner from "./app/Spinner";


const App = () => {

 const [isLoading, setIsLoading] = useState(false);
 
 
 useEffect(() => {
   setIsLoading(true)
   setTimeout(()=>{
    setIsLoading(false)
   },2000)
 }, []);
  
//  const handleRouteChange = () => {
//    setIsLoading(true);
//  };

//  const handleRouteComplete = () => {
//    setIsLoading(false);
//  };

// setTimeout(() =>{
//   setIsLoading(false);
// }, 2000);

  
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="absolute items-center justify-center overflow-hidden">
          <div className="flex flex-row mt-4">
            <div>
              <Sidebar />
            </div>
            <div className="  flex flex-col   w-[1100px] h-[650px] bg-[#EBEBEB]">
              <div>
                <Header />
              </div>
              <div className="p-5">
                <Routes>
                  <Route path="/" element={<Navigate to="/dashboard" />} />

                  <Route path="/dashboard" element={<Dashboard />}>
                    <Route
                      path="/dashboard"
                      element={<Navigate to="general" />}
                    ></Route>
                    <Route
                      path="general"
                      element={<DashboardGeneral />}
                    ></Route>
                    <Route
                      path="financials"
                      element={<DashboardFinancials />}
                    ></Route>
                    <Route path="hr" element={<DashboardHR />}></Route>
                    <Route
                      path="invoice"
                      element={<DashboardInvoice />}
                    ></Route>
                    <Route
                      path="payroll"
                      element={<DashboardPayroll />}
                    ></Route>
                  </Route>

                  <Route path="/employees" element={<Employees />}></Route>
                  <Route
                    path="/employees/details/:id"
                    element={<EmployeesDetails />}
                  >
                    <Route
                      path="/employees/details/:id"
                      element={<Navigate to="performance" />}
                    ></Route>

                    <Route
                      path="general"
                      element={<EmployeesGeneral />}
                    ></Route>
                    <Route path="notes" element={<EmployeesNote />}></Route>
                    <Route
                      path="performance"
                      element={<EmployeesPerformance />}
                    ></Route>
                    <Route
                      path="financials"
                      element={<EmployeesFinancials />}
                    ></Route>
                    <Route
                      path="document"
                      element={<EmployeesDocument />}
                    ></Route>
                    <Route path="salary" element={<EmployeesSalary />}></Route>
                    <Route
                      path="calendar"
                      element={<EmployeesCalendar />}
                    ></Route>
                    <Route
                      path="timeline"
                      element={<EmployeesTimeline />}
                    ></Route>
                    <Route
                      path="feedback"
                      element={<EmployeesFeedbacks />}
                    ></Route>
                  </Route>
                  <Route path="/projects" element={<Projects />}></Route>

                  <Route path="/departments" element={<Departments />}></Route>

                  <Route path="/clients" element={<Clients />}></Route>
                  <Route
                    path="/clients/details/:id"
                    element={<ClientDetails />}
                  >
                    <Route
                      path="/clients/details/:id"
                      element={<Navigate to="general" />}
                    ></Route>
                    <Route path="general" element={<ClientGeneral />}></Route>
                  </Route>

                  <Route path="/devices" element={<Devices />}></Route>
                  <Route
                    path="/devices/details/:id"
                    element={<DeviceDetails />}
                  >
                    <Route
                      path="/devices/details/:id"
                      element={<Navigate to="general" />}
                    ></Route>
                    <Route path="general" element={<General />}></Route>
                    <Route path="timeline" element={<Timeline />}></Route>
                  </Route>

                  <Route path="/calendar" element={<Calendar />}></Route>

                  <Route path="/leaves" element={<Leaves />}>
                    <Route
                      path="/leaves"
                      element={<Navigate to="allleaves" />}
                    />
                    <Route path="allleaves/" element={<AllLeaves />}></Route>

                    <Route path="holidays" element={<Holidays />}></Route>
                    <Route path="settings" element={<Settings />}></Route>
                    <Route path="deductions" element={<Deductions />}></Route>
                    <Route path="overtime" element={<Overtime />}></Route>
                  </Route>

                  <Route
                    path="/leaves/allleaves/details/:id"
                    element={<LeaveDetails />}
                  >
                    <Route
                      path="/leaves/allleaves/details/:id"
                      element={<LeaveGeneral />}
                    ></Route>
                    <Route path="general" element={<LeaveGeneral />}></Route>
                    <Route path="timeline" element={<LeaveTimeline />}></Route>
                  </Route>
                  <Route path="/invoices" element={<Invoices />}></Route>

                  <Route
                    path="/invoices/details/:id"
                    element={<InvoiceDetails />}
                  >
                    <Route
                      path="/invoices/details/:id"
                      element={<Navigate to="general" />}
                    ></Route>
                    <Route path="general" element={<InvoiceGeneral />}></Route>
                    <Route
                      path="timeline"
                      element={<InvoiceTimeline />}
                    ></Route>
                    <Route
                      path="lineItems"
                      element={<InvoiceLineItems />}
                    ></Route>
                  </Route>

                  <Route path="/reports" element={<Reports />}></Route>

                  <Route path="/settings/*" element={<SettingsMenu />}></Route>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
