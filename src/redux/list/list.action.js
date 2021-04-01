import {ListActionTypes} from './list.types'
import * as api from '../../api'

// export const removeList = list => ({
//     type: ListActionTypes.REMOVE_LIST,
//     payload: list
// })

export const removeList = list => async (dispatch) => {
    try {
        await api.deleteOrder(list)
        dispatch({type: ListActionTypes.REMOVE_LIST, payload: list})
    } catch (error) {
        console.log(error)
    }
}

export const addList = (storeCredentials) => async (dispatch) => {
    try {
        const {data} = await api.createOrder(storeCredentials)
        dispatch({type: ListActionTypes.ADD_LIST, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const fetchAll = () => async (dispatch) => {
    try {
        const {data} = await api.fetchOrders()
        dispatch({type: ListActionTypes.FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const editForm = list => ({
    type: ListActionTypes.EDIT_FORM,
    payload: list
})

export const editList = (id, storeCredentials) => async (dispatch) =>{
    try {
        api.updateOrder(id, storeCredentials)
        dispatch({type: ListActionTypes.EDIT_LIST,payload: storeCredentials})
    } catch (error) {
        console.log(error)
    }
}



