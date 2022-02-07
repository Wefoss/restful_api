import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'http://localhost:3000/api'
})

export const  createUser = (data) => httpClient.post('/users', data)
// export const  createUser = ({limit, offset}) => httpClient.get(`/users?${limit}&${offset}`)