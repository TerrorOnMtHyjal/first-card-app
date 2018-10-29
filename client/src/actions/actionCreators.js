export const getDataSuccess = (data) => ({
  payload: {
    data
  },
  type: 'GET_DATA_SUCCESS'
});

export const getData = (query) => ({
  payload: {
    query
  },
  type: 'GET_DATA_REQUEST',
});

// fetch('/ebay')
// .then((res) => {
//   return res.json();
// })
// .then(data => {
//   this.props.dispatch(getDataSuccess(data))
// });