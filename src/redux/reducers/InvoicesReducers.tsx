import { RECEIVE_INVOICES_DATA } from "../actions/InvoicesActions";

const initialState = {
  data: [],
};

const invoicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_INVOICES_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default invoicesReducer;
