import { fromJS } from "immutable";
import { createReducerFromObject } from "../misc/reducerUtils"; import { STORE_LIST } from "../views/home/state/constants";
;


const initialState = fromJS({
    list: null
});

const reducerFunction = {
    [STORE_LIST]: (state, payload) =>
        state.set('list', fromJS(payload))
};


const listReducer = createReducerFromObject(
    reducerFunction,
    initialState
);

export default listReducer;