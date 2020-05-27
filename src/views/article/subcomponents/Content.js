import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import parse from 'html-react-parser'

import { mediaQueries } from 'utils/mediaQueries'
import StaticContent from 'components/StaticContent'

const Lead = styled.div`
  line-height: 1.13;
  padding: 1rem 0 3rem;
  font-size: 2.4rem;
  max-width: ${({ theme }) => theme.grid.width.little};
  margin: 0 auto;

  @media ${mediaQueries.tablet} {
    padding: 0 0 2.5em;
    font-size: 2.8rem;
  }

  @media ${mediaQueries.desktop} {
    padding: 0 0 1.6em;
    font-size: 3.2rem;
    line-height: 1.13;
  }
`

const Content = ({ html, lead, themeColor }) => {
  return (
    <>
      {lead && <Lead>{parse(lead)}</Lead>}
      <StaticContent themeColor={themeColor}>{parse(html)}</StaticContent>
    </>
  )
}

Content.propTypes = {
  html: PropTypes.string,
  lead: PropTypes.string,
  themeColor: PropTypes.string,
}

export default Content
