import Head from 'next/head'

// Containers
import Hero from '../containers/Hero'
import Features from '../containers/Features'
import Work from '../containers/Work'

// Components
import { Background, Line } from '../components'
import { Box } from '../components/Boxes'
import { Container, Flex } from '../components/Containers'
import { H1, H2, P2 } from '../components/Typography'

const index = () => {
    return (
        <>
            <Head>
                <title>Under Construction | Valtech Creative</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
            </Head>
            <main>
                <Hero />
                <Box marginTop={350}>
                    <Background>
                        <Features />
                        <Work />
                    </Background>
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
                            <Box marginTop={30} marginBottom={200}>
                                <P2>Powered by Lace.</P2>
                            </Box>
                        </Container>
                    </Box>
                </Box>
            </main>
        </>
    )
}

export default index
