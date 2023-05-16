import clientsReducer from "./ClientsReducer"
import {combineReducers } from "redux";
import devicesReducer from "./DeviceReducer";
import leavesReducer from "./LeavesReducer";
import invoicesReducer from "./InvoicesReducer";


export const rootReducer = combineReducers({
  clients: clientsReducer,
  devices: devicesReducer,
  leaves: leavesReducer,
  invoices:invoicesReducer,
});