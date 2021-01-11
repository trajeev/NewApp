import {ListActionTypes} from './list.types'

export const removeList = list => ({
    type: ListActionTypes.REMOVE_LIST,
    payload: list
})

export const addList = list => ({
    type: ListActionTypes.ADD_LIST,
    payload: list
})

export const editForm = list => ({
    type: ListActionTypes.EDIT_FORM,
    payload: list
})

export const editList = list => ({
    type: ListActionTypes.EDIT_LIST,
    payload: list
})

