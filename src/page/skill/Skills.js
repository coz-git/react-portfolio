import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Develope, IconFE } from '../../assets/svg'
import Logo from '../../components/logo/Logo';
import PowerButton from '../../components/powerButton/PowerButton';
import SocialIcon from '../../components/socialIcon/SocialIcon';
import { motion } from 'framer-motion';

const Box = styled.div`
  background-color: ${props => props.activeSkill == 'fe' ? '#f4af1b'  : '#132e3e' };
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: all 0.6s ease-in;
`

const Navigation = styled.div`
  position: absolute;
  top: 50%;
  right: -7em;
  transform: rotate(90deg);

  display: flex;
  align-items: center;
`

const NavItem = styled.div`
  margin: 0 0.5em;
  padding : 0.5em;
  border: 1px solid ${props => props.activeSkill == 'fe' ? props.theme.text : props.theme.body};
  cursor: pointer;
  transition: all 0.6s ease-in;
  color: ${props => props.activeSkill == 'fe' ? props.theme.text : props.theme.body};

  &.navACtive {
    cursor: grab;
    background-color: ${props => props.activeSkill == 'fe' ? '#40e0d0' : '#31a59a'};
  }
`

const Main = styled(motion.div)`
  @media only screen and (max-width: 768px) {
    width: 40vw;
    height : 50vh;
  }

  border: 2px solid ${props => props.theme.text};
  /* color : ${props => props.theme.body}; */
  color : ${props => props.activeSkill == 'fe' ? props.theme.body  : props.theme.text };
  background-color: ${props => props.activeSkill == 'fe' ? '#00154f'  : '#ed7b2e ' };
  padding: 2rem;
  width: 30vw;
  height : 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: 'Ubuntu Mono', monospace;
  display : flex;
  flex-direction : column;
  justify-content : space-between;

  /* &:hover {
    color : ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  } */
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items : center;
  font-size : calc(1em + 1vw);

  &>*:first-child {
    margin-right: 1rem;
    fill:${props => props.activeSkill == 'fe' ? props.theme.body  : props.theme.text };
  }

`

const Description = styled.div`
  color: ${props => props.activeSkill == 'fe' ? props.theme.body  : props.theme.text };
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,p {
    margin-left: 2rem;
  }

  /* ${Main}:hover &{
    color : ${props => props.theme.body};
  } */

`

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState('fe');
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  const delay = t => new Promise(resolve => setTimeout(resolve, t));

  const setActiveHandler = (value) => {
    setActiveSkill(null);
    delay(100).then(() => setActiveSkill(value));
  }

  const boxSkill = () => {
    if(activeSkill == 'fe') {
      return(
        <Main
          activeSkill={activeSkill}
          initial={{height: 0, opacity : 0}}
          animate={matches ? { height : '55vh', opacity : 100} : { height : '50vh', opacity : 100} }
          transition={{ type: 'spring', duration : 2 }}
        >
          <Title activeSkill={activeSkill}>
            <IconFE width={40} height={40} /> Frontend Developer
          </Title>
          <Description activeSkill={activeSkill}>
            I love to implement web design and make some experience for challenge my self.
          </Description>
          <Description activeSkill={activeSkill}>
            <strong>Skills</strong>
            <p>Html, CSS, JS, Jquery, ReactJS, Redux, Bootstrap, etc</p>
          </Description>
        </Main>
      )
    } else if(activeSkill == 'be') {
      return (
        <Main
          activeSkill={activeSkill}
          initial={{height: 0, opacity : 0}}
          animate={matches ? { height : '55vh', opacity : 100} : { height : '50vh', opacity : 100} }
          transition={{ type: 'spring', duration : 2 }}
        >
          <Title>
            <Develope width={40} height={40} /> Backend Developer
          </Title>
          <Description>
            I Love to analyze proces data, troubleshoot code problems and identify areas for improvement.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>.Net, NodeJS, PHP, Codeigniter, Laravel, SQL Server, MySql, etc</p>
          </Description>
        </Main>
      )
    }
    return null;
  }

  return (
    <Box activeSkill={activeSkill}>
      <Logo color={activeSkill == 'be' ? 'light' : 'dark'} />
      <PowerButton/>
      <SocialIcon color={activeSkill == 'be' ? 'light' : 'dark'} />
      <Navigation activeSkill={activeSkill} page={'skill'}>
        <NavItem activeSkill={activeSkill} className={activeSkill == 'fe' ? 'navACtive' : ''} onClick={() => setActiveHandler('fe')}>
          <motion.h4
            whileHover={{scale : 1.1}}
            whileTap={{scale : 0.9}}
          >
            Frontend Dev
          </motion.h4>
        </NavItem>
        <NavItem activeSkill={activeSkill} className={activeSkill == 'be' ? 'navACtive' : ''} onClick={() => setActiveHandler('be')}>
          <motion.h4
            whileHover={{scale : 1.1}}
            whileTap={{scale : 0.9}}
          >
            Backend Dev
          </motion.h4>
        </NavItem>
      </Navigation>
      {boxSkill(activeSkill)}
    </Box>
  )
}

export default Skills