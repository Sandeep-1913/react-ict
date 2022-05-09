import "./index.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  );
}

export default App;
