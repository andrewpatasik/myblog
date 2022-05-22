import React, { useState } from "react";
import About from "./components/About";
import ContentDetail from "./components/ContentDetail";
import ContentList from "./components/ContentList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Route from "./components/Route";

function App() {
  const [endpoint, setEndpoint] = useState(window.location.pathname);

  return (
    <div className="flex flex-col justify-center items-center">
      <Header setEndpoint={setEndpoint} />
      <Route path="/">
        <ContentList setEndpoint={setEndpoint} />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path={endpoint.split('/').length > 2 ? endpoint : ''}>
        <ContentDetail />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
