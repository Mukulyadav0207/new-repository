export const RECEIVE_EMPLOYEESCALENDAR_DATA = "RECEIVE_EMPLOYEESCALENDAR_DATA";




export const receiveEmployeesCalendarData = (data) =>{
    return {
      type: RECEIVE_EMPLOYEESCALENDAR_DATA,
      data,
    };
};