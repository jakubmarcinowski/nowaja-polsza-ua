import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import facebook from '../../static/spongebob.png'

const List = styled.ul``

const Item = styled.li`
  display: inline;
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }
`

const Logo = styled.img`
  max-height: 30px;
  max-width: 30px;
`

const SocialMediaList = () => (
  <List>
    <Item>
      {/* TODO change a to Link componenent when ready */}
      <a
        href="https://www.github.com/maisonm"
        target="_blank"
        rel="noopener norefferer"
      >
        <Logo src={facebook} alt="Facebook Nowaja Polsza" />
      </a>
    </Item>
    <Item>
      <a
        href="https://www.github.com/maisonm"
        target="_blank"
        rel="noopener norefferer"
      >
        <Logo src={facebook} alt="Facebook Nowaja Polsza" />
      </a>
    </Item>
    <Item>
      <a
        href="https://www.github.com/maisonm"
        target="_blank"
        rel="noopener norefferer"
      >
        <Logo src={facebook} alt="Facebook Nowaja Polsza" />
      </a>
    </Item>
  </List>
)

export default SocialMediaList
