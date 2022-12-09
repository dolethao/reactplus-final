import axios from './axios'

const getAllUser = () => {
    return axios.get(`/users`)
}

const postAddNewUser = (data) => {
    return axios.post('/users', data)
}

const getTaskUsers = () => {
    return axios.get(`/tasks`)
}

export {
    getAllUser,
    postAddNewUser,
    getTaskUsers
}