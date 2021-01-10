import {ListActionTypes} from './list.types'

export const removeList = list => ({
    type: ListActionTypes.REMOVE_LIST,
    payload: list
})

export const addList = list => ({
    type: ListActionTypes.ADD_LIST,
    payload: list
})