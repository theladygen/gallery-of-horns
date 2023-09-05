import React from 'react';
import HornedBeast from './HornedBeast.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Gallery extends React.Component {
  render() {
    return (
      <main>
        <Row xs={1} sm={2} md={3} lg={4} xl={5}>
          {this.props.beasts.map((beast, idx) => {
            return (
              <Col key={idx} className="mt-4">
                <HornedBeast
                  title={beast.title}
                  description={beast.description}
                  imageUrl={beast.image_url}
                  alt={beast.title}
                  horns={beast.horns}
                  selectHandler={() => {
                    this.props.selectHandler(beast);
                  }}
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
