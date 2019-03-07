import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Paragraph from '../../../components/Paragraph'
import ExternalLink from '../../../components/ExternalLink'
import { mediaQueries } from '../../../utils/mediaQueries'

const ImportantInfoBox = styled.div`
  margin-bottom: 2.5rem;
  padding: 2rem;
  background: red;
  background: ${({ theme }) => theme.colors.listItemBackground};

  @media ${mediaQueries.tablet} {
    display: flex;
  }
`

const Link = styled(Paragraph)`
  margin-left: 1rem;
  display: inline;

  @media ${mediaQueries.tablet} {
    display: block;
  }
`

const Info = styled(Paragraph)`
  display: inline;
`

const ImportantInfo = ({ importantInfo }) => (
  <ImportantInfoBox>
    {importantInfo.importantInfo && (
      <Info weight="Light">{importantInfo.importantInfo}</Info>
    )}
    {importantInfo.importantInfoStatus === 'visibleWithLink' &&
      (importantInfo.importantInfoLinkUrl && (
        <ExternalLink url={importantInfo.importantInfoLinkUrl}>
          <Link weight="Light">
            <u>узнать&nbsp;больше</u>
          </Link>
        </ExternalLink>
      ))}
  </ImportantInfoBox>
)

ImportantInfo.propTypes = {
  importantInfo: PropTypes.any,
}

export default ImportantInfo
