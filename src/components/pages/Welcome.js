import React from 'react'
import { Button } from 'reactstrap'
import styled from 'styled-components'
import welcomeImg from '../../img/welcomeImg.jpg'

const Styles = styled.div`
            video {
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: -1;
        }

        .hero-container {
        /* background: url('/images/img-home.jpg') center center/cover no-repeat; */
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
        object-fit: contain;
        }

        .hero-container > h1 {
        color: #fff;
        font-size: 100px;
        margin-top: -100px;
        }

        .hero-container > p {
        margin-top: 8px;
        color: #fff;
        font-size: 32px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
            'Lucida Sans', Arial, sans-serif;
        }

        .hero-btns {
        margin-top: 32px;
        }

        .hero-btns .btn {
        margin: 6px;
        }

        .fa-play-circle {
        margin-left: 4px;
        }

        @media screen and (max-width: 960px) {
        .hero-container > h1 {
            font-size: 70px;
            margin-top: -150px;
        }
        }

        @media screen and (max-width: 768px) {
        .hero-container > h1 {
            font-size: 50px;
            margin-top: -100px;
        }

        .hero-container > p {
            font-size: 30px;
        }

        .btn-mobile {
            display: block;
            text-decoration: none;
        }

        .btn {
            width: 100%;
        }
        }
`


export default function Welcome() {
    return (
        <Styles>
            <div className='hero-container'>
            <video src='src/videos/video-1.mp4' autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                GET STARTED
                </Button>
                <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                onClick={console.log('hey')}
                >
                WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
            </div>
        </Styles>
    )
}