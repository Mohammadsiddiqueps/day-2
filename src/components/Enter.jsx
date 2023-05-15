import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import axios from 'axios';

const Enter = (props) => {

  var[inputs,setInputs] = useState({props.data})

  const inputHandler = (e)=>{
    const{name,value} = e.target
    setInputs((inputs)=>({...inputs,[name]:value}))
  }

  const readValues=()=>{
    console.log("clicked")
    console.log("inputs:",inputs);

    if(props.method=="post")
    axios.post("http://localhost:8080/create",inputs)
    .then((response)=>{
      alert("success")
    })
    .catch(err=>console.log(err))

    if(props.method==="put"){
      axios.put("http://localhost:8080/update"+inputs._id,inputs)
      .then((response)=>{
        console.log("put: "+response.data);
        alert("updated");
        window.location.reload(false)
      })
      .catch((err)=>{console.log(err)})
    }
  }
  return (
    <div style={{paddingTop:'100px',textAlign:'center'}}>
        <Typography variant='h3' >Enter Details</Typography><br/>
    <TextField variant='outlined' label='name' name='sname' value={inputs.sname} onChange={inputHandler}> Name</TextField>
    <br/><br/>
    <TextField variant='outlined' label='grade' name='sgrade' value={inputs.sgrade} onChange={inputHandler}>Grade</TextField>
    <br/><br/>
    <Button variant='contained' onClick={readValues}>submit</Button>

  </div>
  )
}

export default Enter