import Head from 'next/head';

// Components
import {
    Card,
    Container,
    Img,
    Logo,
    P,
} from '../components'

const index = () => {
    return (
        <>
            <Head>
                <title>Valtech Creative | Under</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
            </Head>
            <main>
                <Card>
                    <Container style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
                        <Logo src="/Valtech-Logo.png" />
                        <P>Our website is currently being redesigned. Thanks for your patients!</P>
                        <Img style={{ marginTop: '40px' }} id="contstuction-gif" src="/routine-maintenance.gif" alt="construction"/>
                    </Container>
                </Card>
            </main>
        </>
    )
}

export default index
