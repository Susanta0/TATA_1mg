import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'

export const AllRouter = () => {
  
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/home' element={<Home/>}/> */}
        
    </Routes>
    </>
  )
}
