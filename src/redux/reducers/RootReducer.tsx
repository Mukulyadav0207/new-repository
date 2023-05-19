import clientsReducer from "./ClientsReducers";
import { combineReducers } from "redux";
import devicesReducer from "./DevicesReducers";
import leavesReducer from "./LeavesReducers";
import invoicesReducer from "./InvoicesReducers";
import employeesReducer from "./EmployeesReducers";
import employeesCalendarReducer from "./EmployeesCalendarReducers";

export const rootReducer = combineReducers({
  clients: clientsReducer,
  devices: devicesReducer,
  leaves: leavesReducer,
  invoices: invoicesReducer,
  employees: employeesReducer,
  employeesCalendar: employeesCalendarReducer,
});
