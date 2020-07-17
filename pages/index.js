import Head from 'next/head'

// Containers
import Hero from '../containers/Hero'

// Components
import {
    Background,
    Box,
    Card,
    Line,
    Transform,
} from '../components'
import { Container, Col2, Col2Left, Col2Right } from '../components/Containers'
import { H3, P2 } from '../components/Typography'

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
                        <Transform y={-200}>
                            <Container>
                                <Card width={100} paddingTop={150} paddingBottom={150}>
                                    <Col2>
                                        <Col2Left align={'center'} justify={'flex-start'}>
                                            <Box with={100}>
                                                <H3 align={'center'}>Complete Customization</H3>
                                                <Box marginTop={20}>
                                                    <Line width={100} height={5} color={'yellow'} />
                                                </Box>
                                            </Box>
                                            <Box width={400} marginTop={30}>
                                                <P2 align={'center'}>We work with our clients 1-on-1 to get your branding just right.</P2>
                                            </Box>
                                        </Col2Left>
                                        <Col2Right align={'center'} justify={'flex-start'}>
                                            <Box width={300}>
                                                <H3 align={'center'}>Blazing<br/>Load Speeds</H3>
                                                <Box marginTop={20}>
                                                    <Line width={100} height={5} color={'yellow'} />
                                                </Box>
                                            </Box>
                                            <Box width={400} marginTop={30}>
                                                <P2 align={'center'}>Our frameworks are modern, flexible, and always fast.</P2>
                                            </Box>
                                        </Col2Right>
                                    </Col2>
                                    <Col2>
                                        <Col2Left align={'center'} justify={'flex-start'}>
                                            <Box with={100}  marginTop={200}>
                                                <H3 align={'center'}>Complete Customization</H3>
                                                <Box marginTop={20}>
                                                    <Line width={100} height={5} color={'yellow'} />
                                                </Box>
                                            </Box>
                                            <Box width={400} marginTop={30}>
                                                <P2 align={'center'}>We work with our clients 1-on-1 to get your branding just right.</P2>
                                            </Box>
                                        </Col2Left>
                                        <Col2Right align={'center'} justify={'flex-start'}>
                                            <Box width={300} marginTop={200}>
                                                <H3 align={'center'}>Blazing<br/>Load Speeds</H3>
                                                <Box marginTop={20}>
                                                    <Line width={100} height={5} color={'yellow'} />
                                                </Box>
                                            </Box>
                                            <Box width={400} marginTop={30}>
                                                <P2 align={'center'}>Our frameworks are modern, flexible, and always fast.</P2>
                                            </Box>
                                        </Col2Right>
                                    </Col2>
                                </Card>
                            </Container>
                        </Transform>
                    </Background>
                </Box>
            </main>
        </>
    )
}

export default index
