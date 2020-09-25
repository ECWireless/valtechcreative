import styled, { css } from 'styled-components'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'
import respondTo from '../components/Breakpoints'

// Components
import { colors } from '../components/theme'
import { Line } from '../components'
import { Box } from '../components/Boxes'
import { Button } from '../components/Buttons'
import { SubscriptionCard } from '../components/Cards'
import { Container, Flex, Col2, Col2Left, Col2Right } from '../components/Containers'
import { H1, P1, P2 } from '../components/Typography'

const Subscriptions = () => {
    return (
        <>
            <Box style={{position: 'relative', overflow: 'hidden'}} marginTop={200}>
                <AccentShape position={'left'} />
                <AccentShape position={'right'} />
                <Container>
                    <Flex align={'center'} justify={'space-around'}>
                        <Fade delay={1000} ssrFadeout>
                            <Line width={50} height={5} color={'yellow'} />
                        </Fade>
                        <H1 color={'#FFF'} align={'center'}>Website Subscriptions</H1>
                        <Fade delay={1000} ssrFadeout>
                            <Line width={50} height={5} color={'yellow'} />
                        </Fade>
                    </Flex>
                    <Fade bottom ssrFadeout>
                        <Box marginTop={50} marginBottom={100}>
                            <P2 center color={colors.white}>Get a part-time Web Developer at the cost of a subscription</P2>
                        </Box>
                    </Fade>
                    <Box marginTop={50} marginBottom={100}>
                        <Col2>
                            <Fade ssrFadeout>
                                <Col2Left align={'center'} justify={'center'}>
                                    <SubscriptionCard
                                        color={colors.blue}
                                        heading={'Personal Website'}
                                        description={'Websites built for personal galleries, freelancers, and soloprenuers.'}
                                        subscriptionCost={'$20'}
                                        paymentCost={'$50'}
                                        hoursPerMonth={'10'}
                                    />
                                </Col2Left>
                            </Fade>
                            <Fade delay={200} ssrFadeout>
                                <Col2Right align={'center'} justify={'center'}>
                                    <SubscriptionCard
                                        color={colors.green}
                                        heading={'Business Website'}
                                        description={'Websites built for e-commerce stores, agencies, real estate, startups, and more.'}
                                        subscriptionCost={'$30'}
                                        paymentCost={'$100'}
                                        hoursPerMonth={'20'}
                                    />
                                </Col2Right>
                            </Fade>
                        </Col2>
                    </Box>
                    <Box marginBottom={50}>
                        <P1 color={colors.white} center>Need a Web App or Native App?</P1>
                    </Box>
                    <Flex justify={'center'} align={'center'}>
                        <Link href="#contact">
                            <Button>Get a Custom Quote</Button>
                        </Link>
                    </Flex>
                </Container>
            </Box>
        </>
    )
}

export default Subscriptions

const AccentShape = ({position}) => {
    return (
        <AccentContainer position={position}>
            <AccentObject1 />
            <AccentObject2 />
            <AccentObject3 />
        </AccentContainer>
    )
}

const AccentContainer = styled.div`
    position: absolute;

    ${props => props.position === 'left' && css`
        left: 0;
        top: 12rem;

        ${respondTo.xs`
            left: 0;
            top: 15rem;
        `}
    `}

    ${props => props.position === 'right' && css`
        right: 0;
        bottom: 9rem;
        transform: translateX(16rem);

        ${respondTo.xs`
            right: 0;
            bottom: 12rem;
            transform: translateX(13rem);
        `}
    `}
`

const AccentObject1 = styled.div`
    height: 3.5rem;
    width: 15rem;
    background: ${colors.yellow};
    transform: translateX(-8rem) rotate(-30deg);
    z-index: 1;
`

const AccentObject2 = styled.div`
    height: 3.5rem;
    width: 15rem;
    background: ${colors.yellow};
    transform: translate(-5rem, -2rem) rotate(-30deg);
    opacity: .5;
    z-index: 0;
`

const AccentObject3 = styled.div`
    height: 3.5rem;
    width: 15rem;
    background: ${colors.yellow};
    transform: translate(-8rem, .2rem) rotate(-30deg);
    opacity: .75;
    z-index: 1;
`
