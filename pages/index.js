import Head from 'next/head';

// Components
import {
    Container,
    H1,
} from '../components'

const index = () => {
    return (
        <>
            <Head>
                <title>Valtech Creative</title>
            </Head>
            <main>
                <Container style={{marginTop: '100px', textAlign: 'center'}}>
                    <H1>The Valtech website is currently being updated. Thanks for your patients!</H1>
                </Container>
            </main>
        </>
    )
}

export default index
