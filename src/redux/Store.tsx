import { createStore } from "redux";
// import rootReducer from "./reducers";



const dummyReducer =()=>{
    return 100;
}
const store = createStore(dummyReducer);

export default store;
