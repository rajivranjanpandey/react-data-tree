import axios from "axios";



const GLOBAL_RESPONSE_STATUS_CODE_HANDLERS = {
    500: (err, url) => {
        alert('error');
        return false
    }



};

function callAPI(url, options, headers) {
    if (options.method === "post") {
        return axios
            .post(url, options.params, { headers: { ...headers } })
            .then(res => Promise.resolve(res.data))
            .catch(error =>
                GLOBAL_RESPONSE_STATUS_CODE_HANDLERS[error.response.status](
                    error.response.data, url
                )
            );
    } else if (options.method === "get") {
        console.log('url', url, headers)
        return axios
            .get(url, { params: options.params, headers: { ...headers } })
            .then(res => Promise.resolve(res.data))
            .catch(error =>
                GLOBAL_RESPONSE_STATUS_CODE_HANDLERS[error.response.status](
                    error.response.data, url
                )
            );
    } else if (options.method === "put") {
        return axios
            .put(url, options.params, { headers: { ...headers } })
            .then(res => Promise.resolve(res.data))
            .catch(error => {
                GLOBAL_RESPONSE_STATUS_CODE_HANDLERS[error.response ? error.response.status : 500](
                    error.response.data, url
                )
            }
            );
    }
    else if (options.method === "delete") {
        return axios
            .delete(url, { headers: { ...headers } })
            .then(res => { console.log('response', res.data); return Promise.resolve(res.data) })
            .catch(error =>
                GLOBAL_RESPONSE_STATUS_CODE_HANDLERS[error.response.status](
                    error.response.data, url
                )
            );
    }
}

export default async function request(url, options, tokenRequired = false, viaLogin = false) {
    let defaultHeaders = {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
    };
    let res;
    res = callAPI(url, options, defaultHeaders).then((val) => {
        return val
    }).catch(err => console.log(err));
    return res;
}


