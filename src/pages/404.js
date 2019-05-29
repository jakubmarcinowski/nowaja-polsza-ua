import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import View404 from '../views/page404'
import { isSiteBlocked } from '../utils/blockSiteBeforeLive'

const Page404 = () =>
  isSiteBlocked() ? null : (
    <Layout>
      <Helmet title="Page not found" />
      <View404 />
    </Layout>
  )

export default Page404
