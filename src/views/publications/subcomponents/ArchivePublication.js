import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { mediaQueries } from '../../../utils/mediaQueries'
import BoxWithPhoto from '../../../components/BoxWithPhoto'
import Header from '../../../components/Header'
import Paragraph from '../../../components/Paragraph'
import ReadMoreButton from '../../../components/ReadMoreButton'
import DownloadButton from './DownloadButton'
import articles from '../archive'

const DownloadButtons = styled.div`
  display: flex;
  max-width: 240px;
  justify-content: space-between;

  @media ${mediaQueries.tablet} {
    width: 280px;
    max-width: inherit;
  }
`

const Desc = styled(Paragraph)`
  margin-top: 2em;
`

class ArchivePublication extends React.Component {
  state = {
    isMoreVisible: false,
  }

  showMoreOrLess = () => {
    this.setState({ isMoreVisible: !this.state.isMoreVisible })
  }

  renderTitles = listOfArticles => {
    const { isMoreVisible } = this.state
    const visibleTitles = 2

    return (
      <>
        {listOfArticles.map((article, i) => {
          if (isMoreVisible) {
            return <h1 key={i}>{article.title}</h1>
          } else {
            if (i < visibleTitles) {
              return <h1 key={i}>{article.title}</h1>
            }
          }
        })}
        {listOfArticles.length > visibleTitles && (
          <ReadMoreButton onClick={this.showMoreOrLess}>
            {isMoreVisible ? 'Смотреть меньше' : 'Смотреть больше'}
          </ReadMoreButton>
        )}
      </>
    )
  }

  render() {
    const { month, year } = this.props
    const twoDigitsMonth = ('0' + month).slice(-2)
    const convertToRoman = num => {
      const decimalValue = [10, 9, 5, 4, 1]
      const romanNumeral = ['X', 'IX', 'V', 'IV', 'I']

      let romanized = ''
      for (let i = 0; i < decimalValue.length; i++) {
        while (decimalValue[i] <= num) {
          romanized += romanNumeral[i]
          num -= decimalValue[i]
        }
      }
      return romanized
    }

    let romanizedMonth = convertToRoman(month)
    if (romanizedMonth === 'VII') {
      romanizedMonth = 'VII-VIII'
    }

    const listOfArticles = articles.filter(
      article =>
        article.issue.year === year.toString() &&
        (article.issue.number === month.toString() ||
          (month === 7 && article.issue.number === '7-8'))
    )

    if (listOfArticles.length === 0) {
      return null
    }

    const pdfUrl = `/pdf/${year}/${twoDigitsMonth}${
      month === 7 ? '-08' : ''
    }.pdf`

    return (
      <BoxWithPhoto archive={true} month={romanizedMonth} year={year}>
        <Header
          size="Big"
          margin="0 0 0.8em"
          color="Black"
          weight="Bold"
          type={3}
        >
          Nowaja Polsza {twoDigitsMonth}
          {month === 7 && '-08'}/{year}
        </Header>
        <DownloadButtons>
          {<DownloadButton url={pdfUrl} text="PDF" />}
        </DownloadButtons>
        <Desc color={'Black'} size={'Big'} weight={'Light'} lineHeight={'Big'}>
          {this.renderTitles(listOfArticles)}
        </Desc>
      </BoxWithPhoto>
    )
  }
}

ArchivePublication.propTypes = {
  month: PropTypes.any,
  year: PropTypes.any,
}

export default ArchivePublication
