import { useState } from 'react'
import Head from 'next/head'
import styled, { css } from 'styled-components'
import respondTo from '../components/Breakpoints'

// Containers
import NavBar from '../containers/NavBar'
import Sidebar from '../components/Sidebar'
import NavMenu from '../containers/NavMenu'
import Hero from '../containers/Hero'
import Subscriptions from '../containers/Subscriptions'
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
    const [sidebar, setSidebar] = useState(false)

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
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="Web Development for custom Websites, Web Apps, and Native Applications. Valtech is a distributed company built around collaboration." 
                />
                <meta name="keywords" content="web development, website, web app, native application, custom, boutique, distributed, collaborative" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href="https://valtechcreative.com/" />

                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
            </Head>
            <main>
                <Backdrop open={sidebar} onClick={() => setSidebar(false)} />
                <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
                <NavBar setSidebar={setSidebar} />
                {/* {!closed && <NavMenu setSidebar={setSidebar} />} */}
                <Hero />
                <HashTransforms id="subscriptions" transform={50} />
                <Subscriptions />
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

const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	background: #000;
	z-index: -1;
	opacity: 0;
	transition: all .5s ease;

	${props => props.open && css`
		z-index: 999;
		opacity: .8;
	`}
`

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
