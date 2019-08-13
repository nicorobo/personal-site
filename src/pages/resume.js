import React from 'react'
import styled from 'styled-components'
import Page from '../components/Page'
import { primaryBrand } from '../colors'

export default () => (
  <Page>
    <Resume className="resume">
      <Header />
      <Section title="Education" items={education} />
      <Section title="Work Experience" items={experience} />
      <Section title="Projects" items={projects} />
      <SkillSection />
    </Resume>
    <ButtonContainer>
      <a href="/resume.pdf">
        <PDFButton>
          Download PDF <i className="fas fa-file" />
        </PDFButton>
      </a>
    </ButtonContainer>
  </Page>
)

const Header = () => (
  <div className="header">
    <div className="left-side">
      <h2 className="name">Nick Roberts</h2>
      <a className="website contact" href="https://meadowlab.io">
        meadowlab.io
      </a>
      <a className="website contact" href="https://github.com/nickroberts404">
        github.com/nickroberts404
      </a>
    </div>
    <div className="right-side">
      <a className="email contact" href="mailto:nickroberts404@gmail.com">
        nickroberts404@gmail.com
      </a>
      <div className="phone contact">512-788-3156</div>
      <div className="location contact">Austin, TX</div>
    </div>
  </div>
)

const Section = ({ title, items }) => (
  <div className="section">
    <div className="section-title">{title}</div>
    <div className="section-items">
      {items.map(i => (
        <Item key={i.title} item={i} />
      ))}
    </div>
  </div>
)

const Item = ({ item }) => (
  <div className="item">
    <div className="item-header">
      {item.link ? (
        <a className="item-title link" href={item.link}>
          {item.title}
        </a>
      ) : (
        <a className="item-title">{item.title}</a>
      )}

      <div className="secondary">{item.secondary}</div>
      <div className="date">{item.date}</div>
    </div>
    <div className="subtitle">{item.subtitle}</div>
    <div className="details">
      {item.details.map((d, i) => (
        <div key={i} className="detail">
          {d}
        </div>
      ))}
    </div>
  </div>
)

const SkillSection = () => (
  <div className="section">
    <div className="section-title">Technical Skills</div>
    <div className="details">
      JavaScript, Python, React, Express, ES6, GraphQL, MongoDB, D3, Sass, GIS,
      Git, HTML5/CSS3
    </div>
  </div>
)

const ButtonContainer = styled.div`
  padding: 1rem;
  margin: 0 auto;
  max-width: 800px;
  display: flex;
  justify-content: flex-end;
`

const PDFButton = styled.button`
  padding: 0.5rem 2rem;
  outline: none;
  color: ${primaryBrand};
  border-radius: 5px;
  border: 1px solid ${primaryBrand};
  cursor: pointer;
  font-size: 0.8rem;
  background: white;
  i {
    margin-left: 0.3rem;
  }
  &:hover {
    background: ${primaryBrand};
    color: white;
  }
`
const Resume = styled.div`
  padding: 1rem;
  margin: 0 auto;
  max-width: 800px;
  line-height: 20px;
  .header {
    display: flex;
    margin-bottom: 1rem;
    justify-content: space-between;
  }
  .header a {
    text-decoration: none;
    color: #333;
  }
  .header a:hover {
    color: ${primaryBrand};
  }
  .contact {
    font-weight: lighter;
    font-size: 0.9rem;
    margin-bottom: 0.1rem;
  }
  .name {
    line-height: 1;
    margin: 0;
    font-size: 2.5rem;
    font-weight: normal;
  }
  .header .left-side {
    display: flex;
    flex-direction: column;
  }
  .header .right-side {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
  }
  .section {
    margin-bottom: 1rem;
  }
  .section-title {
    font-size: 1.4rem;
    font-weight: 800;
    margin-bottom: 0.8rem;
  }
  .item {
    margin-bottom: 0.5rem;
    margin-left: 1rem;
  }
  .item-header {
    display: flex;
    align-items: flex-end;
  }
  .item-title {
    font-weight: 600;
    margin-right: 0.7rem;
    text-decoration: none;
    color: inherit;
  }
  .item-title.link:hover {
    color: ${primaryBrand};
  }
  .secondary {
    flex-grow: 1;
    opacity: 0.9;
    font-size: 0.9rem;
    font-weight: lighter;
  }
  .subtitle {
    font-style: italic;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
  .date {
    font-size: 0.9rem;
    font-style: italic;
  }
  .details {
    font-size: 0.9rem;
    margin-left: 0.8rem;
  }
  .detail:before {
    content: '';
    display: inline-block;
    position: relative;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    top: -2px;
    right: 7px;
    background-color: #333;
  }
  .detail {
    margin-bottom: 0.3rem;
  }
`
const education = [
  {
    title: 'The University of Texas',
    secondary: 'Austin, TX',
    date: 'Fall 2012 - Spring 2016',
    details: [
      'B.S.A in Computer Science',
      'Relevant Coursework: Software Engineering, Data Management, Info Retrieval and Web Search',
    ],
  },
]

const experience = [
  {
    title: 'StreamMe',
    secondary: 'Austin, TX',
    subtitle: 'Front End Engineer',
    date: 'April 2017 - August 2018',
    details: [
      'Collaborated closely with a team of 10 engineers to build and maintain a video streaming platform',
      'Led development of greenfield project "Communities" to build a more inclusive environment for streamers',
      'Used React and Flux to develop and enhance the UX/UI for an isomorphic web app, focusing on a realtime chat component, helpful style guide, and GDPR compliance',
    ],
  },
  {
    title: "The World's Coffee",
    secondary: 'Austin, TX',
    subtitle: 'Freelance Software Engineer',
    date: 'November 2016 - January 2017',
    details: [
      'Built and deployed early-stage coffee bean storefront in 2 months, including an inventory management system',
      "Used React and Redux to build out the client and admin sites, Express for the API, and Stripe's API for payments",
    ],
  },
  {
    title: 'Weebly',
    secondary: 'San Francisco, CA',
    subtitle: 'Software Engineer Intern',
    date: 'June 2015-August 2015',
    details: [
      "Worked on the drag n' drop team to build a more secure and responsive website creator using PHP and Backbone.js",
      'Migrated the editor to an iframe to prevent code injection, focusing personally on inter-window communication',
    ],
  },
]

const projects = [
  {
    title: 'PlaceList',
    secondary: 'Express, GraphQL, React, Google Maps API',
    date: 'July 2019',
    details: [
      'A simple app for creating and sharing "playlists" of places, using Google\'s Places API for location data',
      'Server authenticates with Facebook credentials and uses Apollo to provide a GraphQL interface for client',
    ],
    link: 'https://placelist.casa',
  },
  {
    title: 'Groovin',
    secondary: 'React, D3',
    date: 'June 2019',
    details: [
      'A circular 8-part drum machine that outputs MIDI note/velocity in addition to playing samples through Web Audio',
      'Built to test capabilities of @react-midi, can receive as well as send MIDI clock and transport messages',
    ],
    link: 'https://groovin.casa',
  },
  {
    title: '@react-midi',
    secondary: 'React',
    date: 'April 2019',
    details: [
      'A library of hooks and components for working with MIDI in React, used for communicating with music devices',
      'Encourages a more tactile web experience by making it easy to accept input from knobs, sliders, and buttons',
    ],
    link: 'https://www.npmjs.com/package/@react-midi/hooks',
  },
  {
    title: 'Daily Journal',
    secondary: 'React, Redux, Local Storage',
    date: 'March 2019',
    details: [
      "A journal for keeping short summaries of day's activities used for personal reflection",
      "Implements drag n' drop for organization and a Github inspired contribution calendar for motivation/navigation",
    ],
    link: 'https://dailyjournal.me/',
  },
]
