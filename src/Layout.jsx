import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Comp/Nav'

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default Layout
