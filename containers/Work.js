import Fade from 'react-reveal/Fade';

// Components
import { colors } from '../components/theme'
import { Line, CustomLink, Showcase } from '../components'
import { Container, Flex, Col2, Col2Left, Col2Right } from '../components/Containers'
import { H1, P3 } from '../components/Typography'
import { Box, Box2 } from '../components/Boxes'

const Work = () => {
    return (
        <>
            <Container>
                <Flex align={'center'} justify={'space-around'}>
                    <Fade delay={1000} ssrFadeout>
                        <Line width={75} height={5} color={'blue'} />
                    </Fade>
                    <H1 color={'#000'} align={'center'}>Check Out Our Work</H1>
                    <Fade delay={1000} ssrFadeout>
                        <Line width={75} height={5} color={'blue'} />
                    </Fade>
                </Flex>
                <Col2>
                    <Box marginTop={100}>
                        <Col2Left align={'center'} justify={'center'}>
                            <Fade ssrFadeout>
                                <CustomLink
                                    href="https://www.parishdigital.com/"
                                    target="_blank" rel="noreferrer"
                                    width={400} height={400}
                                >
                                    <Showcase
                                        style={{backgroundImage: `url(/Showcase1.jpg)`}}
                                    />
                                </CustomLink>
                            </Fade>
                            <Box2 width={400} marginTop={50}>
                                <Fade ssrFadeout bottom delay={200}>
                                    <P3 center color={colors.black}>
                                        <strong>Parish Digital</strong> is full-service video production studio offering virtual event production, video editing, and multimedia presentations.
                                    </P3>
                                </Fade>
                            </Box2>
                        </Col2Left>
                    </Box>
                    <Box marginTop={100}>
                        <Col2Right align={'center'} justify={'center'}>
                            <Fade delay={500} ssrFadeout>
                                <CustomLink
                                    href="https://abecares-jet.vercel.app/"
                                    target="_blank" rel="noreferrer"
                                    width={400} height={400}
                                >
                                    <Showcase
                                        style={{backgroundImage: `url(/Showcase2.jpg)`}}
                                    />
                                </CustomLink>
                            </Fade>
                            <Box2 width={400} marginTop={50}>
                                <Fade ssrFadeout bottom delay={200}>
                                    <P3 center color={colors.black}>
                                        <strong>Abraham Home Care</strong> provides home care services to 30 patients and employs a team of over 50 direct care workers.
                                    </P3>
                                </Fade>
                            </Box2>
                        </Col2Right>
                    </Box>
                </Col2>
                <Col2>
                    <Box marginTop={100}>
                        <Col2Left align={'center'} justify={'center'}>
                            <Fade ssrFadeout>
                                <CustomLink
                                    href="https://app.studiome.me/"
                                    target="_blank" rel="noreferrer"
                                    width={400} height={400}
                                >
                                    <Showcase
                                        style={{backgroundImage: `url(/Showcase3.jpg)`}}
                                    />
                                </CustomLink>
                            </Fade>
                            <Box2 width={400} marginTop={50}>
                                <Fade ssrFadeout bottom delay={200}>
                                    <P3 center color={colors.black}>
                                        <strong>StudioME</strong> provides media creators access to user-friendly studio spaces, equipment rentals, editing workstations, and custom production services.
                                    </P3>
                                </Fade>
                            </Box2>
                        </Col2Left>
                    </Box>
                    <Box marginTop={100}>
                        <Col2Right align={'center'} justify={'center'}>
                            <Fade delay={500} ssrFadeout>
                                <CustomLink
                                    href="https://mosebachresistors.com/"
                                    target="_blank" rel="noreferrer"
                                    width={400} height={400}
                                >
                                    <Showcase
                                        style={{backgroundImage: `url(/Showcase4.jpg)`}}
                                    />
                                </CustomLink>
                            </Fade>
                            <Box2 width={400} marginTop={50}>
                                <Fade ssrFadeout bottom delay={200}>
                                    <P3 center color={colors.black}>
                                        <strong>Mosebach Resistors Company</strong> specializes in AC and DC Load Banks of any size, both portable and stationary.
                                    </P3>
                                </Fade>
                            </Box2>
                        </Col2Right>
                    </Box>
                </Col2>
            </Container>
        </>
    )
}

export default Work
