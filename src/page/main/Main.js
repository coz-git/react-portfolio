import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import Logo from '../../components/logo/Logo'
import PowerButton from '../../components/powerButton/PowerButton'
import SocialIcon from '../../components/socialIcon/SocialIcon'
import Introduction from './../../components/introduction/Introduction';
import { motion } from 'framer-motion';
import Click from './../../components/click/Click';
import Close from './../../components/close/Close';

const MainContainer = styled.div`
  @media only screen and (max-width: 768px) {
    h2 {
      font-size : 1em;
    }
  }
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  
  h2,h3,h4,h5,h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`

const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`

const Container = styled.div`
  padding: 2rem;
`

const Contact = styled(NavLink)`
  @media only screen and (max-width: 768px) {
    color: ${props => props.click ? props.theme.body : props.theme.text };
    font-size: 1.2em;
  }
  color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`

const Skill = styled(NavLink)`
  @media only screen and (max-width: 768px) {
    color: ${props => props.click ? props.theme.body : props.theme.text };
    text-shadow: ${props => props.click ? 'rgb(0 0 0) 0px 0px 4px' : '0px' };
  }
  color: ${props => props.theme.text };
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`

const Work = styled(NavLink)`
  @media only screen and (max-width: 768px) {
    color: ${props => props.click ? props.theme.body : props.theme.text };
    text-shadow: ${props => props.click ? 'rgb(0 0 0) 0px 0px 4px' : '0px' };
  }
  color: ${props => props.click ? props.theme.body : props.theme.text };
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`

const BottomBar = styled.div`
  @media only screen and (max-width: 768px) {
    position: absolute;
    bottom: 3rem;
    left: 0;
    right: 0;
  }
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

const About = styled(NavLink)`
  @media only screen and (min-width: 768px) {
    color: ${props => props.click ? props.theme.body : props.theme.text };
    text-shadow: ${props => props.click ? 'rgb(0 0 0) 0px 0px 4px' : '0px' };
  }
  color: ${props => props.theme.text };
  text-decoration: none;
  z-index: 1;
`

const Center = styled.button`
  position: absolute;
  top: ${props => props.click ? '85%' : '50%'};
  left: ${props => props.click ? '92%' : '50%'};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-out;
`

const Darkdiv = styled.div`
  position: absolute;
  background-color: #000;
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;

  @media only screen and (max-width: 768px) {
    right: 0;
    left: 0;
    bottom: 50%;
    width: ${props => props.click ? '100%' : '0%'};
    height: ${props => props.click ? '100%' : '0%'};
    
  }

  @media only screen and (min-width: 768px) {
    top: 0;
    bottom: 0;
    right: 50%;
    width: ${props => props.click ? '50%' : '0%'};
    height: ${props => props.click ? '100%' : '0%'};
    z-index: 1;
  }
`

const Main = () => {
  const [click, setClick] = useState(false)
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);


  return (
    <MainContainer>
      <Darkdiv click={click} />
      <Container>
        <PowerButton />
        <Logo color={!matches && click ? 'light' : matches && click ? 'light' : 'dark'}  page={'main'} />
        <SocialIcon color={!matches ? 'dark' : matches && click ? 'light' : 'dark'}  page={'main'} />

        <Center onClick={() => setClick(!click)} click={click}>
          {
            matches ? 
            click ? (
              <Close width={ '200px' } />
              ) : (
              <Click />
            ) : click ? (
              <Close width={ '100px' } />
              ) : (
              <Click />
           )
          }
        </Center>

        <Contact target="_blank" to='javascript:void(0)'
      onClick={() => window.location = 'mailto:sultankosasih@gmail.com'}>
        {/* <Contact target="_blank"  to={{pathname:"mailto:sultankosasih@gmail.com"}}> */}
          <motion.h2
            whileHover={{scale : 1.1}}
            whileTap={{scale : 0.9}}
          >
            Say hi..
          </motion.h2>
        </Contact>
        <Skill to={{pathname : '/skill'}} click={click}>
          <motion.h2
            whileHover={{scale : 1.1}}
            whileTap={{scale : 0.9}}
          >
            Skill
          </motion.h2>
        </Skill>
        <Work to={{pathname : '/work'}} click={click}>
          <motion.h2
            whileHover={{scale : 1.1}}
            whileTap={{scale : 0.9}}
          >
            Work
          </motion.h2>
        </Work>
        <BottomBar>
          <About to={{pathname : '/about'}} click={click}>
          <motion.h2
            whileHover={{scale : 1.1}}
            whileTap={{scale : 0.9}}
          >
            About
          </motion.h2>
        </About>
        </BottomBar>
      </Container>
      {click ? <Introduction isClick={click} matches={matches} /> : null}
    </MainContainer>
  )
}

export default Main