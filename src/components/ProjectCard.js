import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

export default ({ title, description, projectLink, gitLink, icon, color }) => (
  <ProjectCard>
    <Icon color={color}>{icon}</Icon>
    <CardBody>
      <Title color={color} href={projectLink} target="_blank">
        {title}
      </Title>
      <Description dangerouslySetInnerHTML={{ __html: description || '' }} />
      <GithubLink color={color} href={gitLink} target="_blank">
        Github
      </GithubLink>
    </CardBody>
  </ProjectCard>
)

const ProjectCard = styled.div`
  display: flex;
  max-width: 800px;
  margin: 0 15% 5% 15%;
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    margin: 0 5% 10% 5%;
  }
`
const CardBody = styled.div`
  display: flex;
  padding-left: 2rem;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 750px) {
    align-items: center;
    padding-left: 0;
    padding-top: 1rem;
  }
`
const Icon = styled.div`
  .project-icon-svg {
    fill: ${props => props.color};
  }
  display: flex;
  align-items: center;
  min-width: 120px;
  svg {
    width: 120px;
    max-height: 120px;
  }
`
const Title = styled.a`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: ${props => props.color};
  &:hover {
    color: ${props => darken(0.1, props.color)};
  }
`
const Description = styled.p`
  line-height: 1.25;
`
const GithubLink = styled.a`
  align-self: flex-end;
  color: ${props => props.color};
  text-decoration: none;
`
