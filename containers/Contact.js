import { useState } from 'react'
import Fade from 'react-reveal/Fade';

// Components
import { Line } from '../components'
import { Button } from '../components/Buttons'
import { Container, Flex } from '../components/Containers'
import { Form, Input, Label, TextArea } from '../components/Forms'
import { H1 } from '../components/Typography'
import { Box } from '../components/Boxes'
import Snackbar from '../components/Snackbar'
import Spinner from '../components/Spinner'

const Contact = () => {
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [number, setNumber] = useState('')
    // const [message, setMessage] = useState('')
    // const [loading, setLoading] = useState(false)
    // const [submitted, setSubmitted] = useState(false)
    // const [success, setSuccess] = useState(false)

    // function onNameChange(e) { setName(e.target.value) }
    // function onEmailChange(e) { setEmail(e.target.value) }
    function onNumberChange(e) {
            let cleaned = ('' + e.target.value).replace(/\D/g, '')
            if (cleaned.length > 10) {
                cleaned = cleaned.substring(0, 10)
            }

            if (cleaned.length < 10) {
                setNumber(cleaned)
            }

            if (cleaned.length == 10) {
                setNumber('(' + cleaned.substring(0, 3) + ') ' + cleaned.substring(3, 6) + '-' + cleaned.substring(6, 10))
            }
    }
    // function onMessageChange(e) { setMessage(e.target.value) }

    // function onSubmit(e) {
    //     e.preventDefault();
    //     console.log('submit')
    //     let state = {
    //         name,
    //         email,
    //         number,
    //         message,
    //     }
        
    //     setLoading(true)
    //     fetch('https://valtechcreative-backend.herokuapp.com/mail',{
    //         method: "POST",
    //         body: JSON.stringify(state),
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //     }).then(
    //         (response) => (response.json())
    //     ).then((response)=>{
    //         if (response.status === 'success'){
    //             resetForm();
    //             setSubmitted(true)
    //             setSuccess(true)
    //             setLoading(false)
    //         } else if(response.status === 'fail'){
    //             setSubmitted(true)
    //             setSuccess(false)
    //             setLoading(false)
    //         }
    //     })
    //     .catch(() => {
    //         setSubmitted(true)
    //         setSuccess(false)
    //         setLoading(false)
    //     })
    // }

    // function onCloseSnackbar() {
    //     setSubmitted(false)
    // }

    // function resetForm() {
    //     setName('')
    //     setEmail('')
    //     setNumber('')
    //     setMessage('')
    // }

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    })
    
    const [inputs, setInputs] = useState({
        email: '',
        message: ''
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
                phone: '',
                message: ''
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
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs)
        })
        const text = await res.text()
        handleResponse(res.status, text)
    }

    const onCloseSnackbar = () => {
        setSnackbar(false)
    }

    return (
        <>
            <Container>
                <Flex align={'center'} justify={'space-around'}>
                    <Fade delay={1000} ssrFadeout>
                        <Line width={75} height={5} color={'blue'} />
                    </Fade>
                    <H1 color={'#000'} align={'center'}>Contact Us</H1>
                    <Fade delay={1000} ssrFadeout>
                        <Line width={75} height={5} color={'blue'} />
                    </Fade>
                </Flex>
                <Box marginTop={100}>
                    <Form paddingTop={50} paddingBottom={50} onSubmit={handleOnSubmit}>
                        <Label htmlFor="name">Name:</Label>
                        <Input required marginTop={10} type="text" id="name" onChange={handleOnChange} value={inputs.name} />
                        <Label marginTop={50} htmlFor="email">Email:</Label>
                        <Input required marginTop={10} type="email" id="email" onChange={handleOnChange} value={inputs.email} />
                        <Label marginTop={50} htmlFor="phone">Number:</Label>
                        <Input required marginTop={10} type="tel" id="phone" onChange={handleOnChange} value={inputs.number} />
                        <Label marginTop={50} htmlFor="message">Message:</Label>
                        <TextArea required marginTop={10} id="message" onChange={handleOnChange} value={inputs.message} />
                        <Button marginTop={50} type="submit">
                            {!status.submitting
                                ? !status.submitted
                                ? 'Submit'
                                : 'Submitted'
                                : <Spinner />
                            }
                        </Button>
                    </Form>
                </Box>
            </Container>
            { snackbar && <Snackbar success={!status.info.error} onCloseSnackbar={onCloseSnackbar} /> }
        </>
    )
}

export default Contact
