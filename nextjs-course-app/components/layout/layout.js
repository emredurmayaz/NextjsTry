import { Fragment } from "react";

import MainNavigation from './main-navigation';

function Layout(props) {
  return (
    <Fragment>
      <MainNaviagtion />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
