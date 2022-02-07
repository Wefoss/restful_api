import axios from 'axios'
import qs from 'query-string'

const httpClient = axios.create({
    baseURL: 'http://localhost:3000/api'
})

export const  createUser = (data) => httpClient.post('/users', data)
export const  getUsers = ({limit = 4, offset}) => httpClient.get(`/users?${qs.stringify({limit, offset})}`)