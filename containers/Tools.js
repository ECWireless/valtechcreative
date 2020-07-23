import styled, { css } from 'styled-components'
import respondTo from '../components/Breakpoints'
import Fade from 'react-reveal/Fade';

// Components
import { Card, CustomLink, Transform } from '../components'
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
                                    <CustomLink href="https://github.com/" target="_blank" rel="noreferrer">
                                        <ToolIcon style={{backgroundImage: 'url(./github-logo.png)'}} />
                                    </CustomLink>
                                    <CustomLink href="https://reactjs.org/" target="_blank" rel="noreferrer">
                                        <ToolIcon style={{backgroundImage: 'url(./react-logo.png)'}} />
                                    </CustomLink>
                                    <CustomLink href="https://nextjs.org/" target="_blank" rel="noreferrer">
                                        <ToolIcon style={{backgroundImage: 'url(./nextjs-logo.png)'}} />
                                    </CustomLink>
                                    <CustomLink href="https://www.sanity.io/" target="_blank" rel="noreferrer">
                                        <ToolIcon style={{backgroundImage: 'url(./sanity-logo.png)'}} />
                                    </CustomLink>
                                    <CustomLink href="https://vercel.com/" target="_blank" rel="noreferrer">
                                        <ToolIcon style={{backgroundImage: 'url(./vercel-logo.png)'}} />
                                    </CustomLink>
                                    <CustomLink href="https://aragon.org/" target="_blank" rel="noreferrer">
                                        <ToolIcon style={{backgroundImage: 'url(./aragon-logo.png)'}} />
                                    </CustomLink>
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
