import { useEffect, useState } from 'react'

// Components
import { Line } from '../components'
import { Button } from '../components/Buttons'
import { Container, Flex } from '../components/Containers'
import { Form, Input, Label, TextArea } from '../components/Forms'
import { H1 } from '../components/Typography'
import { Box } from '../components/Boxes'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')

    function onNameChange(e) { setName(e.target.value) }
    function onEmailChange(e) { setEmail(e.target.value) }
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
    function onMessageChange(e) { setMessage(e.target.value) }

    function onSubmit(e) {
        e.preventDefault()
        console.log(name, email, number, message)
    }

    return (
        <>
            <Container>
                <Flex align={'center'} justify={'space-around'}>
                    <Line width={75} height={5} color={'blue'} />
                    <H1 color={'#000'} align={'center'}>Contact Us</H1>
                    <Line width={75} height={5} color={'blue'} />
                </Flex>
                <Box marginTop={100}>
                    <Form paddingTop={50} paddingBottom={50} onSubmit={onSubmit}>
                        <Label htmlFor="contact__name">Name:</Label>
                        <Input required marginTop={10} type="text" id="contact__name" onChange={onNameChange} value={name} />
                        <Label marginTop={50} htmlFor="contact__email">Email:</Label>
                        <Input required marginTop={10} type="email" id="contact__email" onChange={onEmailChange} value={email} />
                        <Label marginTop={50} htmlFor="contact__number">Number:</Label>
                        <Input required marginTop={10} type="tel" id="contact__number" onChange={onNumberChange} value={number} />
                        <Label marginTop={50} htmlFor="contact__message">Message:</Label>
                        <TextArea required marginTop={10} id="contact__message" onChange={onMessageChange} value={message} />
                        <Button marginTop={50} type="submit">Submit</Button>
                    </Form>
                </Box>
            </Container>
        </>
    )
}

export default Contact
