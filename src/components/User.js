import React from 'react'
import { connect } from 'react-redux'

const User = props => {
  if (!props.user) return null

  return (
    <div className={props.className}>
      {props.user.displayName}
    </div>
  )
}

export default connect(
  state => ({
    user: state.auth.user
  })
)(User)
