import React from 'react'
import { useTranslation } from "react-i18next";
import shortLogo from '../../images/shortLogo.png'
import { Link } from "react-router-dom";

import NavItem from './NavItem'

export default function Header({ mainPage }) {
    const {t, i18n} = useTranslation('common');

    return (
        <nav className="Header navbar navbar-expand-lg navbar-light justify-content-end Header" >
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="brand-centered">
                <Link to={mainPage} className="navbar-brand " ><img id="shortLogo" src={shortLogo} alt="small logo" /></Link>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav menu-btn navbar-left ">
                    <NavItem href={"/about"} text={t('header.about')} />
                    <NavItem href={"/shop"} text={t('header.shop')} />
                </div>
                <div className="navbar-nav menu-btn navbar-right ml-auto">
                    <NavItem href={"/order"} text={t('header.orderShip')} />
                    <NavItem href={"/contacts"} text={t('header.contacts')} />
                    <button onClick={() => i18n.changeLanguage('ru')}>ru</button>
                    <button onClick={() => i18n.changeLanguage('en')}>en</button>
                </div>
            </div>
        </nav>
    )
}
