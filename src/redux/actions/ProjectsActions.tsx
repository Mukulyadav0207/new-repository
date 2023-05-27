export const RECEIVE_PROJECTS_DATA = "RECEIVE_PROJECTS_DATA";


export const receiveProjectsData = (data) => {
  return {
    type: RECEIVE_PROJECTS_DATA,
    data,
  };
};
