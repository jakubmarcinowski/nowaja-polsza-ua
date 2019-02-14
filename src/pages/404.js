import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'

const Page404 = () => (
  <Layout>
    <Helmet title="Page not found" />
    <div>404 Page not found</div>
  </Layout>
)

export default Page404
