export const getDataSuccess = (data) => ({
  type: 'GET_DATA_SUCCESS',
  payload: data.findItemsByKeywordsResponse
});