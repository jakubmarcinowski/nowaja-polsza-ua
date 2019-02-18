import React, { Component } from 'react'

class MobileMenu extends Component {
  render() {
    return (
      <nav>
        <div>Logo</div>
        <div className="menu-icon">
          <div className="menu-icon__middle" />
        </div>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      </nav>
    )
  }
}

export default MobileMenu
