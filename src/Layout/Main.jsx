import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar'

const  Main =()=>{
    return (
    <div>
       
       <Outlet></Outlet>
    </div>
    )
}

export default Main