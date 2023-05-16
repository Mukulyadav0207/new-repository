export const RECEIVE_CLIENTS_DATA = "RECEIVE_CLIENTS_DATA";
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";


export const receiveClientsData = (data) => {
  return {
    type: RECEIVE_CLIENTS_DATA,
    data,
  };
};


// export const deleteEmployee = (employeeId) => ({
//   type: DELETE_EMPLOYEE,
//   payload: employeeId,
// });