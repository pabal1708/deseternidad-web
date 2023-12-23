import React from 'react'
import Footer from '../components/footer'
import HeaderMobile from '../components/headerMobile'
import Layout from  '../components/layout'
import BioDetail from '../components/bioDetail'

 const Bio = () => {
  return (
    <div>
    <HeaderMobile />
    <Layout>
     <BioDetail />
     </Layout>
     <Footer />
     </div>
  )
}

export default Bio