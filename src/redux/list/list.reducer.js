import {ListActionTypes} from './list.types'

const INITIAL_STATE = {
    lists: []
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
        default:
            return state
    }
}

export default listReducer