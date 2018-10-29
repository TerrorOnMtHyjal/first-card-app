import { put, takeEvery } from 'redux-saga/effects';
import { getDataSuccess } from '../actions/actionCreators';

const defaultPostConfig  = {
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
};

function* fetchData(action) {
   try {
      const items = yield fetch('/ebay', {
        ...defaultPostConfig,
        body: JSON.stringify({
          query: action.payload.query
        })
      })
      .then(res => res.json())
      .then(data => data);

      yield put(getDataSuccess(items["findCompletedItemsResponse"][0].searchResult[0].item));
   } catch (e) {
      console.log(e.message);
   }
}

function* saga() {
  yield takeEvery("GET_DATA_REQUEST", fetchData);
}

export default saga;