import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

import AboutAuthor from './components/about-author/AboutAuthor';
import Footer from './components/footer/Footer';
import OrderAndShipment from './components/orderAndShipment/OrderAndShipment';
import Shop from './components/shop/Shop';
import ShowItem from './components/shop/ShowItem/ShowItem';
import { items } from './data'
import Contacts from './components/contacts/Contacts';
import ScrollToTop from './components/common/ScrollToTop'
import NotFound from './components/common/NotFound'


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const filters = ["Lavalier brooch", "Brooch", "Rings", "Bracelets", "Bags"]

  const [shopPage, setshopPage] = useState("Lavalierbrooch")

  const mainPage = '/'

  return (
    <Router
    // basename="/n-borei"
    >
        <Header mainPage={mainPage} />
        <Switch>

          <Route exact onlyActiveOnIndex={true} path="/shop">
            <Shop
              getSelected={setshopPage}
              filters={filters}
              selected={shopPage}
              items={items}
            />
          </Route>
          <Route exact path={mainPage}>
            <Home getSelected={setshopPage} />
          </Route>

          <Route exact path="/about" component={AboutAuthor} />
          <Route exact path="/order" component={OrderAndShipment} />
          <Route exact path="/contacts" component={Contacts} />
          <Route path="/shop/:title/:name" component={ShowItem} />

          <Route exact path="/*" >
            <NotFound mainPage={mainPage} />
          </Route>

        </Switch>
        <ScrollToTop />

        <Footer mainPage={mainPage} />
    </Router>
  );
}

export default App;
