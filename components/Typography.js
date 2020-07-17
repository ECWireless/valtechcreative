import styled, { css } from 'styled-components'

export const breakpoints = {
	xs: '480px',
	sm: '768px',
	md: '992px',
	lg: '1200px'
};

export const respondTo = Object.keys(breakpoints).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (min-width: ${breakpoints[label]}) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});

export const H1 = styled.h1`
    font-size: 30px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    color: #FAF30E;

    ${respondTo.xs`
        font-size: 40px;
    `}
    
    ${respondTo.sm`
        font-size: 45px;
    `}

    ${respondTo.md`
        font-size: 55px;
    `}

    ${respondTo.lg`
        font-size: 65px;
	`}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `};

    ${props => css`
        text-align: ${props.align};
    `};
`

export const H2 = styled.h2`
    font-size: 18px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    color: #FAF30E;

    ${respondTo.xs`
        font-size: 26px;
    `}
    
    ${respondTo.sm`
        font-size: 34px;
    `}

    ${respondTo.md`
        font-size: 42px;
    `}

    ${respondTo.lg`
        font-size: 50px;
	`}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `};

    ${props => css`
        text-align: ${props.align};
    `};
`

export const H3 = styled.h3`
    font-size: 16px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    color: #FFF;

    ${respondTo.xs`
        font-size: 22px;
    `}
    
    ${respondTo.sm`
        font-size: 30px;
    `}

    ${respondTo.md`
        font-size: 38px;
    `}

    ${respondTo.lg`
        font-size: 45px;
	`}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `};

    ${props => css`
        text-align: ${props.align};
    `};
`

export const P1 = styled.p`
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    color: #fff;

    ${respondTo.xs`
        font-size: 22px;
    `}

    ${respondTo.sm`
        font-weight: 400;
        font-size: 30px;
    `}

    ${respondTo.md`
        font-size: 38px;
    `}

    ${respondTo.lg`
        font-size: 46px;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `};

    ${props => css`
        text-align: ${props.align};
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

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `};

    ${props => css`
        text-align: ${props.align};
    `};
`