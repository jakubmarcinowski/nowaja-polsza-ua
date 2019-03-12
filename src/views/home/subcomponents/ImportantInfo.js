import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Paragraph from '../../../components/Paragraph'
import ExternalLink from '../../../components/ExternalLink'
import { mediaQueries } from '../../../utils/mediaQueries'

const ImportantInfoBoxWrapper = styled.div`
  background: ${({ theme }) => theme.colors.importantInfo};
`

const ImportantInfoBox = styled.div`
  max-width: 1440px;
  margin-top: -1.5rem;
  margin-bottom: 2.5rem;
  padding: 2rem;

  @media ${mediaQueries.tablet} {
    display: flex;
    justify-content: space-between;
    padding: 2rem 4rem;
  }

  @media ${mediaQueries.desktop} {
    margin: -2.5rem auto 2.5rem;
  }

  @media ${mediaQueries.large} {
    padding: 2rem 8rem;
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
  <ImportantInfoBoxWrapper>
    <ImportantInfoBox>
      {importantInfo.importantInfo && (
        <Info color="White" weight="Light">
          {importantInfo.importantInfo}
        </Info>
      )}
      {importantInfo.importantInfoStatus === 'visibleWithLink' &&
        (importantInfo.importantInfoLinkUrl && (
          <ExternalLink url={importantInfo.importantInfoLinkUrl}>
            <Link color="White" weight="Light">
              <u>узнать&nbsp;больше</u>
            </Link>
          </ExternalLink>
        ))}
    </ImportantInfoBox>
  </ImportantInfoBoxWrapper>
)

ImportantInfo.propTypes = {
  importantInfo: PropTypes.any,
}

export default ImportantInfo
