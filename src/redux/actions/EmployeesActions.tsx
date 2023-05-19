export const RECEIVE_EMPLOYEES_DATA = "RECEIVE_EMPLOYEES_DATA";

export const receiveEmployeesData = (data) => {
  return {
    type: RECEIVE_EMPLOYEES_DATA,
    data,
  };
};
