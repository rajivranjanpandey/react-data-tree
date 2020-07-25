import request from '../../../config/request';

export const getListApi = (payload) => {
    const options = {
        method: 'get',
        params: {},
    }
    return request(`https://jsonplaceholder.typicode.com/todos`, options, false)
}