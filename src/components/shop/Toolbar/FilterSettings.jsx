import React from 'react'
import { Animated } from 'react-animated-css'


export default function FilterSettings({ filterShowAvailable, filterSortPrice, selectedAvailable, selectedPrice }) {

    const filterSettings = ["all", "in stock"]
    const priceFil = ["price ↓", "price ↑"]
    const filterAvailableButtons = () => {
        return (
            <>
                {filterSettings.map((buttonName, i) =>
                    <li className="nav-item" key={i + " " + buttonName}>
                        <button
                            onClick={e => filterShowAvailable(buttonName)}
                            className={buttonName === selectedAvailable ? "filter-selected   nav-link" : "unselected nav-link "}
                        >{
                                buttonName}
                        </button>
                    </li>
                )}
            </>
        )
    }
    const filterByPrice = () => {
        return (
            <>
                {priceFil.map((buttonName, i) =>
                    <li className="nav-item" key={i + " " + buttonName}>
                        <button
                            className={buttonName === selectedPrice ? "filter-selected   nav-link" : "unselected nav-link "}
                            onClick={e => filterSortPrice(buttonName)}
                        >
                           {buttonName} 
                        </button>
                    </li>
                )}
            </>
        )
    }

    return (
        <>
            <Animated isVisible={true} animationIn="bounceInRight" animationOut="bounceInLeft" >
                <div className="row settings-filter">
                    <ul className="nav col-12 justify-content-center">
                        {filterAvailableButtons()}
                        {filterByPrice()}
                    </ul>
                </div>
            </Animated>
        </>
    )
}