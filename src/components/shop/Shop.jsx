import React, { useState } from 'react'
import Toolbar from './Toolbar/Toolbar';
import ItemList from './ItemList/ItemList';
import FilterSettings from './Toolbar/FilterSettings';
import { Animated } from 'react-animated-css'

export default function Shop({ items, getSelected, selected, filters }) {
    const [selectedAvailable, setSelectedAvailable] = useState('all');
    const [selectedPrice, setSelectedPrice] = useState('');

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
    const filterBySelection = item => item.title.split(' ').join('') === selected
    const showItems = items
        .filter(filterBySelection)
        .filter(filterByAvailability)
        .sort(sortByPrice)

    return (
        <>
            <section className="container-fluid Shop"   >
                <div className="row " >
                    <aside className="col-12 col-md-3 nav-shop" >
                        <Toolbar
                            filters={filters}
                            selected={selected}
                            onSelectFilter={getSelected}
                        />
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

