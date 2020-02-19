import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Builder from "./home/Builder";
import Dashboard from "./home/Dashboard";
import { LayoutSplashScreen } from "../../_metronic";

// const GoogleMaterialPage = lazy(() =>
//   import("./google-material/GoogleMaterialPage")
// );
// const ReactBootstrapPage = lazy(() =>
//   import("./react-bootstrap/ReactBootstrapPage")
// );

export default function PagesRoute() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <Route path="/builder" component={Builder} />
        <Route path="/dashboard" component={Dashboard} />

        {/* <Route path="/products" component={AuctionList} /> */}

        <Redirect to="/error/error-v1" />
      </Switch>
    </Suspense>
  );
}
