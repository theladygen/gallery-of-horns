import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import SelectedBeast from './components/SelectedBeast.jsx';
import beasts from './beasts.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedBeast: null };
  }

  selectBeast(beast) {
    this.setState({ selectedBeast: beast });
  }

  deselectBeast() {
    this.setState({ selectedBeast: null });
  }

  render() {
    return (
      <>
        <Header />
        <Gallery beasts={beasts} selectHandler={this.selectBeast.bind(this)} />
        <Footer />
        {this.state.selectedBeast && (
          <SelectedBeast
            beast={this.state.selectedBeast}
            deselectHandler={this.deselectBeast.bind(this)}
          />
        )}
      </>
    );
  }
}

export default App;
