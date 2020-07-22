import styled, { css } from 'styled-components'
import respondTo from '../components/Breakpoints'
import Fade from 'react-reveal/Fade';

// Components
import { Container } from '../components/Containers'

const NavMenu = (props) => {
    return (
        <NavPositioning>
            <Fade ssrFadeout>
                <NavBackground>
                    <CloseContainer onClick={() => props.setClosed(true)}>
                        <CloseLine width={40} height={3} position={'left'} />
                        <CloseLine width={40} height={3} position={'right'} />
                    </CloseContainer>
                        <Container style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Fade bottom ssrFadeout>
                            <NavBox>
                                <p>Logo and Company Name</p>
                                <p>Features</p>
                                <p>Work</p>
                                <p>About</p>
                                <p>Tools</p>
                                <p>Contact</p>
                            </NavBox>
                    </Fade>
                        </Container>
                </NavBackground>
            </Fade>
        </NavPositioning>
    )
}


const NavPositioning = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 100;
`

const NavBackground = styled.div`
    height: 100vh;
    width: 100%;
    background: rgba(255,255,255,.98);
    display: flex;
`

const CloseContainer = styled.div`
    position: fixed;
    top: 15px;
    right: 15px;
    width: 50px;
    height: 50px;
    background: transparent;
    border: 2px solid #1062AD;
    border-radius: 50%;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
        border: 2px solid transparent;
        cursor: pointer;
    }

    &:focus {
        transform: scale(.95);
        box-shadow: 0px 4px 6px rgba(0,0,0,0.4);
        border: 2px solid transparent;
        cursor: pointer;
    }

    &:active {
        transform: scale(.95);
        box-shadow: 0px 4px 6px rgba(0,0,0,0.4);
        border: 2px solid transparent;
        cursor: pointer;
    }
`

const CloseLine = styled.div`
    background: #1062AD;

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

    ${props => props.position === 'left' && css`
        transform: rotate(-45deg);
    `};

    ${props => props.position === 'right' && css`
        transform: rotate(45deg) translate(-1.5px, -1.5px);
    `};
`

const NavBox = styled.div`
    width: 90%;
    height: 70vh;
    background: transparent;
    border: 2px solid #1062AD;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    ${respondTo.xs`
        height: 80vh;
    `}
`

export default NavMenu
