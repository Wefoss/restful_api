import axios from 'axios'
import qs from 'query-string'

const httpClient = axios.create({
    baseURL: 'http://localhost:3000/api'
})

export const  createUser = (data) => httpClient.post('/users', data)
export const  getUsers = ({limit, offset}) => httpClient.get(`/users?${qs.stringify({limit, offset})}`)

export const  createTask = (data) => httpClient.post(`/tasks/${data.currentId}`, data.values)
export const  getUserTask = () => httpClient.get('/tasks:userId')