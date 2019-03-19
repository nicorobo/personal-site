import React from 'react'
import Footer from './Footer'
import styled from 'styled-components'

export default ({ children }) => (
  <Container>
    <nav>nav</nav>
    {children}
    <Footer />
  </Container>
)

const Container = styled.div``
