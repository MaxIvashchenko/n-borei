import React from 'react'
import { Nav } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import SocialLink from '../Common/SocialLink'
import { socLink } from "../../infoData/contacts"

export default function OrderAndShipment() {
    const { t } = useTranslation('common');

    return (
        <div className="Order container">
            <div className=" row justify-content-around">
                <div className="col-8">
                    <h2>{t('orderAndShipment.title1')}</h2>
                    <p>{t('orderAndShipment.toGetOrder')}</p>
                    <SocialLink title={socLink.telegram.title} link={socLink.telegram.link} />
                    <SocialLink title={socLink.viber.title} link={socLink.viber.link} />
                    <SocialLink title={socLink.whatsapp.title} link={socLink.whatsapp.link} />
                </div>
                <div className="col-8">
                    <h2>{t('orderAndShipment.shipment')}</h2>
                    <p>{t('orderAndShipment.shipmentDesc')}</p>
                </div>
{/* 
                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link  eventKey="link-1">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Option 2</Nav.Link>
                    </Nav.Item>
                </Nav> */}
            </div>
        </div>
    )
}
