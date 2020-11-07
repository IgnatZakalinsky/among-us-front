import axios from 'axios'
import socketIo from 'socket.io-client'

export const baseURL = 'http://localhost:7542/'
// export const baseURL = 'https://neko-back.herokuapp.com/1.0/'

export const instance = axios.create({
    baseURL,
    // withCredentials: true,
})

export const socket = socketIo('http://localhost:7542/')
