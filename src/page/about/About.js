import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components';

import Logo from '../../components/logo/Logo';
import PowerButton from '../../components/powerButton/PowerButton';
import SocialIcon from '../../components/socialIcon/SocialIcon';
import { motion } from 'framer-motion';

import Bird from './../../components/aboutComponent/Bird';
import Planet from './../../components/aboutComponent/Planet';
import Plane from './../../components/aboutComponent/Plane';

const float = keyframes`
  0% { transform : translateY(25vh) translateX(25vw) }
  20% { transform : translateY(20vh) translateX(20vw) }
  40% { transform : translateY(15vh) translateX(15vw) }
  60% { transform : translateY(10vh) translateX(10vw) }
  80% { transform : translateY(5vh) translateX(5vw) }
  100% { transform : translateY(0vh) translateX(0vw) }
`

const Box = styled.div`
  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
`

const BirdComponent = styled.div`
  @media only screen and (min-width: 768px) {
    width: 25vw;
    right : 100px;
  }
  position : absolute;
  top: 15%;
  right : 20px;
  width: 30vw;
  transform: rotateY(150deg);
  animation: ${float} 4s forwards linear;
  z-index: 5;
`

const PlanetComponent = styled.div`
  @media only screen and (max-width: 768px) {
    width: 13vw;
    right: 0.5rem;
  }
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 10vw;
`

const PlaneComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: calc(5vw + 5rem);
  top: 10rem;

  width: 10vw;
  z-index : 1;
`

const Main = styled.div`
  border: 2px solid #00cbdb;
  color : ${props => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height : 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: 4px;

  position: absolute;
  left: calc(5vw + 5rem);
  top: 10rem;

  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`

const About = () => {
  return (
    <Box>
      <Logo />
      <PowerButton />
      <SocialIcon />
      <PlanetComponent>
        <Planet />
      </PlanetComponent>
      <BirdComponent>
        <Bird />
      </BirdComponent>
      {/* <PlaneComponent>
        <Plane />
      </PlaneComponent> */}
      <Main>
        I'm a Fullstack developer located in Jakarta, Indonesia. I Love programming world cz feel some satisfied when solving problem with code.
        <br/><br/>
        I've been working in PT. Nawa Data Solution as a Fullstack Stack Developer since 2020, and looking for new opportunities.
        <br/><br/>
        I believe with learning code will improve you for understanding the world. Feel free to cantact me for further information.
      </Main>
    </Box>
  )
}

export default About