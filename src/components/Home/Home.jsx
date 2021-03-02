import React from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Banner from '../Banner/Banner';
import { Animated } from 'react-animated-css'
import bracelet from '../../images/main/bracelets_title.png'
import necklace from '../../images/main/necklace_title.png'
import pendant from '../../images/main/pendant_title.png'
import bag from '../../images/main/bags_title.png'
import brooch from '../../images/main/brooch_title.png'
import lavBrooch from '../../images/main/lavBrooch_title.png'
import ring from '../../images/main/rings_title.png'
import stick from '../../images/stick.png'

const categories = [
    { name: 'brooch', sizeClass: 'col-md-7', imgSrc: brooch, text: 'Brooch' },
    { name: 'bracelets', sizeClass: 'col-md-5', imgSrc: bracelet, text: 'Bracelets' },
    { name: 'rings', sizeClass: 'col-md-3', imgSrc: ring, text: 'Rings' },
    { name: 'bags', sizeClass: 'col-md-3', imgSrc: bag, text: 'Bags' },
    { name: 'lavBrooch', sizeClass: 'col-md-6', imgSrc: lavBrooch, text: 'Lavalierbrooch' },
    { name: 'pendant', sizeClass: 'col-md-5', imgSrc: pendant, text: 'Pendant' },
    { name: 'necklace', sizeClass: 'col-md-7', imgSrc: necklace, text: 'Necklace' },
]

function Home() {
    const [t] = useTranslation('common');

    return (
        <Animated className="Home">
            <Banner />
            <div className="container">
                <div className="row categoryShop">

                    {categories.map((category, i) => {
                        const { text, sizeClass, name, imgSrc } = category;

                        return (
                            <Link key={i} to={`/shop/${text.toLowerCase()}`} className={'col-12 ' + sizeClass}>
                                <div className={name}>
                     

                                    <img className="cover" src={imgSrc} alt={name + '_title'} />
                                    <h3>{t(`categories.${name}`)}</h3>
                                    {/* <img src={stick} alt='srick' className="stick1"/> */}
                                    <img src={stick} alt='stick' className="stick2"/>
                                </div>
                            </Link>
                        )
                    })}

                </div>
            </div>

        </Animated>
    )
}

export default Home