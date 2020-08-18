import React from 'react'
import styled from 'styled-components'

const StyledEmailInput = styled.input`
  border: 1px solid #bbb;
  background-color: blue;
  color: #aaa;
  border-radius: 15px;
  outline: 0;
  padding: 6px;
  font-size: 1.1em;
  min-width: 200px;
`
function EmailInput (props) {
  return (
    <input
      type='text'
      value={props.value}
      className='__email-input'
      placeholder={props.placeholder}
      onChange={props.handleChange}
    />
  )
}

export default EmailInput
