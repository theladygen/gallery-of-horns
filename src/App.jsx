import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Gallery from "./components/Gallery.jsx";

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
