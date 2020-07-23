import { useState } from 'react'
import Head from 'next/head'
import styled, { css } from 'styled-components'
import respondTo from '../components/Breakpoints'

// Containers
import NavBar from '../containers/NavBar'
import NavMenu from '../containers/NavMenu'
import Hero from '../containers/Hero'
import Features from '../containers/Features'
import Work from '../containers/Work'
import About from '../containers/About'
import Tools from '../containers/Tools'
import Contact from '../containers/Contact'
import Footer from '../containers/Footer'

// Components
import { Background1, Background2 } from '../components'
import { Box } from '../components/Boxes'

const index = () => {
    const [closed, setClosed] = useState(true)

    function scrollToTop() {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });
    }
    
    return (
        <>
            <Head>
                <title>Valtech Creative | A Collaborative Agency for UX/UI Design</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
            </Head>
            <main>
                <NavBar setClosed={setClosed} />
                {!closed && <NavMenu setClosed={setClosed} />}
                <Hero />
                <Box marginTop={350}>
                    <Background1>
                        <HashTransforms id="features" transform={-100} />
                        <Features />
                        <HashTransforms id="work" transform={-100} />
                        <Work />
                    </Background1>
                </Box>
                <HashTransforms id="about" transform={0} />
                <About />
                <Box marginTop={350}>
                    <Background2>
                        <HashTransforms id="tools" transform={-200} />
                        <Tools />
                        <HashTransforms id="contact" transform={-100} />
                        <Contact />
                    </Background2>
                </Box>
                <Footer scrollToTop={scrollToTop} />
            </main>
        </>
    )
}

const HashTransforms = styled.div`
    ${props => css`
        transform: translateY(${props.transform * .5}px);

        ${respondTo.xs`
            transform: translateY(${props.transform * .7}px);
        `}

        ${respondTo.sm`
            transform: translateY(${props.transform}px);
        `}
    `}
`

export default index
