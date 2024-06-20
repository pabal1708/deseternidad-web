import React from 'react'
import Layout from  '../components/layout'
import Logo from '../components/logo'


const News = () => {
    
    return (
        <div>
        <Layout>

        <iframe className="iframe-spoty" src="https://open.spotify.com/embed/artist/6rwBpBYUFIlK4mNnOkGVLM?utm_source=generator" width="100%" height="352"  frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        
        <Logo />
            </Layout>
        </div>
    )
}


export default News;