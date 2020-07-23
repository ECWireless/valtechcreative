import Fade from 'react-reveal/Fade';

// Components
import { Line, CustomLink, Showcase } from '../components'
import { Container, Flex, Col2, Col2Left, Col2Right } from '../components/Containers'
import { H1 } from '../components/Typography'
import { Box } from '../components/Boxes'

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
                        </Col2Left>
                    </Box>
                    <Box marginTop={100}>
                        <Col2Right align={'center'} justify={'center'}>
                            <Fade delay={500} ssrFadeout>
                                <CustomLink
                                    href="https://abecares.now.sh/"
                                    target="_blank" rel="noreferrer"
                                    width={400} height={400}
                                >
                                    <Showcase
                                        style={{backgroundImage: `url(/Showcase2.jpg)`}}
                                    />
                                </CustomLink>
                            </Fade>
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
                        </Col2Left>
                    </Box>
                    <Box marginTop={100}>
                        <Col2Right align={'center'} justify={'center'}>
                            <Fade delay={500} ssrFadeout>
                                <CustomLink
                                    href="https://simprodos.com/"
                                    target="_blank" rel="noreferrer"
                                    width={400} height={400}
                                >
                                    <Showcase
                                        style={{backgroundImage: `url(/Showcase4.jpg)`}}
                                    />
                                </CustomLink>
                            </Fade>
                        </Col2Right>
                    </Box>
                </Col2>
            </Container>
        </>
    )
}

export default Work
