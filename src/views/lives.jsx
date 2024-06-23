import React from 'react'
import Layout from  '../components/layout'
import List from '../components/list'
import lives from '../peopleData/lives'

const Lives = () => {

    return (
        <div>
        <Layout>
        <List data={lives}/>
            </Layout>
        </div>
    )
}


export default Lives;