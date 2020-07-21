// Components
import { Line, Link } from '../components'
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
                        <P2>Our boutique designs scale through distributed teams of collaborators.</P2>
                    </Box>
                    <Box marginTop={30}>
                        <P2>Valtech is co-owned and co-managed by all of its collaborators on Github.</P2>
                    </Box>
                    <Box marginTop={30}>
                        <P2>Powered by <Link
                            href="https://lace.vercel.app/"
                            color={'#fff'}
                            hover={'#FAF30E'}
                            target="_blank" rel="noreferrer"
                        >Lace</Link>.</P2>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default About
