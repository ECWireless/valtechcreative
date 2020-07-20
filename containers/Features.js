// Components
import {
    Card,
    Line,
    Transform,
} from '../components'
import { Box2, Box3 } from '../components/Boxes'
import { Container, Col2, Col2Left, Col2Right } from '../components/Containers'
import { H3, P2 } from '../components/Typography'

// Icons
import BackendIcon from '../components/BackendIcon'
import CustomizationIcon from '../components/CustomizationIcon'
import SearchIcon from '../components/SearchIcon'
import SpeedIcon from '../components/SpeedIcon'

const Features = () => {
    return (
        <>
            <Transform y={-200}>
                <Container>
                    <Card width={100} paddingTop={0} paddingBottom={150}>
                        <Col2>
                            <Col2Left align={'center'} justify={'flex-start'}>
                                <Box2 width={50} marginTop={150}>
                                    <CustomizationIcon />
                                </Box2>
                                <Box3 with={300} marginTop={40}>
                                    <H3 align={'center'}>Complete<br/>Customization</H3>
                                    <Box3 marginTop={20}>
                                        <Line width={100} height={5} color={'yellow'} />
                                    </Box3>
                                </Box3>
                                <Box3 width={360} marginTop={30}>
                                    <P2 align={'center'}>We work with our clients 1-on-1 to get your branding just right.</P2>
                                </Box3>
                            </Col2Left>
                            <Col2Right align={'center'} justify={'flex-start'}>
                                <Box2 width={50} marginTop={150}>
                                    <SpeedIcon />
                                </Box2>
                                <Box3 width={300} marginTop={40}>
                                    <H3 align={'center'}>Blazing<br/>Load Speeds</H3>
                                    <Box3 marginTop={20}>
                                        <Line width={100} height={5} color={'yellow'} />
                                    </Box3>
                                </Box3>
                                <Box3 width={360} marginTop={30}>
                                    <P2 align={'center'}>Our frameworks are modern, flexible, and always fast.</P2>
                                </Box3>
                            </Col2Right>
                        </Col2>
                        <Col2>
                            <Col2Left align={'center'} justify={'flex-start'}>
                                <Box2 width={50} marginTop={150}>
                                    <BackendIcon />
                                </Box2>
                                <Box3 with={300} marginTop={40}>
                                    <H3 align={'center'}>Backend<br/>Infrastructure</H3>
                                    <Box3 marginTop={20}>
                                        <Line width={100} height={5} color={'yellow'} />
                                    </Box3>
                                </Box3>
                                <Box3 width={350} marginTop={30}>
                                    <P2 align={'center'}>Custom CMS configuration is available for any projects that need consistently updated or maintained content</P2>
                                </Box3>
                            </Col2Left>
                            <Col2Right align={'center'} justify={'flex-start'}>
                                <Box2 width={50} marginTop={150}>
                                    <SearchIcon />
                                </Box2>
                                <Box3 width={300} marginTop={40}>
                                    <H3 align={'center'}>SEO<br/>Friendly</H3>
                                    <Box3 marginTop={20}>
                                        <Line width={100} height={5} color={'yellow'} />
                                    </Box3>
                                </Box3>
                                <Box3 width={350} marginTop={30}>
                                    <P2 align={'center'}>Our websites are never shipped without a 100% score from Google Lighthouse.</P2>
                                </Box3>
                            </Col2Right>
                        </Col2>
                    </Card>
                </Container>
            </Transform>
        </>
    )
}

export default Features
