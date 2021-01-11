import {ListActionTypes} from './list.types'
import {editListFromLists} from './list.utils'

const INITIAL_STATE = {
    lists: [], 
    list: ''
}

const listReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ListActionTypes.REMOVE_LIST:
            return {
                ...state,
                lists: state.lists.filter(list => list.storeId !== action.payload.storeId)
            }
        case ListActionTypes.ADD_LIST: 
            return {
                ...state,
                lists: state.lists.concat(action.payload)
            }
        case ListActionTypes.EDIT_FORM:
            return {
                ...state,
                list: state.lists.find(l => l.storeId === action.payload.storeId),
            }
        case ListActionTypes.EDIT_LIST:
            return {
                ...state,
                list: '',
                lists: editListFromLists(state.lists, action.payload)
            }
        default:
            return state
    }
}

export default listReducer