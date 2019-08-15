import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { primaryBrand, primaryText } from '../colors'

export default () => (
  <Nav>
    <BrandLink to="/">
      <div className="logo-long">
        meadow<span>lab</span>
      </div>
      <div className="logo-short">
        m<span>lab</span>
      </div>
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
  margin-bottom: 1rem;
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
  .logo-short {
    display: none;
  }
  @media (max-width: 400px) {
    .logo-long {
      display: none;
    }
    .logo-short {
      display: block;
    }
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
  color: ${primaryBrand};
  font-weight: lighter;
  text-decoration: none;
  &:last-child {
    margin-right: 0;
  }
  &.active {
    font-weight: bold;
  }
  @media (max-width: 400px) {
    margin-right: 0.5rem;
  }
`
