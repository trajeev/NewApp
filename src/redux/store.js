import {createStore, applyMiddleware} from 'redux'
// import {persistStore} from 'redux-persist'

import logger from 'redux-logger'
import rootReducer from './root-reducer'
import thunk from 'redux-thunk'

const middlerwares = [logger, thunk]

export const store = createStore(rootReducer, applyMiddleware(...middlerwares))
// export const persistor = persistStore(store)

