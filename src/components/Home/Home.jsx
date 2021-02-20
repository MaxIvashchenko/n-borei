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

const categories = [
    { name: 'brooch', sizeClass: 'col-md-7', imgSrc: brooch, text: 'Brooch' },
    { name: 'bracelets', sizeClass: 'col-md-5', imgSrc: bracelet, text: 'Bracelets' },
    { name: 'rings', sizeClass: 'col-md-3', imgSrc: ring, text: 'Rings' },
    { name: 'bags', sizeClass: 'col-md-3', imgSrc: bag, text: 'Bags' },
    { name: 'lavBrooch', sizeClass: 'col-md-6', imgSrc: lavBrooch, text: 'Lavalier brooch' },
    { name: 'pendant', sizeClass: 'col-md-5', imgSrc: pendant, text: 'Pendant' },
    { name: 'necklace', sizeClass: 'col-md-7', imgSrc: necklace, text: 'Necklace' },
]

function Home({ getSelected }) {
    const [t] = useTranslation('common');

    return (
        <Animated className="Home">
            <Banner />
            <div className="container">
                <div className="row categoryShop">

                    {categories.map((category, i) => {
                        return (
                            <button key={i} onClick={() => getSelected(category.text.split(' ').join(''))} className={'col-12 ' + category.sizeClass}>
                                <Link to={'/shop'}>
                                    <div className={category.name}>

                                        <img src={category.imgSrc} alt={category.name + '_title'} />
                                        <h3>{t(`categories.${category.name}`)}</h3>

                                    </div>
                                </Link>
                            </button>
                        )
                    })}

                </div>
            </div>

        </Animated>
    )
}

export default Home