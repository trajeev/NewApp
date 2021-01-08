import {ListActionTypes} from './list.types'

const INITIAL_STATE = {
    lists: [{id: '0', FranchiseName: 'newks', store: '1', storeLocation: 'cl'},
            {id: '1', FranchiseName: 'newks', store: '2', storeLocation: 'Sr'}]
}

const listReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ListActionTypes.REMOVE_LIST:
            return {
                ...state,
                lists: state.lists.filter(list => list.id !== action.payload.id)
            }
        default:
            return state
    }
}

export default listReducer