import { motion } from 'framer-motion';
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import styled from 'styled-components';

import Me from '../../assets/Images/profile pic.png'


const Box = styled(motion.div)`
    @media only screen and (min-width: 768px) {
        height: 55vh;
        border : 2px solid #afe2e6;
        z-index: 1;
    }
    @media only screen and (max-width: 768px) {
        height: 60vh;
        border-right-width: initial;
        border-left-width: initial;
        border-right-color: initial;
        border-left-color: initial;
        
        background-size: 100% 2px;
        
        border : 2px solid #afe2e6;
        background-position: 0px 0px, 100% 0px;
        background-repeat: no-repeat;
        flex-direction: column;
        justify-content: space-between;
    }
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    
    width: 60vw;
    display: flex;
    
    z-index: 1;
`

const SubBox = styled.div`
    @media only screen and (max-width: 768px) {
        width: 100%;
        &>*:nth-child {
            padding: 10px;
        }

        .pic{
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 0%);
            width: 60%;
            height: auto;
        }
    }
    @media only screen and (min-width: 768px) {
        width: 50%;
        position: relative;
        display: flex;

        .pic{
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 0%);
            width: 100%;
            height: auto;
        }
    }
`

const Text = styled.div`
    @media only screen and (max-width: 768px) {
        height: 100%;
    }
    font-size: calc(1em + 1.5vw);
    color : ${props => props.theme.body};
    padding : 2rem;
    cursor: pointer;
    

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    &>*:last-child{
        color : ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
        font-size: calc(0.5rem + 1.5vw);
        font-weight : 200;
    }
`

const Introduction = (props) => {
  return (
    <Box
        initial={{height: 0}}
        animate={props.matches ? { height : '55vh'} : { height : '65vh'} }
        transition={{ type: 'spring', duration : 2, delay : 1 }}
    >
        <SubBox>
            <Text>
                <h1>Hi,</h1>
                <h4>Im Kosasih Wahid</h4>
                <h6>
                    <TypeAnimation 
                        sequence={[
                            () => {
                                return new Promise((resolve) => setTimeout(resolve, 2000));
                            },
                            'Develop system and modern website as Fullstack Dev.',
                            1000,
                            'High attention to detail and qualify of works.',
                            1000,
                            'Proactive and able to work with little supervision.',
                            1000,
                            'Positive vibes and attitude in team environment.',
                            1000,
                        ]}
                        deletionSpeed={75}
                        speed={50}
                        wrapper="span"
                        repeat={Infinity}
                    />
                </h6>
            </Text>
        </SubBox>
        <SubBox>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity : 1}}
                transition={{ duration : 1, delay : 2 }}
            >
                <img className='pic' src={Me} alt="Profile Ilustration" />
            </motion.div>
        </SubBox>
    </Box>
  )
}

export default Introduction