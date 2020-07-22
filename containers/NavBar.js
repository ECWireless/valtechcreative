import styled, { css } from 'styled-components'
import respondTo from '../components/Breakpoints'

// Components
import { Box3 } from '../components/Boxes'
import { Flex } from '../components/Containers'

const NavBar = (props) => {
    return (
        <SandWhichContainer onClick={() => props.setClosed(false)}>
            <Flex direction={'column'} justify={'space-between'}>
                <Box3>
                    <SandwhichLine width={35} height={4} color={'white'} />
                </Box3>
                <Box3 marginTop={8}>
                    <SandwhichLine width={35} height={4} color={'white'} />
                </Box3>
                <Box3 marginTop={8}>
                    <SandwhichLine width={35} height={4} color={'white'} />
                </Box3>
            </Flex>
        </SandWhichContainer>
    )
}

const SandWhichContainer = styled.div`
    position: fixed;
    top: 15px;
    right: 15px;
    width: 50px;
    height: 50px;
    background: #1062AD;
    border-radius: 50%;
    box-shadow: 0px 4px 6px rgba(0,0,0,0.4);
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all .3s ease;

    ${respondTo.xs`
        width: 50px;
        height: 50px;
    `}

    ${respondTo.sm`
        width: 60px;
        height: 60px;
    `}

    ${respondTo.md`
        top: 25px;
        right: 45px;
    `}

    &:hover {
        transform: scale(1.02);
        box-shadow: 0px 4px 15px rgba(0,0,0,0.4);
        cursor: pointer;
    }

    &:focus {
        transform: scale(.95);
        box-shadow: 0px 4px 6px rgba(0,0,0,0.4);
        cursor: pointer;
    }

    &:active {
        transform: scale(.95);
        box-shadow: 0px 4px 6px rgba(0,0,0,0.4);
        cursor: pointer;
    }
`

const SandwhichLine = styled.div`
    ${props => css`
        width: ${props.width * .9}px;
        height: ${props.height * .9}px;
        margin: 0 auto;

        ${respondTo.xs`
            width: ${props.width}px;
            height: ${props.height}px;
            margin: 0 auto;
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

export default NavBar
