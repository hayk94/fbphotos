import { GET_LOGIN_STATUS } from '../actions/types'

export default (state = null, action) => {
  switch (action.type) {
    case GET_LOGIN_STATUS:
      return action.payload
    default:
      return state
  }
}
