const initialState = {
  data: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
   case 'GET_DATA_SUCCESS':
    console.log(payload)
    return {
      ...state,
     data: payload.data
    }
    
   default:
    return state
  }
 }