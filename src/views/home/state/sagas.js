import { takeLeading, put } from 'redux-saga/effects'
import * as constants from './constants'
import * as api from './api'

function* getList({ payload }) {
    try {
        const response = yield api.getListApi(payload);
        if (response) {
            yield put({ type: constants.STORE_LIST, payload: response });
        }
    } catch (e) { }
}

export default function* HomeSaga() {
    yield takeLeading(constants.GET_LIST, getList);

}