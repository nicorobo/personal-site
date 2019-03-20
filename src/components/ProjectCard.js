import React from 'react'
import styled from 'styled-components'
import { primaryBrand } from '../colors'

export default ({ title, description, projectLink, gitLink }) => (
  <ProjectCard>
    <Title href={projectLink} target="_blank">
      {title}
    </Title>
    <Description dangerouslySetInnerHTML={{ __html: description || '' }} />
    <GithubLink href={gitLink} target="_blank">
      Github
    </GithubLink>
  </ProjectCard>
)

const ProjectCard = styled.div`
  display: flex;
  width: 90%;
  max-width: 500px;
  flex-direction: column;
  margin-bottom: 2rem;
`
const Title = styled.a`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${primaryBrand};
  text-decoration: none;
`
const Description = styled.p`
  line-height: 1.25;
`
const GithubLink = styled.a`
  align-self: flex-end;
  color: ${primaryBrand};
  text-decoration: none;
`
