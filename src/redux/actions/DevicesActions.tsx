export const RECEIVE_DEVICES_DATA = "RECEIVE_DEVICES_DATA";


export const receiveDevicesData = (data) => {
  return {
    type: RECEIVE_DEVICES_DATA,
    data,
  };
};
