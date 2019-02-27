import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { mediaQueries } from '../../../utils/mediaQueries'
import StaticContent from '../../../components/StaticContent'

const Lead = styled.div`
  line-height: 1.3;
  font-size: 1.8rem;
  padding-top: 1rem;

  @media ${mediaQueries.tablet} {
    font-size: 2.1rem;
    padding-top: 0;
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
