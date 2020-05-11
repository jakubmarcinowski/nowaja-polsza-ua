import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Paragraph from 'components/Paragraph'
import ExternalLink from 'components/ExternalLink'
import { mediaQueries } from 'utils/mediaQueries'
import { trans } from 'utils/translate'

const ImportantInfoBoxWrapper = styled.div`
  background: ${({ theme }) => theme.colors.importantInfo};
`

const ImportantInfoBox = styled.div`
  max-width: 1440px;
  margin: -2.7rem 0 2.5rem;
  padding: 2rem 2rem 4rem;

  @media ${mediaQueries.tablet} {
    display: flex;
    justify-content: space-between;
    padding: 2rem 4rem;
  }

  @media ${mediaQueries.desktop} {
    margin: -5rem auto 2.5rem;
  }

  @media ${mediaQueries.large} {
    padding: 2rem 8rem;
  }
`

const Link = styled(Paragraph)`
  margin-top: 1rem;
  display: inline;
  float: right;

  @media ${mediaQueries.tablet} {
    display: block;
    margin-top: 0;
    margin-left: 1.5rem;
  }
`

const Info = styled(Paragraph)`
  display: inline;
`

const InfoContainer = styled.div`
  display: flex;
`

const ImportantInfo = ({ importantInfo }) => (
  <ImportantInfoBoxWrapper>
    <ImportantInfoBox>
      <InfoContainer>
        {importantInfo.importantInfo && (
          <Info color="White" weight="Light">
            {importantInfo.importantInfo}
          </Info>
        )}
      </InfoContainer>
      <div>
        {importantInfo.importantInfoStatus === 'visibleWithLink' &&
          importantInfo.importantInfoLinkUrl && (
            <ExternalLink url={importantInfo.importantInfoLinkUrl}>
              <Link color="White" weight="Light">
                <u>{trans('LEARN_MORE')}</u>
              </Link>
            </ExternalLink>
          )}
      </div>
    </ImportantInfoBox>
  </ImportantInfoBoxWrapper>
)

ImportantInfo.propTypes = {
  importantInfo: PropTypes.any,
}

export default ImportantInfo
