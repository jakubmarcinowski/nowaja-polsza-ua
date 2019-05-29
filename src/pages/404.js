import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import View404 from '../views/page404'

const Page404 = () => (
    <Layout>
      <Helmet title="Page not found" />
      <View404 />
    </Layout>
  )

export default Page404
