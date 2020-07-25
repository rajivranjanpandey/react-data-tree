import * as constants from './constants';

export function getList(payload) {
    return {
        type: constants.GET_LIST,
        payload
    }
}