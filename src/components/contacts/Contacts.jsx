import React from 'react'
import { useTranslation } from "react-i18next";
import FormToSend from './FormToSend'
import { Container, Row, Col } from 'react-bootstrap';
import { phone, email, adress, socLink } from '../../infoData/contacts'
import { SocialLink } from "../Common/index"

export default function Contacts() {
    const { t } = useTranslation('common');
    return (
        <>
            <section className="container-fluid Contacts">
                <div className="row justify-content-around">
                    <div className="col-11 col-md-7 data-contacts">
                        <Container>
                            <Row>
                                <Col xs={12} md={12} >
                                    <div>
                                        <h3>{t('contacts.titleAdress')}</h3>
                                        <p>{t(adress)}</p>
                                    </div>
                                </Col>
                                <Col md={10} className="line mt-4 mb-4" />
                                <Col xs={12} md={6}>
                                    <h3>{t('footer.phone')}</h3>
                                    <p>{phone}</p>
                                </Col>
                                <Col xs={12} md={6}>
                                    <h3>{t('footer.email')}</h3>
                                    <p>{email}</p>
                                </Col>
                                <Col md={10} className="line mt-4 mb-4" />

                                <Col xs={12} md={12} >
                                    <div className="socLink">
                                        <h3>{t('contacts.messengers')}</h3>
                                        <SocialLink title={socLink.telegram.title} link={socLink.telegram.link} />
                                        <SocialLink title={socLink.viber.title} link={socLink.viber.link} />
                                        <SocialLink title={socLink.whatsapp.title} link={socLink.whatsapp.link} />
                                    </div>
                                </Col>

                                <Col xs={12} md={12} className="mt-4">
                                    <p>{t('contacts.comment1')}</p>
                                    <p>{t('contacts.comment2')}</p>
                                    <p>{t('contacts.comment3')}</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="col-11 col-md-4 form">
                        <h3>{t('contacts.titleEmail')}</h3>
                        <FormToSend />
                    </div>
                </div>
            </section>
        </>
    )
}
