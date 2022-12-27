import React from 'react'
import { NavLink } from 'react-router-dom'
import { FacebookIcon, GithubIcon, TwitterIcon, YouTubeIcon, LinkedinIcon } from '../../assets/svg'
import styled  from 'styled-components';
import { darkTheme } from '../../Theme/Themes'

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    position: fixed;
    bottom: 0px;
    left: 2rem;

    z-index: 3;
    &>*:not(:last-child) {
        margin: 0.5rem 0px;
    }
`

const Line = styled.span`
    @media only screen and (max-width: 768px) {
        background-color: ${props => props.color == 'light' ? props.theme.body : props.theme.text };
    }
    width: 2px;
    height: 8rem;
    background-color: ${props => props.color == 'light' ? props.theme.body : props.theme.text };

`

const SocialIcon = (props) => {
    return (
        <Icons>
            <div>
                <a href="https://github.com/coz-git" target="_blank">
                    <GithubIcon width={25} height={25} fill={props.color == 'light' ? darkTheme.text : darkTheme.body} />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/rama-kosasih-912bbb12a/" target="_blank">
                    <LinkedinIcon width={30} height={30} fill={props.color == 'light' ? darkTheme.text : darkTheme.body} />
                </a>
            </div>
            <Line color={props.color} />
        </Icons>
    )
}

export default SocialIcon