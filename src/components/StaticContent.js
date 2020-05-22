import React from 'react'
import styled from 'styled-components'
import { childrenType } from 'types/children'

import { mediaQueries } from 'utils/mediaQueries'

const StyledContent = styled.div`
  overflow: hidden;
  line-height: 1.7;

  h1,
  h2,
  h3,
  p,
  ul,
  ol {
    @media ${mediaQueries.desktop} {
      max-width: 670px;
      margin: 0 auto;
    }
  }
  .gatsby-resp-image-image {
    transform: none !important;
  }
  h1,
  h2,
  h3 {
    margin-bottom: 1.2em;
    font-weight: 700;
  }

  .gatsby-resp-image-image {
    transform: none !important;
  }

  h1 {
    line-height: 1.3;
    font-size: 2rem;

    @media ${mediaQueries.tablet} {
      font-size: 2.3rem;
    }

    @media ${mediaQueries.desktop} {
      font-size: 2.6rem;
    }
  }

  h2 {
    line-height: 1.8;

    @media ${mediaQueries.tablet} {
      font-size: 2.1rem;
    }

    @media ${mediaQueries.desktop} {
      font-size: 2.4rem;
    }
  }

  h3 {
    line-height: 1.1;
    font-size: 1.6rem;

    @media ${mediaQueries.tablet} {
      font-size: 1.9rem;
    }

    @media ${mediaQueries.desktop} {
      font-size: 2.2rem;
    }
  }

  p,
  .row {
    &:not(:last-child) {
      margin-bottom: 2.5em;
    }
    font-size: 1.4rem;
    font-weight: 300;

    @media ${mediaQueries.tablet} {
      font-size: 1.6rem;
    }

    @media ${mediaQueries.desktop} {
      font-size: 1.8rem;
    }

    img {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      max-width: 100%;

      @media ${mediaQueries.desktop} {
        max-width: 870px;
      }

      @media ${mediaQueries.large} {
        max-width: ${({ theme }) =>
          `calc(${theme.grid.width.small} - ${theme.grid.paddings.large} *2)`};
      }
    }

    strong {
      font-weight: 700;
    }

    .tag {
      display: block;
      margin-top: 1rem;
      text-align: center;
      opacity: 0.7;
      font-size: 1.2rem;

      @media ${mediaQueries.desktop} {
        font-size: 1.4rem;
      }
    }

    em {
      font-style: italic;
    }

    a {
      color: ${({ theme }) => theme.colors.authorLink};
      text-decoration: underline;
    }
  }

  ul {
    list-style: circle inside;
    margin-bottom: 3rem;
  }

  ol {
    list-style: decimal inside none;
    margin-bottom: 3rem;
  }

  li {
    margin-bottom: 1rem;
  }

  iframe {
    &:not(:last-child) {
      margin-bottom: 2.5em;
    }
  }

  .videoWrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
    &:not(:last-child) {
      margin-bottom: 6em;
    }
  }
  .videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .videoWrapperTitle {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    margin-top: 1rem;
    opacity: 0.7;
    font-size: 1.2rem;

    @media ${mediaQueries.desktop} {
      font-size: 1.4rem;
    }
  }

  [id^='przypis'] {
    position: relative;
  }
  .annotation-tooltip {
    position: absolute;
    bottom: 27px;
    left: 0;
    background-color: white;
    width: 340px;
    font-size: 13px;
    padding: 15px;
    border: 1px solid;
    opacity: 0;
    pointer-events: none;
  }

  .annotation-tooltip--left {
    left: auto;
    right: 0;
  }

  [id^='przypis']:hover .annotation-tooltip {
    @media ${mediaQueries.desktop} {
      opacity: 1;
    }
  }

  //Hide all annotations tooltips at article bottom ex. #przypis1b, #przypis2b
  [id$='b']:hover .annotation-tooltip {
    display: none;
  }

  .row {
    @media ${mediaQueries.desktop} {
      display: flex;
    }
  }

  .column {
    margin-bottom: 2.5em;
    white-space: pre-wrap;

    p:first-of-type {
      margin-top: 2.5em;
    }

    @media ${mediaQueries.desktop} {
      margin-bottom: 0;
      flex: 1;

      &:not(:first-child) {
        margin-left: 1em;
      }

      &:not(:last-child) {
        margin-right: 1em;
      }
    }
  }
`

class StaticContent extends React.Component {
  constructor(props) {
    super(props)
    this.rootRef = React.createRef()
  }

  componentDidMount() {
    const iframes = document.querySelectorAll('iframe')
    if (iframes) {
      iframes.forEach(iframe => {
        if (iframe.src.indexOf('soundcloud.com') === -1) {
          const iframeWrapper = document.createElement('div')
          const title = iframe.getAttribute('title')
          iframeWrapper.className = 'videoWrapper'
          iframe.parentNode.insertBefore(iframeWrapper, iframe)
          iframeWrapper.appendChild(iframe)
          const iframeTitle = document.createElement('p')
          iframeTitle.className = 'videoWrapperTitle'
          iframeTitle.innerText = title
          iframeWrapper.appendChild(iframeTitle)
        }
      })
    }

    const annotations = document.querySelectorAll("[id^='przypis']")
    if (annotations) {
      annotations.forEach(annotation => {
        const annotationHref = annotation.getAttribute('href').substr(1)
        const foundAnnotationHref = document.getElementById(annotationHref)
        const annotationHrefText = foundAnnotationHref
          ? foundAnnotationHref.innerText
          : ''
        const annotationTextWrapper = document.createElement('div')
        annotationTextWrapper.className = 'annotation-tooltip'
        annotationTextWrapper.innerText = annotationHrefText
        annotation.appendChild(annotationTextWrapper)
      })
    }

    document.fonts.onloadingdone = () => {
      const annotationMaxRightPosition = this.rootRef.current.getBoundingClientRect()
        .right

      annotations.forEach(annotation => {
        const annotationRight = annotation.getBoundingClientRect().right
        if (annotationRight + 400 > annotationMaxRightPosition) {
          annotation
            .querySelector('.annotation-tooltip')
            .classList.add('annotation-tooltip--left')
        }
      })
    }

    document
      .querySelectorAll('.gatsby-resp-image-wrapper')
      .forEach(img => (img.parentElement.style.maxWidth = 'unset'))
  }

  componentWillUnmount() {
    document.fonts.onloadingdone = null
  }

  render() {
    const { children } = this.props

    return <StyledContent ref={this.rootRef}>{children}</StyledContent>
  }
}

StaticContent.propTypes = {
  children: childrenType,
}

export default StaticContent
