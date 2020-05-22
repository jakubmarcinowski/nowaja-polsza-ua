import React from 'react'
import './Footnote.scss'

const Footnote = ({ children }) => (
  <a className="footnote" href="https://onet.pl">
    {children}
    <div className="footnote__description">Lorem ipsum</div>
  </a>
)

export default Footnote
