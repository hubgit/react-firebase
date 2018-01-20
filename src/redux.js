import { combineReducers, compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

/* constants */

const SET_AUTH = 'SET_AUTH'

/* actions */

export const setAuth = data => dispatch => dispatch({
  type: SET_AUTH,
  payload: data
})

/* reducers */

const initialState = {
  loaded: false,
  user: null
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return action.payload

    default:
      return state
  }
}

/* store */

export const store = (reducers = {}) => createStore(
  combineReducers({ auth, ...reducers }),
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(applyMiddleware(thunk))
)
