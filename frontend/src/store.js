import thunk from 'redux-thunk'
import reducers from './reducers'
import {applyMiddleware , createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)


export default store;