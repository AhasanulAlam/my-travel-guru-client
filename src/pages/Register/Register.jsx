import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const handleAccepted = (event) =>{
        setAccepted(event.target.checked);
    }

    const handleRegister = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <Container className='w-50 mx-auto shadow-lg bg-light-subtle'>
            <h2>Register your account</h2>
            <form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter photo url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        name='accept'
                        label={
                            <>
                                Accept <Link to='/terms'>terms & conditions</Link> 
                            </>
                            } />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
                <br />
                <Form.Text className="text-white fs-5">
                    Already have an Account? <Link to='/login'>Login</Link>
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

export default Register;