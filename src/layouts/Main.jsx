import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
                <Container>
                    <Row>
                        <Col>
                            <Outlet />
                        </Col>
                    </Row>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;