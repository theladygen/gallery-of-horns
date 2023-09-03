import React from "react";
import HornedBeast from "./HornedBeast.jsx";
import beasts from "./beasts.json";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Gallery extends React.Component {

  render() {
    let beastArr = [];
    beasts.forEach((beast, idx) => {
      beastArr.push(
        <Col key={idx} className="mt-4">
          
          <HornedBeast
            title={beast.title}
            description={beast.description}
            imageUrl={beast.image_url}
            alt={beast.title}
            horns={beast.horns}
          />
        </Col>
      )

    });
    return (
      <main>
        <Row xs={1} sm={2} md={3} lg={4} xl={5}>
          {beastArr}
        </Row>
      </main>
    );
  }
 }

export default Gallery;
