import React from 'react'
import { useTranslation } from "react-i18next";
import shortLogo from '../../images/shortLogo.png'
import { Link } from "react-router-dom";
import {email, adress, phone} from "../../infoData/contacts";

export default function Footer({ mainPage }) {
    const { t } = useTranslation('common');
    const links = {
        facebook: "https://www.facebook.com/Nataly.la.perla/",
        instagram: "https://www.instagram.com/accounts/login/?next=%2Fbeads__line%2F&source=follow",

    }
    return (
        <footer className="Footer"  >
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 footerContacts">
                        <h3>{t('footer.contactUs')}</h3>
                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <p>{t(adress)}</p>
                            </li>
                            <li>
                                <i className="fas fa-phone"></i>
                                <p>{phone}</p>
                            </li>
                            <li>
                                <i className="far fa-envelope-open"></i>
                                <span>{email}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 footerLogo">
                        <img src={shortLogo} alt="small-logo" />
                    </div>
                    <div className="col-12 col-md-4 footerNavigation">
                        <h3>{t('footer.usefulLinks')}</h3>
                        <Link to={mainPage}>{t('header.home')}</Link>
                        <Link to='/about'>{t('header.about')}</Link>
                        <Link to='/shop'>{t('header.shop')}</Link>
                        <Link to='/order'>{t('header.orderShip')}</Link>
                        <Link to='/contacts'>{t('header.contacts')}</Link>
                    </div>
                </div>
            </div>

            <section className="container">
                <div className="row">
                    <div className="col-12 socialIcons">
                        <a href={links.facebook}><i className="fab fa-facebook facebook-bg"></i></a>
                        <a href={links.instagram}><i className="fab fa-instagram instagram-bg"></i></a>
                    </div>
                    <div className="col-12">
                        <p>Natali Borei © 2015 - 2020</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}
