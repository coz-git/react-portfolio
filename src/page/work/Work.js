import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import background from '../../assets/Images/background-work.jpg'
import PowerButton from '../../components/powerButton/PowerButton';
import SocialIcon from '../../components/socialIcon/SocialIcon';
import Logo from './../../components/logo/Logo';
import { Works } from '../../data/WorkData'
import WorkItem from './../../components/workItem/WorkItem';
import AnchorComponent from './../../components/anchor/AnchorComponent';

const MainContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`

const Container = styled.div`
  background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.8)`};
  width : 100%;
  height: auto;
  position : relative;
  padding-bottom : 5rem;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
//   grid-gap: calc(1rem + 2vw);
// `

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  /* grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw); */
`

const Work = () => {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30
    setNumber(parseInt(num))
  }, [])
  

  return (
    <MainContainer>
      <Container>
        <Logo />
        <PowerButton />
        <SocialIcon />
        <AnchorComponent number={number} />
        <Center>
          <Grid>
            { Works.map(work => {
              return <WorkItem key={work.id} work={work} />
            }).reverse() }
          </Grid>
        </Center>
      </Container>
    </MainContainer>
  )
}

export default Work