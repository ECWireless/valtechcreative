import styled, { css } from 'styled-components'

export const breakpoints = {
	xs: '480px',
	sm: '768px',
	md: '992px',
	lg: '1200px'
};

export const Card = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85vw;
    height: 85vh;
    background: #fff;
    border-radius: 15px;
    -webkit-box-shadow: 1px 5px 5px -1px rgba(0,0,0,0.38);
    -moz-box-shadow: 1px 5px 5px -1px rgba(0,0,0,0.38);
    box-shadow: 1px 5px 5px -1px rgba(0,0,0,0.38);
`

export const respondTo = Object.keys(breakpoints).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (min-width: ${breakpoints[label]}) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});

export const Container = styled.div`
    position: relative;
    width: 280px;
    margin: auto;

    ${respondTo.xs`
        width: 300px;
    `}
    
    ${respondTo.sm`
        width: 600px;
    `}

    ${respondTo.md`
        width: 800px;
    `}

    ${respondTo.lg`
        width: 1000px;
	`}
`

export const Flex = styled.div`
    display: flex;
`

export const H1 = styled.h1`
    font-size: 65px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    color: #FAF30E;

    ${props =>
        props.uppercase &&
        css`
            text-transform: uppercase;
        `};
`

export const H2 = styled.h2`
    font-size: 50px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    color: #FAF30E;

    ${props =>
        props.uppercase &&
        css`
            text-transform: uppercase;
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

export const Logo = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 20px auto;
    border: 2px solid #FBF30A;
    -webkit-box-shadow: 1px 2px 3px -1px rgba(0,0,0,0.38);
    -moz-box-shadow: 1px 2px 3px -1px rgba(0,0,0,0.38);
    box-shadow: 1px 2px 3px -1px rgba(0,0,0,0.38);

    ${respondTo.xs`
        width: 50px;
        height: 50px;
        margin: 30px auto 30px;
    `}
    
    ${respondTo.sm`
        margin: 30px auto 40px;
    `}

    ${respondTo.md`
        margin: 40px auto 40px;
    `}

    ${respondTo.lg`
        width: 75px;
        height: 75px;
        margin: 40px auto 60px;
	`}
`

export const P1 = styled.p`
    font-size: 24px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    color: #fff;

    ${respondTo.sm`
    font-weight: 400;
        font-size: 28px;
    `}

    ${respondTo.md`
        font-size: 38px;
    `}

    ${respondTo.lg`
        font-size: 45px;
    `}

    ${props =>
        props.uppercase &&
        css`
            text-transform: uppercase;
        `};
`

export const P2 = styled.p`
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    color: #fff;

    ${respondTo.sm`
    font-weight: 400;
        font-size: 18px;
    `}

    ${respondTo.md`
        font-size: 20px;
    `}

    ${respondTo.lg`
        font-size: 24px;
    `}

    ${props =>
        props.uppercase &&
        css`
            text-transform: uppercase;
        `};
`