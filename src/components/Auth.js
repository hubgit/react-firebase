import React from 'react'
import firebase from 'firebase'
import { connect } from 'react-redux'
import { setAuth } from '../redux'

const provider = new firebase.auth.GoogleAuthProvider()
provider.addScope('profile')
provider.addScope('email')

class Auth extends React.Component {
  componentDidMount() {
    const currentUser = firebase.auth().currentUser

    if (currentUser) {
      this.setUser(currentUser)
    }

    firebase.auth().onAuthStateChanged(user => {
      this.setUser(user)
    })
  }

  setUser = user => {
    this.props.setAuth({
      loaded: true,
      user
    })
  }

  handleClick = () => {
    if (this.props.auth.user) {
      firebase.auth().signOut().then(() => {
        this.setUser(null)
      })
    } else {
      firebase.auth().signInWithPopup(provider).then(result => {
        this.setUser(result.user)
      })
    }
  }

  render () {
    const { auth, className } = this.props

    if (!auth.loaded) return null // TODO: spinner?

    return (
      <button className={className} onClick={this.handleClick}>
        {auth.user ? 'Sign out' : 'Sign in'}
      </button>
    )
  }
}

export default connect(
  state => ({
    auth: state.auth
  }),
  {
    setAuth
  }
)(Auth)
