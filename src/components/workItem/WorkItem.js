import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Box = styled(NavLink)`
    @media only screen and (max-width: 768px) {
        width: calc(10rem + 15vw);
        height: 25rem;
    }
    width: calc(10rem + 35vw);
    height: 25rem;
    text-decoration: none;
    padding: 1rem;
    margin-bottom: 30px;
    color : ${props => props.theme.text};
    border: 2px solid ${props => props.theme.text};
    backdrop-filter: blur(2px);
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;

    display: flex;
    flex-direction: column;
    /* z-index: 5; */

    &:hover{
        color : ${props => props.theme.body};
        background-color: ${props => props.theme.text};
        transition: all 0.5 ease;
    }

`
const Image = styled.div`
    background-image: ${props => `url(${props.img})`};
    width : 100%;
    height : 60%;
    background-size : cover;
    border : 1px solid transparent;
    background-position : center center;

    ${Box}:hover &{
        border : 1px solid ${props => props.theme.body};
    }
`

const Title = styled.h3`
    color: inherit;
    padding: 0.5rem 0;
    padding-top: 1rem;
    font-family: 'karla', sans-serif;
    font-weight: 700;
    border-bottom: 1px solid ${props => props.theme.text};

    ${Box}:hover &{
        border-bottom : 1px solid ${props => props.theme.body};
    }
`

const Description = styled.span`
    @media only screen and (min-width: 768px) {
        font-weight: 700;
    }
    margin-top: 1rem;
`

const Hastag = styled.div`
    padding: 0.5rem 0;
`

const Tag = styled.span`
    padding-right: 0.5rem;
`

const Date = styled.span`
    padding: 0.5rem 0;
`

const WorkItem = (props) => {
    const { name, desc, tags, date, imgSrc, link } = props.work
    return (
        <Box target="_blank" to={{pathname : link}}>
            <Image img={imgSrc} />
            <Title>{name}</Title>
            <Description>{desc}</Description>
            <Hastag>
                {tags.map((tag, id) => {
                    return (
                        <Tag key={id}># {tag}</Tag>
                    )
                })}
            </Hastag>
        </Box>
    )
}

export default WorkItem