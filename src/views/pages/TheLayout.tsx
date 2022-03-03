import React, { Fragment } from "react";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import Main from "./shared/Main";

const TheLayout = () => {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default TheLayout;
