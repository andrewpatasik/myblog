import React, { useState } from "react";
import ContentDetail from "./components/ContentDetail";
import ContentList from "./components/ContentList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Route from "./components/Route";

function App() {
  const [endpoint, setEndpoint] = useState(window.location.pathname);


  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <Route path="/">
        <ContentList setEndpoint={setEndpoint} />
      </Route>
      <Route path={endpoint === '/' ? '' : endpoint}>
        <ContentDetail />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
