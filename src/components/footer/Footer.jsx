import React from 'react'
import shortLogo from '../../images/shortLogo.png'
import { Link } from "react-router-dom";

export default function Footer() {
    const links = {
        facebook: "https://www.facebook.com/Nataly.la.perla/",
        instagram: "https://www.instagram.com/accounts/login/?next=%2Fbeads__line%2F&source=follow",

    }
    return (
        <footer className="Footer"  >
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 footerContacts">
                        <h3>Contact us</h3>
                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <p>Kharkov, Ukraine</p>
                            </li>
                            <li>
                                <i className="fas fa-phone"></i>
                                <p>+38 (095) 324 0 777</p>
                            </li>
                            <li>
                                <i className="far fa-envelope-open"></i>
                                <span>beadsline@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 footerLogo">
                        <img src={shortLogo} alt="small-logo" />
                    </div>
                    <div className="col-12 col-md-4 footerNavigation">
                        <h3>Useful links</h3>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/shop'>Shop</Link>
                        <Link to='/order'>Order & Shipping</Link>
                        <Link to='/contacts'>Contacts</Link>
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
