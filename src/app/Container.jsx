import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getLoginStatus } from './redux/actions'

class Container extends Component {
  componentWillMount () {
    this.props.getLoginStatus()
  }

  render () {
    return (
      <div>{this.props.isLoggedIn}</div>
    )
  }
}

export default connect(({ Auth }) => ({ isLoggedIn: Auth && Auth.status === 'connected' }), { getLoginStatus })(Container)
