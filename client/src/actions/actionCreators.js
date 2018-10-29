export const getDataSuccess = (data) => ({
  type: 'GET_DATA_SUCCESS',
  payload: {
    data
  }
});

export const getData = (query) => ({
  type: 'GET_DATA_REQUEST',
  payload: {
    query
  }
});

// fetch('/ebay')
// .then((res) => {
//   return res.json();
// })
// .then(data => {
//   this.props.dispatch(getDataSuccess(data))
// });