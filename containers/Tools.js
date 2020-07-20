// Components
import { Card, Logo, Transform } from '../components'
import { Box } from '../components/Boxes'
import { Container, Flex } from '../components/Containers'
import { H1, P2 } from '../components/Typography'

const Tools = () => {
    return (
        <div>
            <Transform y={-200}>
                <Container>
                    <Card width={100} paddingTop={100} paddingBottom={150}>
                        <H1 align={'center'}>What We Use</H1>
                        <Box marginTop={50} paddingLeft={100} paddingRight={100}>
                            <P2>Valtech believes in transparency in how we operate. Check out the list of tools we use to perform our services:</P2>
                            <Flex wrap={"wrap"} justify={'space-between'} align={'center'}>
                                <Logo style={{backgroundImage: 'url(./github-logo.png)'}} />
                                <Logo style={{backgroundImage: 'url(./react-logo.png)'}} />
                                <Logo style={{backgroundImage: 'url(./nextjs-logo.png)'}} />
                                <Logo style={{backgroundImage: 'url(./sanity-logo.png)'}} />
                                <Logo style={{backgroundImage: 'url(./vercel-logo.png)'}} />
                                <Logo style={{backgroundImage: 'url(./aragon-logo.png)'}} />
                            </Flex>
                        </Box>
                    </Card>
                </Container>
            </Transform>
        </div>
    )
}

export default Tools
