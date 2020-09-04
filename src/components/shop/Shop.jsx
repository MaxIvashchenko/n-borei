import React from 'react'


import Toolbar from './Toolbar/Toolbar';
import ItemList from './ItemList/ItemList';
import FilterSettings from './Toolbar/FilterSettings';
import { Animated } from 'react-animated-css'

import { BrowserRouter as Router, Switch, NavLink, Route, Link } from "react-router-dom";

export default class Shop extends React.Component {

    constructor(props) {
        super(props);

        this.items = props.items;
        this.getSelected = props.getSelected;


        this.state = {
            filters: props.filters,
            selected: props.selected,
            items: props.items.filter(item => item.title.split(' ').join('') === props.selected),
            arr: props.items.filter(item => item.title.split(' ').join('') === props.selected),
            isVis: true,
            selectedAvailable: 'all',
            selectedPrice: '',
        }
    }
 

    onSelectFilter = (filter) => {
        this.getSelected(filter)
        return this.setState({
            selectedAvailable: 'all',
            selectedPrice: '',
            isVis: true,
            selected: filter,
            items: this.items.filter(item => item.title.split(' ').join('') === filter),
            arr: this.items.filter(item => item.title.split(' ').join('') === filter),
        })
    }
    filterShowAvailable = (button) => {
        return this.setState({
            selectedAvailable: button,
            arr: button === 'all' ? this.state.items : this.state.items.filter(item => item.available === 'available')
        })
    }
    filterSortPrice = (button) => {
        return this.setState({
            selectedPrice: button,

            arr: button === 'price ↓' ? this.state.arr.sort((a, b) => b.price - a.price) : this.state.arr.sort((a, b) => a.price - b.price)
        })
    }
   
    render() {
       
        return (
            <>
                <section className="container-fluid Shop"   >
                    <div className="row " >
                        <aside className="col-12 col-md-3 nav-shop" >
                            <Toolbar
                                filters={this.state.filters}
                                selected={this.state.selected}
                                onSelectFilter={(filter) => this.onSelectFilter(filter)}
                            />
                        </aside>
                        
                        <div className="col-12 col-md-9">
                            {this.state.items.length > 1 ?
                                <FilterSettings
                                    filterShowAvailable={(filter) => this.filterShowAvailable(filter)}
                                    filterSortPrice={(filter) => this.filterSortPrice(filter)}
                                    selectedAvailable={this.state.selectedAvailable}
                                    selectedPrice={this.state.selectedPrice}
                                />
                                : 

                                <Animated className="noFilter" animationIn="bounceInRight" animationOut="fadeOut" />
                                }
                            <div className="row">
                            
                               <ItemList items={this.state.arr} />
                              
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
