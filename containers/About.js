// Components
import { Line } from '../components'
import { Box } from '../components/Boxes'
import { Container, Flex } from '../components/Containers'
import { H1, H2, P2 } from '../components/Typography'

const About = () => {
    return (
        <>
            <Box marginTop={100}>
                <Container>
                    <Flex align={'center'} justify={'space-around'}>
                        <Line width={50} height={5} color={'yellow'} />
                        <H1 color={'#FFF'} align={'center'}>How Valtech Works</H1>
                        <Line width={50} height={5} color={'yellow'} />
                    </Flex>
                    <Box marginTop={100}>
                        <H2>Valtech is a distributed company built around collaboration</H2>
                    </Box>
                    <Box marginTop={50}>
                        <P2>Our boutique designs scale through distributed collaboration.</P2>
                    </Box>
                    <Box marginTop={30}>
                        <P2>Valtech is co-owned and co-managed by all of its collaborators on Github.</P2>
                    </Box>
                    <Box marginTop={30}>
                        <P2>Powered by Lace.</P2>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default About
