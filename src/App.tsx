import React, { useState, useEffect } from "react";
import Sidebar from "./app/SideBar";
import Header from "./app/header/HeaderList";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import Dashboard from "./app/dashboard/DashboardList";
import Employees from "./app/employees/EmployeesList";
import EmployeesDetails from "./app/employees/EmployeesDetails";
import Projects from "./app/projects/ProjectsList";
import Departments from "./app/departments/DepartmentsList";
import Clients from "./app/clients/ClientsList";
import Devices from "./app/device/DevicesList";
import Calendar from "./app/calendar/CalendarList";
import Leaves from "./app/leaves/LeavesList";
import Invoices from "./app/invoices/InvoicesList";
import Reports from "./app/reports/ReportsList";
import SettingsMenu from "./app/settings/SettingsDetails";
import DeviceDetails from "./app/device/DevicesDetails";
import ClientDetails from "./app/clients/ClientsDetails";
import LeaveDetails from "./app/leaves/LeavesDetails";
import LeaveGeneral from "./app/leaves/LeavesGeneral";
import LeaveTimeline from "./app/leaves/LeavesTimeline";
import InvoiceDetails from "./app/invoices/InvoicesDetails";
import InvoiceGeneral from "./app/invoices/InvoicesGeneral";
import InvoiceTimeline from "./app/invoices/InvoiceTimeline";
import InvoiceLineItems from "./app/invoices/InvoicesLineItems";
import ClientGeneral from "./app/clients/ClientsGeneral";
import AllLeaves from "./app/leaves/LeavesAllLeave";
import Holidays from "./app/leaves/LeavesHoliday";

import Settings from "./app/leaves/LeavesSetting";
import Deductions from "./app/leaves/LeavesDeductionsAndEncashment";
import Overtime from "./app/leaves/LeavesOvertime";

import General from "./app/device/DevicesGeneral";
import Timeline from "./app/device/DevicesTimiline";
import Incident from "./app/device/DevicesIncidents";

import EmployeesGeneral from "./app/employees/EmployeesGeneral";
import EmployeesNote from "./app/employees/EmployeesNotes";
import EmployeesPerformance from "./app/employees/EmployeesPerformance";
import EmployeesFinancials from "./app/employees/EmployeesFinancials";
import EmployeesSalary from "./app/employees/EmployeesSalary";
import EmployeesCalendar from "./app/employees/EmployeesCalendar";
import EmployeesTimeline from "./app/employees/EmployeesTimeline";
import EmployeesDocument from "./app/employees/EmployeesDocuments";
import EmployeesFeedbacks from "./app/employees/EmployeesFeedback";

import DashboardGeneral from "./app/dashboard/DashboardGeneral";
import DashboardHR from "./app/dashboard/DashboardHr";
import DashboardInvoice from "./app/dashboard/DashboardInvoices";
import DashboardPayroll from "./app/dashboard/DashboardPayroll";
import DashboardFinancials from "./app/dashboard/DashboardFinancials";
import Spinner from "./app/Spinner";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
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
