import Head from 'next/head'
import Particles from 'react-particles-js'
import ReactRotatingText from 'react-rotating-text'

// Components
import {
    Box,
    Card,
    Container,
    Flex,
    H1,
    H2,
    Img,
    Logo,
    P1,
} from '../components'
import LocationIcon from '../components/LocationIcon'

const index = () => {
    return (
        <>
            <Head>
                <title>Under Construction | Valtech Creative</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
            </Head>
            <main>
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
            </main>
        </>
    )
}

export default index
