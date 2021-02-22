import React, {  Suspense } from 'react';
import './App.scss';
import { items } from './data'
import { ScrollToTop, NotFound } from './components/Common/index'

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AboutAuthor from './components/AboutAuthor/AboutAuthor';
import Footer from './components/Footer/Footer';
import OrderAndShipment from './components/OrderAndShipment/OrderAndShipment';
import Shop from './components/Shop/Shop';
import ShowItem from './components/Shop/ShowItem/ShowItem';
import Contacts from './components/Contacts/Contacts';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const filters = ["Necklace", "Lavalier brooch", "Pendant", "Brooch", "Rings", "Bracelets", "Bags"]

function App() {
  const mainPage = '/'

  return (
    <Router
    // basename="/n-borei"
    >
      <Suspense fallback="loading">
        <Header mainPage={mainPage} />
        <Switch>

          <Route exact onlyActiveOnIndex={true} path="/shop/:title">
            <Shop
              // getSelected={setshopPage}
              filters={filters}
              items={items}
            />
          </Route>
          <Route exact path={mainPage} component={Home} />

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
      </Suspense>
    </Router>
  );
}

export default App;
