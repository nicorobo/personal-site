import React from 'react'
import styled from 'styled-components'
export default ({ children }) => (
  <Container>
    <nav>nav</nav>
    {children}
  </Container>
)

const Container = styled.div``
