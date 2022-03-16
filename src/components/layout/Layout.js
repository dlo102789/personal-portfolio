import React from 'react'
import Header from '../header/Header.js'
import Footer from '../footer/Footer.js'
import './Layout.css'


const Layout = (props) => {
  return (
    <div className='container'>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
export default Layout