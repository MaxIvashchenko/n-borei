import React from 'react'
import FormToSend from './FormToSend'
// import { Animated } from 'react-animated-css'

export default function Contacts() {
    return (
        <>
            <section className="container-fluid Contacts">
                <div className="row  justify-content-around">
                    <div className="col-11 col-md-7 data-contacts"></div>
                    <div className="col-11 col-md-4 form">
                        <FormToSend />
                    </div>
                </div>
            </section>
        </>
    )
}
