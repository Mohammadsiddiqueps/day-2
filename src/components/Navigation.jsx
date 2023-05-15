import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
    <AppBar>
         <Toolbar>
         <Typography sx={{flexGrow:1}} align='center'>Enter Details</Typography>
            <Button> <Link style={{color:'white'}} to={'/'}>Enter Data</Link></Button> 
            <Button> <Link style={{color:'white'}} to={'/view'}>view</Link></Button> 

         </Toolbar>
    </AppBar>
    </div>
  )
}

export default Navigation