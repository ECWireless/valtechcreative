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

export const Col2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
`

export const Col2Left = styled.div`
    grid-column: 1 / 2;
    display: flex;
    flex-direction: column;

    ${props => css`
        align-items: ${props.align};
        justify-content: ${props.justify};
    `}
`

export const Col2Right = styled.div`
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;

    ${props => css`
        align-items: ${props.align};
        justify-content: ${props.justify};
    `}
`

export const Flex = styled.div`
    display: flex;
`
