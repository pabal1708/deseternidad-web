import React from 'react'
import HeaderMobile from '../components/headerMobile'
import Footer from '../components/footer'
import ImgHandler from '../components/imgHanderl'
import Layout from  '../components/layout'

const Home = () => {

    return (
        <div>
        <HeaderMobile />
        <Layout>
            <ImgHandler />
            </Layout>
            <Footer />
        </div>
    )
}


export default Home;