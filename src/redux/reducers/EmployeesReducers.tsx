import { RECEIVE_EMPLOYEES_DATA } from "../actions/EmployeesActions";

const initialState = {
  data: [],
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_EMPLOYEES_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default employeesReducer;
