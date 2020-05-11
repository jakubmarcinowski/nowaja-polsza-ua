// This code comes from https://www.gatsbyjs.org/packages/gatsby-plugin-portal/?=modal

import { Component } from 'react'
import ReactDOM from 'react-dom'

import { childrenType } from 'types/children'

const portalRoot =
  typeof document !== `undefined` ? document.getElementById('portal') : null

export default class Portal extends Component {
  constructor() {
    super()
    this.el =
      typeof document !== `undefined` ? document.createElement('div') : null
  }

  componentDidMount() {
    portalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    portalRoot.removeChild(this.el)
  }

  render() {
    const { children } = this.props
    if (this.el) {
      return ReactDOM.createPortal(children, this.el)
    } else {
      return null
    }
  }
}

Portal.propTypes = {
  children: childrenType,
}
