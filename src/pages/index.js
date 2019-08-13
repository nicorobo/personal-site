import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Page from '../components/Page'
import Img from 'gatsby-image'
import { primaryBrand } from '../colors'

export default ({ data }) => {
  console.log(data)
  return (
    <Page>
      <Bio>
        <Title>Nick Roberts</Title>
        <Blurb>Front-end Engineer in Austin, TX</Blurb>
        <Info>
          I specialize in building interactive websites and applications!
        </Info>
        <Photo>
          <Img fixed={data.file.childImageSharp.fixed} alt="" />
        </Photo>
        <Links>
          <a target="_blank" href="https://github.com/nickroberts404">
            <i className="fab fa-github" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/nickroberts404/">
            <i className="fab fa-linkedin-in" />
          </a>
          <a target="_blank" href="https://soundcloud.com/bamborine">
            <i className="fab fa-soundcloud" />
          </a>
          <a target="_blank" href="mailto:nickroberts404@gmail.com">
            <i className="fas fa-envelope" />
          </a>
        </Links>
      </Bio>
    </Page>
  )
}
export const query = graphql`
  query {
    file(name: { eq: "image1" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 160, height: 160) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
const Bio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`
const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
`
const Blurb = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${primaryBrand};
  margin-bottom: 1rem;
`
const Info = styled.div``

const Photo = styled.div`
  height: 160px;
  width: 160px;
  border-radius: 50%;
  background: ${primaryBrand};
  overflow: hidden;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.5);
  margin: 1.5rem 0;
`
const Links = styled.div`
  font-size: 2rem;
  a {
    color: #999;
  }
  a:hover {
    color: #333;
  }
  a:not(:last-child) {
    margin-right: 1.5rem;
  }
`
