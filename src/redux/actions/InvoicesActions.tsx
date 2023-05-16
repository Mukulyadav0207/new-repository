export const RECEIVE_INVOICES_DATA = "RECEIVE_INVOICES_DATA";

export const receiveInvoicesData = (data) => {
  return {
    type: RECEIVE_INVOICES_DATA,
    data,
  };
};
