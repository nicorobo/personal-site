import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { primaryBrand, primaryText } from '../colors'

export default () => (
  <Nav>
    <BrandLink to="/">
      meadow<span>lab</span>
    </BrandLink>
    <Space />
    <Links>
      <NavLink activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/projects">
        Projects
      </NavLink>
      <NavLink activeClassName="active" to="/resume">
        Resume
      </NavLink>
    </Links>
  </Nav>
)

const Nav = styled.nav`
  display: flex;
  height: 40px;
  //   border: 1px solid black;
  margin: 0.6rem;
`
const BrandLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 300;
  text-decoration: none;
  color: ${primaryText};
  span {
    font-weight: bold;
    color: ${primaryBrand};
  }
`
const Space = styled.div`
  flex-grow: 1;
`
const Links = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`
const NavLink = styled(Link)`
  margin-right: 1rem;
  margin-bottom: 0;
  font-weight: lighter;
  text-decoration: none;
  &:last-child {
    margin-right: 0;
  }
  &.active {
    font-weight: bold;
  }
`
