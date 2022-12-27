import React from 'react'
import styled from 'styled-components';

const LogoContainer = styled.h1`

    display: inline-block;
    color : ${props => props.color == 'light' ? props.theme.body : props.theme.text };
    font-family: 'Teko', sans-serif;
    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index: 3;


`

const Logo = (props) => {
  return (
    <LogoContainer color={props.color}>
        Coz
    </LogoContainer>
  )
}

export default Logo