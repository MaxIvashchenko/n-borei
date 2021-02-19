import React from 'react'
import { useTranslation } from "react-i18next";
import SocialLink from '../common/SocialLink'
import { socLink } from "../../data/contacts"

export default function OrderAndShipment() {
    const { t } = useTranslation('common');

    return (
        <div className="container">
            <div className="Order row justify-content-around">
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
            </div>
        </div>
    )
}
