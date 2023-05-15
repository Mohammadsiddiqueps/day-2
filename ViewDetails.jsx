import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EnterDetalils from './EnterDetalils';

const ViewDetails = () => {
    var[students,setStudents] = useState([]);
    var[update,setUpdate] = useState(false);
    var[singlevalue,setSingleValue] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/view')
        .then(response =>{
            console.log("response:",response.data)
            setStudents(response.data)
        })
    },[])
    const updateValue =((value)=>{
        setSingleValue(value);
        setUpdate(true);

    })
    const deleteValue = (id) =>{
        console.log("Delete Clicked"+id)
        axios.delete("http://localhost:8080/delete/"+id)
        .then((response)=>{
            console.log(response.idvalue);
            alert("Deleted");
            window.location.reload(false)
        })
    }
   
    var finalJSX =<TableContainer sx={{maxWidth:650, marginLeft:'25%'}}>
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
                           <Button variant='contained' onClick={()=>deleteValue(value._id)}>DELETE</Button>
                       </TableCell>
                       <TableCell>
                           <Button variant='contained' onClick={()=>updateValue(value)}>UPDATE</Button>
                       </TableCell>
                   </TableRow>
               )
              })}
           </TableBody>
       </Table>
   </TableContainer>

    if (update)
    finalJSX = <EnterDetalils data ={singlevalue} method="put"/>
  return (
    finalJSX
  )
}

export default ViewDetails