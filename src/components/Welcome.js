import React from 'react'
import { Jumbotron, Container } from 'reactstrap'
import styled from 'styled-components'

const Styles = styled.div`

`


export default function Welcome() {
    return (
        <Styles>
            <Jumbotron>
                <div className='overlay'>
                    <Container>
                        <h1>Welcome to Trev's Tutoring</h1>
                        <p>Tailor your learning to your needs.</p>
                    </Container>
                </div>
            </Jumbotron>
        </Styles>
    )
}