import { RECEIVE_DEVICES_DATA } from "../actions/DeviceActions";

const initialState = {
  data: [],
};

const devicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_DEVICES_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default devicesReducer;
