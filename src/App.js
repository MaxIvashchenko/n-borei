import React, { Suspense } from 'react';
import './App.scss';
import { items } from './data'
import { Header, Footer } from './components';
import Layout from './components/Layout';

import { BrowserRouter as Router } from "react-router-dom";


function App() {
  const mainPage = '/'

  return (
    <Router
    // basename="/n-borei"
    >
      <Suspense fallback="loading">
        <Header mainPage={mainPage} />

        <Layout items={items} mainPage={mainPage} />
        {/* <ScrollToTop /> */}

        <Footer mainPage={mainPage} />
      </Suspense>
    </Router>
  );
}

export default App;
