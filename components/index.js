import styled, { css } from 'styled-components'

export const Card = styled.div`
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    width: 85vw;
    height: 85vh;
    background: #fff;
    border-radius: 15px;
    -webkit-box-shadow: 1px 5px 5px -1px rgba(0,0,0,0.38);
    -moz-box-shadow: 1px 5px 5px -1px rgba(0,0,0,0.38);
    box-shadow: 1px 5px 5px -1px rgba(0,0,0,0.38);
    border: 2px solid #FBF30A;
`

export const Container = styled.div`
    width: 900px;
    margin: auto;
`

export const H1 = styled.h1`
    font-size: 45px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;

    ${props =>
        props.uppercase &&
        css`
            text-transform: uppercase;
        `};
`

export const P = styled.p`
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    color: #094c89;

    ${props =>
        props.uppercase &&
        css`
            text-transform: uppercase;
        `};
`