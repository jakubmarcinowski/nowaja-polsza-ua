import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'

const Page404 = () => (
  <Layout>
    <Helmet title="Page not found">
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&amp;subset=cyrillic,cyrillic-ext"
        rel="stylesheet"
      />
    </Helmet>
    <div>404 Page not found</div>
  </Layout>
)

export default Page404
