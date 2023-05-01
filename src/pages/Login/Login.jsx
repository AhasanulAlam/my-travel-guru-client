import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('Login page location: ', location);
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    
        signIn(email, password)
        .then( result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from, {replace: true});
        })
        .catch(error =>{
            console.error(error);
        })
    
    }

    return (
        <Container className='w-50 mx-auto shadow-lg bg-light-subtle'>
            <h2>Login your account</h2>
            <form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-white fs-5">
                    Don't Have an Account? <Link to='/register'>Register</Link>
                </Form.Text>
                <Form.Text className="text-success"></Form.Text>
                <Form.Text className="text-danger"></Form.Text>
            </form>
            <div className='my-5 d-flex gap-4 justify-content-center'>
                <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
                <Button variant="outline-secondary"> <FaGithub /> Login with Github</Button>
            </div>
        </Container>
    );
};

export default Login;