import React from 'react'
import ButtonCategory from './ButtonCategory';

function Toolbar({ filters }) {
    const showText = (text) => text === "Lavalier brooch" ? "lavBrooch" : text.toLowerCase();

    return filters.map((filter, i) => <ButtonCategory filter={filter} i={i} showText={showText} />)                       
};

export default Toolbar;