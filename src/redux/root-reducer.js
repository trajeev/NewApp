import {combineReducers} from 'redux'
import listReducer from './list/list.reducer'
import menuReducer from './menu/menu.reducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistconfig = {
    key: 'root',
    storage,
    whitelist: ['list']
}

const rootReducer = combineReducers({
    menu: menuReducer,
    list: listReducer
})

export default persistReducer(persistconfig, rootReducer)

 