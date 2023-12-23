import React from 'react'
import HeaderMobile from '../components/headerMobile'
import Footer from '../components/footer'
import Layout from  '../components/layout'
import TabPeople from '../components/tab'


 const People = () => {
    return (
        <div>
       <HeaderMobile />
       <Layout>
        <TabPeople />
        </Layout>
        <Footer />
        </div>
    )

}

export default People