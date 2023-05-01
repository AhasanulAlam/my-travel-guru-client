import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    const { city_id } = useParams();
    const selectedDestination = useLoaderData();
    return (
        <div className='d-flex justify-content-between'>
            <div>
                <h1>{selectedDestination.city}</h1>
                <p>{selectedDestination.description}</p>
            </div>
            <div>
                <Container className='text-black mx-auto shadow-lg bg-light-subtle p-5  rounded'>
                    <form>
                        <Form.Group className="mb-3" controlId="formBasicOrigin">
                            <Form.Label>Origin</Form.Label>
                            <Form.Control type="text" name='origin' placeholder="Enter your origin" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDestination">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control type="text" name='destination' placeholder={selectedDestination.city} required />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex" controlId="formBasicDestination">
                            <Form.Label>From</Form.Label>
                            <Form.Control type="date" name='fromDate' placeholder="Enter Date" required />
                            <Form.Label>To</Form.Label>
                            <Form.Control type="date" name='toDate' placeholder="Enter Date" required />
                        </Form.Group>
                        <Link to={`/hotels/${selectedDestination.city_id}`}>
                            <Button variant="warning" type="submit">Start Booking</Button>
                        </Link>
                    </form>
                </Container>
            </div>

        </div>
    );
};

export default Booking;