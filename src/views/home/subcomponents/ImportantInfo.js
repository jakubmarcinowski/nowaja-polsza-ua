import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Paragraph from '../../../components/Paragraph'
import ExternalLink from '../../../components/ExternalLink'
import { mediaQueries } from '../../../utils/mediaQueries'
import AlertIcon from '../../../../static/icon-alert.svg'

const ImportantInfoBox = styled.div`
  margin-bottom: 2.5rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.listItemBackground};

  @media ${mediaQueries.tablet} {
    display: flex;
  }
`

const Icon = styled.img`
  height: 12px;
  margin-right: 1rem;

  @media ${mediaQueries.tablet} {
    height: auto;
    margin-right: 2rem;
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
    <Icon src={AlertIcon} alt="alert icon" />
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
