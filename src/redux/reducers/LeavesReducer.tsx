import { RECEIVE_LEAVES_DATA } from "../actions/LeavesActions";

const initialState = {
  data: [],
};

const leavesReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_LEAVES_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default leavesReducer;
