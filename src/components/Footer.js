import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

export default () => (
  <Footer>
    crafted with <Heart>&hearts;</Heart> by{' '}
    <BrandLink to="/">
      meadow<span>lab</span>
    </BrandLink>
  </Footer>
)

const Footer = styled.footer`
  padding: 1rem 0 0.3rem 0;
  text-align: center;
  font-size: 0.9rem;
  font-weight: lighter;
  font-style: italic;
`
const Heart = styled.span`
  font-style: normal;
  color: #cb6773;
`
const BrandLink = styled(Link)`
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  span {
    color: #9d50bb;
    font-weight: bold;
  }
`
