import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getDataSuccess } from '../actions/actionCreators';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchData(action) {
   try {
      const items = yield fetch('/ebay', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: action.payload.query
        })
      })
      .then((res) => {
        return res.json();
      })
      .then(data => {
        return data
      });

      yield put(getDataSuccess(items["findCompletedItemsResponse"][0].searchResult[0].item));
   } catch (e) {
      console.log(e.message);
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* saga() {
  yield takeEvery("GET_DATA_REQUEST", fetchData);
}

export default saga;