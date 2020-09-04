import React from 'react'
import { Animated } from 'react-animated-css'


export default function Toolbar(props) {
    const { filters, selected, onSelectFilter } = props;
    return (
        <>
            {filters.map((filter, i) => {
                return (

                    <button
                        className={filter.split(' ').join('') === selected ? "filter-selected   category-name" : "unselected   category-name"}
                        onClick={() => onSelectFilter(filter.split(' ').join(''))}
                        key={i}>
                        <span>
                            <Animated animationIn="bounceInRight" animationOut="fadeOut" >
                                {filter}
                            </Animated>
                        </span>
                    </button>
                )
            }
            )}
        </>
    );
}