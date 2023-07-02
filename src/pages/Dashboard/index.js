import React, { useEffect } from 'react'
import {  Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard'
export default function Index() {

const navigator = useNavigate()
  
useEffect(()=>{
  const isAuth = localStorage.getItem('isAuth')
  if(isAuth==='false'){
    navigator('/auth/login')
  }
},[navigator])
  return (
    
    <>
  <Routes>
  <Route index element={<Dashboard />} />

  </Routes>
  
  </>
)
}