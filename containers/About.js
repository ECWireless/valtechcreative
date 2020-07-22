import Fade from 'react-reveal/Fade';

// Components
import { Line, CustomLink } from '../components'
import { Box } from '../components/Boxes'
import { Container, Flex } from '../components/Containers'
import { H1, H2, P2 } from '../components/Typography'

const About = () => {
    return (
        <>
            <Box marginTop={100}>
                <Container>
                    <Flex align={'center'} justify={'space-around'}>
                        <Fade delay={1000} ssrFadeout>
                            <Line width={50} height={5} color={'yellow'} />
                        </Fade>
                        <H1 color={'#FFF'} align={'center'}>How Valtech Works</H1>
                        <Fade delay={1000} ssrFadeout>
                            <Line width={50} height={5} color={'yellow'} />
                        </Fade>
                    </Flex>
                    <Fade bottom ssrFadeout>
                        <Box marginTop={100}>
                            <H2>Valtech is a distributed company built around collaboration</H2>
                        </Box>
                    </Fade>
                    <Fade bottom ssrFadeout>
                        <Box marginTop={50}>
                            <P2>Our boutique designs scale through distributed teams of collaborators.</P2>
                        </Box>
                    </Fade>
                    <Fade bottom ssrFadeout>
                        <Box marginTop={30}>
                            <P2>Valtech is co-owned and co-managed by all of its collaborators on Github.</P2>
                        </Box>
                    </Fade>
                    <Fade bottom ssrFadeout>
                        <Box marginTop={30}>
                            <P2>Powered by <CustomLink
                                href="https://lace.vercel.app/"
                                color={'#fff'}
                                hover={'#FAF30E'}
                                target="_blank" rel="noreferrer"
                            >Lace</CustomLink>.</P2>
                        </Box>
                    </Fade>
                </Container>
            </Box>
        </>
    )
}

export default About
