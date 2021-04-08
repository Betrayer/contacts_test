import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const LazyLogin = lazy(
  () =>
    import(
      "../components/loginPage/LoginPage.js"
    ) /* webpackChunkName: 'Login' */
);

const LazyHome = lazy(
  () =>
    import("../components/homePage/HomePage.js") /* webpackChunkName: 'Home' */
);

const Lazy404 = lazy(
  () =>
    import(
      "../components/pageNotFound/PageNotFound.js"
    ) /* webpackChunkName: '404' */
);

export const useRouter = () => {
  return (
    <Suspense
      fallback={
        <div>
          <p>Loading...</p>
        </div>
      }
    >
      <Switch>
        <Route path="/" component={LazyLogin} />
        <Route path="/home" component={LazyHome} />
        {/* <Route exact path="*" component={Lazy404} /> */}
      </Switch>
    </Suspense>
  );
};
