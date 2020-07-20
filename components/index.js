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

export const Background = styled.div`
    ${props => css`
        background: #fff;
        width: 100%;
        height: 1000px;

        ${respondTo.xs`
            height: 1200px;
        `}
        
        ${respondTo.sm`
            height: 1700px;
        `}

        ${respondTo.md`
            height: 1000px;
        `}

        ${respondTo.lg`
        `}
    `};
`

export const Box = styled.div`
    ${props =>
        css`
            width: ${props.width * .3}px;
            margin-top: ${props.marginTop * .4}px;
            margin-left: ${props.marginLeft * .4}px;

            ${respondTo.xs`
                width: ${props.width * .45}px;
                margin-top: ${props.marginTop * .45}px;
                margin-left: ${props.marginLeft * .45}px;
            `}
            
            ${respondTo.sm`
                width: ${props.width * .7}px;
                margin-top: ${props.marginTop * .7}px;
                margin-left: ${props.marginLeft * .7}px;
            `}

            ${respondTo.md`
                width: ${props.width}px;
                margin-top: ${props.marginTop}px;
                margin-left: ${props.marginLeft}px;
            `}

            ${respondTo.lg`
                width: ${props.width}px;
                margin-top: ${props.marginTop}px;
                margin-left: ${props.marginLeft}px;
            `}
        `};
`

export const Box2 = styled.div`
    ${props =>
        css`
            width: ${props.width * .6}px;
            margin-top: ${props.marginTop * .4}px;
            margin-left: ${props.marginLeft * .4}px;

            ${respondTo.xs`
                width: ${props.width * .7}px;
                margin-top: ${props.marginTop * .45}px;
                margin-left: ${props.marginLeft * .45}px;
            `}
            
            ${respondTo.sm`
                width: ${props.width}px;
                margin-top: ${props.marginTop * .7}px;
                margin-left: ${props.marginLeft * .7}px;
            `}

            ${respondTo.md`
                margin-top: ${props.marginTop}px;
                margin-left: ${props.marginLeft}px;
            `}

            ${respondTo.lg`
            `}
        `};
`

export const Box3 = styled.div`
    ${props =>
        css`
            width: ${props.width * .6}px;
            margin-top: ${props.marginTop * .7}px;
            margin-left: ${props.marginLeft * .7}px;

            ${respondTo.xs`
                width: ${props.width * .7}px;
                margin-top: ${props.marginTop * .8}px;
                margin-left: ${props.marginLeft * .8}px;
            `}
            
            ${respondTo.sm`
                width: ${props.width}px;
                margin-top: ${props.marginTop * .9}px;
                margin-left: ${props.marginLeft * .9}px;
            `}

            ${respondTo.md`
                margin-top: ${props.marginTop}px;
                margin-left: ${props.marginLeft}px;
            `}

            ${respondTo.lg`
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
        width: ${props.width}px;
        height: ${props.height * .5}px;
        margin: 0 auto;

        ${respondTo.xs`
            height: ${props.height}px;
        `}
    `};

    ${props => props.color === 'yellow' && css`
        background: #FAF30E;
    `};

    ${props => props.color === 'white' && css`
        background: #FFF;
    `};
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
