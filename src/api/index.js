import axios from 'axios'

const url = 'http://localhost:5000'

export const fetchOrders = () => axios.get(`${url}/getorders`)
export const createOrder = (storeCredentials) => axios.post(`${url}/order`, storeCredentials)
export const updateOrder = (id, storeCredentials) => {
    axios.patch(`${url}/${id}`, storeCredentials)
} 
export const deleteOrder = (list) => axios.delete(`${url}/${list._id}`)