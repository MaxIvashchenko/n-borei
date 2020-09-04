import React from 'react'
// import bigLogo from './Sait_NataliBorei.png'

import SocialLink from './SocialLink'


export default function OrderAndShipment() {

    const socLink = {
        telegram: {
            title: "telegram",
            link: "tg://resolve?domain=natali_borei"
        },
        viber: {
            title: "viber",
            link: "viber://add?number=380953240777"
        },
        whatsapp: {
            title: "whatsapp",
            link: "whatsapp://send?phone=+380953240777"
        }
    }
    return (
        <div className="Order">
            <div className="col-12">
                <h2>Mail orders and payments:</h2>
                <p>To make an order you can get in touch with us by phone + 38 095 324 0 777 or by any available
                        messenger below (Telegram, Viber, WhatsApp)</p>
                <SocialLink title={socLink.telegram.title} link={socLink.telegram.link} />
                <SocialLink title={socLink.viber.title} link={socLink.viber.link} />
                <SocialLink title={socLink.whatsapp.title} link={socLink.whatsapp.link} />
            </div>
            <div className="col-12">
                <h2>Shipment</h2>
                <p>Shipment to any place throughout the world after 100% advance payment.</p>
            </div>
        </div>
    )
}
