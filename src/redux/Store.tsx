import { createStore } from "redux";
 import { rootReducer } from "./reducers/RootReducer";
import clientsReducer from "./reducers/ClientsReducer";
import devicesReducer from "./reducers/DeviceReducer";
import leavesReducer from "./reducers/LeavesReducer";
import invoicesReducer from "./reducers/InvoicesReducer";



const store = createStore(
  invoicesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



export default store;
