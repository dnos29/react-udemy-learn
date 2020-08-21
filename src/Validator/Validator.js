import React from 'react'

function Validator(props){
  let status = 'Text is too short';
  if(props.textLength >= 5){
    status =  'Text is too long';
  }
  return (
    <p>{status}</p>
  )
}
export default Validator;
