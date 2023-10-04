import React from 'react'
import Head from "../static/Header"
import {Outlet} from "react-router-dom"
import Foot from "../static/Footer"

const Layout = () => {
  return (
    <div>
      <Head/>
      <Outlet/>
      <Foot/>
    </div>
  )
}

export default Layout
