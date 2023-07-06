import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer'
import File from './File'
export default function index() {
  return (
    <>
    <Header />
    <Routes>
    <Route index element={<Home />} />
    <Route path='/file/:url' element={<File />} />

    </Routes>
    <Footer />
    
    </>
  )
}
