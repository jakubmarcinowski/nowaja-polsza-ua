import React from 'react'
import PropTypes from 'prop-types'

import { getArticleUrlInSecondLanguage } from 'config'
import ExternalLink from 'components/ExternalLink'
import { trans } from 'utils/translate'
import ButtonWithIcon from 'components/ButtonWithIcon'
import DownloadIcon from 'static/icon-book.svg'

const ArticleLanguageButton = ({ className, secondLanguageSlug }) => (
  <ExternalLink
    className={className}
    url={getArticleUrlInSecondLanguage(secondLanguageSlug)}
  >
    <ButtonWithIcon
      icon={DownloadIcon}
      text={trans('READ_IN_SECOND_LANGUAGE')}
      gap="2rem"
      size={'medium'}
      iconBig
    />
  </ExternalLink>
)

ArticleLanguageButton.propTypes = {
  secondLanguageSlug: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default ArticleLanguageButton
