import { RECEIVE_CLIENTS_DATA } from "../actions/ClientsActions";

const initialState = {
  data: [],
};

const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CLIENTS_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default clientsReducer;
