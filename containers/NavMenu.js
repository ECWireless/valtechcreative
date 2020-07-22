import styled, { css } from 'styled-components'
import respondTo from '../components/Breakpoints'
import Fade from 'react-reveal/Fade';

// Components
import { Link } from '../components'
import { Box } from '../components/Boxes'
import { Container, Flex } from '../components/Containers'
import { P1, P2 } from '../components/Typography'

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
                                    <NavFlex>
                                        <NavBarTop>
                                            <NavTopFlex>
                                                <NavValtech style={{backgroundImage: 'url(./Valtech-Logo.png)'}} />
                                                <P2 color={'blue'}>Valtech Creative</P2>
                                            </NavTopFlex>
                                        </NavBarTop>
                                        <NavListContainer>
                                            <NavListItem>
                                                <P1 uppercase color={'inherit'} align={'center'}>Features</P1>
                                            </NavListItem>
                                            <NavListItem>
                                                <P1 uppercase color={'inherit'} align={'center'}>Work</P1>
                                            </NavListItem>
                                            <NavListItem>
                                                <P1 uppercase color={'inherit'} align={'center'}>About</P1>
                                            </NavListItem>
                                            <NavListItem>
                                                <P1 uppercase color={'inherit'} align={'center'}>Tools</P1>
                                            </NavListItem>
                                            <NavListItem>
                                                <P1 uppercase color={'inherit'} align={'center'}>Contact</P1>
                                            </NavListItem>
                                        </NavListContainer>
                                    </NavFlex>
                                    <NavBarBottom>
                                        <Flex wrap={'wrap'} align={'center'} justify={'center'} style={{height: '100%'}}>
                                            <Box>
                                                <Link
                                                        href="https://github.com/ecwireless"
                                                        target="_blank" rel="noreferrer"
                                                    >
                                                        <NavIcon style={{backgroundImage: 'url(./github-logo.png)'}} />
                                                    </Link>
                                                </Box>
                                            <Box marginLeft={20}>
                                                <Link
                                                    href="https://www.facebook.com/valtechcreative"
                                                    target="_blank" rel="noreferrer"
                                                >
                                                    <NavIcon style={{backgroundImage: 'url(./facebook-logo.png)'}} />
                                                </Link>
                                            </Box>
                                            <Box marginLeft={40}>
                                                <P2 color={'#000'}>Elliott@ValtechCreative.com</P2>
                                            </Box>
                                        </Flex>
                                    </NavBarBottom>
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
    justify-content: space-between;
    margin: 0 auto;

    ${respondTo.xs`
        height: 80vh;
    `}
`

const NavFlex = styled.div`
    display: flex;
    flex-direction: column;

    ${respondTo.sm`
        flex-direction: row;
        height: 85%
    `}
`

const NavListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 210px;
    align-items: center;
    justify-content: center;
    padding: 20px 0;

    ${respondTo.xs`
        height: 260px;
    `}

    ${respondTo.sm`
        width: 50%;
        height: auto;
    `}
`

const NavListItem = styled.div`
    background: #fff;
    width: 100%;
    color: #1062AD;
    padding: 10px 0;
    transition: all .3s ease;

    &:hover {
        color: #fff;
        background: #1062AD;
        cursor: pointer;
    }
`

const NavBarTop = styled.div`
    width: 100%;
    height: 60px;
    background: transparent;
    border-bottom: 2px solid #1062AD;

    ${respondTo.sm`
        width: 50%;
        height: auto;
        border-right: 2px solid #1062AD;
        border-bottom: none;
    `}
`

const NavBarBottom = styled.div`
    width: 100%;
    height: 70px;
    background: transparent;
    border-top: 2px solid #1062AD;

    ${respondTo.xs`
        height: 90px;
    `}

    ${respondTo.sm`
        height: 15%;
    `}
`

const NavIcon = styled.div`
    ${props => css`
        width: 20px;
        height: 20px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;

        ${respondTo.xs`
            width: 30px;
            height: 30px;
        `}
        
        ${respondTo.sm`
        `}

        ${respondTo.md`
            width: 50px;
            height: 50px;
        `}

        ${respondTo.lg`
        `}
    `};
`

const NavTopFlex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;

    ${respondTo.sm`
        flex-direction: column;
    `}
`

const NavValtech = styled.div`
    ${props => css`
        width: 30px;
        height: 30px;
        margin-bottom: 0;
        margin-right: 10px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;

        ${respondTo.xs`
        `}
        
        ${respondTo.sm`
            width: 120px;
            height: 120px;
            margin-bottom: 30px;
        `}

        ${respondTo.md`
            width: 150px;
            height: 150px;
        `}

        ${respondTo.lg`
            width: 200px;
            height: 200px;
        `}
    `};
`

export default NavMenu
