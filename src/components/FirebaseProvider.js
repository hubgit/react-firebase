import React from 'react'
import firebase from 'firebase'
import { Provider } from 'react-redux'
import { store } from '../redux'

const FirebaseProvider = props => {
  firebase.initializeApp(props.config)

  return (
    <Provider store={store(props.reducers)}>
      {props.children}
    </Provider>
  )
}

export default FirebaseProvider
