import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const View = () => {
var [students,setStudents] = useState([]);
var [update,setUpdate] = useState(false);
var [singlevalue,setSingleValue] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8080/view')
   .then((response)=>{
      console.log("response:",response.data)
      setStudents(students=response.data)
    })
    .catch((err)=>console.log(err))
  },[])


  const deleteValues = (id)=>{
    console.log("delete clicked"+id);
    axios.delete("http://localhost:8080/delete/"+id)
    .then((response)=>{
      console.log(response.idvalue)
      alert("Deleted")
      window.location.reload(false)
    })
  }

  const updateValues=(value)=>{
    setSingleValue(value);
    setUpdate(true);
  }
    var finalJSX = <TableContainer> 
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Grade</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {students.map((value,index)=>{
          return(
            <TableRow key={index}>
            <TableCell>{value.sname}</TableCell>
            <TableCell>{value.sgrade}</TableCell>
            <TableCell>
              <Button onClick={()=>deleteValues(value._id)}>Delete</Button>
              <Button onClick={()=>updateValues(value)}>Update</Button>
            </TableCell>
          </TableRow>
          )
        })}
      
        </TableBody>
    </Table>
  </TableContainer>
  
  if(update)
  finalJSX = <Enter data= {singlevalue} method="put"/>
  return (
    finalJSX
  )
}

export default View