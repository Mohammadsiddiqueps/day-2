import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const EnterDetalils = (props) => {
  var[inputs,setInputs] = useState(props.data)

  const inputHandler = (e)=>{
    const{name,value} = e.target
    setInputs((inputs)=>({...inputs,[name]:value}))
  }

  const readValues = ()=>{
    console.log("Clicked")
    console.log("inputs:",inputs);
    if (props.method==="post")
    axios.post("http://localhost:8080/create",inputs)
    .then((response)=>{
      alert("success")
    })
    .catch(err=>console.log(err))

    if (props.method==="put"){
    axios.put("http://localhost:8080/update/"+inputs._id,inputs)
    .then((response)=>{
      console.log("update clicked")
      console.log("put:"+response.data);
      alert("Updated");
      window.location.reload(false)
    })
    .catch(err=>console.log(err))
    }}
  return (
    <div>
        <Typography variant='h3'>Enter Student Details</Typography>
        <br/><br/>
        <TextField label='Enter name' name='sname' value={inputs.sname} onChange={inputHandler} variant='outlined'/>
        <br/><br/>
        <TextField label='Enter grade' name='sgrade' value={inputs.sgrade} onChange={inputHandler} variant='outlined'/>
        <br/><br/>
        <Button variant='contained' onClick={readValues}> Submit </Button>
        <br/><br/>
    </div>
  )
}

export default EnterDetalils