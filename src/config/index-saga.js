import { all } from 'redux-saga/effects';
import LoginSaga from '../views/home/state/sagas';


function* IndexSaga() {
    yield all([
        LoginSaga()
    ])
}

export default IndexSaga;
