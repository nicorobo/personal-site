import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Page from '../components/Page'
import Img from 'gatsby-image'
import { primaryBrand } from '../colors'

export default ({ data }) => {
  return (
    <Page>
      <Bio>
        <Title>Nick Roberts</Title>
        <Blurb>Front-end Engineer in Austin, TX</Blurb>
        <Info>
          I specialize in building interactive websites and apps. When I'm not
          working on web projects, you'll find me climbing outside or playing
          with my synths!
        </Info>
        <Line />
        <PhotoContainer>
          <SmallPhoto>
            <Img fixed={data.image2.childImageSharp.fixed} alt="" />
          </SmallPhoto>
          <Photo>
            <Img fixed={data.image1.childImageSharp.fixed} alt="" />
          </Photo>
          <SmallPhoto>
            <Img fixed={data.image3.childImageSharp.fixed} alt="" />
          </SmallPhoto>
        </PhotoContainer>

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
    image1: file(name: { eq: "image1" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image2: file(name: { eq: "image2" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image3: file(name: { eq: "image3" }) {
      childImageSharp {
        fixed(width: 100, height: 100, cropFocus: NORTH) {
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
const Line = styled.div`
  height: 2px;
  width: 30%;
  margin-top: 1.5rem;
  background: #eee;
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
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background: ${primaryBrand};
  overflow: hidden;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.5);
  margin: 1.5rem 1.5rem;
`
const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
`
const SmallPhoto = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background: ${primaryBrand};
  overflow: hidden;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.5);
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
