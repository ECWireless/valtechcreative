import styled, { css } from 'styled-components'
import respondTo from './Breakpoints'

export const Button = styled.button`
    width: 200px;
    height: 50px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #1062AD;
    outline: none;
    color: #1062AD;
    border-radius: 5px;
    transition: all .5s ease;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        box-shadow: 0px 4px 15px rgba(0,0,0,0.4);
        background-color: #1062AD;
        color: #FFF;
    }

    ${respondTo.sm`
        font-size: 18px;
    `}

    ${respondTo.md`
        font-size: 20px;
    `}

    ${respondTo.lg`
        font-size: 24px;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `};

    ${props =>
        css`
            margin-top: ${props.marginTop * .4}px;
            margin-bottom: ${props.marginBottom * .4}px;
            margin-left: ${props.marginLeft * .4}px;
            padding-left: ${props.paddingLeft * .4}px;
            padding-right: ${props.paddingRight * .4}px;

            ${respondTo.xs`
                margin-top: ${props.marginTop * .45}px;
                margin-bottom: ${props.marginBottom * .45}px;
                margin-left: ${props.marginLeft * .45}px;
                padding-left: ${props.paddingLeft * .45}px;
                padding-right: ${props.paddingRight * .45}px;
            `}
            
            ${respondTo.sm`
                margin-top: ${props.marginTop * .7}px;
                margin-bottom: ${props.marginBottom * .7}px;
                margin-left: ${props.marginLeft * .7}px;
                padding-left: ${props.paddingLeft * .7}px;
                padding-right: ${props.paddingRight * .7}px;
            `}

            ${respondTo.md`
                margin-top: ${props.marginTop}px;
                margin-bottom: ${props.marginBottom}px;
                margin-left: ${props.marginLeft}px;
                padding-left: ${props.paddingLeft}px;
                padding-right: ${props.paddingRight}px;
            `}

            ${respondTo.lg`
            `}
        `};
`