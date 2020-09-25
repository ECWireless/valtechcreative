import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const Model = () => {
    return (
        <ModelContainer>
            <Fade>
                <iframe width="600px" height="550px" frameBorder="none" src="https://cdn.forms-content.sg-form.com/1a3e6333-fedf-11ea-a4f1-0ab38a2c3a50"/>
            </Fade>
        </ModelContainer>
    )
}

export default Model

const ModelContainer = styled.div`
    position: fixed;
    z-index: 1000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
