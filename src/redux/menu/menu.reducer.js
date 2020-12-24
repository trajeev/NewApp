import MenuActionTypes from './menu.types'

const INITIAL_STATE = {
    hidden: false
}

const menuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MenuActionTypes.TOGGLE_MENU_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default: 
            return state
    }
}

export default menuReducer