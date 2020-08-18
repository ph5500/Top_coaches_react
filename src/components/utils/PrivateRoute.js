import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log('In Private Route: ', window.localStorage.getItem('token'))
  return (
    <Route
      {...rest}
      render={props =>
        window.localStorage.getItem('token') ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  )
}

export default PrivateRoute
