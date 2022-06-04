import React from "react";
import { connect } from "react-redux";

import About from "./components/About";
import ContentDetail from "./components/ContentDetail";
import ContentList from "./components/ContentList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Route from "./components/Route";

function App(props) {
  const { currentEndpoint } = props;

  return (
    <div className="flex flex-col justify-center items-center">
      <Header/>
      <Route path="/">
        <ContentList />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path={currentEndpoint.split("/").length > 2 ? currentEndpoint : ""}>
        <ContentDetail />
      </Route>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentEndpoint: state.currentEndpoint,
  };
};

export default connect(mapStateToProps)(App);
