import { itemDataDehydrator } from '../utils/utils';

const initialState = {
  data: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
   case 'GET_DATA_SUCCESS':
    const dehydratedItems = itemDataDehydrator(payload.data);
    return {
      ...state,
     data: dehydratedItems
    }
    
   default:
    return state
  }
 }