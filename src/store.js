import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {count} from './reducers/counterValue.js'
export const store=()=>createStore(count,applyMiddleware(thunk,logger))