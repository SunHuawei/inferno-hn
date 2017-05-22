import axios from 'axios'

const HOST = 'https://node-hnapi.herokuapp.com'

export default {
    fetchList(type, page = 1) {
        return axios.get(`${HOST}/${type}?page=${page}`).then(res => res.data)
    },

    fetchItem(id) {
        return axios.get(`${HOST}/item/${id}`).then(res => res.data)
    }
}