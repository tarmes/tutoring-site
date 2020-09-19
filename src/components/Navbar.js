import React from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand
} from 'reactstrap';


export default function NavBar() {
    return (
        // <nav>

        //     <nav>
        //         <button>About</button>
        //         <button>Sign-Up</button>
        //         <button>Contact</button>
        //     </nav>
        // </nav>


        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="#home">
                    <img
                        id='logo-img' 
                        src='https://i.ibb.co/4mJNq5p/c3bbb493-4fe4-46a8-a98a-c4c219a27348-200x200.png' 
                        alt="Can't wait to hear from you!"
                        width='80px'
                        height='80px'
                    />
                </NavbarBrand>
                <NavbarBrand>Tutoring by Trev</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to='/'>Go home!</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to='/'>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to='/'>Contact</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
</div>
        
    )
}