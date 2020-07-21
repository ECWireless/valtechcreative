import styled, { css } from 'styled-components'
import respondTo from './Breakpoints'

export const Background1 = styled.div`
    ${props => css`
        background: #fff;
        width: 100%;
        height: 2500px;

        ${respondTo.xs`
            height: 3000px;
        `}
        
        ${respondTo.sm`
            height: 3700px;
        `}

        ${respondTo.md`
            height: 2200px;
        `}

        ${respondTo.lg`
            height: 2400px;
        `}
    `};
`

export const Background2 = styled.div`
    ${props => css`
        background: #fff;
        width: 100%;
        height: 1400px;

        ${respondTo.xs`
            height: 1500px;
        `}
        
        ${respondTo.sm`
            height: 2000px;
        `}

        ${respondTo.md`
            height: 2200px;
        `}

        ${respondTo.lg`
            height: 2200px;
        `}
    `};
`

export const Card = styled.div`
    ${props => css`
        width: ${props.width}%;
        height: ${props.height}px;
        padding-top: ${props.paddingTop * .4}px;
        padding-bottom: ${props.paddingBottom * .4}px;
        background: linear-gradient(to top left ,#5891C5, #094c89);
        border-radius: 15px;
        margin: 0 auto;
        box-shadow: 0px 4px 6px rgba(0,0,0,0.4);

        ${respondTo.xs`
            padding-top: ${props.paddingTop * .4}px;
            padding-bottom: ${props.paddingBottom * .4}px;
        `}
        
        ${respondTo.sm`
            padding-top: ${props.paddingTop * .5}px;
            padding-bottom: ${props.paddingBottom * .5}px;
        `}

        ${respondTo.md`
        `}

        ${respondTo.lg`
            padding-top: ${props.paddingTop}px;
            padding-bottom: ${props.paddingBottom}px;
        `}
    `};
`

export const Img = styled.img`
    width: 250px;
    height: 200px;
    
    ${respondTo.xs`
        width: 350px;
        height: 250px;
    `}

    ${respondTo.lg`
        width: 450px;
        height: 370px;
	`}
`

export const Line = styled.div`
    ${props => css`
        width: ${props.width * .8}px;
        height: ${props.height * .5}px;
        margin: 0 auto;

        ${respondTo.xs`
            height: ${props.height}px;
            width: ${props.width * .6}px;
        `}
        
        ${respondTo.sm`
            width: ${props.width * .8}px;
        `}

        ${respondTo.md`
            width: ${props.width}px;
        `}

        ${respondTo.lg`
        `}
    `};

    ${props => props.color === 'yellow' && css`
        background: #FAF30E;
    `};

    ${props => props.color === 'blue' && css`
        background: #1062AD;
    `};

    ${props => props.color === 'white' && css`
        background: #FFF;
    `};
`

export const Link = styled.a`
    display: inline-block;
    text-decoration: none;
    transition: color .3s ease;

    ${props => css`
        width: ${props.width * .7}px;
        height: ${props.height * .7}px;
        color: ${props.color};

        &:hover {
            color: ${props.hover};
        }

        ${respondTo.xs`
            width: ${props.width * .9}px;
            height: ${props.height * .9}px;
        `}
        
        ${respondTo.sm`
            width: ${props.width}px;
            height: ${props.height}px;
        `}

        ${respondTo.md`
            width: ${props.width * .9}px;
            height: ${props.height * .9}px;
        `}

        ${respondTo.lg`
            width: ${props.width}px;
            height: ${props.height}px;
        `}
    `};

    ${props => props.color === 'yellow' && css`
        color: #FAF30E;
    `}
`

export const Logo = styled.div`
    ${props => css`
        width: 80px;
        height: 50px;
        margin-top: 60px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;

        ${respondTo.xs`
            width: 100px;
            height: 75px;
            margin-top: 60px;
        `}
        
        ${respondTo.sm`
            width: 200px;
            height: 120px;
            margin-top: 100px;
        `}

        ${respondTo.md`
            width: 220px;
            height: 120px;
        `}

        ${respondTo.lg`
        `}
    `};
`

export const Showcase = styled.div`
    width: 100%;
    height: 100%;
    background: lightblue;
    border-radius: 15px;
    box-shadow: 0px 4px 6px rgba(0,0,0,0.4);
    transition: all .3s ease;
    background-position: center;
    background-size: cover;
    border: 1px #1062AD solid;

    &:hover {
        transform: scale(1.01);
        box-shadow: 0px 4px 15px rgba(0,0,0,0.4);
        border: 1px transparent solid;
    }
`

export const Transform = styled.div`
    ${props => css`
        transform: translateX(${props.x * .3}px);
        transform: translateY(${props.y * .3}px);

        ${respondTo.xs`
            transform: translateX(${props.x * .4}px);
            transform: translateY(${props.y * .4}px);
        `}
        
        ${respondTo.sm`
            transform: translateX(${props.x * .7}px);
            transform: translateY(${props.y * .7}px);
        `}

        ${respondTo.md`
            transform: translateX(${props.x}px);
            transform: translateY(${props.y}px);
        `}

        ${respondTo.lg`
        `}
    `}
`
