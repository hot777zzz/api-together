import request from "./request";

export function getData(data) {
    return request({
        url: '/dataSta',
        method: 'post',
        data:data
    })
}