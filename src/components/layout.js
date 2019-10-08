import React from "react";

import "./style.scss";
import Helmet from "./helmet";
import Header from "./header";
import Midsection from "./midsection";

const Layout = ({ children }) => (
  <div>
    <Helmet />
    <Header />
    <Midsection />
  </div>
);

export default Layout;
