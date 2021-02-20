import React from 'react'
import { useTranslation } from "react-i18next";
import shortLogo from '../../images/shortLogo.png'
import { Link } from "react-router-dom";
import { Button, NavDropdown } from 'react-bootstrap';

import NavItem from './NavItem'
import useWindowWidth from "../../hooks/useWindowWidth"


export default function Header({ mainPage }) {
    const { t, i18n } = useTranslation('common');
    const [width] = useWindowWidth();
    console.log(width)
    const mobWidth = width < 992;

    return (
        <>

            <nav className="Header navbar navbar-expand-lg navbar-light justify-content-end">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {mobWidth &&
                    (
                        <>
                            <div style={{ position: "absolute", top: 25, left: 0, padding: "0px 5px", zIndex: 999 }}>
                                <Button style={{ color: "rgba(0,0,0,.5)", margin: 0 }} onClick={() => i18n.changeLanguage('ru')} variant="link">{t('header.ru')}</Button>
                                <Button style={{ color: "rgba(0,0,0,.5)", padding: 0 }} onClick={() => i18n.changeLanguage('en')} variant="link">{t('header.en')}</Button>
                            </div>
                            <div className="brand-centered">
                                <Link to={mainPage} className="navbar-brand">
                                    <img id="shortLogo" src={shortLogo} alt="small logo" />
                                </Link>
                            </div>
                        </>
                    )
                }
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup" style={{ textAlign: "center", padding: "20px 0" }}>
                    <div className="navbar-nav menu-btn navbar-left">
                        <NavItem href="/about" text={t('header.about')} />
                        <NavItem href="/shop" text={t('header.shop')} />
                        <NavItem href="/collections" text={t('header.collections')} />
                    </div>

                    {!mobWidth &&
                        <Link to={mainPage} className="brand-centered" style={{ left: width / 2 - 28 }}>
                            <img id="shortLogo" src={shortLogo} alt="small logo" />
                        </Link>
                    }

                    <div className="navbar-nav menu-btn navbar-right ml-auto">
                        <NavItem href="/order" text={t('header.orderShip')} />
                        <NavItem href="/contacts" text={t('header.contacts')} />
                        {!mobWidth &&
                            <NavDropdown title={t(`header.${i18n.language}`)} id="collasible-nav-dropdown">
                                <Button style={{ color: "rgba(0,0,0,.5)", margin: 0 }} onClick={() => i18n.changeLanguage('ru')} variant="link">{t('header.ru')}</Button>
                                <Button style={{ color: "rgba(0,0,0,.5)", padding: 0 }} onClick={() => i18n.changeLanguage('en')} variant="link">{t('header.en')}</Button>
                            </NavDropdown>
                        }
                    </div>
                </div>

            </nav >

        </>
    )
}

// <nav className="Header navbar navbar-expand-lg navbar-light justify-content-end" >

// <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
//     aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
// </button>
// <div className="brand-centered">
//     <Link to={mainPage} className="navbar-brand">
//         <img id="shortLogo" src={shortLogo} alt="small logo" />
//     </Link>
// </div>
// <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//     <div className="navbar-nav menu-btn navbar-left">
//         <NavItem href="/about" text={t('header.about')} />
//         <NavItem href="/shop" text={t('header.shop')} />
//     </div>
//     <div className="navbar-nav menu-btn navbar-right ml-auto">
//         <NavItem href="/order" text={t('header.orderShip')} />
//         <NavItem href="/contacts" text={t('header.contacts')} />
//     </div>
// </div>

// </nav >