import React from 'react'
import {
  IconElements,
  IconThoughts,
  IconLocation,
  IconMendeleev,
  IconDirbook,
} from './components/Icons'
const color = false

const projects = [
  {
    title: 'Element Calculator',
    description:
      'A molecular mass/mass percentage calculator in the form of a periodic table. It allows you to add and subtract elements by clicking on them, or by entering the formula.',
    projectLink: 'http://elementcalc.me/',
    pageLink: null,
    gitLink: 'https://github.com/nickroberts404/element-calc',
    icon: <IconElements color={color} />,
  },
  {
    title: 'Thoughtjar',
    description:
      'A web app for organizing thoughts and ideas into categories. You can add new categories, assign them colors, and use them to filter thoughts. Utilizes service workers and the localStorage API to allow offline use.',
    projectLink: 'https://thoughtjar.co/',
    pageLink: null,
    gitLink: 'https://github.com/nickroberts404/thoughtjar',
    icon: <IconThoughts color={color} />,
  },
  {
    title: 'Dirbook',
    description:
      'A CLI that enables users to save, open, and copy directories. Dirbook can optionally manage aliases for saved directories in <code>.bashrc</code>. I use this a lot for saving starter projects to copy later, and for hopping around between my projects quickly.',
    projectLink: 'https://www.npmjs.com/package/dirbook',
    pageLink: null,
    gitLink: 'https://github.com/nickroberts404/dirbook',
    icon: <IconDirbook color={color} />,
  },
  {
    title: 'Mirageo',
    description:
      'A library for creating mock location data, optionally within a bounding box/polygon. <a href="https://github.com/nickroberts404/mirageo-server"><b>mirageo-server</b></a> spins up a local server that exposes the data via HTTP and provides a map interface for location visualization and bound manipulation.',
    projectLink: 'https://www.npmjs.com/package/mirageo',
    pageLink: null,
    gitLink: 'https://github.com/nickroberts404/mirageo',
    icon: <IconLocation color={color} />,
  },
  {
    title: 'Mendeleev',
    description:
      'A small library for building compounds and working with element data. <b>PeriodicTable</b> acts as a wrapper around a JSON file detailing all of the elements and their charecteristics. <b>Compound</b> is responsible for parsing and formatting compound notation, as well as performing the mass/percentage calculations.',
    projectLink: 'https://www.npmjs.com/package/mendeleev',
    pageLink: null,
    gitLink: 'https://github.com/nickroberts404/Mendeleev',
    icon: <IconMendeleev color={color} />,
  },
]
export default projects
