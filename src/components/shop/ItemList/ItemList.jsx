import React from 'react'
import CardImage from './CardImage';
import { Animated } from 'react-animated-css'
import { Link } from 'react-router-dom'


export default function ItemList({ items }) {

    const itemList = items.map(function (item, i) {

        const path = `shop/${item.title}/${item.name}`
        const showItem = () => {
            if (item.variants) {
                const arrayMin = (arr) => arr.reduce((p, v) => (p.price < v.price ? p : v));

                const startPrice = arrayMin(item.variants).price
                const isAvailable = item.variants.some((a, b) => a.available === 'available')
                const colors = item.variants.map((variant, i) => <div key={variant.color + '-' + i} className={variant.color}></div>)
                const priceStatus = () => {
                    return (isAvailable ?
                        <li className="item-status available">available</li>
                        :
                        <li className="item-status sold">sold</li>)
                }
                item.available = isAvailable ? 'available' : 'sold'
                item.price = startPrice
                return (
                    <>
                        <div className="col-12 ">
                            <CardImage images={item.mainImage} name={item.name} />
                            <h1 className="item-name">{item.name}</h1>
                            <hr className="line" />
                            <div className="variants">
                                {colors}
                            </div>
                        </div>

                        <ul className="col-12 priceStatus">
                            {priceStatus()}
                            <li className="item-price  ">from {startPrice} €</li>
                        </ul>
                    </>
                )
            } else {
                return (
                    <>
                        <div className="col-12 ">
                            <CardImage images={item.images} name={item.name} />
                            <h1 className="item-name">{item.name}</h1>
                            <hr className="line" />
                        </div>

                        <ul className="col-12 priceStatus">
                            <li className={"item-status   " + item.available}>{item.available}</li>
                            <li className="item-price  ">{item.price} €</li>
                        </ul>
                    </>
                )
            }
        }


        return (
            <Link to={{ pathname: path.split(' ').join(''), state: { item } }}
                className="items container col-6 col-sm-6 col-lg-4" key={i}>
                <Animated animationIn="bounceInRight" animationOut="fadeOut" className="item-card">
                    <div className="content row">
                        {showItem()}
                    </div>
                </Animated>
            </Link>
        )
    })

    return (
        <>{itemList}</>
    )
}