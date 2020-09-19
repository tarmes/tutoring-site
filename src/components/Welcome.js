import React from 'react'
import logo from '../logo.svg';

export default function Welcome() {
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ayyyyye welcome to Trev's tutoring
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    )
}