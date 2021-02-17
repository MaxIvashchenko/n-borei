import React from 'react'
import bigLogo from './Sait_NataliBorei.png'
import Ztext from 'react-ztext'



export default function Banner() {
    return (
        <div className="bigScr">
            <Ztext
                depth='1rem'
                direction='both'
                event='pointer'
                eventRotation='10deg'
                fade={false}
                layers={1}
                perspective='500px'
            >
                    <img id="logo" src={bigLogo} alt="big logo" />
            </Ztext>
            <p>Beaded Jewelry & Accessories</p>
        </div>
    )
}
