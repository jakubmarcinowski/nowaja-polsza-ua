import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'

const Page404 = () => (
  <Layout>
    <>
      <Helmet title="Page not found" />
      <div>404 Page not found</div>
    </>
  </Layout>
)

export default Page404
