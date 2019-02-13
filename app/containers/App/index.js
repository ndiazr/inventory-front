/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
import CategoriesPage from 'containers/CategoriesPage/Loadable';
import ClientsPage from 'containers/ClientsPage/Loadable';
import ProductsPage from 'containers/ProductsPage/Loadable';
import ProvidersPage from 'containers/ProvidersPage/Loadable';
import PurchasesPage from 'containers/PurchasesPage/Loadable';
import SalesPage from 'containers/SalesPage/Loadable';
import StockPage from 'containers/StockPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={StockPage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/categories" component={CategoriesPage} />
        <Route exact path="/purchases" component={PurchasesPage} />
        <Route exact path="/sales" component={SalesPage} />
        <Route exact path="/providers" component={ProvidersPage} />
        <Route exact path="/clients" component={ClientsPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
