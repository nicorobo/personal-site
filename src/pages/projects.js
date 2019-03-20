import React from 'react'
import Page from '../components/page'
import styled from 'styled-components'
import ProjectCard from '../components/ProjectCard'
import projects from '../projects'
export default () => (
  <Page>
    <Title>Projects</Title>
    <Projects>
      {projects.map(project => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </Projects>
  </Page>
)
const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
`
const Projects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
