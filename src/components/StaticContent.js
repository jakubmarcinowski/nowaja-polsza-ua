import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { childrenType } from 'types/children'

import { mediaQueries } from 'utils/mediaQueries'
import MobilePopup from 'components/MobilePopup'
import { theme } from 'utils/theme'

const StyledContent = styled.div`
  line-height: 1.7;
  overflow-wrap: break-word;

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
    margin-bottom: 1.5em;

    &:not(:first-child) {
      margin-top: 3em;
    }
  }

  .gatsby-resp-image-image {
    transform: none !important;
  }

  h1 {
    line-height: 1.3;
    font-size: 2rem;

    @media ${mediaQueries.tablet} {
      font-size: 2.6rem;
    }

    @media ${mediaQueries.desktop} {
      font-size: 3rem;
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

  h1,
  h2,
  h3,
  p img,
  blockquote {
    margin-left: auto;
    margin-right: auto;

    @media ${mediaQueries.desktop} {
      max-width: 870px;
    }

    @media ${mediaQueries.large} {
      max-width: ${({ theme }) => theme.grid.width.little};
    }
  }

  .columns {
    display: flex;
    width: 100%;

    .column {
      flex: 1;
    }
  }

  blockquote {
    position: relative;
    padding: 2em 2.5em;

    &::before {
      content: '';
      position: absolute;
      width: 117px;
      height: 2px;
      top: 0.5em;
      left: 0;
      background-color: ${({ color }) => color};
    }

    &::after {
      content: '';
      position: absolute;
      width: 2px;
      height: 117px;
      top: 0;
      left: 0.5em;
      background-color: ${({ color }) => color};
    }

    p {
      max-width: unset;
      font-weight: 700;
      line-height: 1.33;
      margin-bottom: 1.2em;
      font-size: 1.8rem;

      @media ${mediaQueries.tablet} {
        font-size: 2.1rem;
      }

      @media ${mediaQueries.desktop} {
        font-size: 2.4rem;
      }
    }
  }

  .img-wrapper {
    position: relative;
    margin-bottom: 2.5em;
  }

  .img-wrapper--centered {
    width: 100vw;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }

  .img-wrapper img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;

    @media ${mediaQueries.desktop} {
      max-width: ${({ theme }) => theme.grid.width.little};
    }
  }

  .img-wrapper .img--left {
    @media ${mediaQueries.desktop} {
      float: left;
      width: 33rem;
      margin: 0 5rem 3rem 25rem;
    }
  }

  .img-wrapper .tag {
    display: block;
    margin: 2rem auto 0;
    text-align: center;
    opacity: 0.7;
    font-size: 1.4rem;

    @media ${mediaQueries.desktop} {
      max-width: ${({ theme }) => theme.grid.width.little};
    }
  }

  .img-wrapper .tag--left {
    @media ${mediaQueries.desktop} {
      position: absolute;
      left: 0;
      top: 0;
      width: 20rem;
      margin-top: 0;
      text-align: right;
      font-size: 1.2rem;
    }
  }

  p,
  .columns,
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
    }

    strong {
      font-weight: 700;
    }

    .tag {
      display: block;
      margin: 2rem auto 0;
      text-align: center;
      opacity: 0.7;
      font-size: 1.2rem;
      max-width: 800px;

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

  .text--left {
    text-align: left;
  }

  .text--right {
    text-align: right;
  }

  .text--center {
    text-align: center;
  }

  .text--justify {
    text-align: justify;
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

  [id^='przypis']:hover,
  .footnote:hover {
    .annotation-tooltip {
      @media ${mediaQueries.desktop} {
        opacity: 1;
      }
    }
  }

  .footnote {
    position: relative;
    text-decoration: none;
    margin-right: 0.5rem;

    &:after {
      content: '';
      display: inline-block;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      background-color: currentColor;
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

  .statement {
    display: flex;
    align-items: flex-start;
    margin: 2.5em 0;
    flex-direction: column;

    @media ${mediaQueries.tablet} {
      flex-direction: row;
    }

    .statement-author {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
    }

    .statement-icon {
      margin-left: 5px;

      @media ${mediaQueries.tablet} {
        transform: rotate(-90deg);
        margin-left: -5px;
      }
    }

    .statement-image {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
      object-fit: cover;
    }

    .statement-name {
      padding-left: 1.5rem;
      text-align: right;
      font-size: 1.4rem;

      @media ${mediaQueries.tablet} {
        max-width: 10rem;
      }
    }

    .statement-name-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: ${({ color }) => color};

      @media ${mediaQueries.tablet} {
        flex-direction: row;
      }
    }

    .statement-paragraph {
      @media ${mediaQueries.tablet} {
        margin: 0 0 0 5rem;
      }
    }
  }
`

const isDotFootnote = element => element.classList.contains('footnote')

class StaticContent extends React.Component {
  state = {
    annotationPopupOpen: false,
    annotationPopupContent: '',
  }

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

    const annotations = document.querySelectorAll("[id^='przypis'], a.footnote")
    if (annotations) {
      annotations.forEach(annotation => {
        let annotationText = null
        if (isDotFootnote(annotation)) {
          annotationText = annotation.querySelector('.annotation-tooltip')
            .innerText
        } else {
          const annotationHref = annotation.getAttribute('href').substr(1)
          const foundAnnotationHref = document.getElementById(annotationHref)
          const annotationHrefText = foundAnnotationHref
            ? foundAnnotationHref.innerText
            : ''
          annotationText = annotationHrefText
          const annotationTextWrapper = document.createElement('div')
          annotationTextWrapper.className = 'annotation-tooltip'
          annotationTextWrapper.innerText = annotationHrefText
          annotation.appendChild(annotationTextWrapper)
        }

        annotation.addEventListener('click', event => {
          event.preventDefault()
          this.setState({
            annotationPopupContent: annotationText,
            annotationPopupOpen: true,
          })
        })
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

  onAnnotationPopupClose = () => this.setState({ annotationPopupOpen: false })

  render() {
    const { children, themeColor } = this.props
    const { annotationPopupOpen, annotationPopupContent } = this.state

    return (
      <>
        <StyledContent
          ref={this.rootRef}
          color={
            theme.colors.highlighted[themeColor] || theme.colors[themeColor]
          }
        >
          {children}
        </StyledContent>
        <MobilePopup
          open={annotationPopupOpen}
          onClose={this.onAnnotationPopupClose}
        >
          {annotationPopupContent}
        </MobilePopup>
      </>
    )
  }
}

StaticContent.propTypes = {
  children: childrenType,
  themeColor: PropTypes.string,
}

export default StaticContent
