export const RECEIVE_LEAVES_DATA = "RECEIVE_LEAVES_DATA";

export const receiveLeavesData = (data) => {
  return {
    type: RECEIVE_LEAVES_DATA,
    data,
  };
};
