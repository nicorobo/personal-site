import React from 'react'
import styled from 'styled-components'
// div.stacked-photos contains the same photos as section 1 and 3, but I could not figure out how to
// get them to stay on the same line after making div.collage flex-direction: column.
// There a may be a way, but for now this was quicker, and makes no more requests than usual.
export default ({ photos }) => (
  <Container>
    {photos.map(p => (
      <Photo src={p} />
    ))}
  </Container>
)

const Container = styled.div``
const Photo = styled.img``
