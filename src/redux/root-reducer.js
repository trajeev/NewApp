import {combineReducers} from 'redux'
import listReducer from './list/list.reducer'
import menuReducer from './menu/menu.reducer'

export default combineReducers({
    menu: menuReducer,
    list: listReducer
})

 