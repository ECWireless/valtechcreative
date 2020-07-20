// Components
import { Line, Link, Showcase } from '../components'
import { Container, Flex, Col2, Col2Left, Col2Right } from '../components/Containers'
import { H1 } from '../components/Typography'
import { Box } from '../components/Boxes'

const Work = () => {
    return (
        <>
            <Container>
                <Flex align={'center'} justify={'space-around'}>
                    <Line width={75} height={5} color={'blue'} />
                    <H1 color={'#000'} align={'center'}>Check Out Our Work</H1>
                    <Line width={75} height={5} color={'blue'} />
                </Flex>
                <Col2>
                    <Box marginTop={100}>
                        <Col2Left align={'center'} justify={'center'}>
                            <Link
                                href="https://www.parishdigital.com/"
                                target="_blank" rel="noreferrer"
                                width={400} height={400}
                            >
                                <Showcase
                                    style={{backgroundImage: `url(/Showcase1.jpg)`}}
                                />
                            </Link>
                        </Col2Left>
                    </Box>
                    <Box marginTop={100}>
                        <Col2Right align={'center'} justify={'center'}>
                            <Link
                                href="https://www.parishdigital.com/"
                                target="_blank" rel="noreferrer"
                                width={400} height={400}
                            >
                                <Showcase
                                    style={{backgroundImage: `url(/Showcase2.jpg)`}}
                                />
                            </Link>
                        </Col2Right>
                    </Box>
                </Col2>
                <Col2>
                    <Box marginTop={100}>
                        <Col2Left align={'center'} justify={'center'}>
                            <Link
                                href="https://www.parishdigital.com/"
                                target="_blank" rel="noreferrer"
                                width={400} height={400}
                            >
                                <Showcase
                                    style={{backgroundImage: `url(/Showcase3.jpg)`}}
                                />
                            </Link>
                        </Col2Left>
                    </Box>
                    <Box marginTop={100}>
                        <Col2Right align={'center'} justify={'center'}>
                            <Link
                                href="https://www.parishdigital.com/"
                                target="_blank" rel="noreferrer"
                                width={400} height={400}
                            >
                                <Showcase
                                    style={{backgroundImage: `url(/Showcase4.jpg)`}}
                                />
                            </Link>
                        </Col2Right>
                    </Box>
                </Col2>
            </Container>
        </>
    )
}

export default Work
