import React from 'react'
import { Home, AboutAuthor, OrderAndShipment, Shop, ShowItem, Contacts, Collections } from './';
import { NotFound } from './Common'
import { Switch, Route } from "react-router-dom";

const filters = ["Necklace", "Lavalier brooch", "Pendant", "Brooch", "Rings", "Bracelets", "Bags"]

export default function Layout({ items, mainPage }) {
  return (
    <div className="Layout">
      <Switch>
        <Route exact onlyActiveOnIndex={true} path="/shop/:title">
          <Shop
            filters={filters}
            items={items}
          />
        </Route>
        <Route exact path={mainPage} component={Home} />

        <Route exact path="/about" component={AboutAuthor} />
        <Route exact path="/order" component={OrderAndShipment} />
        <Route exact path="/collections" component={Collections} />
        <Route exact path="/contacts" component={Contacts} />
        <Route path="/shop/:title/:name" component={ShowItem} />

        <Route exact path="/*" >
          <NotFound mainPage={mainPage} />
        </Route>

      </Switch>
    </div>
  )
}
