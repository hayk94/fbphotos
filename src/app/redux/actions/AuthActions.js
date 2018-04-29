import { GET_LOGIN_STATUS } from './types'

export const getLoginStatus = () => dispatch => FB.getLoginStatus(response => dispatch({ type: GET_LOGIN_STATUS, payload: response }))
