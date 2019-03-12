import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Wrapper from '../../components/Wrapper'
import Text404 from '../../../static/icon-404.svg'
import Sign404 from '../../../static/icon-404-sign.svg'
import Paragraph from '../../components/Paragraph'
import { mediaQueries } from '../../utils/mediaQueries'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16rem auto 10rem;
  max-width: 28rem;
  text-align: center;

  @media ${mediaQueries.tablet} {
    max-width: 41rem;
    margin: 14rem auto 9rem;
  }

  @media ${mediaQueries.desktop} {
    margin: 9rem auto;
  }
`

const Text = styled(Paragraph)`
  margin-top: 1rem;
  font-size: 1.2rem;

  @media ${mediaQueries.tablet} {
    margin-top: 3rem;
    font-size: 1.4rem;
  }
`

const Image = styled.img`
  max-height: 5rem;

  @media ${mediaQueries.tablet} {
    max-height: inherit;
  }

  &:last-child {
    margin-left: 2rem;
  }
`

const Page404 = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <Image src={Text404} />
          <Image src={Sign404} />
        </div>
        <Text weight="Light" lineHeight="Medium">
          Очень жаль, но запрашиваемая вами страница не найдена. Ничего
          страшного! Другие интересные статьи ждут Вас на{' '}
          <Link to="/">
            <u>нашей странице</u>
          </Link>
          .
        </Text>
      </Container>
    </Wrapper>
  )
}

export default Page404
