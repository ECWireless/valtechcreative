import styled, { css } from 'styled-components'
import Fade from 'react-reveal/Fade'
import respondTo from '../components/Breakpoints'

// Components
import { colors, shadows } from '../components/theme'
import { Box } from '../components/Boxes'
import { Flex } from '../components/Containers'
import { H4, P3 } from '../components/Typography'

export const SubscriptionCard = ({
    color,
    heading,
    description,
    subscriptionCost,
    paymentCost,
    hoursPerMonth,
}) => {
    return (
        <CardContainer>
            <HeadingContainer color={color}>
                <Flex style={{height: '100%'}} align={'center'} justify={'center'}>
                    <H4 center>
                        {heading}
                    </H4>
                </Flex>
            </HeadingContainer>
            <InfoContainer>
                <Box marginTop={50} marginBottom={25}>
                    <P3 color={colors.black} center>
                        {description}
                    </P3>
                </Box>
                <Fade delay={400} ssrFadeout>
                    <SubscriptionPriceText>
                        {subscriptionCost} / <DurationText>month</DurationText>
                    </SubscriptionPriceText>
                    <Box marginBottom={50}>
                        <P3 bold color={color} center>
                            Plus {paymentCost} per page
                        </P3>
                        <P3 bold color={color} center>
                            (one-time payment)
                        </P3>
                    </Box>
                </Fade>
                <Box marginBottom={50}>
                    <P3 bold color={colors.black}>
                        Subscription Includes:
                    </P3>
                    <Box marginTop={25}>
                        <List>
                            <li>Monthly hosting costs</li>
                            <li>{hoursPerMonth} hours-worth of changes per month to any existing pages</li>
                            <li>Additional pages at only {paymentCost} per page</li>
                            <li>24/7 technical support</li>
                        </List>
                    </Box>
                </Box>
                <Flex justify={'center'} align={'center'}>
                    <ConnectButton>
                        Connect with a developer
                    </ConnectButton>
                </Flex>
                <Box marginTop={25} marginBottom={50}>
                    <Flex justify={'center'} align={'center'}>
                        <PolicyButton>
                            View our subscription policy
                        </PolicyButton>
                    </Flex>
                </Box>
            </InfoContainer>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    width: 18rem;
    background: ${colors.white};
    box-shadow: ${shadows.card};
    border-radius: 15px;
    z-index: 3;
    margin-top: 2rem;

    ${respondTo.xs`
        margin-top: 2rem;
        width: 23rem;
    `}

    ${respondTo.md`
        margin-top: 0;
    `}

    ${respondTo.lg`
        width: 25rem;
    `}
`

const HeadingContainer = styled.div`
    width: 100%;
    height: 5rem;
    border-radius: 15px 15px 0 0;
    transform: translateY(-1px);

    ${props => props.color && css`
        background: ${props.color};
    `}
`

const InfoContainer = styled.div`
    padding: 0 2rem;

    ${respondTo.lg`
        padding: 0 3rem;
    `}
`

const SubscriptionPriceText = styled.p`
    font-size: 3.8rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    text-align: center;
    color: ${colors.black};
    line-height: 40px;
    margin-top: 2rem;

    ${respondTo.xs`
        margin-top: 0;
        font-size: 4.5rem;
        line-height: 10rem;
    `}
`

const DurationText = styled.span`
    font-size: 1.6rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    text-align: center;
    color: ${colors.black};

    ${respondTo.xs`
        font-size: 2rem;
    `}
`

const List = styled.ul`
    font-size: 10px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    color: ${colors.black};
    margin-left: 2rem;

    ${respondTo.sm`
        font-weight: 400;
        font-size: 12px;
    `}

    ${respondTo.md`
        font-size: 16px;
    `}

    ${respondTo.lg`
        font-size: 18px;
    `}

    li {
        margin-top: .5rem;
    }
`

const ConnectButton = styled.button`
    width: 14rem;
    height: 2.5rem;
    border: none;
    border-radius: 5px;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    background: ${colors.yellow};
    color: ${colors.black};
    box-shadow: ${shadows.button};
    transition: all .3s ease;

    &:hover {
        box-shadow: ${shadows.navigation};
        cursor: pointer;
    }

    ${respondTo.xs`
        width: 15rem;
        height: 3rem;
        font-size: 14px;
    `}
`

const PolicyButton = styled.button`
    border: none;
    background: none;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    text-decoration: underline;
    transition: all .3s ease;

    &:hover {
        cursor: pointer;
        color: ${colors.blue};
    }

    ${respondTo.xs`
        font-size: 14px;
    `}
`