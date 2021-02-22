import React from 'react'
import { useTranslation } from "react-i18next";
import CardImage from './CardImage';
// import { Animated } from 'react-animated-css'
import { Link } from 'react-router-dom'
import titleToUrl from "../../../helper/helper"

export default function ItemList({ items }) {
    const { t, i18n } = useTranslation('common');
    const lang = i18n.language;

    const arrayMin = (arr) => arr.reduce((p, v) => (p.price < v.price ? p : v));

    const itemList = items.map(function (item, i) {
        const path = `/shop/${item.title}/${item.en.name}`
        const showItem = () => {
            if (item.variants) {

                const { price } = arrayMin(item.variants)
                const isAvailable = item.variants.some(a => a.available === 'available')
                const status = isAvailable ? "available" : "sold";

                const colors = item.variants.map((variant, i) => <div key={variant.color + '-' + i} className={variant.color}></div>)
                const priceStatus = () => <li className={`item-status ${status}`}>{t(`shop.filter.${status}`)}</li>

                item.available = status

                return (
                    <>
                        <div className="col-12 ">
                            <CardImage images={item.mainImage} name={item[lang].name} />
                            <h1 className="item-name">{item[lang].name}</h1>
                            <hr className="line" />
                            <div className="variants">
                                {colors}
                            </div>
                        </div>

                        <ul className="col-12 priceStatus">
                            {priceStatus()}
                            <li className="item-price  ">{t(`shop.filter.from`)} {price} €</li>
                        </ul>
                    </>
                )
            } else {
                return (
                    <>
                        <div className="col-12 ">
                            <CardImage images={item.images} name={item[lang].name} />
                            <h1 className="item-name">{item[lang].name}</h1>
                            <hr className="line" />
                        </div>

                        <ul className="col-12 priceStatus">
                            <li className={"item-status   " + item.available}>{t(`shop.filter.${item.available}`)}</li>
                            <li className="item-price  ">{item.price} €</li>
                        </ul>
                    </>
                )
            }
        }


        return (
            <Link to={{ pathname: titleToUrl(path), state: { item } }}
                className="items container col-6 col-sm-6 col-lg-4" key={i}>
                <div className="item-card">
                    <div className="content row">
                        {showItem()}
                    </div>
                </div>
            </Link>
        )
    })

    return (
        <>{itemList}</>
    )
}