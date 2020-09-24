import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import respondTo from '../components/Breakpoints'

// Components
import { colors, shadows } from './theme'
import { Flex } from './Containers'
import { P3 } from './Typography'

const Sidebar = ({
    sidebar, setSidebar
}) => {
    const [route, setRoute] = useState(null)
    const router = useRouter()

    const onSelctOption = (hash) => {
        setRoute(hash)
        setSidebar(false)
        console.log(route)
    }
    
    return (
        <SidebarContainer open={sidebar}>
            <SidebarTop>
                <Flex style={{height: '100%'}} align={'center'} justify={'space-around'}>
                    <Link href="/">
                        <Flex direction={'column'} onClick={onSelctOption.bind(this, '/')}>
                            <P3 style={{letterSpacing: '1px'}} uppercase color={colors.yellow}>
                                Valtech Creative
                            </P3>
                        </Flex>
                    </Link>
                    <CloseContainer onClick={() => setSidebar(false)}>
                        <p style={{padding: 0, margin: 0}}>&times;</p>
                    </CloseContainer>
                </Flex>
            </SidebarTop>
            <Link href="#subscriptions">
                <SidebarOption onClick={onSelctOption.bind(this, '/#subscriptions')} active={route === '/#subscriptions' ? true : false}>
                    <Flex justify={'flex-start'} align={'center'} style={{ height: '100%' }}>
                        <P3 style={{marginLeft: '2rem'}} color={colors.white}>Subscriptions</P3>
                    </Flex>
                </SidebarOption>
            </Link>
            <Link href="#features">
                <SidebarOption onClick={onSelctOption.bind(this, '/#features')} active={route === '/#features' ? true : false}>
                    <Flex justify={'flex-start'} align={'center'} style={{ height: '100%' }}>
                        <P3 style={{marginLeft: '2rem'}} color={colors.white}>Features</P3>
                    </Flex>
                </SidebarOption>
            </Link>
            <Link href="#work">
                <SidebarOption onClick={onSelctOption.bind(this, '/#work')} active={route === '/#work' ? true : false}>
                    <Flex justify={'flex-start'} align={'center'} style={{ height: '100%' }}>
                        <P3 style={{marginLeft: '2rem'}} color={colors.white}>Work</P3>
                    </Flex>
                </SidebarOption>
            </Link>
            <Link href="#about">
                <SidebarOption onClick={onSelctOption.bind(this, '/#about')} active={route === '/#about' ? true : false}>
                    <Flex justify={'flex-start'} align={'center'} style={{ height: '100%' }}>
                        <P3 style={{marginLeft: '2rem'}} color={colors.white}>About</P3>
                    </Flex>
                </SidebarOption>
            </Link>
            <Link href="#tools">
                <SidebarOption onClick={onSelctOption.bind(this, '/#tools')} active={route === '/#tools' ? true : false}>
                    <Flex justify={'flex-start'} align={'center'} style={{ height: '100%' }}>
                        <P3 style={{marginLeft: '2rem'}} color={colors.white}>Tools</P3>
                    </Flex>
                </SidebarOption>
            </Link>
            <Link href="#contact">
                <SidebarOption onClick={onSelctOption.bind(this, '/#contact')} active={route === '/#contact' ? true : false}>
                    <Flex justify={'flex-start'} align={'center'} style={{ height: '100%' }}>
                        <P3 style={{marginLeft: '2rem'}} color={colors.white}>Contact</P3>
                    </Flex>
                </SidebarOption>
            </Link>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 15rem;
	height: 100%;
	background: linear-gradient(to top left, ${colors.gradientBlue});
	z-index: 1000;
	box-shadow: ${shadows.sidebar};
	transform: translateX(-30rem);
    transition: all .5s ease;

    ${respondTo.xs`
	    width: 16rem;
    `}

    ${respondTo.sm`
	    width: 18rem;
    `}

    ${respondTo.md`
	    width: 20rem;
    `}

	${props => props.open && css`
		transform: translateX(0rem);
        box-shadow: none;
    `}
`

const SidebarTop = styled.div`
	height: 6rem;
	width: 100%;
    border-bottom: solid 1px ${colors.white};

    ${respondTo.sm`
	    height: 8rem;
    `}
`

const CloseContainer = styled.div`
    width: 50px;
    height: 50px;
    background: ${colors.white};
    border: 1px solid ${colors.black};
    border-radius: 50%;
    transition: all .5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
	
	p {
        display: block;
        line-height: 1.8rem;
		color: ${colors.gold};
		font-size: 3.2rem;
        font-weight: light;
        margin: 0;
        padding: 0;
        height: 2rem;
	}

    &:hover,
    &:focus,
    &:active {
		background: ${colors.yellow};
        cursor: pointer;
    }
`

const SidebarOption = styled.div`
    height: 5rem;
    border-bottom: solid 1px ${colors.white};
    border-right: 5px solid transparent;
    transition: all .3s ease;

    ${respondTo.xl`
	    height: 6rem;
    `}
    
    &:hover {
        cursor: pointer;
        background: ${colors.yellow};

        p {
            color: ${colors.black};
        }
    }

    ${props => props.active && css`
        border-right: 5px solid ${colors.yellow};

        p {
            color: ${colors.yellow};
        }
    `}
`
