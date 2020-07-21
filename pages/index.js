import Head from 'next/head'

// Containers
import Hero from '../containers/Hero'
import Features from '../containers/Features'
import Work from '../containers/Work'
import About from '../containers/About'
import Tools from '../containers/Tools'
import Contact from '../containers/Contact'

// Components
import { Background1, Background2 } from '../components'
import { Box } from '../components/Boxes'

const index = () => {
    return (
        <>
            <Head>
                <title>Under Construction | Valtech Creative</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
            </Head>
            <main>
                <Hero />
                <Box marginTop={350}>
                    <Background1>
                        <Features />
                        <Work />
                    </Background1>
                </Box>
                <About />
                <Box marginTop={350}>
                    <Background2>
                        <Tools />
                        <Contact />
                    </Background2>
                </Box>
            </main>
        </>
    )
}

export default index
