import MenuActionTypes from './menu.types'

const INITIAL_STATE = {
    hidden: true,
    secondMenu: false
}

const menuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MenuActionTypes.TOGGLE_MENU_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case MenuActionTypes.TOGGLE_SECOND_MENU: 
            return {
                ...state,
                secondMenu: !state.secondMenu
            }
        default: 
            return state
    }
}

export default menuReducer