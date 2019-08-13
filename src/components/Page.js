import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Footer from './Footer'
import Nav from './Nav'
import { primaryText } from '../colors'
import 'reset-css'

export default ({ children }) => (
  <Container>
    <Helmet>
      <title>Meadowlab</title>
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
      <link
        href="https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap"
        rel="stylesheet"
      />
      <meta
        name="description"
        content="The website of Austin based software engineer Nick Roberts."
      />
      <script src="https://kit.fontawesome.com/c6a0b4984d.js" />
    </Helmet>
    <Second>
      <Nav />
      <Child>{children}</Child>
      <Footer />
    </Second>
  </Container>
)

const Container = styled.div`
  font-family: Avenir, 'Muli', 'Nunito Sans', sans-serif;
  color: ${primaryText};
  display: flex;
  min-height: 100vh;
`
const Second = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  flex-grow: 1;
`
const Child = styled.div`
  flex-grow: 1;
`
