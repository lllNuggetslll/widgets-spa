import axios from 'axios'

const ROOT_URL = 'http://spa.tglrw.com:4000/'

export const GET_USERS = 'GET_USERS';
export const GET_WIDGETS = 'GET_WIDGETS'
export const GET_ONE_USER = 'GET_ONE_USER'
export const GET_ONE_WIDGET = 'GET_ONE_WIDGET';
export const MAKE_WIDGET = 'MAKE_WIDGET'
export const UPDATE_WIDGET = 'UPDATE_WIDGET'
export const EDIT_WIDGET = 'EDIT_WIDGET'

export function getUsers () {
 const request = axios.get(`${ROOT_URL}users`)

  return {
    type: GET_USERS,
    payload: request
  }
}

export function getWidgets () {
  const request = axios.get(`${ROOT_URL}widgets`)

  return {
    type: GET_WIDGETS,
    payload: request
  }
}

export function getOneUser (id) {
  const request = axios.get(`${ROOT_URL}users/${id}`)

  return {
    type: GET_ONE_USER,
    payload: request
  }
}

export function getOneWidget (id) {
  const request = axios.get(`${ROOT_URL}widgets/${id}`)

  return {
    type: GET_ONE_WIDGET,
    payload: request
  }
}

export function makeWidget (widget) {
  const request = axios.post(`${ROOT_URL}widgets`, widget)

  return {
    type: MAKE_WIDGET,
    payload: request
  }

}

export function updateWidget (widget) {
  const request = axios.put(`${ROOT_URL}widgets/${widget.id}`, widget)

  return {
    type: UPDATE_WIDGET,
    payload: request
  }
}
