import React, { useEffect } from 'react'
import {  Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard'
import { useAuth } from '../../context/AuthContext'
export default function Index() {

const navigator = useNavigate()
  const {user} = useAuth()
console.log(user)
  
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