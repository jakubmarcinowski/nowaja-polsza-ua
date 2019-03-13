import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReadMoreButton from './ReadMoreButton'
import styled from 'styled-components'
import { mediaQueries } from '../utils/mediaQueries'
import { debounce } from 'lodash'

const ParagraphsWrapper = styled.div`
  margin: 2em 0;
  max-width: 83rem;
  line-height: 1.8;
  font-weight: 300;
  font-size: 1.4rem;

  @media ${mediaQueries.tablet} {
    line-height: 2;
    font-size: 1.6rem;
  }

  ${({ hasFullDescription }) =>
  !hasFullDescription &&
  `
    max-height: 7.3rem;
    overflow: hidden;

    @media ${mediaQueries.tablet} {
      max-height: 6rem;
    }
  `}
`

class ReadMoreWrapper extends Component {
  constructor(props) {
    super(props)

    this.description = React.createRef()
    this.toggleReadMoreButtonVisible = this.toggleReadMoreButtonVisible.bind(
      this,
    )
    this.debouncedToggleReadMoreButtonVisible = debounce(
      this.toggleReadMoreButtonVisible,
      300,
    )
    this.state = {
      hasFullDescription: false,
      isReadMoreButtonVisible: false,
    }
  }

  toggleDescription = () => {
    this.setState(({ hasFullDescription }) => ({
      hasFullDescription: !hasFullDescription,
    }))
  }

  toggleReadMoreButtonVisible() {
    const descriptionMaxHeight = window.width >= mediaQueries.tablet ? 60 : 75
    let descriptionHeight = 0
    for (let i = 0; i < this.description.current.children.length; i++) {
      descriptionHeight += this.description.current.children[i].offsetHeight
    }

    if (descriptionHeight > descriptionMaxHeight) {
      this.setState({ isReadMoreButtonVisible: true })
    } else {
      this.setState({ isReadMoreButtonVisible: false })
    }
  }

  componentDidMount() {
    this.toggleReadMoreButtonVisible()
    window.addEventListener('resize', this.debouncedToggleReadMoreButtonVisible)
  }

  componentWillUnmount() {
    window.removeEventListener(
      'resize',
      this.debouncedToggleReadMoreButtonVisible,
    )
  }

  render() {
    const { description } = this.props
    const { hasFullDescription, isReadMoreButtonVisible } = this.state

    return (
      <>
        {description && (
          <ParagraphsWrapper
            ref={this.description}
            hasFullDescription={hasFullDescription}
            dangerouslySetInnerHTML={{
              __html: description.childMarkdownRemark.html,
            }}
          />
        )}
        {isReadMoreButtonVisible && (
          <ReadMoreButton onClick={this.toggleDescription}>
            {hasFullDescription ? 'Смотреть меньше' : 'Смотреть больше'}
          </ReadMoreButton>
        )}
      </>
    )
  }
}

ReadMoreWrapper.propTypes = {
  description: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      html: PropTypes.string,
    }),
  }),
}

export default ReadMoreWrapper
