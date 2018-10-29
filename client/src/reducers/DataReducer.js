const initialState = {
  data: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
   case 'GET_DATA_SUCCESS':
    return {
      ...state,
     data: payload[0].searchResult[0].item
    }
    
   default:
    return state
  }
 }