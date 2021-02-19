import React from 'react'
import FormToSend from './FormToSend'
// import { Animated } from 'react-animated-css'
import { Container, Row, Col } from 'react-bootstrap';
import "./Contacts.scss";

const styles = {
    textBox: {
        padding: "0 0 50px",
        backgroundColor: "red",
        color: "white",
        marginBottom: "150px",

    }
}

export default function Contacts() {
    return (
        <>
            <section className="container-fluid Contacts">
                <div className="row justify-content-around">
                    <div className="col-11 col-md-7 data-contacts">
                        <Container>
                            <Row>
                                <Col xs={12} md={12} >
                                    <div style={styles.textBox}>
                                        <h3>Adress</h3>
                                        <p>123103 Москва, проспект маршала Жукова, 68/1</p>
                                    </div>

                                </Col>

                                <Col xs={12} md={6}>
                                    <h3>ТЕЛЕФОНЫ</h3>
                                    <p>+7-915-449-83-76</p>
                                </Col>
                                <Col xs={12} md={6}>
                                    <h3>E-MAIL</h3>
                                    <p>info@yatany.ru</p>
                                </Col>
                                <Col xs={12} md={12}>
                                    <p>Круглосуточный прием заявок online</p>
                                </Col>
                            </Row>


                        </Container>
                    </div>
                    <div className="col-11 col-md-4 form">
                        <FormToSend />
                    </div>
                </div>
            </section>
        </>
    )
}
