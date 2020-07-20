import React from 'react'
import Particles from 'react-particles-js'
import ReactRotatingText from 'react-rotating-text'

// Components
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
                        <Box width={60} marginTop={50} marginLeft={30}>
                            <LocationIcon />
                        </Box>
                        <Box marginTop={60}>
                            <H2 id="hero__location"><ReactRotatingText
                                items={['Los Angeles', 'Pittsburgh', 'Amsterdam', 'Boulder', 'Anywhere']}
                            /></H2>
                        </Box>
                    </Flex>
                    <Box marginTop={60}>
                        <P1 id="hero__paragraph1">Specializing in custom Websites, Web Apps, and Native Applications</P1>
                    </Box>
                </Container>
        </>
    )
}

export default Hero
