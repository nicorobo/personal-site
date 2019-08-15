import React from 'react'
import Page from '../components/Page'
import styled from 'styled-components'
import { mix } from 'polished'
import { primaryBrand } from '../colors'
import ProjectCard from '../components/ProjectCard'
import {
  IconThoughts,
  IconElements,
  IconLocation,
  IconMendeleev,
  IconDirbook,
  IconGroovin,
  IconDaily,
  IconMidi,
  IconLuna,
  IconPlace,
} from '../components/Icons'

const getColor = (length, i, colorA, colorB, colorC) => {
  const half = (length - 1) / 2
  if (i < half) {
    return mix(i / half, colorB, colorA)
  }
  return mix((i - half) / half, colorC, colorB)
}

export default () => (
  <Page>
    <Title>Projects</Title>
    <Projects>
      {projects.map((project, i) => {
        return (
          <ProjectCard
            key={project.title}
            {...project}
            color={getColor(
              projects.length,
              i,
              '#56B4D3',
              primaryBrand,
              '#38BE92'
            )}
          />
        )
      })}
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

const projects = [
  {
    title: 'Groovin',
    description:
      'A circular 8-part drum machine that outputs MIDI. Inspired heavily by the iOS app "Patterning", I created Groovin to test my @react-midi packages as well as to expand on the capabilities of "Patterning". I\'m very excited about this project and am constantly developing new features for it, with melodic tracks and sequence saving coming soon!',
    projectLink: 'http://groovin.casa/',
    pageLink: null,
    gitLink: 'https://github.com/nickroberts404/patterning-clone',
    icon: <IconGroovin />,
  },
  {
    title: 'PlaceList',
    description:
      'An app for creating and sharing "playlists" of places, created to practice user authentication and GraphQL! It uses Google\'s Places API for location data and autosuggest, Passport\'s Facebook strategy for login, Apollo packages for working with the GraphQL server, and MongoDB Atlas for data persistence.',
    projectLink: 'https://placelist.casa',
    pageLink: null,
    gitLink: 'https://github.com/nickroberts404/placelist',
    icon: <IconPlace />,
  },
  {
    title: '@react-midi',
    description:
      'After a few dead-end attempts at creating a reusable solution for working with MIDI access in React, I revisited the problem after Hooks were released with React 16.8! The result is @react-midi, a library of hooks and components that make working with MIDI in React much easier. This package can be used to build React powered sequencers and interfaces, but also opens the door to a new kind of experience, using knobs and faders to interact with the web.',
    projectLink: 'https://www.npmjs.com/package/@react-midi/hooks',
    pageLink: null,
    gitLink: 'https://github.com/nickroberts404/react-midi-hooks',
    icon: <IconMidi />,
  },
  {
    title: 'Daily Journal',
    description:
      "Daily Journal was built to help me keep small summaries of my day's activities to look back and reflect on, with a Github inspired contribution calendar for motivation/navigation. It implements react-beautiful-dnd so the items can be quickly reorganized, and LocalStorage to persist data. ",
    projectLink: 'https://dailyjournal.me/',
    pageLink: null,
    gitLink: 'https://github.com/nickroberts404/daily-journal',
    icon: <IconDaily />,
  },
  {
    title: 'Lunaphase',
    description:
      'Lunaphase is a quick project inspired by a lunar calendar I have hanging on my wall. It uses D3 to render a grid of moons, all in the appropriate phase and roatation respective to your location. Clicking on a moon shows its rise and set time, also adjusted for your location.',
    projectLink: 'https://lunaphase.netlify.com/',
    pageLink: null,
    gitLink: 'https://github.com/nickroberts404/Lunaphase',
    icon: <IconLuna />,
  },
  {
    title: 'Element Calculator',
    description:
      'A molecular mass/mass percentage calculator in the form of a periodic table. It allows you to add and subtract elements by clicking on them, or by entering the formula.',
    projectLink: 'http://elementcalc.me/',
    pageLink: null,
    gitLink: 'https://github.com/nickroberts404/element-calc',
    icon: <IconElements />,
  },
  {
    title: 'Thoughtjar',
    description:
      'A web app for organizing thoughts and ideas into categories. You can add new categories, assign them colors, and use them to filter thoughts. Utilizes service workers and the localStorage API to allow offline use.',
    projectLink: 'https://thoughtjar.co/',
    pageLink: null,
    gitLink: 'https://github.com/nickroberts404/thoughtjar',
    icon: <IconThoughts />,
  },
  {
    title: 'Dirbook',
    description:
      'A CLI that enables users to save, open, and copy directories. Dirbook can optionally manage aliases for saved directories in <code>.bashrc</code>. I use this a lot for saving starter projects to copy later, and for hopping around between my projects quickly.',
    projectLink: 'https://www.npmjs.com/package/dirbook',
    pageLink: null,
    gitLink: 'https://github.com/nickroberts404/dirbook',
    icon: <IconDirbook />,
  },
  {
    title: 'Mirageo',
    description:
      'A library for creating mock location data, optionally within a bounding box/polygon. <a href="https://github.com/nickroberts404/mirageo-server"><b>mirageo-server</b></a> spins up a local server that exposes the data via HTTP and provides a map interface for location visualization and bound manipulation.',
    projectLink: 'https://www.npmjs.com/package/mirageo',
    pageLink: null,
    gitLink: 'https://github.com/nickroberts404/mirageo',
    icon: <IconLocation />,
  },
  {
    title: 'Mendeleev',
    description:
      'A small library for building compounds and working with element data. <b>PeriodicTable</b> acts as a wrapper around a JSON file detailing all of the elements and their charecteristics. <b>Compound</b> is responsible for parsing and formatting compound notation, as well as performing the mass/percentage calculations.',
    projectLink: 'https://www.npmjs.com/package/mendeleev',
    pageLink: null,
    gitLink: 'https://github.com/nickroberts404/Mendeleev',
    icon: <IconMendeleev />,
  },
]
