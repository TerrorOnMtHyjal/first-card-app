export const getDataSuccess = (data) => ({
  type: 'GET_DATA_SUCCESS',
  payload: data.findItemsByKeywordsResponse
});

export const getData = (data) => {
  fetch('/ebay')
  .then((res) => {
    return res.json();
  })
  .then(data => {
    this.props.dispatch(getDataSuccess(data))
  });
};