import styled, { css } from 'styled-components'
import respondTo from '../components/Breakpoints'
import Fade from 'react-reveal/Fade';

// Components
import { Card, Transform } from '../components'
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
                            <Fade bottom ssrFadeout>
                                <P2>Valtech believes in transparency in how we operate. Check out the list of tools we use to perform our services:</P2>
                            </Fade>
                            <Fade delay={1000} ssrFadeout>
                                <Flex wrap={"wrap"} justify={'space-between'} align={'center'}>
                                    <ToolIcon style={{backgroundImage: 'url(./github-logo.png)'}} />
                                    <ToolIcon style={{backgroundImage: 'url(./react-logo.png)'}} />
                                    <ToolIcon style={{backgroundImage: 'url(./nextjs-logo.png)'}} />
                                    <ToolIcon style={{backgroundImage: 'url(./sanity-logo.png)'}} />
                                    <ToolIcon style={{backgroundImage: 'url(./vercel-logo.png)'}} />
                                    <ToolIcon style={{backgroundImage: 'url(./aragon-logo.png)'}} />
                                </Flex>
                            </Fade>
                        </Box>
                    </Card>
                </Container>
            </Transform>
        </div>
    )
}

const ToolIcon = styled.div`
    ${props => css`
        width: 80px;
        height: 50px;
        margin-top: 60px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;

        ${respondTo.xs`
            width: 100px;
            height: 75px;
            margin-top: 60px;
        `}
        
        ${respondTo.sm`
            width: 200px;
            height: 120px;
            margin-top: 100px;
        `}

        ${respondTo.md`
            width: 220px;
            height: 120px;
        `}

        ${respondTo.lg`
        `}
    `};
`

export default Tools
