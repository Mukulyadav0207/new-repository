import { RECEIVE_PROJECTS_DATA } from "../actions/ProjectsActions";

const initialState = {
  data: [],
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PROJECTS_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default projectsReducer;
