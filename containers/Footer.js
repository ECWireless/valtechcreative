import styled, { css } from 'styled-components'
import respondTo from '../components/Breakpoints'

// Components
import { CustomLink } from '../components'
import { Container, Flex } from '../components/Containers'
import { P2 } from '../components/Typography'
import { Box } from '../components/Boxes'

const Footer = (props) => {
    return (
        <>
            <footer>
                <Box paddingTop={100} paddingBottom={100}>
                    <Container>
                        <Flex align={'center'} justify={'space-around'} wrap={'wrap'}>
                            <FooterIcon onClick={props.scrollToTop} style={{backgroundImage: 'url(./Valtech-Logo.png)'}} />
                            <CustomLink
                                href="https://github.com/ecwireless"
                                target="_blank" rel="noreferrer"
                            >
                                <FooterIcon style={{backgroundImage: 'url(./github-logo-invert.png)'}} />
                            </CustomLink>
                            <CustomLink
                                href="https://www.facebook.com/valtechcreative"
                                target="_blank" rel="noreferrer"
                            >
                                <FooterIcon style={{backgroundImage: 'url(./facebook-logo-white.png)'}} />
                            </CustomLink>
                            <P2>Elliott@ValtechCreative.com</P2>
                        </Flex>
                    </Container>
                </Box>
            </footer>
        </>
    )
}

const FooterIcon = styled.div`
    ${props => css`
        width: 40px;
        height: 40px;
        margin-bottom: 40px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;

        &:hover {
            cursor: pointer;
        }

        ${respondTo.xs`
            width: 50px;
            height: 50px;
            margin-bottom: 40px;
        `}
        
        ${respondTo.sm`
            margin-bottom: 0px;
        `}

        ${respondTo.md`
            width: 75px;
            height: 75px;
        `}

        ${respondTo.lg`
        `}
    `};
`

export default Footer
