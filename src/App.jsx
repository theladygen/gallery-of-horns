import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Gallery from "./Gallery.jsx";

class App extends React.Component {

  render() {
    return (
      <>
        <Header/>
        <Gallery/>
        <Footer/>
      </>
      );
  }

}

export default App;
