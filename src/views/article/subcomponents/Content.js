import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { mediaQueries } from '../../../utils/mediaQueries'
import StaticContent from '../../../components/StaticContent'

const Lead = styled.div`
  line-height: 1.3;
  padding: 1rem 0 3rem;
  font-size: 1.8rem;

  @media ${mediaQueries.tablet} {
    padding: 0 0 2.5em;
    font-size: 2.1rem;
  }

  @media ${mediaQueries.desktop} {
    font-size: 2.4rem;
  }
`

const Content = ({ html, lead }) => (
  <>
    {lead && <Lead>{lead}</Lead>}
    <StaticContent>
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </StaticContent>
  </>
)

Content.propTypes = {
  html: PropTypes.string,
  lead: PropTypes.string,
}

export default Content
