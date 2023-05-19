
import { RECEIVE_EMPLOYEESCALENDAR_DATA } from "../actions/EmployeesCalendarActions";



const initialState ={
    data:[],
};


const employeesCalendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_EMPLOYEESCALENDAR_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};
export default employeesCalendarReducer;