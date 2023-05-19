import { createStore, combineReducers } from "redux";

import clientsReducer from "./reducers/ClientsReducers";
import devicesReducer from "./reducers/DevicesReducers";
import leavesReducer from "./reducers/LeavesReducers";
import invoicesReducer from "./reducers/InvoicesReducers";
import employeesReducer from "./reducers/EmployeesReducers";

import {rootReducer} from "./reducers/RootReducer"


 




const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
