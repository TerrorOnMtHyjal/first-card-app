const initialState = {
  data: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
   case 'GET_DATA_SUCCESS':
    // call hydration util for items
    return {
      ...state,
     data: payload.data
    }
    
   default:
    return state
  }
 }