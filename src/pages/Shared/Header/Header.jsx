import React, { useContext } from 'react';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/icons/logoW.png';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error => console.error(error))
    }

    return (
        <Container>
            <div className='text-center'>
                <Marquee className='fs-3' speed={150}>Dream Your Travel</Marquee>
                <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
                <Container>
                    <Navbar.Brand >
                        <Link to='/'><img width={120} className='text-white' src={logo} alt="" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Form className="d-flex position-relative">
                            <Form.Control
                                type="search"
                                placeholder="Search your Destination..."
                                className="me-2 ps-5 bg-transparent text-white"
                                aria-label="Search"
                            />

                            <Button className='position-absolute top-0' variant="outline-success"><FaSearch></FaSearch> </Button>
                        </Form>
                        <Nav className="mx-auto text-white gap-4">
                            <Link className='text-white' href="#">News</Link>
                            <Link className='text-white' href="#">Destination</Link>
                            <Link className='text-white' href="#">Blog</Link>
                            <Link className='text-white' href="#">Contact</Link>
                        </Nav>
                        <Nav>
                            {user && <Nav className='text-primary' href="">
                                <FaUserCircle style={{ fontSize: '2rem' }} />
                                {user.displayName}
                            </Nav>}
                            <Nav>
                                { user ? 
                                    <Button onClick={handleLogOut} variant="warning">Logout</Button>:
                                    <Link to='/login'><Button variant="primary">Login</Button></Link>
                                }
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;