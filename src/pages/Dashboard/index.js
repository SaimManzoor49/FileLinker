import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
export default function index() {
  return (
    <>
    <Routes>
    <Route index element={<Dashboard />} />

    </Routes>
    
    </>
  )
}
