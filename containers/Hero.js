import styled, { css } from 'styled-components'
import respondTo from '../components/Breakpoints'
import Particles from 'react-particles-js'
import ReactRotatingText from 'react-rotating-text'

// Components
import { Link } from '../components'
import { Box } from '../components/Boxes'
import { H1, H2, P1 } from '../components/Typography'
import { Container, Flex } from '../components/Containers'
import LocationIcon from '../components/LocationIcon'

const Hero = () => {
    return (
        <>
            <Particles
                id="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 100
                        },
                        "size": {
                            "value": 3
                        },
                        "color": {
                            "value": "#1263AD"
                        },
                        "line_linked": {
                            "enable": true,
                            "color": "#1263AD"
                        },
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
            />
            <Container>
                <Box width={800} marginTop={150}>
                    <H1>A Collaborative Agency for UX/UI Design</H1>
                </Box>
                <Flex>
                    <Box marginTop={60}>
                        <H2 id="hero__heading2">Based in...</H2>
                    </Box>
                        <LocationIcon />
                    <Box marginTop={60}>
                        <H2 id="hero__location"><ReactRotatingText
                            items={['Los Angeles', 'Pittsburgh', 'Amsterdam', 'Boulder', 'Anywhere']}
                        /></H2>
                    </Box>
                </Flex>
                <Box marginTop={60}>
                    <P1 id="hero__paragraph1">Specializing in custom Websites, Web Apps, and Native Applications</P1>
                </Box>
                <Flex>
                    <Box marginTop={60} marginRight={30}>
                        <Link
                            href="https://github.com/ecwireless"
                            target="_blank" rel="noreferrer"
                        >
                            <HeroIcon style={{backgroundImage: 'url(./github-logo-invert.png)'}} />
                        </Link>
                    </Box>
                    <Box marginTop={60}>
                        <Link
                            href="https://www.facebook.com/valtechcreative"
                            target="_blank" rel="noreferrer"
                        >
                            <HeroIcon style={{backgroundImage: 'url(./facebook-logo.png)'}} />
                        </Link>
                    </Box>
                </Flex>
            </Container>
        </>
    )
}

const HeroIcon = styled.div`
    ${props => css`
        width: 30px;
        height: 30px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;

        ${respondTo.xs`
            width: 40px;
            height: 40px;
        `}
        
        ${respondTo.sm`
        `}

        ${respondTo.md`
            width: 60px;
            height: 60px;
        `}

        ${respondTo.lg`
        `}
    `};
`

export default Hero
