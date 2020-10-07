import { useState } from 'react'
import styled, { css } from 'styled-components'
import Fade from 'react-reveal/Fade';

// Components
import { colors } from '../components/theme'
import { Button } from '../components/Buttons'
import { Container } from '../components/Containers'
import { Form, Input, Label, Select } from '../components/Forms'
import { H3 } from '../components/Typography'
import { Box } from '../components/Boxes'
import Snackbar from '../components/Snackbar'
import Spinner from '../components/Spinner'

const Model = ({ onCloseAll }) => {

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    })
    
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        subscription: 'Personal',
    })

    const [snackbar, setSnackbar] = useState(false)

    const handleResponse = (status, msg) => {
        if (status === 200) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg }
            })
            setInputs({
                name: '',
                email: '',
                subscription: 'Personal',
            })
            setSnackbar(true)
        } else {
            setStatus({
                info: { error: true, msg: msg }
            })
            setSnackbar(true)
        }
    }

    const handleOnChange = e => {
        e.persist()
        setInputs(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null }
        })
    }

    const handleOnSubmit = async e => {
        e.preventDefault()
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
        const res = await fetch('/api/subscriptions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs)
        })
        const text = await res.text()
        handleResponse(res.status, text)
        onCloseAll()
    }

    const onCloseSnackbar = () => {
        setSnackbar(false)
    }

    return (
        <>
            <ModelContainer>
                <Fade ssrFadeout>
                    <Container>
                        <Form style={{ background: colors.white }} paddingTop={50} paddingBottom={50} onSubmit={handleOnSubmit}>
                            <Box marginBottom={50}>
                                <H3 color={'#000'} align={'center'}>Connect with a Developer</H3>
                            </Box>
                            <Label htmlFor="name">Name:</Label>
                            <Input required marginTop={10} type="text" id="name" onChange={handleOnChange} value={inputs.name} />
                            <Label marginTop={50} htmlFor="email">Email:</Label>
                            <Input required marginTop={10} type="email" id="email" onChange={handleOnChange} value={inputs.email} />
                            <Label marginTop={50} htmlFor="subscription">Subscription Type:</Label>
                            <Select required marginTop={10} id="subscription" onChange={handleOnChange} value={inputs.subscription}>
                                <option value="personal">Personal</option>
                                <option value="business">Business</option>
                            </Select>

                            <Button marginTop={50} type="submit">
                                {!status.submitting
                                    ? !status.submitted
                                    ? 'Submit'
                                    : 'Submitted'
                                    : <Spinner />
                                }
                            </Button>
                        </Form>
                    </Container>
                </Fade>
            </ModelContainer>
            { snackbar && <Snackbar success={!status.info.error} onCloseSnackbar={onCloseSnackbar} /> }
        </>
    )
}

export default Model

const ModelContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
`
