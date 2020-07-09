import Head from 'next/head';

// Components
import {
    Card,
    Container,
    H1,
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
                    <Container style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                        <P style={{fontSize: '24px'}}>The</P>
                        <H1 style={{marginTop: '15px'}}>Valtech website</H1>
                        <P style={{fontSize: '24px', marginTop: '25px'}}>is currently being updated. Thanks for your patients!</P>
                        <img style={{width: '450px', height: '350px', marginTop: '40px'}} src="/routine-maintenance.gif" alt="working"/>
                    </Container>
                </Card>
            </main>
        </>
    )
}

export default index
