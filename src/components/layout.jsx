import React from 'react'
import HeaderMobile from '../components/headerMobile'
import Footer from '../components/footer'
 const Layout = ({ children }) => {
  return (
    <>
    <HeaderMobile />
    <div className="layout">
        {children}
    </div>
    <Footer />
    </>
  )
}

export default Layout