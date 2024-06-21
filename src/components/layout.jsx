import React from 'react'
import HeaderMobile from '../components/headerMobile'
import Footer from '../components/footer'
 const Layout = ({ children }) => {
  return (
    <div>
    <HeaderMobile />
    <div className="layout">
        {children}
    </div>
    <Footer />
    </div>
  )
}

export default Layout