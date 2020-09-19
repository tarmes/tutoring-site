import React from 'react'


export default function NavBar() {
    return (
        <nav>
            <img
                id='logo-img' 
                src='https://i.ibb.co/4mJNq5p/c3bbb493-4fe4-46a8-a98a-c4c219a27348-200x200.png' 
                alt="Can't wait to hear from you!"
            />
            <nav>
                <button>About</button>
                <button>Sign-Up</button>
                <button>Contact</button>
            </nav>
        </nav>
    )
}