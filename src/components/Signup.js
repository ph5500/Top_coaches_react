import React, { useState } from 'react'
import styled from 'styled-components'

import { axiosWithAuth } from 'axios'

export default function Signup (props) {
  const [signupCredentials, setSignupCredentials] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: ''
  })
  const submitHandler = event => {
    event.preventDefault()
    console.log('submit called : ', signupCredentials):
    axiosWithAuth().post('/api/auth/register', SignupCredentials)
    .then(response => {
        props.history.push('/soccer_vids')
    }).catch(err => {
        console.log("Error: ", err);
    })
  }
}
