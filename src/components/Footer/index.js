import React from 'react'
import FooterSm from './FooterSm'
import FooterLg from './FooterLg'

export default function index() {
  return (
    <>
    

    <span className=" d-md-none"><FooterSm  /></span> 
    <span className=" d-none d-md-block"><FooterLg  /></span> 
    </>
  )
}
