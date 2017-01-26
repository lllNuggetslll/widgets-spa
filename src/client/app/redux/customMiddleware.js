import React from 'react'
import { getWidgets } from './Actions'

const middleware = ({store, dispatch, getState}) => next => action => {
  if ((action.type === 'GET_ONE_USER' || action.type === 'GET_ONE_WIDGET') && !action.payload.then) {
    let arr = []
    arr.push(action.payload.data)
    action.payload = arr
  }

  if(action.type === 'MAKE_WIDGET' || action.type === 'UPDATE_WIDGET' && !action.payload.then) {
    dispatch(getWidgets())
  }

  next(action);
};

export default middleware;
