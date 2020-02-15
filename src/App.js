import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import  Layout  from './hoc/layout/Layout'
import home from './containers/home/home'
import productGrid from './containers/product-grid/productGrid'

function App(props) {
  let routes = (
    <Switch>
      {/* <Route path="/car" component={} />*/}
      <Route path="/" exact component={home} /> 
      <Route path="/Products" exact component={productGrid} /> 
      <Redirect to="/" />
    </Switch>
  );

  if ( props.isAuthenticated ) {
    routes = (
      <Switch>
        {/* <Route path="/checkout" component={} />
        <Route path="/orders" component={} />
        <Route path="/logout" component={} />
        <Route path="/auth" component={} />
        <Route path="/" exact component={} /> */}
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <div>
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}

export default App;
