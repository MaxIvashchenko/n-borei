import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import Toolbar from './Toolbar/Toolbar';
import ItemList from './ItemList/ItemList';
import FilterSettings from './Toolbar/FilterSettings';
import { Animated } from 'react-animated-css'
import titleToUrl from "../../helper/helper"
export default function Shop({ items, filters }) {
    const [selectedAvailable, setSelectedAvailable] = useState('all');
    const [selectedPrice, setSelectedPrice] = useState('');
    const { title } = useParams();
    const selected = title;

    const sortByPrice = (a, b) => {
        switch (selectedPrice) {
            case 'price ↓':
                return b.price - a.price;
            case 'price ↑':
                return a.price - b.price;
            default:
                return
        }
    }
    const filterByAvailability = (item) => selectedAvailable === 'all' ? item : item.available === 'available';
    const filterBySelection = ({ title }) => titleToUrl(title) === selected;
    const showItems = items
        .filter(filterBySelection)
        .filter(filterByAvailability)
        .sort(sortByPrice);

    return (
        <>
            <section className="container-fluid Shop">
                <div className="row">
                    <aside className="col-12 col-md-3 nav-shop">
                        <Toolbar filters={filters} />
                    </aside>

                    <div className="col-12 col-md-9">
                        {items.length > 1 ?
                            <FilterSettings
                                filterShowAvailable={setSelectedAvailable}
                                filterSortPrice={setSelectedPrice}
                                selectedAvailable={selectedAvailable}
                                selectedPrice={selectedPrice}
                            />
                            :
                            <Animated className="noFilter" animationIn="bounceInRight" animationOut="fadeOut" />
                        }
                        <div className="row">
                            <ItemList items={showItems} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

