const axios = require('axios')

const BASE_URL = "http://192.168.31.117:5000/api"

function get(url) {
    return axios.get(url).then(res => res.data)
}

export function getProjects(params) {
    return get(BASE_URL + "/projects", params || {})
}