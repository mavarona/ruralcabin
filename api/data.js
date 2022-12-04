import axios from 'axios'

const dataApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API
})

export default dataApi