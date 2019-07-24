import React from 'react'
import styled from 'styled-components'
import Page from '../components/Page'

export default () => (
  <Page>
    <Resume>
      <header>
        <div class="name-section">
          <h3 class="title">Nick Roberts</h3>
          <a class="website" href="http://meadowlab.io">
            meadowlab.io
          </a>
          <a class="website vis-small" href="https://github.com/nickroberts404">
            github.com/nickroberts404
          </a>
          <a class="email vis-small" href="mailto:nickroberts404@gmail.com">
            nickroberts404@gmail.com
          </a>
        </div>
        <div class="spacer" />
        <div class="personal-info">
          <a class="email vis-large" href="mailto:nickroberts404@gmail.com">
            nickroberts404@gmail.com
          </a>
          <a class="website vis-large" href="https://github.com/nickroberts404">
            github.com/nickroberts404
          </a>
        </div>
      </header>
      <section class="education">
        <div class="section-header">
          <div class="section-title">Education</div>
        </div>
        <section class="subsection">
          <div class="section-header">
            <div class="header-left">
              <div class="subsection-title">The University of Texas</div>
              <div>Austin, TX</div>
            </div>
            <div class="header-right">
              <div class="subsection-info">Graduation: Spring 2016</div>
            </div>
          </div>
          <div class="section-body">
            <ul>
              <li>B.S.A in Computer Science</li>
              <li>
                Relevant Coursework: Software Engineering, Info Retrieval and
                Web Search, Data Management
              </li>
            </ul>
          </div>
        </section>
      </section>
      <section class="experience">
        <div class="section-header">
          <div class="section-title">Work Experience</div>
        </div>
        <section class="subsection">
          <div class="section-header">
            <div class="header-left">
              <div class="subsection-title">The World's Coffee</div>
              <div>Austin, TX</div>
            </div>
            <div class="header-right">
              <div class="subsection-info">November 2016 - December 2016</div>
            </div>
          </div>
          <div class="section-body">
            <div class="job-title">Freelance Software Engineer</div>
            <ul>
              <li>Built initial coffee bean storefront in 2 months</li>
              <li>
                Used React for the client and admin sites, Express for the API,
                and Stripe's API for payments
              </li>
            </ul>
          </div>
        </section>
        <section class="subsection">
          <div class="section-header">
            <div class="header-left">
              <div class="subsection-title">Weebly</div>
              <div>San Francisco, CA</div>
            </div>
            <div class="header-right">
              <div class="subsection-info">June 2015 - August 2015</div>
            </div>
          </div>
          <div class="section-body">
            <div class="job-title">Software Engineer Intern</div>
            <ul>
              <li>
                Worked on a strong team of 5 engineers building the next
                iteration of Weebly's drag n' drop website editor
              </li>
              <li>
                Worked with PHP and Backbone.js to make the editor more secure
                and responsive
              </li>
            </ul>
          </div>
        </section>
      </section>
      <section class="projects">
        <div class="section-header">
          <div class="section-title">Projects</div>
        </div>
        <section class="subsection">
          <div class="section-header">
            <div class="header-left">
              <div class="subsection-title">
                <a target="_blank" href="http://elementcalc.me/">
                  Element Calculator
                </a>
              </div>
              <div>React, Gulp</div>
            </div>
            <div class="header-right">
              <div class="subsection-info">March 2016</div>
            </div>
          </div>
          <div class="section-body">
            <ul>
              <li>
                An interactive, responsive periodic table that doubles as a
                molecular mass calculator
              </li>
              <li>
                Uses a homebrewed npm module{' '}
                <a href="https://github.com/nickroberts404/Mendeleev">
                  Mendeleev
                </a>{' '}
                to handle periodic table data and compound calculations
              </li>
            </ul>
          </div>
        </section>
        <section class="subsection">
          <div class="section-header">
            <div class="header-left">
              <div class="subsection-title">
                <a target="_blank" href="https://thoughtjar.co/">
                  Thoughtjar
                </a>
              </div>
              <div>React, Gulp</div>
            </div>
            <div class="header-right">
              <div class="subsection-info">June 2016</div>
            </div>
          </div>
          <div class="section-body">
            <ul>
              <li>A tool for organizing thoughts and ideas into categories</li>
              <li>
                Uses the localStorage API to persist data and service workers to
                allow offline use
              </li>
            </ul>
          </div>
        </section>
        <section class="subsection">
          <div class="section-header">
            <div class="header-left">
              <div class="subsection-title">
                <a target="_blank" href="https://www.npmjs.com/package/dirbook">
                  Dirbook
                </a>
              </div>
              <div>Javascript</div>
            </div>
            <div class="header-right">
              <div class="subsection-info">December 2017</div>
            </div>
          </div>
          <div class="section-body">
            <ul>
              <li>
                A CLI that indexes directories/projects, enabling users to open
                and copy them
              </li>
              <li>
                Optionally manages a subsection of user's .bash_profile to add
                aliases for directories
              </li>
            </ul>
          </div>
        </section>
      </section>
      <section class="subsection">
        <div class="section-header">
          <div class="header-left">
            <div class="subsection-title">
              <a
                target="_blank"
                href="https://github.com/nickroberts404/mirageo"
              >
                Mirageo
              </a>
            </div>
            <div>Express, Webpack, Mapbox</div>
          </div>
          <div class="header-right">
            <div class="subsection-info">February 2017</div>
          </div>
        </div>
        <div class="section-body">
          <ul>
            <li>
              A library for creating mock location data, optionally within a
              bounding box/polygon
            </li>
            <li>
              Sister package{' '}
              <a href="https://github.com/nickroberts404/mirageo-server">
                mirageo-server
              </a>{' '}
              can serve the data locally and provides a map interface
            </li>
          </ul>
        </div>
      </section>
      <section class="skills">
        <div class="section-header">
          <div class="section-title">Technical Skills</div>
        </div>
        <div class="subsection">
          <p>
            JavaScript, Python, React, Express, Mocha, ES6, MongoDB, D3, Sass,
            GIS, Git, HTML5/CSS3
          </p>
        </div>
      </section>
    </Resume>
  </Page>
)

const Resume = styled.div`
  margin-top: -1rem;
  li {
    margin-bottom: 0;
  }

  a {
    color: #444;
    text-decoration: none;
    &:hover {
      color: $primary-color;
    }
  }

  ul {
    margin-bottom: 2rem;
    padding-left: 2.5rem;
  }
  ul > li {
    list-style-type: disc;
    list-style-position: outside;
  }

  header {
    display: flex;
    margin: 2rem 0 1rem 0;
  }

  .vis-small {
    display: none;
  }

  .name-section {
    display: flex;
    flex-direction: column;
  }

  .title {
    color: $primary-color;
    margin-bottom: 0;
    /*font-weight: 600;*/
  }
  .website,
  .email {
    opacity: 0.8;
  }

  .personal-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    // display: none;
  }

  .section-header {
    display: flex;
    font-weight: lighter;
  }

  .header-left {
    display: flex;
    flex: 1;
  }

  .section-title {
    font-size: 1.25rem;
    font-weight: bold;
    color: $primary-color;
  }
  .section-body {
    a {
      font-style: italic;
    }
  }

  .subsection {
    margin-left: 2rem;
  }

  .subsection-title {
    font-weight: bold;
    margin-right: 1rem;
  }

  .subsection-info {
    color: $primary-color;
    opacity: 0.8;
    // font-style: italic;
  }

  .job-title {
    opacity: 0.8;
  }

  @media (max-width: 600px) {
    .section-header {
      flex-direction: column;
    }
    .vis-small {
      display: block;
    }
    .vis-large {
      display: none;
    }
  }
`
