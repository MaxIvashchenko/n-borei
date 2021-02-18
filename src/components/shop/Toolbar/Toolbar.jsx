import React from 'react'
import { useTranslation } from "react-i18next";
import { Animated } from 'react-animated-css'


export default function Toolbar(props) {
    const { filters, selected, onSelectFilter } = props;
    const { t, i18n } = useTranslation('common');

    const showText = (text) => text === "Lavalier brooch" ? "lavBrooch" : text.toLowerCase()

    return (
        <>
            {filters.map((filter, i) => {
                return (

                    <button
                        className={filter.split(' ').join('') === selected ? "filter-selected category-name" : "unselected category-name"}
                        onClick={() => onSelectFilter(filter.split(' ').join(''))}
                        key={i}>
                        <span>
                            <Animated animationIn="bounceInRight" animationOut="fadeOut" >
                                {t(`categories.${showText(filter)}`)}
                            </Animated>
                        </span>
                    </button>
                )
            }
            )}
        </>
    );
}