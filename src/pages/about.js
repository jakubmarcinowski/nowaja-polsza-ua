import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import StaticContent from '../components/StaticContent'

const About = () => (
  <Layout>
    <Helmet title="About us" />
    <StaticContent>test</StaticContent>
  </Layout>
)

export default About
