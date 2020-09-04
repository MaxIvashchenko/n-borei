import React from 'react'
import shortLogo from '../../images/shortLogo.png'
import {  Link } from "react-router-dom";

import NavItem from './NavItem'

export default function Header() {
    return (
        <nav className="Header navbar navbar-expand-lg navbar-light justify-content-end Header" >
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="brand-centered">
                <Link to='/' className="navbar-brand " ><img id="shortLogo" src={shortLogo} alt="small logo" /></Link>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav menu-btn navbar-left ">
                    <NavItem href={"/about"} text={'About'} />
                    <NavItem href={"/shop"} text={'Shop'} />
                </div>
                <div className="navbar-nav menu-btn navbar-right ml-auto">
                    <NavItem href={"/order"} text={'Order & Shipping'} />
                    <NavItem href={"/contacts"} text={'Contacts'} />
                </div>
            </div>
        </nav>
    )
}
