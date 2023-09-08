import React from 'react';
import HornedBeast from './HornedBeast.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Filter from './Filter.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beasts: this.props.beasts,
    };
  }

  filterByNumberOfHorns(numHorns) {
    if (numHorns == -1) {
      this.setState({ beasts: this.props.beasts });
      return;
    }

    const filteredBeasts = this.props.beasts.filter(
      (beast) => beast.horns == numHorns
    );
    this.setState({ beasts: filteredBeasts });
  }

  render() {
    return (
      <main>
        <Filter onChange={(numHorns) => this.filterByNumberOfHorns(numHorns)} />
        <Row xs={1} sm={2} md={3} lg={4} xl={5}>
          {this.state.beasts.map((beast) => {
            return (
              <Col key={beast._id} className="mt-4">
                <HornedBeast
                  title={beast.title}
                  description={beast.description}
                  imageUrl={beast.image_url}
                  alt={beast.title}
                  horns={beast.horns}
                  selectHandler={() => this.props.selectHandler(beast)}
                />
              </Col>
            );
          })}
        </Row>
      </main>
    );
  }
}

export default Gallery;
